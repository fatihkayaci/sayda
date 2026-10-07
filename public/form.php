<?php
// Sayda İnşaat - form gönderim betiği (iletişim, teklif, kariyer, bülten)
// Tüm formlar POST ile bu dosyaya gelir, e-posta olarak info@sayda.com.tr adresine iletilir.

const MAIL_TO = 'info@sayda.com.tr';
const MAIL_FROM = 'info@sayda.com.tr'; // Hostinger'da bu alan adına ait bir e-posta adresi olmalı
const SITE_NAME = 'Sayda İnşaat';
const MAX_CV_BYTES = 5 * 1024 * 1024;
const RATE_LIMIT = 5;          // pencere başına en fazla gönderim
const RATE_WINDOW = 600;       // saniye (10 dakika)

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Başlık enjeksiyonuna karşı satır sonlarını temizle
function clean_line(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

function field(string $key, int $max = 2000): string
{
    $value = isset($_POST[$key]) && is_string($_POST[$key]) ? trim($_POST[$key]) : '';
    return mb_substr($value, 0, $max);
}

function encode_header(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

// IP başına basit hız sınırı
function rate_limited(): bool
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $file = sys_get_temp_dir() . '/sayda_form_' . md5($ip);
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $hits = array_filter(array_map('intval', explode(',', (string) file_get_contents($file))), fn($t) => $now - $t < RATE_WINDOW);
    }
    if (count($hits) >= RATE_LIMIT) {
        return true;
    }
    $hits[] = $now;
    @file_put_contents($file, implode(',', $hits), LOCK_EX);
    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Geçersiz istek.', 405);
}

// Bot tuzağı: gizli kutu doluysa sessizce başarılı göster
if (!empty($_POST['botcheck'])) {
    respond(true, 'OK');
}

if (rate_limited()) {
    respond(false, 'Çok fazla deneme yaptınız, lütfen biraz sonra tekrar deneyin.', 429);
}

$type = field('form_type', 30);
$forms = [
    'contact' => ['label' => 'İletişim Formu', 'required' => ['name', 'email', 'message']],
    'quote' => ['label' => 'Teklif Formu', 'required' => ['name', 'phone', 'email']],
    'career' => ['label' => 'İK Başvurusu', 'required' => ['name', 'phone', 'email']],
    'newsletter' => ['label' => 'Bülten Aboneliği', 'required' => ['email']],
];
if (!isset($forms[$type])) {
    respond(false, 'Geçersiz form.', 400);
}

foreach ($forms[$type]['required'] as $key) {
    if (field($key) === '') {
        respond(false, 'Lütfen zorunlu alanları doldurun.', 422);
    }
}

$email = clean_line(field('email', 200));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Geçerli bir e-posta adresi girin.', 422);
}

// Gövde için alan adları
$labels = [
    'name' => 'Ad Soyad',
    'email' => 'E-posta',
    'phone' => 'Telefon',
    'subject' => 'Konu',
    'service' => 'İlgilendiği hizmet',
    'message' => 'Mesaj',
    'position_type' => 'Başvuru türü',
    'birth_info' => 'Doğum yeri/tarihi',
    'address' => 'Adres',
];
for ($i = 1; $i <= 3; $i++) {
    $labels["exp{$i}_project"] = "Proje $i - Proje adı";
    $labels["exp{$i}_employer"] = "Proje $i - İşveren";
    $labels["exp{$i}_work"] = "Proje $i - Yapılan iş";
    $labels["exp{$i}_dates"] = "Proje $i - Tarihler";
    $labels["exp{$i}_workers"] = "Proje $i - Çalışan sayısı";
    $labels["exp{$i}_contact"] = "Proje $i - İşveren temsilcisi";
    $labels["exp{$i}_contact_phone"] = "Proje $i - Temsilci telefonu";
}

$lines = [];
foreach ($labels as $key => $label) {
    $value = field($key);
    if ($value !== '') {
        $lines[] = $label . ': ' . $value;
    }
}
$lines[] = '';
$lines[] = 'KVKK onayı: ' . (!empty($_POST['kvkk']) ? 'Evet' : 'Hayır');
$lines[] = 'Gönderim zamanı: ' . date('d.m.Y H:i');
$lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '-');
$text = implode("\n", $lines);

$subjectExtra = clean_line(field('subject', 120));
$subject = SITE_NAME . ' - ' . $forms[$type]['label'] . ($subjectExtra !== '' && $type === 'contact' ? ': ' . $subjectExtra : '');

$headers = [
    'MIME-Version: 1.0',
    'From: ' . encode_header(SITE_NAME . ' Web Sitesi') . ' <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,
];

// CV eki (yalnızca kariyer formu)
$attachment = null;
if ($type === 'career' && isset($_FILES['cv']) && $_FILES['cv']['error'] !== UPLOAD_ERR_NO_FILE) {
    $cv = $_FILES['cv'];
    if ($cv['error'] !== UPLOAD_ERR_OK || $cv['size'] > MAX_CV_BYTES) {
        respond(false, 'CV dosyası yüklenemedi (en fazla 5 MB).', 422);
    }
    $ext = strtolower(pathinfo($cv['name'], PATHINFO_EXTENSION));
    $allowed = ['pdf' => 'application/pdf', 'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!isset($allowed[$ext])) {
        respond(false, 'CV yalnızca PDF, DOC veya DOCX olabilir.', 422);
    }
    $attachment = [
        'name' => 'CV-' . preg_replace('/[^A-Za-z0-9]+/', '-', iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', field('name', 60))) . '.' . $ext,
        'type' => $allowed[$ext],
        'data' => chunk_split(base64_encode((string) file_get_contents($cv['tmp_name']))),
    ];
}

if ($attachment) {
    $boundary = 'sayda_' . bin2hex(random_bytes(8));
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
    $body = "--$boundary\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text)) . "\r\n"
        . "--$boundary\r\n"
        . 'Content-Type: ' . $attachment['type'] . '; name="' . $attachment['name'] . "\"\r\n"
        . "Content-Transfer-Encoding: base64\r\n"
        . 'Content-Disposition: attachment; filename="' . $attachment['name'] . "\"\r\n\r\n"
        . $attachment['data'] . "\r\n"
        . "--$boundary--";
} else {
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: base64';
    $body = chunk_split(base64_encode($text));
}

$sent = mail(MAIL_TO, encode_header($subject), $body, implode("\r\n", $headers), '-f' . MAIL_FROM);

if (!$sent) {
    error_log('Sayda form: mail() başarısız, form=' . $type);
    respond(false, 'Gönderilemedi.', 500);
}

respond(true, 'OK');

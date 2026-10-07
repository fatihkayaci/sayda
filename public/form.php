<?php
// Sayda İnşaat - form gönderim betiği (iletişim, teklif, kariyer, bülten)
// Tüm formlar POST ile bu dosyaya gelir, e-posta olarak info@sayda.com.tr adresine iletilir.

const MAIL_TO = 'info@sayda.com.tr';
const MAIL_FROM = 'info@sayda.com.tr'; // Hostinger'da bu alan adına ait bir e-posta adresi olmalı
const SITE_NAME = 'Sayda İnşaat';
const MAX_CV_BYTES = 5 * 1024 * 1024;
const RATE_LIMIT = 5;          // pencere başına en fazla gönderim
const RATE_WINDOW = 600;       // saniye (10 dakika)

// SMTP ayarları sunucudaki form-config.php dosyasından okunur (depoda yok, şifre içerir):
//   <?php return ['host' => 'smtp.hostinger.com', 'port' => 465, 'user' => 'info@sayda.com.tr', 'pass' => 'POSTA_KUTUSU_SIFRESI'];
// Dosya yoksa PHP mail() kullanılır (Hostinger'da çoğu zaman çalışmaz).
$smtpConfig = is_file(__DIR__ . '/form-config.php') ? include __DIR__ . '/form-config.php' : null;

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(bool $success, string $message, int $status = 200, ?string $detail = null): void
{
    global $smtpConfig;
    http_response_code($status);
    $payload = ['success' => $success, 'message' => $message];
    // Sorun giderirken: public_html içine boş bir form-debug.txt dosyası koyarsanız hata ayrıntısı cevaba eklenir (işiniz bitince silin)
    if ($detail !== null && is_file(__DIR__ . '/form-debug.txt')) {
        $payload['detail'] = $detail;
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
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

// Minimal SMTP istemcisi (SSL/465 veya STARTTLS/587). Başarıda null, hatada hata metni döner.
function smtp_send(array $cfg, string $from, string $to, string $message): ?string
{
    $host = $cfg['host'] ?? '';
    $port = (int) ($cfg['port'] ?? 465);
    $remote = ($port === 465 ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $socket = @stream_socket_client($remote, $errno, $errstr, 15);
    if (!$socket) {
        $last = error_get_last();
        return "baglanti ($remote): $errstr ($errno) " . ($last['message'] ?? '');
    }
    stream_set_timeout($socket, 15);

    $read = function () use ($socket): string {
        $reply = '';
        while (($line = fgets($socket, 1024)) !== false) {
            $reply .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        return $reply;
    };
    $expect = function (string $reply, string $code) {
        return strncmp($reply, $code, 3) === 0 ? null : trim($reply);
    };
    $send = function (string $command) use ($socket): void {
        fwrite($socket, $command . "\r\n");
    };

    $fail = $expect($read(), '220');
    if ($fail) { fclose($socket); return "karsilama: $fail"; }

    $send('EHLO sayda.com.tr');
    $fail = $expect($read(), '250');
    if ($fail) { fclose($socket); return "EHLO: $fail"; }

    if ($port !== 465) {
        $send('STARTTLS');
        $fail = $expect($read(), '220');
        if ($fail || !stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($socket);
            return 'STARTTLS basarisiz';
        }
        $send('EHLO sayda.com.tr');
        $fail = $expect($read(), '250');
        if ($fail) { fclose($socket); return "EHLO2: $fail"; }
    }

    $send('AUTH LOGIN');
    $fail = $expect($read(), '334');
    if (!$fail) { $send(base64_encode($cfg['user'] ?? '')); $fail = $expect($read(), '334'); }
    if (!$fail) { $send(base64_encode($cfg['pass'] ?? '')); $fail = $expect($read(), '235'); }
    if ($fail) { fclose($socket); return "giris: $fail"; }

    $send("MAIL FROM:<$from>");
    $fail = $expect($read(), '250');
    if ($fail) { fclose($socket); return "MAIL FROM: $fail"; }

    $send("RCPT TO:<$to>");
    $fail = $expect($read(), '250');
    if ($fail) { fclose($socket); return "RCPT TO: $fail"; }

    $send('DATA');
    $fail = $expect($read(), '354');
    if ($fail) { fclose($socket); return "DATA: $fail"; }

    // Satır başındaki noktaları çiftle (dot-stuffing)
    $normalized = str_replace(["\r\n", "\r"], "\n", $message);
    $send(str_replace("\n", "\r\n", preg_replace('/^\./m', '..', $normalized)));
    $send('.');
    $fail = $expect($read(), '250');
    $send('QUIT');
    fclose($socket);

    return $fail ? "gonderim: $fail" : null;
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
    respond(false, 'Geçersiz istek (' . ($_SERVER['REQUEST_METHOD'] ?? '?') . ').', 405);
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

$encodedSubject = encode_header($subject);
$headerString = implode("\r\n", $headers);

if (is_array($smtpConfig)) {
    $message = 'Date: ' . date('r') . "\r\n"
        . 'Message-ID: <' . bin2hex(random_bytes(12)) . '@sayda.com.tr>' . "\r\n"
        . 'To: ' . MAIL_TO . "\r\n"
        . 'Subject: ' . $encodedSubject . "\r\n"
        . $headerString . "\r\n\r\n" . $body;
    $error = smtp_send($smtpConfig, MAIL_FROM, MAIL_TO, $message);
    $sent = $error === null;
    $failDetail = 'SMTP: ' . $error;
    if (!$sent) {
        error_log('Sayda form: SMTP basarisiz, form=' . $type . ' hata=' . $error);
    }
} else {
    // Önce zarf göndericisiyle (-f), olmazsa onsuz dene: bazı sunucular -f parametresini reddediyor
    $sent = @mail(MAIL_TO, $encodedSubject, $body, $headerString, '-f' . MAIL_FROM)
        || @mail(MAIL_TO, $encodedSubject, $body, $headerString);
    if (!$sent) {
        $lastError = error_get_last();
        $failDetail = 'mail(): ' . ($lastError['message'] ?? 'hata mesaji yok') . ' | disable_functions=' . ini_get('disable_functions');
        error_log('Sayda form: mail() basarisiz, form=' . $type . ' hata=' . ($lastError['message'] ?? 'yok'));
    }
}

if (!$sent) {
    respond(false, 'Gönderilemedi.', 500, $failDetail ?? null);
}

respond(true, 'OK');

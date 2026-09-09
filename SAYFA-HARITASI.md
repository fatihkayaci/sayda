# Sayda İnşaat — Sayfa Haritası ve Menü Yapısı

Eski site menüsünün yeni mimariye çevrilmiş hali. Sayfa yazımına başlamadan önceki referans.

---

## 1. Menü yapısı

Menü başlığı ile URL aynı şey değil. "Kurumsal" ve "İK" menüde açılır başlık olarak kalıyor, URL'e girmiyor.
`/hakkimizda`, `/kurumsal/hakkimizda`'dan kısa ve hiçbir SEO kaybı yok.

| Menü | URL | Not |
|---|---|---|
| Anasayfa | `/` | |
| **Kurumsal** ▾ | — | sayfası yok, sadece açılır başlık |
| ├ Hakkımızda | `/hakkimizda` | |
| ├ Vizyon & Misyon | `/hakkimizda/vizyon-misyon` | |
| ├ Belgelerimiz | `/belgeler` | belgeler + iş bitirme + e-katalog birleşik |
| └ Haberler | `/haberler` · `/haberler/[slug]` | **koşullu** — bkz. bölüm 4 |
| **Hizmetler** ▾ | `/hizmetler` | hub sayfası var |
| ├ Alt Müteahhitlik | `/hizmetler/alt-muteahhitlik` | |
| ├ Anahtar Teslim Müteahhitlik | `/hizmetler/anahtar-teslim-muteahhitlik` | |
| ├ Kat Karşılığı İnşaat | `/hizmetler/kat-karsiligi-insaat` | |
| ├ Proje Yönetimi & Danışmanlık | `/hizmetler/proje-yonetimi-danismanlik` | |
| └ Otel Renovasyonu | `/hizmetler/otel-renovasyonu` | yeni — niş |
| **Kentsel Dönüşüm** | `/kentsel-donusum` | menüde ayrı ana başlık |
| | `/kentsel-donusum/[ilce]` | başlangıçta max 5 ilçe |
| **Projeler** ▾ | `/projeler` | |
| ├ Devam Eden | `/projeler/devam-eden` | |
| ├ Tamamlanan | `/projeler/tamamlanan` | |
| └ (detay) | `/projeler/[slug]` | 39 sayfa, tek şablon |
| **Rehber** | `/rehber` · `/rehber/[slug]` | en son yazılacak |
| **İletişim** | `/iletisim` | menüde buton |
| (footer) Kariyer | `/kariyer` | beyaz yakalı + kalfa tek sayfada |

**Kentsel dönüşüm neden `/hizmetler` altında değil:** Sitenin en çok arama alan ve lead üreten bölümü.
Hem URL kısalığı hem menüde görünürlük için kendi kökünde duruyor.

---

## 2. Eski yapıdan ayrılan 4 nokta

### 2.1 Birleşik hizmet sayfaları bölünüyor

Eski sitede iki sayfa, iki iş kolunu birleştiriyor:

- "Müteahhitlik ve Alt Müteahhitlik" → biri B2B taşeronluk, diğeri son müşteri işi
- "Kentsel Dönüşüm ve Kat Karşılığı" → biri bina sakini, diğeri arsa sahibi

Bir sayfa iki arama niyetini hedeflerse ikisini de kaybeder. Ayrılıyorlar.

**Bedeli:** 301 eşlemesi 1:1 değil, karar gerektiriyor.
Geçici karar (Search Console verisi gelene kadar):

- `muteahitlik.html` → `/hizmetler/alt-muteahhitlik`
- kentsel dönüşüm sayfası → `/kentsel-donusum`

Veri geldiğinde eski sayfanın hangi sorgudan tıklama aldığına bakılıp düzeltilecek.

### 2.2 E-Katalog ayrı sayfa olmuyor

Tek işi bir PDF'e link vermek olan sayfa ince içerik sayılır. `/belgeler` içinde blok olarak duruyor.

- `E-Katalog.aspx` → `/belgeler` (301)
- `katalog.pdf` **eski yolunda kalıyor**, taşınmıyor

### 2.3 Video görüntüleri ayrı sayfa olmuyor

Videolar ilgili proje detay sayfalarına gömülecek. `/projeler/videolar` → `/projeler` (301).

**İstisna:** Elde 15-20 video varsa galeri sayfası mantıklı olur, o zaman ayrı tutulur.
Video sayısı öğrenilmeli.

### 2.4 İK tek sayfa başlıyor

Beyaz yakalı ve kalfa aynı `/kariyer` sayfasında iki bölüm.

**Sebep:** Sonradan bölmek kolay. Birleştirmek 301 borcu yaratır.
Her iki grup için de gerçekten farklı ve dolu içerik çıkarsa bölünür.

---

## 3. Haberler — karar bekliyor

Eski sitede `HaberDetay.aspx?Haber=24` Google'da indexli. Yani ölü bir bölüm değil, bir değeri var.

**Ama:** Son haber girişi 2-3 yıl öncesiyse ve düzenli beslenmeyecekse bölüm siteye zarar verir.
Ziyaretçi "en son 2022" gördüğünde firmanın aktif olup olmadığını sorgular.

**Karar için gereken:** Eski panelden haber sayısı ve son giriş tarihi.

- Sayı az + tarih eski → haberleri proje sayfalarına dağıt, bölümü kapat, `/projeler`'e 301
- Sayı yeterli + güncellenecek → `/haberler` açılır

---

## 4. Teknik: hizmet sayfaları `[slug]` olmayacak

Önceki notlarda `hizmetler/[slug].astro` yazıyordu. Bu karar değişti.

| Bölüm | Yöntem | Sebep |
|---|---|---|
| `/projeler/[slug]` | JSON + `getStaticPaths()` | 39 kayıt, aynı şablon, sadece veri farklı |
| `/hizmetler/*` | Content collection (`.md`) | Her sayfa özgün, uzun, kendi H2 yapısı var |
| `/kentsel-donusum/[ilce]` | Content collection (`.md`) | Aynı sebep — kopya metin doorway page ihlali |
| `/rehber/[slug]` | Content collection (`.md`) | Blog mantığı |

Hizmet sayfaları SEO yükünün asıl taşıyıcısı. Uzun ve özgün metni JSON içine gömmek düzenlemeyi işkenceye çevirir.
Markdown + frontmatter kullanılırsa `Seo.astro` doğrudan frontmatter'dan beslenir.

---

## 5. Yazım sırası

Hizmet sayfaları bitmeden tek rehber yazısı yazılmaz.

1. `Layout` + `Header` + `Footer` + `Seo` — menü yapısı bir kez doğru kurulmalı
2. `site.json` doldurulur, footer bağlanır
3. `/hakkimizda` + `/hakkimizda/vizyon-misyon` — kısa, hızlı biter
4. `/iletisim`
5. `/hizmetler` hub + 5 hizmet sayfası ← **asıl iş burada**
6. `/kentsel-donusum` hub
7. `/projeler` + `/projeler/[slug]` şablonu
8. `/belgeler`
9. `/kariyer`
10. `/kentsel-donusum/[ilce]` — müşteriden ilçe listesi geldikten sonra
11. `/rehber` — en son

**Not:** Header'daki menü yapısı sonradan değiştirilirse her sayfaya dokunmak gerekir.
Bileşen olarak tek yerden yönetilmeli.

---

## 6. Tasarım mockup'ından temizlenecek yer tutucular

Ana sayfa tasarımında kalan uydurma veriler. Müşteri teyidi olmadan yayına gitmemeli:

| Alan | Mockup'taki | Durum |
|---|---|---|
| Kuruluş yılı | 1999 | **Çelişki** — proje notlarında 1996 |
| Yıllık deneyim | 25+ | Kuruluş yılına göre düzeltilecek |
| Tamamlanan proje | 120+ | Teyit edilmeli (kayıtlı 39 proje var) |
| Uzman kadro | 350+ | Teyit edilmeli |
| M² inşaat alanı | 2.5M+ | Teyit edilmeli |
| Referans yorumları | Mehmet Kaya, Ayşe Demir, Emre Çelik | **Tamamen uydurma** — gerçek veya kaldırılacak |
| Proje adları | Sayda Vadi Evleri, Sayda Plaza, Sayda Konakları | Uydurma — gerçek proje adlarıyla değişecek |
| Telefon | +90 212 000 00 00 | Gerçek: +90 212 223 88 12 |
| Haberler | Maslak Tower Residence vb. | Uydurma |

Referans yorumları en riskli madde. Uydurma müşteri yorumu yayınlamak hem güven hem hukuk sorunu.

---

## 7. 301 eşleme özeti (bu dosya kapsamında)

| Eski | Yeni |
|---|---|
| `/`, `/index.html`, `/Anasayfa.aspx` | `/` |
| `hakkimizda` varyantları | `/hakkimizda` |
| `misyon-vizyon` varyantları | `/hakkimizda/vizyon-misyon` |
| `belgelerimiz`, `is-bitirme`, `sertifikalar` (sayfa) | `/belgeler` |
| `E-Katalog.aspx` | `/belgeler` |
| `muteahitlik.html` | `/hizmetler/alt-muteahhitlik` |
| kentsel dönüşüm sayfası | `/kentsel-donusum` |
| `prpjeyonetimi.html` | `/hizmetler/proje-yonetimi-danismanlik` |
| `Projeler_*.aspx` liste sayfaları | `/projeler` |
| `Proje_Detay.aspx?PNR=*` (eşleşen) | `/projeler/[slug]` |
| `Proje_Detay.aspx?PNR=*` (eşleşmeyen) | `/projeler` |
| `HaberDetay.aspx?Haber=*` | karara bağlı |
| video sayfası | `/projeler` |
| İK sayfaları (beyaz yakalı, kalfa) | `/kariyer` |
| `katalog.pdf` | **taşınmıyor** |
| `sertifikalar/sertifika.pdf` | **taşınmıyor** |

Tam liste Screaming Frog taraması + Search Console verisiyle kesinleşecek.

---

## 8. Bekleyen kararlar

- [ ] Haber sayısı ve son giriş tarihi → `/haberler` açılsın mı
- [ ] Video sayısı → galeri sayfası gerekli mi
- [ ] Kuruluş yılı: 1996 mı 1999 mu
- [ ] Kentsel dönüşüm / kat karşılığı yapılan ilçeler → ilçe sayfaları
- [ ] Beyaz yakalı ve kalfa için ayrı içerik var mı → `/kariyer` bölünsün mü
- [ ] Ana sayfadaki tüm sayısal iddiaların teyidi

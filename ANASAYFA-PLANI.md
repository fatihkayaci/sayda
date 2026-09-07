# Sayda İnşaat — Faz 1: Ana Sayfa

Bu doküman `PROJE-NOTLARI.md`'nin devamıdır. Kapsam: **sadece ana sayfa.**
Diğer sayfalar SEO planına göre sırayla, ayrı fazlarda yapılacak.

---

## 0. Bu fazın sınırı

**Yapılacak**
- Astro projesi kurulumu, GitHub private repo
- Layout + Header + Footer + Seo bileşenleri
- Ana sayfanın tamamı (masaüstü + mobil)
- Tasarım token'ları (renk, tipografi, boşluk) tek yerde
- `site.json` (iletişim bilgileri tek kaynak)

**Yapılmayacak (bilerek)**
- Alt sayfalar (`/hizmetler/*`, `/kentsel-donusum/*`, `/projeler/*`, `/rehber/*`)
- 301 yönlendirme kuralları — yayın fazının işi
- Blog / rehber içeriği — hizmet sayfaları bitmeden başlanmaz
- CMS paneli
- Hosting kararı

**Önemli:** Ana sayfadaki linkler nihai URL'lere verilecek (`/kentsel-donusum`, `/hizmetler/alt-muteahhitlik`). Bu sayfalar henüz olmadığı için geliştirme sırasında 404 verecek — normaldir. Site yayına, o sayfalar bitmeden çıkmayacak. Linkleri `#` yapıp sonra düzeltmek iki kat iş.

---

## 1. Tasarım ile SEO planı arasındaki çelişkiler

Attığın tasarım görsel olarak hazır ama içerik mimarisi `PROJE-NOTLARI.md`'deki SEO kararlarıyla uyuşmuyor. Kod yazmadan bunlar çözülmeli.

### 1.1 Kentsel dönüşüm ana sayfada yok — en büyük sorun

SEO notlarında kentsel dönüşüm **"ana para sayfası"** olarak tanımlı. Aramaların gerçekten yapıldığı, lead üretilebilecek tek kol o. Tasarımdaki 4 hizmet kartı:

| Tasarımdaki | SEO planındaki |
|---|---|
| Konut Projeleri | Kentsel Dönüşüm ← **eksik** |
| Ticari Yapılar | Kat Karşılığı İnşaat ← **eksik** |
| Taahhüt & İnşaat | Alt Müteahhitlik |
| Proje Yönetimi | Anahtar Teslim Müteahhitlik |
| — | Otel Renovasyonu ← **eksik** |
| — | Proje Yönetimi & Danışmanlık |

Tasarımdaki kartlar "ne inşa ediyoruz" diyor, SEO planı "hangi hizmeti satıyoruz" diyor. İkincisi doğru — insanlar "konut projesi" aramıyor, "kat karşılığı veren müteahhit" arıyor.

**Karar:** Hizmet kartları 6 gerçek hizmete göre yeniden yazılacak. Görsel dil (kart, ikon, ızgara) aynı kalır, sadece içerik ve link hedefleri değişir.

### 1.2 İki kol ayrışmıyor

Not: *"Müşteri kararı: iki kol eşit ağırlıkta. Çözüm: girişten itibaren ayrışsınlar."*

Tasarımda böyle bir ayrım yok. Hero'dan sonra herkes aynı akışa giriyor.

**Karar:** Hero'nun hemen altına **iki yollu ayrım bandı** eklenecek:
- Sol: *"Binanız riskli mi çıktı? / Arsanız mı var?"* → `/kentsel-donusum`
- Sağ: *"Ana yüklenici misiniz? / Taşeron mu arıyorsunuz?"* → `/hizmetler/alt-muteahhitlik`

Ziyaretçi ilk ekranda kendini bulmalı. Bu, tasarıma eklenecek tek yeni bölüm.

### 1.3 Uydurma referanslar

Tasarımda üç yorum var: Mehmet Kaya, Ayşe Demir, Emre Çelik. Bunlar gerçek değil.

Sayda'nın SEO'daki tek gerçek kozu **güven** (bkz. "kentsel dönüşüm müteahhit para istiyor / mağdurları / kaçarsa" aramaları). Uydurma yorum bu kozu doğrudan zayıflatır — biri kontrol ederse çöker.

**Karar:** Yorum kartları kaldırılacak. Yerine **kurumsal işveren şeridi** gelecek: Rönesans, Varyap, Kiler, Akbatı vb. Bu doğrulanabilir ve rakiplerin çoğunda yok. Tasarımdaki logo şeridi zaten var, sadece asıl bölüm haline gelir.

Müşteri gerçek referans yazısı verirse, isim + firma + proje ile birlikte sonra eklenir.

### 1.4 Rakamlar uyuşmuyor

| Tasarımda | Gerçek |
|---|---|
| "1999'DAN BUGÜNE" | Notlarda kuruluş **1996** |
| "25+ yıllık deneyim" | 1996 ise **30 yıl** |
| "120+ tamamlanan proje" | Elimizde **39 proje** var |
| "350+ uzman kadro" | Doğrulanmadı |
| "2.5M+ m² inşaat alanı" | Doğrulanmadı |

Hepsi müşteriye teyit ettirilecek. **Doğrulanmayan rakam yayınlanmayacak.** Güven üzerine kurulu bir sitede şişirilmiş sayı en pahalı hatadır.

Kuruluş yılı özellikle kritik: hem hero'da, hem hakkımızdada, hem footer'da, hem `schema.org` verisinde geçiyor. `site.json`'a tek yerden yazılacak.

### 1.5 Placeholder içerikler

Temizlenecek:
- Telefon: `+90 212 000 00 00` → `+90 212 223 88 12`
- E-posta: Cloudflare `cdn-cgi/l/email-protection` kalıntıları → `info@sayda.com.tr`
- Adres: "İstanbul, Türkiye" → Şalcıkır Cad. Kaydırak Sok. No: 3/1, 34457 Tarabya / İstanbul
- Sosyal linkler `href="#"` → Instagram `@saydainsaat` (diğerleri yoksa ikon da kaldırılır)
- Proje adları: "Sayda Vadi Evleri / Plaza / Konakları" → gerçek projeler
- Haber başlıkları: "Maslak Tower Residence" → gerçek veya bölüm ertelenir
- `logo.jpg` → `logoPhotoroom.png` (tercihen SVG'ye çevrilecek)

### 1.6 Haberler bölümü — karar bekliyor

Eski sitede `HaberDetay.aspx?Haber=24` Google'da indexli ve **orphan**. Ama yeni site mimarisinde `/haberler` yok.

Üç seçenek:
1. Haberler bölümünü ana sayfadan çıkar, eski haber URL'lerini ilgili sayfalara 301'le
2. `/haberler` bölümünü mimariye ekle (düzenli içerik üretimi gerektirir — müşteri yapmaz, boş kalır)
3. Haberleri `/rehber` altına taşı

**Öneri: 1.** Güncellenmeyen haber bölümü, güncellenmemiş tarihiyle siteyi ölü gösterir. Faz 1'de bölüm kodlanmaz, yer tutulur.

---

## 2. Teknik kararlar (bu faza özel)

| Konu | Karar | Gerekçe |
|---|---|---|
| Astro sürümü | En güncel | — |
| TypeScript | `strict` | Veri şeması hataları derlemede yakalanır |
| Stil yöntemi | Global token CSS + Astro scoped `<style>` | Tasarım düz CSS; Tailwind ek bağımlılık ve öğrenme yükü |
| Fontlar | `@fontsource` ile self-host | Google Fonts CDN'i LCP'yi geciktirir, üçüncü taraf isteği yaratır |
| İkonlar | Inline SVG (tasarımdaki gibi) | Ekstra istek yok, renk `currentColor` ile yönetilir |
| Form | Karar bekliyor (bkz. §6) | Statik sitede backend yok |
| Görseller | `astro:assets` (`<Image />`) | Otomatik WebP + boyutlandırma + CLS önleme |

**Font uyarısı:** Syne ve Archivo Black'in Türkçe karakterleri (ş, ğ, İ, ı, ç, ö, ü) tam desteklediği kurulumdan hemen sonra test edilecek. Başlıklar CAPS ve Türkçe — "İNŞAAT" kelimesi ilk testtir. Desteklemiyorsa başlık fontu değişir.

---

## 3. Kurulum

Sıra önemli. Layout önce yazılır; sayfaları önce yazıp sonra layout'a taşımak iki kat iştir.

```bash
# 1. Proje
npm create astro@latest sayda -- --template minimal --typescript strict
cd sayda

# 2. Eklentiler
npx astro add sitemap

# 3. Fontlar
npm i @fontsource/archivo @fontsource/archivo-black @fontsource/syne

# 4. Çalıştır
npm run dev
```

**GitHub:** private repo açılır, ilk commit kurulum sonrası atılır.
`.gitignore` içinde `node_modules`, `dist`, `.astro` olduğu doğrulanır.

### astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sayda.com.tr',
  output: 'static',
  integrations: [sitemap()],
});
```

`site` alanı zorunlu — canonical ve sitemap bundan üretilir. `www`'lu yazılacak (notlarda canonical kararı www'lu).

---

## 4. Faz 1 dosya yapısı

Nihai yapının sadece ana sayfa için gereken kısmı:

```
sayda/
├── src/
│   ├── styles/
│   │   └── tokens.css          ← renk, tipografi, boşluk değişkenleri
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Seo.astro
│   │   └── anasayfa/
│   │       ├── Hero.astro
│   │       ├── IkiYol.astro          ← YENİ
│   │       ├── Sayilar.astro
│   │       ├── Hizmetler.astro
│   │       ├── GuvenBandi.astro      ← YENİ
│   │       ├── OneCikanProjeler.astro
│   │       ├── Isverenler.astro      ← referans yorumlarının yerine
│   │       ├── Belgeler.astro
│   │       ├── Surec.astro
│   │       ├── Hakkimizda.astro
│   │       └── TeklifFormu.astro
│   ├── data/
│   │   ├── site.json
│   │   ├── hizmetler.json
│   │   └── projeler.json           ← faz 1'de sadece öne çıkan 3'ü dolu
│   └── pages/
│       └── index.astro
├── public/
│   ├── img/
│   ├── katalog.pdf                 ← eski adresle AYNI yolda
│   └── sertifikalar/sertifika.pdf  ← eski adresle AYNI yolda
└── astro.config.mjs
```

`index.astro` sadece bölümleri sırayla çağırır, içinde markup olmaz. Bölümler ayrı dosyalarda olursa 700 satırlık tek dosya oluşmaz ve sonraki fazlarda parça parça düzenlenebilir.

---

## 5. Tasarım token'ları

Tasarımdan çıkarıldı, `tokens.css`'e yazılacak. Hiçbir bileşende çıplak hex kod olmayacak.

```css
:root {
  /* Renk */
  --lacivert:        #2B2E83;   /* marka ana rengi */
  --lacivert-koyu:   #1E2163;   /* hover */
  --lacivert-derin:  #191B4A;   /* footer zemini */
  --metin:           #111318;
  --metin-orta:      #4A4C58;
  --metin-soluk:     #8A8C98;
  --zemin:           #FFFFFF;
  --zemin-acik:      #F4F5FA;
  --cizgi:           #E2E3EC;

  /* Tipografi */
  --font-govde:   'Archivo', sans-serif;
  --font-baslik:  'Archivo Black', sans-serif;
  --font-vurgu:   'Syne', sans-serif;   /* sadece SAYDA logotype */

  /* Ölçü */
  --kenar:      48px;
  --kenar-mob:  20px;
  --en:         1200px;
  --radius:     4px;
}
```

**Not:** Tasarımda 3 font ailesi var. Syne yalnızca hero ve footer'daki "SAYDA İNŞAAT" logotype'ında kullanılıyor — o şekilde sınırlı kalacak. Üç font zaten sınırda; dördüncü eklenmez.

---

## 6. Ana sayfa bölüm sırası ve kararları

| # | Bölüm | Durum | Not |
|---|---|---|---|
| 1 | Header | Tasarımdan | Mobil menü eklenecek (tasarımda yok) |
| 2 | Hero | Tasarımdan | Kuruluş yılı düzeltilecek, alt metin iki kola değinsin |
| 3 | **İki yol ayrımı** | **YENİ** | Kentsel dönüşüm ↔ kurumsal/taşeron |
| 4 | Sayılarla Sayda | Tasarımdan | Rakamlar teyit edilene kadar kodlanmaz |
| 5 | Hizmetler | **Yeniden yazılacak** | 6 gerçek hizmet, gerçek URL'ler |
| 6 | **Güven bandı** | **YENİ** | "1996'dan beri buradayız" — kaçmama kanıtı |
| 7 | Öne çıkan projeler | Tasarımdan | Gerçek 3 proje |
| 8 | İşverenler | **Yorumların yerine** | Kurumsal logo şeridi |
| 9 | Belge & Dökümanlar | Tasarımdan | → `/belgeler`, PDF'ler eski yolunda |
| 10 | Çalışma süreci | Tasarımdan | Olduğu gibi |
| 11 | Hakkımızda | Tasarımdan | Metin yeniden yazılacak → `/hakkimizda` |
| 12 | ~~Haberler~~ | **Ertelendi** | §1.6 |
| 13 | Teklif formu | Tasarımdan | Backend kararı gerekli |
| 14 | Footer | Tasarımdan | Gerçek iletişim bilgileri |

### 6.1 Güven bandı ne diyecek

SEO araştırmasındaki en değerli bulgu buydu: insanlar müteahhitten korkuyor. Doğrudan karşılanacak.

Üç kanıt, sade:
- **1996'dan beri** — 30 yıl, aynı şirket
- **İş bitirme belgeleri** — resmi, doğrulanabilir → `/belgeler`
- **Kurumsal işverenler** — Rönesans, Varyap, Kiler denetiminden geçmiş

Ton abartısız olacak. "Türkiye'nin lider firması" değil; "belgeler burada, projeler burada, bakın" tavrı.

### 6.2 Form — karar bekliyor

Statik sitede sunucu yok, form kendi başına çalışmaz. Seçenekler:

| Yöntem | Artı | Eksi |
|---|---|---|
| Web3Forms / Formspree | 5 dakikada çalışır, ücretsiz katman var | Üçüncü taraf, aylık gönderim limiti |
| Cloudflare Pages Functions | Kendi altyapımız, limitsiz | Cloudflare'a taşınma kararına bağlı |
| Netlify Forms | Sıfır kod | Netlify'a bağımlılık |
| `mailto:` linki | Bağımlılık yok | Formu öldürür, dönüşümü düşürür |

**Öneri:** Faz 1'de Web3Forms ile çalışır hale getir, hosting kararı netleşince gerekirse taşı. Form arayüzü aynı kalır, sadece gönderim ucu değişir.

**Ek:** KVKK aydınlatma metni onay kutusu eklenecek. Türkiye'de iletişim formu topluyorsan bu opsiyonel değil.

### 6.3 Mobil

Tasarım tamamen masaüstü. Sabit `px` padding, 3-4 kolonlu ızgaralar, `340px 1fr` bölmeler mobilde kırılır.

İnşaat sektöründe aramaların büyük kısmı telefondan geliyor — özellikle kentsel dönüşüm tarafı. Mobil sonradan yamalanmayacak, her bölüm yazılırken beraber yazılacak.

Kırılma noktaları: `1024px` (tablet), `640px` (telefon).
Header'da hamburger menü gerekecek — tasarımda yok, eklenecek.

---

## 7. Ana sayfa SEO'su

Ana sayfa marka aramasını (`sayda inşaat`) ve genel `istanbul müteahhit firması` türü aramaları karşılar. Kentsel dönüşüm veya alt müteahhitlik aramalarını **hedeflemez** — onlar kendi sayfalarının işi. (Bir sayfa, bir niyet.)

```
title:       Sayda İnşaat | İstanbul Müteahhitlik ve Kentsel Dönüşüm Firması
description: 1996'dan bu yana İstanbul'da kentsel dönüşüm, kat karşılığı inşaat
             ve anahtar teslim müteahhitlik. İş bitirme belgeli, kurumsal referanslı.
canonical:   https://www.sayda.com.tr/
h1:          tek adet — hero'daki "SAYDA İNŞAAT"
```

`Seo.astro` bileşeni `title`, `description`, `canonical`, Open Graph ve `schema.org` çıktısını üretecek. Bileşene sarılmazsa 60 sayfada elle yazılır ve mutlaka unutulur.

**schema.org:** Ana sayfaya `Organization` + `LocalBusiness` işaretlemesi konacak — ad, adres, telefon, kuruluş yılı, logo, sosyal profiller. Hepsi `site.json`'dan okunacak. Yerel aramalar ve Google Business Profile eşleşmesi için önemli.

**Başlık hiyerarşisi:** Eski sitede her başlık CAPS'ti. Yeni sitede metin normal yazılacak, büyük harf görünümü `text-transform: uppercase` ile CSS'ten verilecek. Google'ın okuduğu metin doğru kalır.

**Görsel `alt` metinleri:** Tasarımda kısmen var ("İnşaat sahası"). Hepsi gerçek içeriğe göre yazılacak — "proje1.jpg" gibi dosya adları da anlamlı hale getirilecek.

---

## 8. Yapım sırası

1. `npm create astro` + repo + ilk commit
2. `tokens.css` + font kurulumu + Türkçe karakter testi
3. `Layout.astro` + `Seo.astro` — iskelet önce
4. `site.json` doldur → `Footer.astro` bağla, doğru bilgiyle çalıştığını gör
5. `Header.astro` (mobil menü dahil)
6. Hero + İki yol ayrımı — **buraya kadar gelince bir kez yayına bakılır**, ilk izlenim burada belli olur
7. Hizmetler + Güven bandı
8. Projeler + İşverenler + Belgeler
9. Süreç + Hakkımızda
10. Teklif formu + KVKK
11. Mobil geçiş kontrolü, Lighthouse
12. `robots.txt` + sitemap doğrulama

4. adımdan sonra her adım ayrı commit. Tek büyük commit atılmayacak.

---

## 9. Müşteriden beklenenler (faz 1 için)

Bunlar gelmeden ana sayfa **bitmez**, sadece iskeleti çıkar:

- [ ] **Kuruluş yılı teyidi** — 1996 mı 1999 mu?
- [ ] Rakam teyidi: tamamlanan proje, çalışan sayısı, toplam m²
- [ ] Öne çıkacak 3 proje ve **yüksek çözünürlüklü fotoğrafları**
- [ ] Kurumsal işveren logoları veya isimlerinin kullanım izni
- [ ] Hero fotoğrafı (kendi şantiyesinden, stok değil)
- [ ] Hakkımızda fotoğrafı (ekip / şantiye)
- [ ] Logo — mümkünse vektörel (.ai, .eps, .svg)
- [ ] Instagram dışında sosyal medya var mı?
- [ ] Teklif formu hangi mail adresine düşecek?
- [ ] Haberler bölümü kalsın mı? (§1.6)

`PROJE-NOTLARI.md` §10'daki genel bekleyen işler (Search Console erişimi, DNS erişimi, ilçe listesi, Nestle teyidi) ayrı devam ediyor — ana sayfayı bloklamıyor ama Search Console **hemen** kurulmalı, geriye dönük veri vermiyor.

---

## 10. Faz 1 bitiş kriteri

- [ ] Ana sayfa masaüstü ve mobilde sorunsuz
- [ ] Tüm placeholder içerik gerçeğiyle değişmiş
- [ ] Doğrulanmamış tek rakam veya referans kalmamış
- [ ] `site.json` tek kaynak — hiçbir bileşende çıplak telefon/adres yok
- [ ] `Seo.astro` çalışıyor, title/description/canonical doğru
- [ ] Lighthouse: Performance 95+, Accessibility 95+
- [ ] Form gerçekten mail gönderiyor
- [ ] KVKK metni ve onayı var
- [ ] `npm run build` hatasız, `dist/` düz HTML üretiyor
- [ ] Repo'da düzenli commit geçmişi var

Bu kriterler karşılandığında faz 2 başlar: `/kentsel-donusum` hub sayfası — para sayfası, en yüksek öncelikli.

---

*Faz 1 planı. Kararlar değiştikçe bu dosya güncellenecek.*

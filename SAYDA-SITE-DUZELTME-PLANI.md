# Sayda İnşaat --- Site Düzeltme ve Gerçek Veri Entegrasyon Planı

> Bu dosya, Sayda İnşaat web sitesindeki mevcut içerikleri müşteri
> tarafından verilen güncel Excel verileriyle karşılaştırarak
> hazırlanmıştır.
>
> **Amaç:** Siteyi yayına almadan önce uydurma/teyitsiz bilgileri
> temizlemek, doğrulanmış şirket ve proje bilgilerini kullanmak, eksik
> alanları işaretlemek ve SEO tarafında yanlış bilgi üretimini önlemek.

------------------------------------------------------------------------

## 1. Kaynakların öncelik sırası

İçerik güncellenirken aşağıdaki öncelik kullanılmalı:

1.  **Müşteriden gelen güncel Excel** → şirket ve proje bilgilerinde ana
    kaynak.
2.  **Müşterinin ayrıca yazılı olarak teyit ettiği bilgiler** →
    Excel'deki belirsizlikleri günceller.
3.  `SAYFA-HARITASI.md` → site mimarisi ve URL planı için kaynak.
4.  Mevcut site/repo içeriği → sadece mevcut yapıyı anlamak için
    kullanılmalı; doğrulanmamış rakamlar gerçek kabul edilmemeli.

**Kural:** Müşteri tarafından teyit edilmemiş bir sayı, müşteri adı,
referans yorumu, sertifika veya başarı iddiası siteye eklenmemeli.

------------------------------------------------------------------------

# 2. Şirket bilgileri --- kullanılacak güncel veriler

## 2.1 Şirket

  --------------------------------------------------------------------------------------------
  Alan                    Güncel bilgi                                 Durum
  ----------------------- -------------------------------------------- -----------------------
  Ticari unvan            **Sayda İnşaat Taahhüt San. ve Tic.          Kullanılabilir
                          Ltd. Şti.**                                  

  Kuruluş yılı            **1996**                                     Kullanılabilir

  Adres                   **Şalcıkır Cad. Kaydırak Sok. No: 3/1, 34457 Kullanılabilir
                          Tarabya / İstanbul**                         

  Telefon                 **+90 212 223 88 12**                        Kullanılabilir

  E-posta                 **info@sayda.com.tr**                        Kullanılabilir

  Instagram               **instagram.com/saydainsaat**                Kullanılabilir

  LinkedIn                **linkedin.com/in/sayda-inşaat-75a716198**   Kullanılabilir

  Çalışan sayısı          **8**                                        Kullanılabilir

  Yıllık ortalama proje   **2**                                        Kullanılabilir
  sayısı                                                               

  Toplam tamamlanan m²    **4.250.000 m²**                             Kullanılabilir, ancak
                                                                       kapsamı netleştirilmeli

  İş bitirme belgesi      **33**                                       Kullanılabilir
  sayısı                                                               

  Müteahhitlik yetki      **G**                                        Müşteri tarafından
  belgesi grubu                                                        ayrıca teyit edilmesi
                                                                       iyi olur
  --------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 3. Mevcut sitedeki kesin olarak düzeltilmesi gereken bilgiler

`SAYFA-HARITASI.md` içinde daha önce aşağıdaki mockup verilerinin
uydurma/teyitsiz olduğu belirtilmiş:

  -----------------------------------------------------------------------
  Mevcut/Mockup bilgi                 Yapılacak
  ----------------------------------- -----------------------------------
  Kuruluş yılı: **1999**              **1996** yap

  Yıllık deneyim: **25+**             Kuruluş yılına göre yeniden
                                      hesapla; 2026 için 30 yıl

  Tamamlanan proje: **120+**          Kullanma; Excel'de bu sayı
                                      doğrulanmıyor

  Uzman kadro: **350+**               **Kullanma**; güncel çalışan sayısı
                                      8

  İnşaat alanı: **2.5M+**             Doğrulanmış şirket metriği olan
                                      **4.250.000 m²** kullanılabilir

  Mehmet Kaya / Ayşe Demir / Emre     **Tamamen kaldır**; gerçek müşteri
  Çelik yorumları                     yorumu ve izin olmadan
                                      kullanılmamalı

  Sayda Vadi Evleri / Sayda Plaza /   **Kaldır**; gerçek proje isimleri
  Sayda Konakları                     değil

  +90 212 000 00 00                   **+90 212 223 88 12**

  Uydurma haberler                    **Kaldır veya gerçek içerikle
                                      değiştir**
  -----------------------------------------------------------------------

### Özellikle dikkat

**350+ uzman kadro** gibi bir veri kesinlikle bırakılmamalı. Excel'de
çalışan sayısı **8** olarak verilmiş.

**120+ tamamlanan proje** de kullanılmamalı. Mevcut proje kayıtlarında
39 proje planlandığı belirtilse de Excel'deki ayrıntılı proje listesi bu
sayıyı doğrudan doğrulamıyor.

------------------------------------------------------------------------

# 4. Sertifika ve belge bilgileri

Excel'deki güncel bilgiler:

### ISO 9001

-   Geçerlilik tarihi: **20.03.2027**
-   Ancak Excel notunda mevcut tasarımda ISO 9001 bulunduğu ve teyit
    gerektiği belirtilmiş.

### ISO 14001

-   Geçerlilik tarihi: **20.03.2027** olarak belirtilmiş.

### ISO 10002

-   Geçerlilik tarihi: **20.03.2027** olarak belirtilmiş.

### ISO 45001

-   Excel'de ayrı bir doğrulanmış değer bulunmuyor.

### Müteahhitlik yetki belgesi

-   Grup: **G**

### İş bitirme

-   **33 adet** olarak verilmiş.

## Sertifika kuralı

Belge PDF'leri/sertifika görselleri gerçekten mevcut değilse sadece
sertifika adı yazıp belge varmış gibi gösterme.

Belgenin gerçek dosyası mevcutsa:

-   belge adı
-   belge numarası
-   geçerlilik tarihi
-   belge görseli/PDF
-   gerekiyorsa belgeyi veren kuruluş

kullanılmalı.

------------------------------------------------------------------------

# 5. Proje verileri

Excel'de iki ana kategori var:

-   **Devam Eden İşler**
-   **Tamamlanan İşler**

## 5.1 Devam eden proje

### Referans Beşiktaş Abbasağa Projesi

**Lokasyon:** Beşiktaş - İstanbul

**İşveren:**\
Kiler GYO, Biskon Yapı A.Ş. İş Ortaklığı

**Proje / sözleşme konusu:**\
Lüks konut / residence projesi --- ince işler.

**İş kapsamı:**

-   Duvar
-   Mantolama
-   Sıva
-   Şap
-   Seramik
-   Alçı levha işleri
-   Boya
-   Kartonpiyer
-   Duvar kağıdı
-   vb.

**Metrekare:** 79.000 m²

**Kesin hesap / KDV dahil:** 175.173.728,72 TL

**Başlangıç:** Ocak 2024

**Bitiş:** Excel'de belirtilmemiş.

> Site üzerinde "tamamlandı" gibi gösterilmemeli. Bu proje **devam eden
> işler** altında yer almalı.

------------------------------------------------------------------------

# 6. Tamamlanan projeler

Aşağıdaki bilgiler Excel'den alınmıştır.

## 6.1 Referans Kartal Loca 1 Projesi

**Lokasyon:** Kartal - İstanbul

**İşveren:** Kiler GYO, Biskon Yapı A.Ş.

**Kapsam:**\
2. Etap konut & cadde dükkan --- ince işler.

**İşler:**

-   Duvar
-   Sıva
-   Şap
-   Seramik
-   Alçı levha işleri
-   Boya
-   Kartonpiyer
-   Duvar kağıdı
-   vb.

**Alan:** 35.672 m²

**Kesin hesap / KDV dahil:** 64.654.646,80 TL

**Başlangıç:** Eylül 2022

**Bitiş:** Eylül 2024

------------------------------------------------------------------------

## 6.2 Referans Kartal Loca 2 Projesi

**Lokasyon:** Kartal - İstanbul

**İşveren:** Kiler GYO, Biskon Yapı A.Ş.

**Kapsam:**\
1. Etap konut & cadde dükkan --- ince işler.

**Alan:** 40.437 m²

**Kesin hesap / KDV dahil:** 21.707.074,18 TL

**Başlangıç:** Eylül 2021

**Bitiş:** Eylül 2023

------------------------------------------------------------------------

## 6.3 Büyükyalı Projesi

**Lokasyon:** Zeytinburnu - İstanbul

**İşveren:** Özak - Yenigün - Ziylan Ortaklığı

**Kapsam:**\
Garden Zone H, I, L bloklar; konut ve sosyal tesisleri.

**Alan:** 560.000 m²

**Kesin hesap / KDV dahil:** 21.986.508 TL

**Başlangıç:** Şubat 2018

**Bitiş:** Şubat 2020

**İşler:**

-   Duvar
-   Sıva
-   Şap
-   Seramik
-   Alçı levha işleri
-   Boya
-   Kartonpiyer
-   Duvar kağıdı
-   vb.

------------------------------------------------------------------------

## 6.4 Gaziantep Entegre Sağlık Kampüsü Projesi

**Lokasyon:** Gaziantep

**İşveren:** CCN Altyapı Yatırımları ve İnşaat A.Ş.

**Kapsam:**\
T1 Kardiyovasküler Cerrahi Hastanesi.

**İşler:**

-   Alçı levha işleri
-   Sıva
-   Şap
-   Seramik
-   Boya işleri

**Alan:** 640.000 m²

**Kesin hesap / KDV dahil:** 12.446.152,72 TL

**Başlangıç:** Şubat 2018

**Bitiş:** Haziran 2019

------------------------------------------------------------------------

## 6.5 Vadistanbul Projesi

**Lokasyon:** Ayazağa - İstanbul

**İşveren:** Artaş - İnvest Ortak Girişimi

**Kapsam:**\
2. Etap G Blok ve Otel, 3. Etap konut, ofis ve sosyal tesis.

**İşler:**

-   Duvar
-   Sıva
-   Şap
-   Seramik
-   Alçı levha işleri
-   Boya
-   Kartonpiyer
-   Duvar kağıdı
-   vb.

**Alan:** 450.000 m²

**Kesin hesap / KDV dahil:** 9.938.495,7082 TL

**Başlangıç:** Haziran 2017

**Bitiş:** Aralık 2018

------------------------------------------------------------------------

## 6.6 Atlas Park AVM ve Ofis Projesi

**Lokasyon:** Sultanbeyli - İstanbul

**İşveren:**\
Mesturkuaz, Canovate, Uzman İnş., HD Gayrimenkul Geliştirme Ortak
Girişimi

**Kapsam:** AVM & Ofis --- ince işler.

**İşler:**

-   Bims duvar
-   Sıva
-   Şap
-   Alçı levha işleri

**Alan:** 160.000 m²

**Kesin hesap / KDV dahil:** 6.780.674,12 TL

**Başlangıç:** Ağustos 2013

**Bitiş:** Mart 2015

------------------------------------------------------------------------

## 6.7 Kapital Tower 10. Kat Ofis Projesi

**Lokasyon:** Basın Ekspres / Güneşli - İstanbul

**İşveren:** Uzman İnşaat A.Ş. & Mesturkuaz Madencilik A.Ş.

**Kapsam:** Ofis dekorasyonu --- anahtar teslimi.

**İşler:**

-   Elektro-mekanik
-   İnce işler
-   Mermer işleri
-   Ahşap işleri
-   Metal işleri
-   Cam işleri

**Alan:** 4.000 m²

**Kesin hesap / KDV dahil:** 1.888.000 TL

**Başlangıç:** Eylül 2013

**Bitiş:** Eylül 2014

------------------------------------------------------------------------

## 6.8 Torun Tower Ofis Projesi

**Lokasyon:** Gayrettepe - İstanbul

**İşveren:** Torunlar Gayrimenkul Yatırım Ortaklığı A.Ş.

**Kapsam:** Tower, 40 kat --- Shell & Core ince işleri.

**İşler:**

-   Gazbeton
-   Sıva
-   Şap
-   Seramik
-   Alçı levha işleri

**Alan:** 97.000 m²

**Kesin hesap / KDV dahil:** 2.675.450 TL

**Başlangıç:** Mayıs 2013

**Bitiş:** Ekim 2013

------------------------------------------------------------------------

## 6.9 Piazza AVM & Anemon Otel Projesi

**Lokasyon:** Canik - Samsun

**İşveren:** Rönesans Teknik İnşaat A.Ş.

**Kapsam:** AVM & Otel --- ince işler.

**İşler:**

-   Alçı levha bölme duvar
-   Asma tavan
-   Alçı ve kara sıva
-   Boya işleri

**Alan:** 135.000 m²

**Kesin hesap / KDV dahil:** 4.454.973,18 TL

**Başlangıç:** Eylül 2012

**Bitiş:** Şubat 2013

------------------------------------------------------------------------

## 6.10 Akbatı AVM & Konut Projesi

**Lokasyon:** Bahçeşehir - İstanbul

**İşveren:** Akiş Gayrimenkul Yatırım A.Ş.

**Kapsam:** AVM & otoparklar --- ince işler.

**İşler:**

-   Alçı levha bölme duvar
-   Asma tavan
-   Sıva
-   Boya işleri

**Alan:** 250.000 m²

**Kesin hesap / KDV dahil:** 1.504.581,4436 TL

**Başlangıç:** Ocak 2011

**Bitiş:** Temmuz 2011

------------------------------------------------------------------------

## 6.11 Varyap Meridian Konut Projesi

**Lokasyon:** Batı Ataşehir - İstanbul

**İşveren:** Varyap İnşaat Turizm A.Ş.

**Kapsam:** Residence, E Blok --- ince işler.

**İşler:**

-   Gazbeton duvar
-   Sıva
-   Şap işleri

**Alan:** 150.000 m²

**Kesin hesap / KDV dahil:** 1.386.339,52 TL

**Başlangıç:** Temmuz 2010

**Bitiş:** Mart 2011

------------------------------------------------------------------------

## 6.12 Terrace Bahçe Konut Projesi

**Lokasyon:** Sarıyer - İstanbul

**İşveren:** İnanlar İnşaat A.Ş.

**Kapsam:** Residence, 60 konut --- ince işler.

**İşler:**

-   Duvar
-   Sıva
-   Şap
-   Seramik
-   Alçı levha asma tavan
-   Boya işleri

**Alan:** 14.000 m²

**Kesin hesap / KDV dahil:** 1.486.339 TL

**Başlangıç:** Şubat 2010

**Bitiş:** Aralık 2010

------------------------------------------------------------------------

## 6.13 Oyakkent Konut Projesi

**Lokasyon:** Başakşehir - İstanbul

**İşveren:** Oyak İnşaat A.Ş.

**Kapsam:** 33 blok / 1.581 konut --- ince işler.

**İşler:**

-   Tuğla duvar
-   Teras şap
-   Çatı işleri

**Alan:** 650.000 m²

**Kesin hesap / KDV dahil:** 4.244.593,34 TL

**Başlangıç:** Haziran 2007

**Bitiş:** Nisan 2009

------------------------------------------------------------------------

## 6.14 Omsan Depo & Lojistik Merkezi --- Kayıt 1

**Lokasyon:** Şekerpınar - İstanbul

**İşveren:** Oyak Konut A.Ş.

**Kapsam:** Depo, ek binalar ve yönetim binaları ince işleri.

**İşler:**

-   Tuğla duvar
-   Sıva
-   Şap
-   Seramik
-   Mermer
-   Alçı levha asma tavan
-   Boya işleri

**Alan:** 100.000 m²

**Kesin hesap / KDV dahil:** 2.241.578,74 TL

**Başlangıç:** Kasım 2006

**Bitiş:** Haziran 2007

------------------------------------------------------------------------

## 6.15 Omsan Depo & Lojistik Merkezi --- Kayıt 2

Excel'de aynı proje adı ikinci kez bulunuyor.

**Lokasyon:** Şekerpınar - İstanbul

**İşveren:** Oyak Konut A.Ş.

**Alan:** 100.000 m³ olarak yazılmış.

**Kesin hesap / KDV dahil:** 2.241.578,74 TL

**Başlangıç:** Kasım 2007

**Bitiş:** Haziran 2008

### ÖNEMLİ VERİ HATASI

Aynı proje adı, aynı işveren ve aynı tutar iki farklı kayıt olarak
bulunuyor.

Birinci kayıt: - 100.000 m² - Kasım 2006 --- Haziran 2007

İkinci kayıt: - 100.000 m³ - Kasım 2007 --- Haziran 2008

Bunun gerçekten iki ayrı iş/proje olup olmadığı **müşteriden teyit
edilmeli**.

Web sitesinde teyit gelene kadar bu iki kaydı iki ayrı proje gibi
göstermemek daha güvenli.

------------------------------------------------------------------------

# 7. Excel'de ayrıca geçen proje isimleri

Excel'in sonunda ayrıntılı bilgi olmadan üç proje daha bulunuyor:

-   **ISISAN-BUDERUS BURSA BÖLGE BİNASI**
-   **YASMİN RESORT HOTEL**
-   **ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ**

Bu projeler için:

-   işveren
-   lokasyon
-   alan
-   tarih
-   iş kapsamı
-   proje durumu

verileri bulunmadığından detay sayfası oluşturulmamalı.

Müşteriden bilgi alınırsa daha sonra eklenebilir.

------------------------------------------------------------------------

# 8. Proje sayısı konusunda dikkat

Mevcut `SAYFA-HARITASI.md` dosyasında:

> `/projeler/[slug]` → 39 sayfa

şeklinde bir plan bulunuyor.

Ancak gönderilen Excel'de:

-   1 devam eden proje
-   15 satırlık tamamlanan proje kaydı
-   3 ayrıntısız proje adı

bulunuyor.

Bu nedenle **39 proje** bilgisini Excel doğrulamış gibi kullanma.

### Yapılacak

Projeler gerçek kayıtlar üzerinden yeniden oluşturulmalı.

Her proje için mümkünse:

``` text
slug
name
location
status
client
category
scope
area
contractAmount
startDate
endDate
images
description
```

alanları kullanılabilir.

Eksik bilgiler `null` bırakılmalı; uydurma veri yazılmamalı.

------------------------------------------------------------------------

# 9. Toplam 4.250.000 m² konusu

Excel şirket bilgilerinde:

**Toplam tamamlanan m²: 4.250.000 m²**

olarak verilmiş.

Bu değer proje listesindeki görünen m² değerlerinin basit toplamı
değildir.

Bu nedenle:

-   değeri doğrudan şirket metriği olarak kullanabiliriz,
-   fakat "listelenen bu projelerin toplamı 4.250.000 m²" şeklinde
    yazmamalıyız.

Önerilen kullanım:

> **4,25 milyon m²+ tamamlanan proje alanı**

veya

> **4.250.000 m² tamamlanan proje alanı**

Ancak müşterinin bu metriğin tam tanımını teyit etmesi idealdir.

------------------------------------------------------------------------

# 10. Ana sayfa için önerilen gerçek metrikler

Ana sayfadaki sahte/teyitsiz sayaçlar yerine aşağıdakiler
kullanılabilir:

### 30+

**Yıllık deneyim**

1996 kuruluş yılına göre 2026 itibarıyla yaklaşık 30 yıl.

### 4,25M+

**Tamamlanan proje alanı**

### 33

**İş bitirme belgesi**

### 8

**Çalışan**

### 2

**Yıllık ortalama proje**

> Not: "30+" yerine "30 yıl" kullanmak daha temiz olabilir. Sayısal
> sayaç kullanılacaksa hesaplama dinamik yapılabilir.

------------------------------------------------------------------------

# 11. Referans / müşteri logoları

Excel'de logosu kullanılabilecek iş ortakları:

-   RÖNESANS
-   KİLER
-   AKKÖKLER
-   ARTAŞ
-   OYAK
-   ISSIAN
-   UZMAN
-   CANOVATE
-   ZİYLAN

Ancak logoların web sitesinde kullanılabilmesi için **izin durumu ayrıca
teyit edilmeli**.

Özellikle:

> "Referanslarımız"

başlığı altında logo gösterilecekse bunun gerçek ticari ilişkiyi temsil
ettiği açık olmalı.

------------------------------------------------------------------------

# 12. Müşteri yorumları

Şu an gerçek müşteri yorumu bilgisi verilmemiş.

Excel'de yorum verebilecek müşteri alanları boş.

Bu nedenle:

-   Mehmet Kaya
-   Ayşe Demir
-   Emre Çelik
-   veya başka uydurma kişiler

kullanılmamalı.

Müşteriden gerçek yorum alınırsa şu formatta saklanmalı:

``` text
name
title
company
project
quote
permission
```

`permission = true` olmadan yayınlanmamalı.

------------------------------------------------------------------------

# 13. Hizmetler

Mevcut site haritasında şu hizmetler planlanmış:

1.  Alt Müteahhitlik
2.  Anahtar Teslim Müteahhitlik
3.  Kat Karşılığı İnşaat
4.  Proje Yönetimi & Danışmanlık
5.  Otel Renovasyonu

Her hizmet sayfasındaki metin **Sayda'nın gerçek yaptığı işlerle uyumlu
olmalı**.

Excel'deki projelerde ağırlıklı olarak:

-   ince işler
-   duvar
-   sıva
-   şap
-   seramik
-   alçı levha
-   boya
-   kartonpiyer
-   duvar kağıdı
-   dekorasyon
-   elektro-mekanik
-   mermer
-   ahşap
-   metal
-   cam
-   otel/AVM/ofis/konut işleri

görülüyor.

Bu nedenle hizmet sayfalarında Sayda'nın uzmanlığını olduğundan farklı
gösterecek iddialar ekleme.

------------------------------------------------------------------------

# 14. Kentsel dönüşüm

Excel'in:

**3.KENTSEL DÖNÜŞÜM**

sayfası boş.

Bu nedenle kentsel dönüşüm için:

-   ilçe
-   proje
-   tamamlanan bina
-   dönüşen bağımsız bölüm
-   toplam m²
-   proje sayısı
-   başarı oranı
-   müşteri sayısı

gibi rakamlar **uydurulmamalı**.

Mevcut site haritasında `/kentsel-donusum` ve `/kentsel-donusum/[ilce]`
planı var.

İlçe sayfaları ancak gerçek ilçe/proje verileri geldikten sonra
oluşturulmalı.

------------------------------------------------------------------------

# 15. SEO'da yapılacak düzeltmeler

## Title

Şirket adı ve ana hizmet doğal şekilde kullanılmalı.

Örnek:

``` text
Sayda İnşaat | Taahhüt, İnce İşler ve Yapı Çözümleri
```

## Description

Gerçek bilgiler kullanılmalı.

Örnek:

``` text
1996'dan bu yana konut, AVM, otel, ofis ve sağlık yapılarında ince işler ve yapı çözümleri sunan Sayda İnşaat.
```

## Structured Data

Organization / LocalBusiness schema içinde:

-   şirket adı
-   telefon
-   adres
-   URL
-   sosyal medya

gerçek bilgilerden beslenmeli.

Yanlış telefon, sahte adres veya sahte sosyal medya linki bırakılmamalı.

------------------------------------------------------------------------

# 16. İletişim sayfası

İletişim sayfasında:

**Sayda İnşaat Taahhüt San. ve Tic. Ltd. Şti.**

**Adres:**\
Şalcıkır Cad. Kaydırak Sok. No: 3/1, 34457 Tarabya / İstanbul

**Telefon:**\
+90 212 223 88 12

**E-posta:**\
info@sayda.com.tr

**Instagram:**\
instagram.com/saydainsaat

**LinkedIn:**\
linkedin.com/in/sayda-inşaat-75a716198

olarak güncellenmeli.

------------------------------------------------------------------------

# 17. Footer

Footer'da mutlaka gerçek şirket bilgileri kullanılmalı.

Özellikle kontrol et:

-   şirket adı
-   telefon
-   e-posta
-   adres
-   Instagram
-   LinkedIn
-   telif yılı
-   hızlı menüler
-   iletişim bağlantısı

Footer'da eski/placeholder bilgiler kalmamalı.

------------------------------------------------------------------------

# 18. Header / Menü

Mevcut `SAYFA-HARITASI.md` yapısı korunabilir:

``` text
Anasayfa

Kurumsal
├── Hakkımızda
├── Vizyon & Misyon
├── Belgelerimiz
└── Haberler

Hizmetler
├── Alt Müteahhitlik
├── Anahtar Teslim Müteahhitlik
├── Kat Karşılığı İnşaat
├── Proje Yönetimi & Danışmanlık
└── Otel Renovasyonu

Kentsel Dönüşüm

Projeler
├── Devam Eden
└── Tamamlanan

Rehber

İletişim
```

Ancak **Haberler** bölümü gerçek içerik yoksa boş bırakılmamalı.

------------------------------------------------------------------------

# 19. Haberler

Mevcut site haritasında haberler için karar bekleniyor.

Eğer eski sitede eski haberler bulunuyorsa:

-   haber sayısı
-   son haber tarihi
-   Google indeks durumu

kontrol edilmeli.

Eğer içerik güncel tutulmayacaksa haberler bölümünü büyütmek yerine eski
URL'leri uygun sayfalara yönlendirmek daha doğru olabilir.

------------------------------------------------------------------------

# 20. Görsel kullanım kuralları

Projeler için görseller gerçek projeyi temsil etmiyorsa:

-   proje adıyla gerçekmiş gibi kullanma,
-   stok görseli gerçek proje fotoğrafı gibi gösterme,
-   AI-generated görseli gerçek proje fotoğrafı gibi gösterme.

Stok/temsili görsel gerekiyorsa:

``` text
Temsili görseldir.
```

şeklinde açıkça belirtilmeli.

------------------------------------------------------------------------

# 21. İçeriklerde kullanılmaması gereken ifadeler

Müşteri tarafından teyit edilmeden aşağıdaki tarzda ifadeler yazma:

-   "350 kişilik uzman kadro"
-   "120+ proje"
-   "25 yıllık deneyim"
-   "Türkiye'nin lider..."
-   "binlerce mutlu müşteri"
-   "yüzlerce tamamlanan proje"
-   "sektör lideri"
-   "en büyük..."
-   "ödüllü..."
-   "müşterilerimizin %99'u memnun"
-   uydurma müşteri yorumları
-   uydurma proje isimleri

------------------------------------------------------------------------

# 22. Proje kartlarında önerilen yapı

Proje liste kartında fazla veri gösterme.

Önerilen:

``` text
[Proje görseli]

Kartal Loca 1
Kartal / İstanbul

Konut & Cadde Dükkan
35.672 m²

2022 — 2024

[Tamamlandı]
```

Detay sayfasında:

``` text
Proje
İşveren
Lokasyon
Proje türü
İş kapsamı
Alan
Başlangıç
Bitiş
```

gösterilebilir.

**Sözleşme bedeli** müşteri açıkça web sitesinde yayınlamak istiyorsa
gösterilmeli. Aksi halde proje detayında zorunlu alan yapılmamalı.

------------------------------------------------------------------------

# 23. Para tutarları konusunda önemli karar

Excel'de kesin hesap / KDV dahil tutarlar bulunuyor.

Bu tutarlar ticari açıdan hassas olabileceğinden web sitesinde otomatik
olarak yayınlanmamalı.

**Varsayılan karar:**

> Proje detaylarında sözleşme/kesin hesap bedeli gösterme.

Bu bilgi sadece şirket içi veri olarak tutulabilir.

Müşteri özellikle "web sitesinde yayınlayalım" derse ayrı karar verilir.

------------------------------------------------------------------------

# 24. Veri normalizasyonu

Kod tarafında proje verilerini eklerken isimleri normalize et.

Örnek:

``` text
Varyap Meridien
```

ve

``` text
Varyap Meridian
```

gibi farklı yazımlar varsa müşterinin kullandığı resmi proje adı tercih
edilmeli.

Aynı şekilde:

-   AVM
-   Otel
-   Residence
-   Rezidans
-   Konut
-   Ofis

ifadeleri tutarlı kullanılmalı.

------------------------------------------------------------------------

# 25. Kontrol listesi

## Şirket

-   [ ] 1999 → 1996
-   [ ] 25+ yıl → 30 yıl / 30+
-   [ ] 350+ uzman → kaldır
-   [ ] 120+ proje → kaldır veya teyit et
-   [ ] 2.5M+ → 4.25M+ olarak düzelt
-   [ ] Telefon → +90 212 223 88 12
-   [ ] E-posta → info@sayda.com.tr
-   [ ] Adres → Tarabya adresi
-   [ ] Şirket tam unvanını düzelt
-   [ ] Çalışan sayısı gerekiyorsa 8 kullan
-   [ ] Yıllık ortalama proje sayısı gerekiyorsa 2 kullan

## Sertifikalar

-   [ ] ISO 9001 tarihi kontrol
-   [ ] ISO 14001 tarihi kontrol
-   [ ] ISO 10002 tarihi kontrol
-   [ ] ISO 45001 için veri gelmeden iddia oluşturma
-   [ ] G grubu yetki belgesini kontrol et
-   [ ] 33 iş bitirme belgesi bilgisini kullan

## Projeler

-   [ ] Devam eden projeyi doğru kategoriye koy
-   [ ] Tamamlanan projeleri Excel ile karşılaştır
-   [ ] Omsan duplicate kaydını teyit et
-   [ ] 3 eksik proje için bilgi isteme
-   [ ] 39 proje iddiasını teyit etmeden kullanma
-   [ ] Sahte proje isimlerini kaldır
-   [ ] Sahte proje görsellerini gerçek proje gibi gösterme
-   [ ] Proje tarihlerini kontrol et
-   [ ] Lokasyonları kontrol et
-   [ ] İşveren isimlerini kontrol et

## Yorumlar

-   [ ] Uydurma müşteri yorumlarını tamamen kaldır
-   [ ] Gerçek yorum gelirse izin durumunu kaydet

## Referans logoları

-   [ ] Rönesans
-   [ ] Kiler
-   [ ] Akkökler
-   [ ] Artaş
-   [ ] Oyak
-   [ ] ISSIAN
-   [ ] Uzman
-   [ ] Canovate
-   [ ] Ziylan

> Logo kullanımı için izin teyidi alınmalı.

## SEO

-   [ ] Title'ları kontrol et
-   [ ] Meta description'ları kontrol et
-   [ ] Canonical URL'leri kontrol et
-   [ ] OG title/description/image kontrol et
-   [ ] Organization/LocalBusiness schema kontrol et
-   [ ] Telefon ve adres schema'da doğru mu kontrol et
-   [ ] Sitemap kontrol et
-   [ ] robots.txt kontrol et
-   [ ] 404 kontrol et
-   [ ] Eski URL → yeni URL 301'leri kontrol et

------------------------------------------------------------------------

# 26. Geliştirme sırası

Siteyi düzeltirken şu sırayla ilerle:

### Aşama 1 --- Gerçek şirket verileri

1.  `site.json` / config benzeri merkezi veriyi bul.
2.  Şirket adını düzelt.
3.  Kuruluş yılını 1996 yap.
4.  Telefonu düzelt.
5.  E-postayı düzelt.
6.  Adresi düzelt.
7.  Sosyal medya linklerini düzelt.
8.  Footer'ı merkezi veriden besle.

### Aşama 2 --- Ana sayfa

1.  Sahte sayaçları kaldır.
2.  4.25M+ değerini kullan.
3.  33 iş bitirme bilgisini kullan.
4.  8 çalışan bilgisini gerekiyorsa kullan.
5.  1996 kuruluş bilgisini kullan.
6.  Sahte yorumları kaldır.
7.  Sahte proje isimlerini kaldır.
8.  Sahte haberleri kaldır.

### Aşama 3 --- Projeler

1.  Proje veri modelini oluştur.
2.  Excel'deki doğrulanmış projeleri ekle.
3.  Devam eden / tamamlanan ayrımını yap.
4.  Omsan kaydını teyit et.
5.  Eksik projeleri müşteriden iste.
6.  Gerçek görselleri yerleştir.
7.  Her proje için SEO slug üret.

### Aşama 4 --- Belgeler

1.  Sertifikaları gerçek belgelerle eşleştir.
2.  Geçerlilik tarihlerini kontrol et.
3.  İş bitirme belgelerini düzenle.
4.  E-katalog bağlantısını kontrol et.

### Aşama 5 --- Hizmetler

Her hizmet sayfasındaki iddiaları gerçek şirket faaliyetleriyle
karşılaştır.

### Aşama 6 --- SEO

En son:

-   title
-   description
-   canonical
-   schema
-   sitemap
-   robots
-   redirect
-   OG

kontrolü yapılmalı.

------------------------------------------------------------------------

# 27. Müşteriden alınması gereken eksik bilgiler

Siteyi tamamen bitirmeden önce müşteriye şu sorular gönderilmeli:

1.  Omsan Depo & Lojistik Merkezi Excel'de iki farklı kayıt olarak
    bulunuyor. Bunlar gerçekten iki ayrı proje mi?
2.  ISISAN-BUDERUS Bursa Bölge Binası için proje detayları nedir?
3.  Yasmin Resort Hotel için proje detayları nedir?
4.  Çırağan Otel Binası Renovasyon Projesi için proje detayları nedir?
5.  4.250.000 m² toplam alan hangi projelerin/işlerin toplamıdır?
6.  33 iş bitirme belgesinin tamamı yayınlanabilir mi?
7.  ISO 9001 belgesinin geçerliliği 20.03.2027 mi?
8.  ISO 14001 belgesinin geçerliliği 20.03.2027 mi?
9.  ISO 10002 belgesinin geçerliliği 20.03.2027 mi?
10. ISO 45001 mevcut mu?
11. G grubu müteahhitlik yetki belgesi doğru mu?
12. Referans firma logolarının web sitesinde kullanılması için izin var
    mı?
13. Gerçek müşteri yorumu paylaşılacak mı?
14. Sözleşme/kesin hesap bedellerinin web sitesinde yayınlanması
    isteniyor mu?
15. Başka telefon/WhatsApp hattı var mı?
16. Teklif talepleri hangi e-posta adresine gitmeli?
17. Kentsel dönüşüm yapılan ilçe/projeler hangileri?
18. Haberler bölümü güncel tutulacak mı?
19. Eski sitedeki haberlerin taşınması gerekiyor mu?
20. Toplam proje sayısı gerçekten 39 mu? Eğer evetse Excel'deki eksik
    projeler hangileri?

------------------------------------------------------------------------

# 28. Son karar

Bu sitenin içerik tarafında temel prensip:

> **Az ama doğrulanmış bilgi, çok ama uydurma bilgiden daha
> değerlidir.**

Özellikle kurumsal inşaat sitesinde:

-   proje isimleri,
-   işverenler,
-   m² değerleri,
-   çalışan sayısı,
-   sertifikalar,
-   müşteri yorumları,
-   referans logoları,
-   şirket geçmişi

güven unsurudur.

Bu nedenle müşteri teyidi olmayan veriler yerine boş bırakmak veya
"bilgi bekleniyor" olarak işaretlemek tercih edilmelidir.

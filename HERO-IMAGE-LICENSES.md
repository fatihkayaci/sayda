# Ana sayfa hero görselleri — lisans / izin takibi

Ana sayfa slider'ındaki (`src/components/home/Hero.astro`) 5 görselin hepsi
projenin işvereninin, geliştiricisinin ya da mimarının web sitesinden alındı.
Hiçbiri serbest lisanslı değil, **kullanım izni alınması gerekiyor.** İzin
gelene kadar her slaytta görselin sahibi sağ altta kaynak olarak yazıyor.

İzin alınamayan görsel değiştirilmeli (Sayda'nın kendi çektiği bir fotoğraf
en garantisi).

| # | Proje | Dosya | Görselin sahibi | Kaynak sayfa | Orijinal dosya | İzin |
|---|-------|-------|-----------------|--------------|----------------|------|
| 1 | Büyükyalı | `public/img/home/hero-buyukyali-tower.webp` | Chapman Taylor (mimar). İşveren: Özak GYO – Yenigün – Ziylan ortaklığı | https://www.chapmantaylor.com/projects/buyukyali | `Buyukyali_2021_L_K_6478.JPG` (2048×1505) | Bekliyor |
| 2 | Vadistanbul | `public/img/home/hero-vadistanbul-bulvar.webp` | Artaş Holding (Artaş – İnvest Adi Ortaklığı) | https://www.artasholding.com/tr-tr/proje/vadistanbul-bulvar/ | `https://www.artasholding.com/Images/Photos/6216f6b3-c047-45b6-9779-2ab9639f7d3e.jpg` (2000×1100) | Bekliyor |
| 3 | Gaziantep Şehir Hastanesi | `public/img/home/hero-gaziantep-hospital.webp` | Meridiam (proje ortağı; ortak: Rönesans) | https://www.meridiam.com/assets/gaziantep-hospital-turkey/ | `https://www.meridiam.com/wp-content/uploads/2023/09/Gaziantep-GSHDRONE14.jpg` (2048×1152) | Bekliyor |
| 4 | Referans Beşiktaş | `public/img/home/hero-referans-besiktas.webp` | Kiler GYO (render) | https://www.referansbesiktas.com/ | `https://www.referansbesiktas.com/images/proje-cover.jpg` (1627×1017) | Bekliyor |
| 5 | Referans Kartal Loca | `public/img/home/hero-referans-kartal-loca.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | `https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/banner-1920x800px-design-min.jpg` (1920×800, soldaki "Güven veren…" rozeti kırpıldı) | Bekliyor |

Notlar:

- 4 ve 5 aynı işveren (Kiler GYO), tek yazıyla ikisi için izin istenebilir.
- 4 numara bir render, gerçek fotoğraf değil.
- 5 numaranın orijinali 800px yüksekliğinde. Büyük ekranlarda hafif yumuşak
  görünebilir; Kiler GYO'dan yüksek çözünürlüklüsü istenebilir.
- Her görselin `-960.webp` küçük kopyası da var (mobil için).
- Önceki hero'daki Wikimedia Commons fotoğrafları (Çırağan, Vadistanbul AVM,
  Süzer Plaza) serbest lisanslıydı ve kaynak yazılarak kullanılıyordu. Artık
  hero'da kullanılmıyorlar ama dosyaları `public/img/home/hero-*.webp` altında
  duruyor.

# Proje kapak görselleri — lisans / izin takibi

`/projeler` sayfasındaki kartlarda ve proje detay sayfalarının üst bandında
kullanılan kapak görselleri. Kaynakları işveren, geliştirici, mimar ya da
otelin kendi web siteleri. Süzer Plaza dışında hiçbiri serbest lisanslı
değil, **kullanım izni alınması gerekiyor.** İzin gelene kadar her kapakta
görselin sahibi sağ altta kaynak olarak yazıyor (`projects.json` →
`imageCredit`).

Sayda'nın kendi eski fotoğrafları silinmedi, proje galerisinin başına alındı.
İzin alınamayan bir kapak için o projenin `image` alanını eski fotoğrafa
geri çevirip `imageCredit` alanını silmek yeterli.

Her kapağın `-960.webp` ve `-640.webp` küçük kopyaları da var.

| # | Proje | Dosya | Görselin sahibi | Kaynak sayfa | Orijinal dosya | İzin |
|---|-------|-------|-----------------|--------------|----------------|------|
| 1 | AKBATI PROJESİ | `public/img/projects/akbati-avm-konut/akbati-avm-konut-cover.webp` | Birleşim | https://www.birlesim.com/tr/projelerimiz/is-ve-yasam-merkezleri/akbati-residence | https://www.birlesim.com/files/projeler/avm/tm/bati/akbati3.jpg | Bekliyor |
| 2 | BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-cover.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Chapman_Taylor_Designed_Buyukyali_Residential_development-Istanbul_2021.JPG | Bekliyor |
| 3 | CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-cover.webp` | Mutlu İnşaat | https://mutluinsaat.com/Projeler/tamamlanan-projeler/Capital-Tower | https://mutluinsaat.com/img/proje/capital-tower.jpg | Bekliyor |
| 4 | CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-cover.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/67556-capital-tower-basinekspres.jpg | Bekliyor |
| 5 | CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-cover.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/7/4/9/179478-1-eng-GB/af84e187d7a6-73657607_4K.jpg | Bekliyor |
| 6 | EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-cover.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/0/9/8/178908-1-eng-GB/32137c9e4fd6-73657667_4K.jpg | Bekliyor |
| 7 | GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-cover.webp` | Meridiam | https://www.meridiam.com/assets/gaziantep-hospital-turkey/ | https://www.meridiam.com/wp-content/uploads/2023/09/Gaziantep-GSHDRONE14.jpg | Bekliyor |
| 8 | Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-cover.webp` | TPF | https://tpf.eu/node/186 | https://tpf.eu/sites/default/files/styles/w1800/public/2022-04/BhCHrIhQ.jpg?itok=3RSh9uMX | Bekliyor |
| 9 | NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-cover.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/dis-mekan/nidapark_istinye_vadi.jpg | Bekliyor |
| 10 | OMSAN TUZLA LOJİSTİK MERKEZİ | `public/img/projects/omsan-depo-lojistik-merkezi/omsan-depo-lojistik-merkezi-cover.webp` | Akyürek Elmas Mimarlık | https://www.caglaakyurek.com/portfolio/omsan-lojistik-merkezi/ | https://www.caglaakyurek.com/img/cagla-akyurek-mimarlik-omsan-lojistik-merkezi-0.jpg | Bekliyor |
| 11 | REFERANS BEŞİKTAŞ PROJESİ İNCE İŞLERİ BİZ YAPIYORUZ | `public/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga-cover.webp` | Kiler GYO | https://www.referansbesiktas.com/ | https://www.referansbesiktas.com/images/proje-cover.jpg | Bekliyor |
| 13 | REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-cover.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img1-h.jpg | Bekliyor |
| 14 | REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-cover.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/banner-1920x800px-design-min.jpg | Bekliyor |
| 15 | RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-cover.webp` | Rönesans Gayrimenkul | https://rgy.com.tr/portfoy/samsun-piazza | https://rgy.com.tr/content/files/kapak-694565de01b3e61208.40013120.webp | Bekliyor |
| 16 | SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-cover.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_9.jpg | Bekliyor |
| 17 | SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-cover.webp` | flowcomm, CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Dolmabah%C3%A7e_Mosque_and_S%C3%BCzer_Plaza_in_the_background.jpg | https://commons.wikimedia.org/wiki/File:Dolmabah%C3%A7e_Mosque_and_S%C3%BCzer_Plaza_in_the_background.jpg | Serbest lisans (CC BY 2.0), kaynak yazılı |
| 18 | TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-cover.webp` | Tiba | https://tiba.com.tr/projeler/inanlar-insaat-a-s-2/ | https://tiba.com.tr/wp-content/uploads/2014/11/inanlar-03.jpg | Bekliyor |
| 19 | Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-cover.webp` | PMO | https://www.pmo.com.tr/torun-tower | https://static.wixstatic.com/media/e69d95_df9490392633431e9b86d04d4816e46e~mv2_d_1500_1726_s_2.jpg | Bekliyor |
| 20 | VADİSTANBUL PROJESİ 3. ETABI | `public/img/projects/vadistanbul/vadistanbul-cover.webp` | Artaş Holding | https://www.artasholding.com/tr-tr/proje/vadistanbul-bulvar/ | https://www.artasholding.com/Images/Photos/c92f0a19-3bee-4ef8-8463-923bf19abe3f.jpg | Bekliyor |
| 21 | VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-cover.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/17f63e1e-3f9f-40ac-8c39-17a67ae24000.jpg?v=FJO_6-T3sKzoC1ZQr8OQw95qnRKSDiSE-yPGF26xWZk | Bekliyor |
| 22 | YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-cover.webp` | Yasmin Bodrum Resort | https://yasminbodrum.com/ | https://yasminbodrum.com/img/e30bb8ae6255c3da.webp | Bekliyor |
| 23 | ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-cover.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/0/5/9/179508-1-eng-GB/1d142b21ebb1-73657609_4K.jpg | Bekliyor |

Notlar:

- Büyükyalı, Vadistanbul, Gaziantep Şehir Hastanesi, Referans Beşiktaş ve
  Kartal Loca görsellerinin sahipleri yukarıdaki hero tablosuyla aynı; tek
  yazıyla ikisi için birden izin istenebilir.
- Çırağan'ın üç projesi (Otel Renovasyonu, Executive Hall, Caviar Bar) için
  Kempinski'nin basın görselleri kullanıldı; üçü de otelin genel görünümü,
  ilgili salon/restoranın kendisi değil.
- Akbatı, Referans Beşiktaş, Kartal Loca 1 ve Nidapark
  kapakları render, gerçek fotoğraf değil.
- Kapak bulunamayan ya da doğru proje olduğundan emin olunamayan projelerde
  eski görsel duruyor: M1 Real AVM (hangi şehirdeki AVM olduğu belirsiz),
  Acarkent (bulunan villa Sayda'nın yaptığı B Mahallesi villası olmayabilir),
  Isısan Buderus, Omsan dışındaki endüstriyel projeler, Kumköy/Atik Ali Paşa,
  Mis Süt, Kasaba, İstanbul Projesi, Referans Güneşli, Levent Print Center, Dimaş Antrepo,
  Oyakkent, Kiler Beşiktaş satış ofisi.


# Proje galerisi görselleri — lisans / izin takibi

Proje detay sayfalarındaki "Proje Fotoğrafları" galerisine, fotoğrafı olmayan
ya da tek fotoğrafı olan projeler için dışarıdan eklenen 92 görsel.
Dosyalar `-ext-NN.webp` adıyla proje klasöründe; galeride Sayda'nın kendi
fotoğraflarından önce gösteriliyor. Her görselin sahibi, görsel büyütülünce
sağ altta yazıyor (`projects.json` → `galleryCredits`).

Wikimedia Commons görselleri (Süzer Plaza, Gaziantep Şehir Hastanesi)
serbest lisanslı; kaynak (yazar + lisans) yazıldığı sürece kullanılabilir.
Diğerleri için **izin alınması gerekiyor.** İzin alınamayan bir görsel için
dosyayı silip projenin `gallery` ve `galleryCredits` alanlarından çıkarmak
yeterli.

| Proje | Dosya | Görselin sahibi | Kaynak sayfa | Orijinal dosya | İzin |
|-------|-------|-----------------|--------------|----------------|------|
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-01.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_7316.JPG | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-02.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_6242.jpg | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-03.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_5859.JPG | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-04.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/images/uploads/Projects/Chapman_Taylor_B%C3%BCy%C3%BCkyal%C4%B1_Istanbul_3.jpg | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-05.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_6478.JPG | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-06.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_6171_210224_163458.JPG | Bekliyor |
| BÜYÜK YALI PROJESİ (KONUT RESİDANCE) | `public/img/projects/buyukyali/buyukyali-ext-07.webp` | Chapman Taylor | https://www.chapmantaylor.com/projects/buyukyali | https://chapman-taylor.transforms.svdcdn.com/production/uploads/Buyukyali_2021_L_K_6508_210224_164321.JPG | Bekliyor |
| REFERANS BEŞİKTAŞ PROJESİ İNCE İŞLERİ BİZ YAPIYORUZ | `public/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga-ext-01.webp` | Kiler GYO | https://www.referansbesiktas.com/ | https://www.referansbesiktas.com/images/dogal-ayricalik.jpg | Bekliyor |
| REFERANS BEŞİKTAŞ PROJESİ İNCE İŞLERİ BİZ YAPIYORUZ | `public/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga-ext-02.webp` | Kiler GYO | https://www.referansbesiktas.com/ | https://www.referansbesiktas.com/images/dogal-olarak.jpg | Bekliyor |
| REFERANS BEŞİKTAŞ PROJESİ İNCE İŞLERİ BİZ YAPIYORUZ | `public/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga-ext-03.webp` | Kiler GYO | https://www.referansbesiktas.com/ | https://www.referansbesiktas.com/images/istanbulun-kalbinde.jpg | Bekliyor |
| REFERANS BEŞİKTAŞ PROJESİ İNCE İŞLERİ BİZ YAPIYORUZ | `public/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga-ext-04.webp` | Kiler GYO | https://www.referansbesiktas.com/ | https://www.referansbesiktas.com/images/metre-img1.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-01.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img2-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-02.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img3-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-03.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img4-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-04.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img5-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-05.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img6-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-ext-06.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img7-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-01.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img1-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-02.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img2-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-03.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img3-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-04.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img4-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-05.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img5-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-06.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img6-h.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 2. ETAP | `public/img/projects/referans-kartal-loca-2/referans-kartal-loca-2-ext-07.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | https://referanskartalloca.com.tr/wp-content/themes/referanskartalloca/img/gallery/img7-h.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-01.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/home-slider/1.png | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-02.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/dis-mekan/nidapark_istinye_vadi.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-03.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/dis-mekan/4.png | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-04.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/dis-mekan/9.png | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-05.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/ic-mekan/ic-01.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-06.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/ic-mekan/ic-03.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-07.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/ic-mekan/3.png | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-08.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/sosyal-alanlar/sm-01.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-09.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/sosyal-alanlar/sm-03.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-10.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/sosyal-alanlar/sm-04.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-ext-11.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/sosyal-alanlar/sm-05.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-01.webp` | Torunlar GYO | https://www.torunlargyo.com.tr/torun-tower | https://www.torunlargyo.com.tr/Content/upload/Torunlar_Tower_Aci02_Baski_A.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-02.webp` | Torunlar GYO | https://www.torunlargyo.com.tr/torun-tower | https://www.torunlargyo.com.tr/Content/upload/Torunlar_Tower_Aci06_Baski_D.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-03.webp` | Torunlar GYO | https://www.torunlargyo.com.tr/torun-tower | https://www.torunlargyo.com.tr/Content/upload/Torunlar_Tower_Aci05_Baski_D.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-04.webp` | Torunlar GYO | https://www.torunlargyo.com.tr/torun-tower | https://www.torunlargyo.com.tr/Content/upload/torunlar_towers_lobby_rev_C2_00.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-05.webp` | Torunlar GYO | https://www.torunlargyo.com.tr/torun-tower | https://www.torunlargyo.com.tr/Content/upload/torunlar_towers_lobby_rev_C2_02.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-06.webp` | PMO | https://www.pmo.com.tr/torun-tower | https://static.wixstatic.com/media/e69d95_44878f0e6ce34008824aa11e03cfc4be~mv2_d_2022_2835_s_2.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-ext-07.webp` | PMO | https://www.pmo.com.tr/torun-tower | https://static.wixstatic.com/media/e69d95_fcb949bdda164624acbd036c2ae1f7ef~mv2_d_1600_2400_s_2.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-01.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/8/6/2/182688-1-eng-GB/be9effafb8eb-73657865_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-02.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/4/7/2/182748-1-eng-GB/62f202cb7086-73657869_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-03.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/0/8/2/182808-1-eng-GB/30b91719e3ba-73657863_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-04.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/3/8/2/182838-1-eng-GB/76ccfbc3da9a-73657875_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-05.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/2/9/2/182928-1-eng-GB/8704fc6ed905-73657871_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-06.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/5/6/9/259657-1-eng-GB/958a519158c5-74934973_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-07.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/7/7/9/259777-1-eng-GB/e84f1ec739f9-74934981_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-08.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/9/7/3/16423797-1-eng-GB/da2d880ffba1-80352019_4K.jpg | Bekliyor |
| EXUCİTİVE HALL PROJESİ | `public/img/projects/executive-hall/executive-hall-ext-09.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/1/7/3/16423717-1-eng-GB/ad051cae29b1-80352015_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-01.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/1/2/2/9/1799221-1-eng-GB/7efc5b9f9837-75516046_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-02.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/1/4/3/9/1799341-1-eng-GB/9ec88ade96ad-75516054_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-03.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/0/2/0/1/301020-1-eng-GB/253c536990ec-74387993_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-04.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/2/8/1/3/1673182-1-eng-GB/ec7536c3ea9b-75386756_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-05.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/5/3/2/182358-1-eng-GB/f90cc118dcae-73657645_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-06.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/4/0/3/183048-1-eng-GB/8bf688e97068-73657805_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-07.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/6/2/2/182268-1-eng-GB/81cb00391789-73657639_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-08.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace | https://www.kempinski.com/var/site/storage/images/4/8/3/4/18904384-2-eng-GB/e4a978595e1a-83920097_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-09.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace | https://www.kempinski.com/var/site/storage/images/0/7/2/7/19377270-1-eng-GB/78e31c2bac31-90976226_4K.jpg | Bekliyor |
| CAVİAR BAR VE RESTAURANT PROJESİ | `public/img/projects/caviar-bar-restaurant/caviar-bar-restaurant-ext-10.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace | https://www.kempinski.com/var/site/storage/images/2/0/3/0/1690302-1-eng-GB/a6563b88bd3a-75386206_4K.jpg | Bekliyor |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-01.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2259.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-02.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2262.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-03.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2265.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-04.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2268.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-05.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2270.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-06.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2273.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-07.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2276.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-08.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2261.jpg | — | Serbest lisans, kaynak yazılı |
| GAZİANTEP ŞEHİR HASTANESİ | `public/img/projects/gaziantep-sehir-hastanesi/gaziantep-sehir-hastanesi-ext-09.webp` | TPF | https://tpf.eu/node/186 | https://tpf.eu/sites/default/files/styles/w1800/public/2022-04/BhCHrIhQ.jpg?itok=3RSh9uMX | Bekliyor |
| Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-ext-01.webp` | Meridiam | https://www.meridiam.com/assets/gaziantep-hospital-turkey/ | https://www.meridiam.com/wp-content/uploads/2023/09/Gaziantep-GSHDRONE14.jpg | Bekliyor |
| Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-ext-02.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2262.jpg | — | Serbest lisans, kaynak yazılı |
| Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-ext-03.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2268.jpg | — | Serbest lisans, kaynak yazılı |
| Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-ext-04.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2273.jpg | — | Serbest lisans, kaynak yazılı |
| Gaziantep Entegre Sağlık Kampüsü Projesi | `public/img/projects/gaziantep-entegre-saglik-kampusu/gaziantep-entegre-saglik-kampusu-ext-05.webp` | YG01, CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Gaziantep_City_Hospital.IMG_2261.jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-01.webp` | Mimar77, CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Suzer_2.jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-02.webp` | Matti Blume, CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Suzer_Plaza,_Istanbul_(P1100211).jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-03.webp` | Николай Максимович, CC BY 3.0 | https://commons.wikimedia.org/wiki/File:S%C3%BCzer_Plaza,_Istanbul,_Turkey_-_panoramio.jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-04.webp` | Francesco Bini, CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Veduta_dal_bosforo,_moschea_di_Dolmabah%C3%A7e_e_grattacielo_di_S%C3%BCzer_Plaza_Ritz-Carlton.jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-05.webp` | TheRunnerUp, CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:2014-04-12_Dolmabah%C3%A7e-Palast_Hotel_Ritz-Carlton.jpg | — | Serbest lisans, kaynak yazılı |
| SÜZER PLAZA OFİS PROJESİ | `public/img/projects/suzer-plaza-ofis/suzer-plaza-ofis-ext-06.webp` | Maurice Flesier, CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:S%C3%BCzer_Plaza.jpg | — | Serbest lisans, kaynak yazılı |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-01.webp` | Anel Grup | https://anelgroup.com/tr/project/casaba-is-koray-villalari/ | https://anelgroup.com/wp-content/uploads/2017/07/IMG_5576_EB.jpg | Bekliyor |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-02.webp` | Anel Grup | https://anelgroup.com/tr/project/casaba-is-koray-villalari/ | https://anelgroup.com/wp-content/uploads/2017/07/14x_EB.jpg | Bekliyor |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-03.webp` | Anel Grup | https://anelgroup.com/tr/project/casaba-is-koray-villalari/ | https://anelgroup.com/wp-content/uploads/2017/07/20b_EB.jpg | Bekliyor |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-04.webp` | Anel Grup | https://anelgroup.com/tr/project/casaba-is-koray-villalari/ | https://anelgroup.com/wp-content/uploads/2017/07/KASABA33_EB.jpg | Bekliyor |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-05.webp` | Anel Grup | https://anelgroup.com/tr/project/casaba-is-koray-villalari/ | https://anelgroup.com/wp-content/uploads/2017/07/KASABA43_EB.jpg | Bekliyor |
| KASABA KONUT - RESIDANCE PROJESİ | `public/img/projects/kasaba-konut-residance/kasaba-konut-residance-ext-06.webp` | Koray | https://koray.com/tr/kasaba | https://koray.com/storage/projects/01JRTSX2TJ83BXXDH602NFSKE6.jpg | Bekliyor |
| İSTANBUL PROJESİ | `public/img/projects/istanbul-projesi/istanbul-projesi-ext-01.webp` | Koray GYO | https://koraygyo.com/tr/istanbul-istanbul | https://koraygyo.com/storage/l/EljaSqcZLrp3Z87Rd6fjIbtajqXsRT2GiA1lCcjo.webp | Bekliyor |
| İSTANBUL PROJESİ | `public/img/projects/istanbul-projesi/istanbul-projesi-ext-02.webp` | Koray GYO | https://koraygyo.com/tr/istanbul-istanbul | https://koraygyo.com/storage/l/HN4y1clXSnhty2Z2IYyEqIFg0oHqUNwYwG7G2uPP.webp | Bekliyor |
| İSTANBUL PROJESİ | `public/img/projects/istanbul-projesi/istanbul-projesi-ext-03.webp` | Koray GYO | https://koraygyo.com/tr/istanbul-istanbul | https://koraygyo.com/storage/l/E0n6s1IIPqLidxaFK5kgUuadZMzkY2HYZxBotr5s.webp | Bekliyor |
| KİLER BEŞİKTAŞ ABBASAĞA KONUT PROJESİ SATIŞ OFİSİ BİZ YAPIYORUZ | `public/img/projects/kiler-besiktas-abbasaga-satis-ofisi/kiler-besiktas-abbasaga-satis-ofisi-ext-01.webp` | Odak Dergisi | https://odakdergisi2.com/1866-yilinda-aziziye-karakolu-ismiyle-insa-edilen-tarihi-bina-kile-gyonun-konut-pazarlama-ofisi-yapilmis/ | https://odakdergisi2.com/wp-content/uploads/2023/01/Besiktas-taki-meshur-Suslu-karakol-kimin-ofisi-oldu-273513.jpg | Bekliyor |
| KİLER BEŞİKTAŞ ABBASAĞA KONUT PROJESİ SATIŞ OFİSİ BİZ YAPIYORUZ | `public/img/projects/kiler-besiktas-abbasaga-satis-ofisi/kiler-besiktas-abbasaga-satis-ofisi-ext-02.webp` | Gayrettepe Emlak | https://gayrettepeemlak.com.tr/blog/suslu-karakol | https://gayrettepeemlak.com.tr/blog/uploads/images/image_750x415_637abf43e5f68.jpg | Bekliyor |

Notlar:

- Executive Hall ve Caviar Bar galerilerinde Çırağan'ın toplantı salonu ve
  restoran/bar görselleri var; hangisinin tam olarak Executive Hall ya da
  Caviar Bar olduğu doğrulanamadı (galeri "temsili" notuyla gösteriliyor).
- Referans Kartal Loca 1. ve 2. etap galerileri aynı proje görsellerinden
  oluşuyor.
- Nidapark galerisinde dış cephe renderlarının yanında daire ve ortak alan
  iç mekânları da var (Sayda'nın işi satış ofisi ince işleri).
- Galerisi hâlâ boş kalan projeler: Kumköy / Atik Ali Paşa Oteli, Mis Süt,
  Acarkent (doğru projeye ait görsel bulunamadı).


# Kapak güncellemeleri — 2026-10-18

Proje detay sayfalarının üst bandında görselin tam genişlikte net durması
için kapakların en az ~1400px genişliğinde olması gerekiyor. Aşağıdaki
projelerin kapakları daha büyük görsellerle değiştirildi; **bu satırlar
yukarıdaki kapak tablosunda aynı projeye ait satırların yerine geçer.**

| Proje | Dosya | Görselin sahibi | Kaynak sayfa | Orijinal dosya | İzin |
|-------|-------|-----------------|--------------|----------------|------|
| CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-cover.webp` | Mutlu İnşaat | https://mutluinsaat.com/Projeler/tamamlanan-projeler/Capital-Tower | https://mutluinsaat.com/img/proje/capital-tower.jpg?v=1 | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-cover.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/orta_atlas_2.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-cover.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/1919x600/3dfbf83277514b1bb341bf3c58e192f7.jpg | Bekliyor |
| Torun Tower Ofis Projesi | `public/img/projects/torun-tower-ofis/torun-tower-ofis-cover.webp` | PMO | https://www.pmo.com.tr/torun-tower | https://static.wixstatic.com/media/e69d95_df9490392633431e9b86d04d4816e46e~mv2_d_1500_1726_s_2.jpg | Bekliyor |
| M1 REAL AVM GENİŞLETME PROJESİ | `public/img/projects/m1-real-avm/m1-real-avm-cover.webp` | Fiba Commercial Properties | https://fibacp.com.tr/portfolio/m1-adana-avm/ | https://fibacp.com.tr/wp-content/uploads/2026/08/M1-ADANA-scaled.jpg | Bekliyor |
| KİLER BEŞİKTAŞ ABBASAĞA KONUT PROJESİ SATIŞ OFİSİ BİZ YAPIYORUZ | `public/img/projects/kiler-besiktas-abbasaga-satis-ofisi/kiler-besiktas-abbasaga-satis-ofisi-cover.webp` | Kültür Envanteri | https://kulturenvanteri.com/yer/suslu-karakol/ | https://cdn.kulturenvanteri.com/wp-content/uploads/2023/01/Suslu-Karakol.jpg | Bekliyor |
| DİMAŞ ANTREPO PROJESİ | `public/img/projects/dimas-antrepo/dimas-antrepo-cover.webp` | DEA Yapı | https://deayapi.com/projeler/dimas-tepeoren-lojistik-antrepo-anahtar-teslimi-i-nsaati/ | https://deayapi.com/wp-content/uploads/2026/04/b-dimas-tepeoren-lojistik-antrepo-insaati-16123491296117.jpg | Bekliyor |
| REFERANS KARTAL LOCA PROJESİ 1. ETAP | `public/img/projects/referans-kartal-loca-1/referans-kartal-loca-1-cover.webp` | Kiler GYO | https://referanskartalloca.com.tr/ | 2. etapla aynı gece görseli (banner-1920x800px-design-min.jpg) | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-cover.webp` | Tiba | https://tiba.com.tr/projeler/inanlar-insaat-a-s-2/ | https://tiba.com.tr/wp-content/uploads/2014/11/inanlar-03.jpg | Bekliyor |
| NİDAPARK İSTİNYE SATIŞ OFİSİ PROJESİ | `public/img/projects/nidapark-istinye-satis-ofisi/nidapark-istinye-satis-ofisi-cover.webp` | Nidapark İstinye | https://www.nidaparkistinye.com/tr | https://www.nidaparkistinye.com/assets/img/dis-mekan/nidapark_istinye_vadi.jpg | Bekliyor |

Notlar:

- M1 Real AVM: kapak M1 **Adana** AVM'ye ait. Sayda'nın kaydındaki "AVM ilave
  J, K ve L Blokları Kaba İşleri" ile Ran İnşaat'ın "M1 Adana AVM Yenileme ve
  Genişletme — kaba yapı" işi örtüşüyor, ama hangi M1 olduğu Sayda'ya teyit
  ettirilmeli.
- Kiler satış ofisi: Süslü Karakol fotoğrafının sağ altındaki fotoğrafçı
  imzası (Caner Cangül) kırpıldı; izin istenirken fotoğrafçı da belirtilmeli.
- Dimaş Antrepo: DEA Yapı'nın "Dimaş Tepeören Lojistik Antrepo" sayfasından.
- Hâlâ 1400px altı kapağı olan projelerde (Omsan, İstanbul Projesi, Referans
  Güneşli, Oyakkent, Levent Print Center, Isısan Buderus, Mis Süt, Kumköy,
  Acarkent) üst bant görseli bulanık bir arka plan olarak gösteriyor; daha
  büyük görsel bulunursa kendiliğinden net, tam genişlik görünüme geçer.


# Yüksek çözünürlüklü galeri görselleri — 2026-10-18

Eski siteden gelen proje fotoğraflarının neredeyse hepsi 500px (Referans
Güneşli 222px, M1 322px); orijinalleri ne eski site klasöründe ne Wayback
arşivinde var. Bu yüzden 95 yüksek çözünürlüklü görsel `-hd-NN.webp`
adıyla galerilere eklendi. Galeri artık ikiye ayrılıyor: 700px ve üstü
görseller büyük mozaikte, Sayda'nın kendi 500px arşiv fotoğrafları altında
"Arşiv Fotoğrafları" başlığıyla küçük (net kalan) kutularda.

Referans Güneşli'nin 222px'lik eski görselleri, aynı render'ların 1000px
halleri bulunduğu için galeriden çıkarıldı (dosyalar `public/img/projects/
referans-gunesli/` altında duruyor). Güneşli'nin kapağı da 1000px'lik
render oldu.

| Proje | Dosya | Görselin sahibi | Kaynak sayfa | Orijinal dosya | İzin |
|-------|-------|-----------------|--------------|----------------|------|
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-01.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_9.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-02.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_1_1.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-03.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_3.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-04.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_4.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-05.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_5.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-06.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_6.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-07.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_7.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-08.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_8.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-09.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_10.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-10.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_11.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-11.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_12.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-12.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_14.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-13.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_16.jpg | Bekliyor |
| SULTANBEYLİ AVM & OFİS PROJESİ (ATLAS PARK AVM) | `public/img/projects/atlas-park-avm-ofis/atlas-park-avm-ofis-hd-14.webp` | Ergün Mimarlık | https://www.ergunmimarlik.com.tr/proje-detay/AtlasAVM | https://www.ergunmimarlik.com.tr/upload/atlas_17.jpg | Bekliyor |
| CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-hd-01.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/27831-capital-tower.jpg | Bekliyor |
| CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-hd-02.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/67556-capital-tower-basinekspres.jpg | Bekliyor |
| CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-hd-03.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/22353-basinekspres-plaza.jpg | Bekliyor |
| CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-hd-04.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/31817-capital-tower-plaza.jpg | Bekliyor |
| CAPİTAL TOWER 10. KAT OFİSLERİ | `public/img/projects/capital-tower-ofis/capital-tower-ofis-hd-05.webp` | Mutlu İnşaat | https://mutluinsaat.com/Projeler/tamamlanan-projeler/Capital-Tower | https://mutluinsaat.com/img/proje/capital-tower.jpg?v=1 | Bekliyor |
| CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-hd-01.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/27831-capital-tower.jpg | Bekliyor |
| CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-hd-02.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/22353-basinekspres-plaza.jpg | Bekliyor |
| CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-hd-03.webp` | Miltaş İnşaat | https://www.miltasinsaat.com.tr/urun/Capital-Tower | https://www.miltasinsaat.com.tr/upload/31817-capital-tower-plaza.jpg | Bekliyor |
| CAPİTAL TOWER SPOR KOMPLEKSİ | `public/img/projects/capital-tower-spor-kompleksi/capital-tower-spor-kompleksi-hd-04.webp` | Mutlu İnşaat | https://mutluinsaat.com/Projeler/tamamlanan-projeler/Capital-Tower | https://mutluinsaat.com/img/proje/capital-tower.jpg | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-02.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-8114632dd928d275a4.34191297.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-03.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-0489632dd902262f81.52425546.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-04.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-15717632dd904c3e547.55088310.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-05.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-84262632dd907eba478.48028195.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-06.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-9872632dd90d98e145.71697795.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-07.webp` | Rönesans | https://ronesans.com/projeler/gayrimenkul-grubu/samsun-piazza-alisveris-ve-yasam-merkezi | https://ronesans.com/content/files/samsun-pia-3663632dd910ac5d44.32193149.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-08.webp` | Rönesans Gayrimenkul | https://rgy.com.tr/portfoy/samsun-piazza | https://rgy.com.tr/content/files/kapak-2962765de01c2b75ba6.39100467.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-09.webp` | Rönesans Gayrimenkul | https://rgy.com.tr/portfoy/samsun-piazza | https://rgy.com.tr/content/files/3-921165de01ed679ec6.98819690.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-10.webp` | Rönesans Gayrimenkul | https://rgy.com.tr/portfoy/samsun-piazza | https://rgy.com.tr/content/files/yukle-5605765de0238d39bb7.07801714.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-11.webp` | Rönesans Gayrimenkul | https://rgy.com.tr/portfoy/samsun-piazza | https://rgy.com.tr/content/files/4-3576065de01f21e46b3.96490507.webp | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-12.webp` | Piazza AVM | https://samsunpiazzaavm.com/tr/hakkimizda | https://samsunpiazzaavm.com/storage/samsunpiazzaavm/gallery/June2024/samsun-piazza-1.jpg | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-13.webp` | Piazza AVM | https://samsunpiazzaavm.com/tr/hakkimizda | https://samsunpiazzaavm.com/storage/samsunpiazzaavm/gallery/June2024/samsun-piazza-2.jpg | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-14.webp` | Piazza AVM | https://samsunpiazzaavm.com/tr/hakkimizda | https://samsunpiazzaavm.com/storage/samsunpiazzaavm/gallery/June2024/samsun-piazza-3.jpg | Bekliyor |
| RÖNESANS SAMSUN AVM PROJESİ (PİAZZA AVM) | `public/img/projects/piazza-avm-anamon-otel/piazza-avm-anamon-otel-hd-15.webp` | Piazza AVM | https://samsunpiazzaavm.com/tr/hakkimizda | https://samsunpiazzaavm.com/storage/samsunpiazzaavm/gallery/June2024/samsun-piazza-4.jpg | Bekliyor |
| AKBATI PROJESİ | `public/img/projects/akbati-avm-konut/akbati-avm-konut-hd-01.webp` | Birleşim | https://www.birlesim.com/tr/projelerimiz/is-ve-yasam-merkezleri/akbati-residence | https://www.birlesim.com/files/projeler/avm/tm/bati/akbati_cover.jpg | Bekliyor |
| AKBATI PROJESİ | `public/img/projects/akbati-avm-konut/akbati-avm-konut-hd-02.webp` | yeniemlak.com | https://www.yeniemlak.com/akbati-avm-residence-projesi | https://www.yeniemlak.com/uploads/1/3/2/akbati-avm-residence-projesi-istanbul-esenyurt-1094-132009.png | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-01.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/17f63e1e-3f9f-40ac-8c39-17a67ae24000.jpg?v=FJO_6-T3sKzoC1ZQr8OQw95qnRKSDiSE-yPGF26xWZk | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-02.webp` | Varyap | https://www.varyap.com/proje/varyap-meridian | https://www.varyap.com/images/bg/w10.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-03.webp` | Varyap | https://www.varyap.com/proje/varyap-meridian | https://www.varyap.com/images/projects/varyap-meridian.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-04.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/dd44cb62-5782-4d55-832f-dbf3eae1d0d6.jpeg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-05.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/17f63e1e-3f9f-40ac-8c39-17a67ae24000.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-06.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/fb23a358-ef9b-4b22-8358-d4a30c0d8dd7.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-07.webp` | BGZ Holding | https://www.bgzholding.com.tr/en/project/varyap-meridyen/ | https://www.bgzholding.com.tr/Images/Photos/05186e3f-f6f4-4ef5-94d8-baf06dcdd2c5.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-08.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/2000x489/912102f494d24232859e75a43103d3c0.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-09.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/1919x440/8738503633e34fdd9dac70200f99800c.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-10.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/1919x600/8fa6052ccf7e41a4b53c5afbdec0790c.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-11.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/1919x600/2b745bdb30e545f5a044f8da21606389.jpg | Bekliyor |
| VARYAP MERİDİAN PROJESİ | `public/img/projects/varyap-meridien-konut/varyap-meridien-konut-hd-12.webp` | Emlak Konut | https://www.emlakkonut.com.tr/en-US/varyap-meridian-en | https://www.emlakkonut.com.tr/images/uploads/1919x600/ad99b9064f9f42afbf4a0cc51d2b2ffa.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-01.webp` | Arden Yapı | https://www.ardenyapiinsaat.com.tr/inanlar-insaat-as-terrace-bahce | https://www.ardenyapiinsaat.com.tr/public/upload/images/gallery/full-project-4-3345.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-02.webp` | Tiba | https://tiba.com.tr/projeler/inanlar-insaat-a-s-2/ | https://tiba.com.tr/wp-content/uploads/2014/11/inanlar-01.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-03.webp` | Tiba | https://tiba.com.tr/projeler/inanlar-insaat-a-s-2/ | https://tiba.com.tr/wp-content/uploads/2014/11/inanlar-02.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-04.webp` | Arden Yapı | https://www.ardenyapiinsaat.com.tr/inanlar-insaat-as-terrace-bahce | https://www.ardenyapiinsaat.com.tr/public/upload/images/project/full-project-2-6178-1440x900.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-05.webp` | Arden Yapı | https://www.ardenyapiinsaat.com.tr/inanlar-insaat-as-terrace-bahce | https://www.ardenyapiinsaat.com.tr/public/upload/images/gallery/full-project-5-2740.jpg | Bekliyor |
| TERRACE BAHCE PROJESİ | `public/img/projects/terrace-bahce-konut/terrace-bahce-konut-hd-06.webp` | Arden Yapı | https://www.ardenyapiinsaat.com.tr/inanlar-insaat-as-terrace-bahce | https://www.ardenyapiinsaat.com.tr/public/upload/images/gallery/full-project-1-3550.jpg | Bekliyor |
| OMSAN TUZLA LOJİSTİK MERKEZİ | `public/img/projects/omsan-depo-lojistik-merkezi/omsan-depo-lojistik-merkezi-hd-01.webp` | Akyürek Elmas Mimarlık | https://www.caglaakyurek.com/portfolio/omsan-lojistik-merkezi/ | https://www.caglaakyurek.com/img/cagla-akyurek-mimarlik-omsan-lojistik-merkezi-0-900x602.jpg | Bekliyor |
| OMSAN TUZLA LOJİSTİK MERKEZİ | `public/img/projects/omsan-depo-lojistik-merkezi/omsan-depo-lojistik-merkezi-hd-02.webp` | Akyürek Elmas Mimarlık | https://www.caglaakyurek.com/portfolio/omsan-lojistik-merkezi/ | https://www.caglaakyurek.com/img/cagla-akyurek-mimarlik-omsan-lojistik-merkezi-1.jpg | Bekliyor |
| OMSAN TUZLA LOJİSTİK MERKEZİ | `public/img/projects/omsan-depo-lojistik-merkezi/omsan-depo-lojistik-merkezi-hd-03.webp` | Akyürek Elmas Mimarlık | https://www.caglaakyurek.com/portfolio/omsan-lojistik-merkezi/ | https://www.caglaakyurek.com/img/cagla-akyurek-mimarlik-omsan-lojistik-merkezi-3.jpg | Bekliyor |
| OMSAN TUZLA LOJİSTİK MERKEZİ | `public/img/projects/omsan-depo-lojistik-merkezi/omsan-depo-lojistik-merkezi-hd-04.webp` | Akyürek Elmas Mimarlık | https://www.caglaakyurek.com/portfolio/omsan-lojistik-merkezi/ | https://www.caglaakyurek.com/img/cagla-akyurek-mimarlik-omsan-lojistik-merkezi-2.jpg | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-01.webp` | Yasmin Bodrum Resort | https://yasminbodrum.com/ | https://yasminbodrum.com/img/ed5e71160fe042b0.webp | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-02.webp` | Yasmin Bodrum Resort | https://yasminbodrum.com/ | https://yasminbodrum.com/img/e6dde307f4f24af9.webp | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-03.webp` | Yasmin Bodrum Resort | https://yasminbodrum.com/ | https://yasminbodrum.com/img/c89033cf6dd6c405.webp | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-04.webp` | Yasmin Bodrum Resort | https://yasminbodrum.com/ | https://yasminbodrum.com/img/6d6f159209d774ff.webp | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-05.webp` | Yasmin Bodrum Resort | https://yasminresort-turgutreis.mybodrumhotels.com/tr/ | https://yasminresort-turgutreis.mybodrumhotels.com/img/bg/125706.JPEG | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-06.webp` | Yasmin Bodrum Resort | https://yasminresort-turgutreis.mybodrumhotels.com/tr/ | https://yasminresort-turgutreis.mybodrumhotels.com/data/Images/OriginalPhoto/18280/1828072/1828072940/bodrum-yasmin-bodrum-resort-image-87.JPEG | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-07.webp` | Yasmin Bodrum Resort | https://yasminresort-turgutreis.mybodrumhotels.com/tr/ | https://yasminresort-turgutreis.mybodrumhotels.com/data/Images/OriginalPhoto/18280/1828072/1828072433/bodrum-yasmin-bodrum-resort-image-83.JPEG | Bekliyor |
| YASMİN RESORT HOTEL | `public/img/projects/yasmin-resort-hotel/yasmin-resort-hotel-hd-08.webp` | Yasmin Bodrum Resort | https://yasminresort-turgutreis.mybodrumhotels.com/tr/ | https://yasminresort-turgutreis.mybodrumhotels.com/data/Images/OriginalPhoto/17394/1739429/1739429559/bodrum-yasmin-bodrum-resort-image-31.JPEG | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-01.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/9/9/1/16421997-1-eng-GB/e0755ba91296-80352851_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-02.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/3/0/2/16422037-1-eng-GB/239975ddf049-80352843_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-03.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/1/1/9/179118-1-eng-GB/8be20947a472-73657673_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-04.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/0/2/9/259207-1-eng-GB/c0e45d3acd59-74934965_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-05.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/8/7/8/178788-1-eng-GB/c1d21be2e26d-73657675_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-06.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/9/5/9/179598-1-eng-GB/d53f395da035-73657615_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-07.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/7/9/2/9/259297-1-eng-GB/21c84a781651-74934961_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-08.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/6/5/9/179568-1-eng-GB/7f3ee105c47f-73657603_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-09.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/0/2/9/179208-1-eng-GB/aafb5cdda5fc-73657689_4K.jpg | Bekliyor |
| ÇIRAĞAN OTEL BİNASI RENEVASYON PROJESİ | `public/img/projects/ciragan-otel-renovasyonu/ciragan-otel-renovasyonu-hd-10.webp` | Kempinski | https://www.kempinski.com/en/ciragan-palace/image-gallery | https://www.kempinski.com/var/site/storage/images/8/7/8/8/178878-1-eng-GB/025fefedf317-73657665_4K.jpg | Bekliyor |
| M1 REAL AVM GENİŞLETME PROJESİ | `public/img/projects/m1-real-avm/m1-real-avm-hd-01.webp` | Fiba Commercial Properties | https://fibacp.com.tr/portfolio/m1-adana-avm/ | https://fibacp.com.tr/wp-content/uploads/2026/06/project-m1-adana-avm-before-1400x932.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-01.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_5.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-02.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_7.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-03.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_9.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-04.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-05.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_2.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-06.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_20.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-07.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_19.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-08.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_6.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-09.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_4.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-10.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_8.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-11.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_1.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-12.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_14.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-13.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_12.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-14.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_17.jpg | Bekliyor |
| REFERANS GÜNEŞLİ PROJESİ | `public/img/projects/referans-gunesli/referans-gunesli-hd-15.webp` | Projede Fırsat | https://www.projedefirsat.com/referans-gunesli | https://projedefirsat.s3.eu-central-1.amazonaws.com/proje/default/626/referans-gunesli-foto_15.jpg | Bekliyor |

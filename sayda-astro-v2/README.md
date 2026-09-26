# Sayda İnşaat — Astro (tüm sayfalar)

Sayfalar React bileşeni olarak yazıldı; Astro'da `client:only="react"` ile çalışır.

## Kurulum
```
npm create astro@latest sayda
cd sayda
npx astro add react
```
Sonra bu klasördeki `src/` ve `public/` içeriğini projeye kopyalayın ve `npm run dev`.

## Sayfalar
- / → AnaSayfa
- /kurumsal, /hakkimizda, /hakkimizda/vizyon-misyon, /belgeler
- /hizmetler (#kat-karsiligi-insaat vb. ile hizmet seçilir)
- /kentsel-donusum
- /projeler, /proje-detay#<proje-slug>
- /haberler, /haber-detay#<haber-slug>
- /teklif-al

## Notlar
- Tüm stiller bileşenlerde satır içi; hover efektleri her bileşenin başındaki <style> etiketinde.
- Görseller şu an sayda-chi.vercel.app üzerinden çekiliyor; `public/img` altına alıp yolları güncelleyebilirsiniz.
- Teklif formu şimdilik gönderim yapmıyor — `TeklifAl.jsx` içindeki `submit` fonksiyonuna API/form servisini bağlayın.
- Proje/haber detayları hash (#slug) ile çalışıyor. İleride SEO için `[slug].astro` dinamik route'a çevrilebilir.

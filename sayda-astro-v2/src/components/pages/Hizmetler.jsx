import React from 'react';

class DCLogic extends React.Component {}

class Hizmetler extends DCLogic {
  state = { menu: null, active: 0 };
  SV = [
    { slug: 'kat-karsiligi-insaat', title: 'Kat Karşılığı İnşaat', img: 'vadistanbul/vadistanbul',
      intro: 'Arsa veya bina sahipleriyle kat karşılığı anlaşma yaparak projenin tamamını üstleniyoruz. Tasarım, ruhsat, inşaat ve teslim süreçlerini eksiksiz yönetiyoruz — siz sadece anahtarınızı teslim alıyorsunuz.',
      quote: 'Arsanızın potansiyelini güvenle geleceğe taşıyoruz.',
      highlights: [['Arsa değerinize değer katar'], ['Tüm süreci biz yönetiriz'], ['Şeffaf ve güvenilir ortaklık'], ['Modern ve nitelikli yapılar']],
      stepsTitle: 'Çalışma Süreci',
      steps: [['Arsa / Bina Değerleme', 'Arsanın imar durumu, tapu analizi ve piyasa değeri incelenir; fizibilite raporu hazırlanır.'], ['Kat Karşılığı Sözleşmesi', 'Noterde resmi sözleşme imzalanır; paylaşım oranları ve teslim tarihleri netleştirilir.'], ['Proje & Ruhsat', 'Mimari ve statik proje, belediye ruhsatı ve tüm izinler Sayda tarafından alınır.'], ['İnşaat & İnce İşler', 'Kaba yapıdan ince işlere, iç mekân bitimine kadar tüm inşaat Sayda ekibiyle yürütülür.'], ['Teslim & İskan', 'İskan belgesi ve anahtarlar, belirlenen paylaşım planına göre sahiplerine teslim edilir.']],
      lists: [{ title: 'Neden Kat Karşılığı?', items: ['Arsa sahipleri için yüksek değer potansiyeli', 'Tüm teknik ve idari süreçlerin profesyonel yönetimi', 'Deneyimli ve güvenilir ekip', 'Zamanında teslimat', 'Modern ve nitelikli yaşam alanları'] }, { title: 'Kapsama Dahil İşler', items: ['Arsa analizi ve fizibilite', 'Mimari & statik proje', 'Belediye ruhsat işlemleri', 'Kaba yapı', 'İnce işler (sıva, şap, seramik)', 'Boya & duvar kağıdı', 'Elektro-mekanik altyapı', 'İskan belgesi temini'] }] },
    { slug: 'alt-muteahhitlik', title: 'Alt Müteahhitlik', img: 'varyap-meridien-konut/varyap-meridien-konut',
      intro: 'Ana yükleniciye bağlı olarak kaba yapı veya ince işlerin profesyonel taşeronluğunu üstleniyoruz. Büyük ölçekli projelerde uzun soluklu iş ortaklıkları kuruyoruz.',
      quote: 'Güçlü iş birlikleri, kalıcı yapılar.',
      stats: [['4,25M+ m²', 'Tamamlanan Alan'], ['14+', 'Büyük Proje'], ['30+', 'Yıl Deneyim']],
      lists: [{ title: 'Uzmanlık Alanları', items: ['Tuğla & gazbeton duvar', 'Sıva & şap', 'Seramik & mermer döşeme', 'Alçı levha asma tavan', 'Boya & kaplama', 'Alçı & kartonpiyer', 'Mantolama', 'Teras & çatı şap'] }, { title: 'Referans İş Ortaklarımız', chips: true, items: ['Kiler GYO', 'Biskon Yapı A.Ş.', 'Özak İnşaat', 'CCN Altyapı', 'Artaş İnvest', 'Rönesans Teknik', 'Akiş GYO', 'Varyap İnşaat', 'Oyak İnşaat'] }],
      noteTitle: 'Detayda kalite, yapıda güven.', noteText: "Kiler GYO, Biskon Yapı, CCN ve Özak gibi Türkiye'nin en büyük inşaat gruplarıyla uzun vadeli iş ortaklığı deneyimi." },
    { slug: 'anahtar-teslim-muteahhitlik', title: 'Anahtar Teslim Müteahhitlik', img: 'oyakkent-konut/oyakkent-konut',
      intro: 'Projelerinizin tüm süreçlerini, tasarımdan teslimata kadar tek bir sorumluluk altında, planlı ve güvenilir şekilde yönetiyoruz. İhtiyaçlarınıza uygun, modern ve sürdürülebilir yapılar üretiyoruz.',
      quote: 'Fikirden gerçeğe, aynı sorumlulukla.',
      highlights: [['Tek Sorumluluk', 'Tüm süreci tek elden yönetiyoruz.'], ['Zamanında Teslim', 'Planlı ve disiplinli ilerliyoruz.'], ['Maliyet Kontrolü', 'Bütçenizi koruyoruz.'], ['Sürdürülebilir Çözümler', 'Geleceğe değer katıyoruz.']],
      stepsTitle: 'Çalışma Sürecimiz',
      steps: [['Ön Fizibilite & Briefing', 'İhtiyaç analizi, bütçe planlaması ve proje kapsamı belirlenir.'], ['Mimari & Mühendislik', 'Mimari, statik, mekanik ve elektrik projeleri hazırlanır.'], ['Ruhsat & İzinler', 'Tüm belediye ve resmi izinler Sayda tarafından takip edilir.'], ['İnşaat & Kalite Kontrol', 'Süreç yönetimi ve sahada günlük denetim yapılır.'], ['Teslim & Garanti', 'İskan belgesiyle birlikte teslim ve bakım desteği sağlanır.']],
      lists: [{ title: 'Proje Türleri', items: ['Konut & rezidans projeleri', 'Ticari yapılar & AVM', 'Ofis & kuleler', 'Sağlık kampüsleri & hastaneler', 'Otel & turizm yapıları', 'Lojistik & depo tesisleri'] }],
      noteTitle: 'Tek muhatap, tam güven.', noteText: "Tasarımdan teslimata tek sözleşme, tek iletişim noktası. Koordinasyon sorunu yok; zaman ve maliyet kontrolü Sayda'da." },
    { slug: 'proje-yonetimi-danismanlik', title: 'Proje Yönetimi & Danışmanlık', img: 'dimas-antrepo/dimas-antrepo-01',
      intro: 'Kendi müteahhidiniz olsa bile projelerinizin her aşamasında uzman gözetimi sağlıyoruz. Bütçe kontrolü, takvim takibi, teknik danışmanlık ve koordinasyonla projelerinizi daha verimli, güvenli ve sürdürülebilir hale getiriyoruz.',
      quote: 'Doğru yönetilen iyi projeler, güvenli yarınlar inşa eder.',
      highlights: [['Planlı Süreç', 'Zamanında teslim'], ['Uzman Kadro', 'Deneyimli ekip'], ['Risk Yönetimi', 'Güvenli süreç'], ['Şeffaf Raporlama', 'Düzenli bilgilendirme']],
      stats: [['%15', 'Ortalama Maliyet Tasarrufu'], ['30+', 'Yıl Saha Deneyimi'], ['%100', 'Şeffaf Yönetim'], ['ISO', '9001 · 14001 · 10002']],
      lists: [{ title: 'Proje Yönetimi', items: ['Proje planlama ve zaman yönetimi', 'Kaynak ve iş gücü koordinasyonu', 'Saha denetimi ve raporlama', 'Tedarikçi ve alt yüklenici yönetimi', 'Risk analizi ve çözüm üretme'] }, { title: 'Teknik Danışmanlık', items: ['Fizibilite ve teknik analiz', 'Bütçe analizi ve maliyet kontrolü', 'İhale dosyası ve teklif değerlendirme', 'Yapı denetim koordinasyonu', 'Mevzuat ve ruhsat süreçlerinde danışmanlık'] }],
      noteTitle: 'Bağımsız bakış açısı.', noteText: 'Müteahhidinizden bağımsız teknik gözetimle hak kayıplarınızı önler, maliyet ve zaman kontrolünü profesyonel şekilde sağlarız.' },
    { slug: 'otel-renovasyonu', title: 'Otel Renovasyonu', img: 'ciragan-otel-renovasyonu/ciragan-otel-renovasyonu',
      intro: 'İşletme faaliyetleri aksatılmadan, bölüm bölüm çalışarak konaklama deneyimini modernize ediyor, otelinize yeniden değer katıyoruz. Konfor, estetik ve fonksiyonelliği bir arada sunarak misafir memnuniyetini en üst seviyeye çıkarıyoruz.',
      quote: 'Daha konforlu deneyimler, daha güçlü yarınlar.',
      highlights: [['Kesintisiz İşletme Desteği'], ['Modern & Fonksiyonel Mekânlar'], ['Uzman Ekip Güvencesi']],
      stepsTitle: 'Yenileme Kapsamı',
      steps: [['Oda & Süit Yenileme', 'Zemin, duvar, tavan, banyo armatürleri, mobilya ve iç dekorasyonun modern standartlara uygun olarak yenilenmesi.'], ['Lobi & Ortak Alanlar', 'Resepsiyon, lobi, restoran, toplantı ve sosyal alanların yeniden tasarlanması ve uygulanması.'], ['Teknik Altyapı', 'Elektrik, mekanik, sıhhi tesisat ve iklimlendirme sistemlerinin yenilenmesi; enerji verimliliğinin artırılması.'], ['Fasad & Dış Cephe', 'Cephe kaplama, ısı ve su yalıtımı, aydınlatma ve dış mekân düzenlemeleri ile otelin prestijinin güçlendirilmesi.']],
      lists: [{ title: 'İşletme Sürekliliği Taahhüdü', items: ['Aşamalı bölüm yenileme', 'Gece / gündüz vardiya planı', 'Misafir odası önceliklendirme', 'Toz & gürültü yönetimi'] }, { title: 'Avantajlarımız', items: ['Artan misafir memnuniyeti', 'Uzun ömürlü çözümler', 'Zamanında teslimat', 'Tek noktadan yönetim'] }],
      noteTitle: 'Referans: Piazza AVM & Anemon Otel', noteText: 'Samsun, 135.000 m² — Rönesans Teknik İnşaat A.Ş. bünyesinde edinilen kapsamlı otel yenileme deneyimi.' },
  ];
  pick(i) {
    const n = this.SV.length, idx = (i + n) % n;
    this.setState({ active: idx });
    try { history.replaceState(null, '', '#' + this.SV[idx].slug); } catch (e) {}
    const el = document.getElementById('hz-top');
    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 130; if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' }); }
  }
  componentDidMount() {
    document.documentElement.lang = 'tr';
    this.onHash = () => { const x = this.SV.findIndex(s => s.slug === (location.hash || '').slice(1)); if (x >= 0) this.setState({ active: x }); };
    this.onHash();
    window.addEventListener('hashchange', this.onHash);
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onResize); window.removeEventListener('hashchange', this.onHash); }
  renderVals() {
    const { menu } = this.state;
    const navRaw = [
      ['Ana Sayfa', [], '/'],
      ['Kurumsal', ['Hakkımızda', 'Vizyon & Misyon', 'Belgelerimiz'], '/kurumsal'],
      ['Hizmetler', ['Alt Müteahhitlik', 'Anahtar Teslim Müteahhitlik', 'Kat Karşılığı İnşaat', 'Proje Yönetimi & Danışmanlık', 'Otel Renovasyonu'], '/hizmetler'],
      ['Projeler', ['Devam Eden Projeler', 'Tamamlanan Projeler', 'İş Bitirme Belgeleri'], '/projeler'],
      ['Kentsel Dönüşüm', [], '/kentsel-donusum'],
      ['Haberler', [], '/haberler'],
      ['Rehber', [], '#'],
      ['İK', ['Beyaz Yaka', 'Kalfa (Ekipli)'], '/kariyer'],
    ];
    const nav = navRaw.map(([label, children, href], i) => ({
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Beyaz Yaka': '/kariyer#beyaz-yaka', 'Kalfa (Ekipli)': '/kariyer#kalfa-ekipli', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: i === 2,
      open: menu === i && children.length > 0,
      enter: () => this.setState({ menu: i }),
    }));
    const w = this.state.w ?? 1440;
    const burger = w < 1180, tight = w < 1360;
    const pimg = s => `https://sayda-chi.vercel.app/img/projects/${s}/${s}.webp`;
    return {
      nav, burger, navShown: burger ? [] : nav,
      navPad: tight ? '9px' : '13px', navTrack: tight ? '0.05em' : '0.09em',
      mobileOpen: burger && !!this.state.mobileOpen,
      toggleMobile: () => this.setState(s => ({ mobileOpen: !s.mobileOpen })),
      closeMenu: () => this.setState({ menu: null }),
      stats: [
        { value: '1996', label: 'Kuruluş Yılı' },
        { value: '30+', label: 'Yıllık Deneyim' },
        { value: '33', label: 'İş Bitirme Belgesi' },
        { value: 'ISO', label: '9001 · 14001 · 10002' },
      ],
      pages: [
        { href: '/hakkimizda', num: '01', title: 'Hakkımızda', desc: "1996'dan bu yana deneyimimiz, ekibimiz ve çalışma prensiplerimiz.", img: 'https://sayda-chi.vercel.app/img/hakkimizda.png' },
        { href: '/hakkimizda/vizyon-misyon', num: '02', title: 'Vizyon & Misyon', desc: 'Bugünün ihtiyaçlarını geleceğin değerleriyle birleştiren yaklaşımımız.', img: pimg('varyap-meridien-konut') },
        { href: '/belgeler', num: '03', title: 'Belgelerimiz', desc: 'ISO sertifikalarımız, iş bitirme belgelerimiz ve e-katalog.', img: pimg('vadistanbul') },
      ],
      timeline: [
        { year: '1990', title: 'İTÜ İnşaat Fakültesi', desc: 'İstanbul Teknik Üniversitesi İnşaat Fakültesi’nden mezuniyet.' },
        { year: '1992–94', title: 'Tekfen – İmpresit O.G.', desc: 'T.A.G. Otoyol projesinde Precast Saha ve Viyadük İnşası Saha Şefi.' },
        { year: '1994–96', title: 'Baytur & Maya İnşaat', desc: 'Ataşehir Mozaik Çarşı Kaba Yapı Şefi ve Akatlar Mayadrom Şantiye Şefi.' },
        { year: '1996', title: 'Sayda İnşaat kuruldu', desc: 'Kurucusu olduğu firmada çalışmalarına bugün de devam ediyor.' },
      ],
      values: [
        { num: '01', title: 'Misyon', lead: 'Değer üretmek için çalışıyoruz.', desc: 'Toplum ve çevre bilincinde, ahlaki değerler doğrultusunda, müşteri ve çalışanlarımızın memnuniyetini temel alarak en yüksek verim ve kaliteyle hizmet sunmak.' },
        { num: '02', title: 'Vizyon', lead: 'Daima daha iyisi için gelişiyoruz.', desc: 'Araştırmacı ve teknolojik gelişimlerin takipçisi olarak daha verimli sistemler oluşturmak; sektörde yenilikçi ve güvenilir bir marka olarak tercih edilmek.' },
        { num: '03', title: 'Hedef', lead: 'Daha güçlü yarınlar için.', desc: 'Türkiye ve uluslararası platformda sektörün öne çıkan şirketlerinden biri olmak; sürdürülebilir projelerle yaşam alanlarına kalıcı değer kazandırmak.' },
      ],
      refs: [
        ['Çırağan Palace Kempinski', 'Otel taahhüt'], ['Nestlé Gıda San. A.Ş.', 'Taahhüt işleri'], ['Visa International EU', 'Taahhüt işleri'], ['Isısan – Buderus', 'Bölge binası & showroom'],
        ['Rönesans İnşaat', 'Samsun AVM & Otel'], ['Akkök – Akiş GYO', 'Akbatı AVM & Yaşam Merkezi'], ['Varyap İnşaat', 'Varyap Meridian'], ['Oyak İnşaat', 'Oyakkent'],
        ['Yapı Kredi – Koray GYO', 'İstanbul-İstanbul'], ['Süzer Grubu', 'The Ritz-Carlton İstanbul'], ['Acarlar Şirketler Grubu', 'Acarkent'], ['Sinpaş Yapı', 'Aqua Manors'],
      ].map(([name, project]) => ({ name, project })),
      ...(() => {
        const a = this.state.active ?? 0, S = this.SV, s = S[a], n = S.length;
        const two = x => String(x).padStart(2, '0');
        return {
          wide: w >= 1000, gridCols: w >= 1000 ? '320px minmax(0,1fr)' : 'minmax(0,1fr)', sidePos: w >= 1000 ? 'sticky' : 'static',
          svList: S.map((x, i) => ({ num: two(i + 1), title: x.title, bg: i === a ? '#2F3091' : '#fff', color: i === a ? '#fff' : '#15182B', numColor: i === a ? '#8589E6' : '#2F3091', arrow: i === a ? 1 : 0.25, select: () => this.pick(i) })),
          sv: {
            num: two(a + 1), title: s.title, intro: s.intro, quote: s.quote, img: 'https://sayda-chi.vercel.app/img/projects/' + s.img + '.webp',
            hasHighlights: !!(s.highlights && s.highlights.length), highlights: (s.highlights || []).map(([t, d]) => ({ t, d: d || '', hasD: !!d })),
            hasStats: !!(s.stats && s.stats.length), stats: (s.stats || []).map(([v, l]) => ({ v, l })),
            hasSteps: !!(s.steps && s.steps.length), stepsTitle: s.stepsTitle || '', steps: (s.steps || []).map(([t, d], i) => ({ n: two(i + 1), t, d })),
            lists: s.lists.map(l => ({ title: l.title, items: l.items, chips: !!l.chips, rows: !l.chips })),
            hasNote: !!s.noteTitle, noteTitle: s.noteTitle || '', noteText: s.noteText || '',
          },
          prevTitle: S[(a - 1 + n) % n].title, nextTitle: S[(a + 1) % n].title,
          goPrev: () => this.pick(a - 1), goNext: () => this.pick(a + 1),
        };
      })(),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, gridCols, sidePos, sv, goPrev, goNext, burger, navShown, mobileOpen, nav, svList, wide, footerCols, prevTitle, nextTitle } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".hizmetler-h0:hover{background:#2F3091 !important;color:#fff !important}\n.hizmetler-h1:hover{background:#2F3091 !important;color:#fff !important}\n.hizmetler-h2:hover{color:#fff !important}\n.hizmetler-h3:hover{background:#2F3091 !important;color:#fff !important}\n.hizmetler-h4:hover{color:#8589E6 !important}\n.hizmetler-h5:hover{background:#0D1533 !important;color:#fff !important}\n.hizmetler-h6:hover{background:#2F3091 !important;color:#fff !important}\n.hizmetler-h7:hover{border-color:#fff !important;color:#fff !important}\n.hizmetler-h8:hover{border-color:#fff !important;color:#fff !important}\n.hizmetler-h9:hover{border-color:#fff !important;color:#fff !important}\n.hizmetler-h10:hover{color:#fff !important}\n.hizmetler-h11:hover{color:#fff !important}\n.hizmetler-h12:hover{color:#fff !important}" }} />
        <div lang="tr"><header style={{"position":"sticky","top":"0","zIndex":"50","background":"#0D1533","borderBottom":"1px solid rgba(255,255,255,0.1)"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","height":"100px","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"32px"}}>
    <a href="/" style={{"display":"flex","alignItems":"center","flexShrink":"0"}}>
      <img src="/img/sayda-logo.png" alt="Sayda İnşaat" style={{"height":"50px","width":"auto","display":"block","filter":"brightness(0) invert(1)"}} />
    </a>
    <nav style={{"display":"flex","alignItems":"center","gap":"2px"}}>
      {(burger) ? (<>
        <button onClick={toggleMobile} style={{"display":"flex","alignItems":"center","gap":"12px","height":"48px","padding":"0 18px","background":"none","border":"1.5px solid rgba(255,255,255,0.3)","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","color":"#fff"}}>
          <span style={{"display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"width":"18px","height":"2px","background":"#fff"}}></span><span style={{"width":"18px","height":"2px","background":"#fff"}}></span><span style={{"width":"18px","height":"2px","background":"#fff"}}></span></span>MENÜ
        </button>
      </>) : null}
      {(navShown || []).map((n, $index) => (<React.Fragment key={$index}>
        <div style={{"position":"relative"}} onMouseEnter={n.enter} onMouseLeave={closeMenu}>
          <a href={n.href} style={{"display":"flex","alignItems":"center","gap":"7px","padding":`40px ${navPad}`,"fontSize":"13px","fontWeight":"600","letterSpacing":navTrack,"textTransform":"uppercase","color":"#fff","fontStretch":"108%","whiteSpace":"nowrap","position":"relative"}}>
            {n.label}
            {(n.hasChildren) ? (<>
              <span style={{"width":"5px","height":"5px","borderRight":"1.5px solid currentColor","borderBottom":"1.5px solid currentColor","transform":"translateY(-2px) rotate(45deg)","opacity":"0.55"}}></span>
            </>) : null}
            {(n.active) ? (<>
              <span style={{"position":"absolute","left":"13px","right":"13px","bottom":"28px","height":"2px","background":"#8589E6"}}></span>
            </>) : null}
          </a>
          {(n.open) ? (<>
            <div style={{"position":"absolute","top":"100%","left":"0","minWidth":"270px","background":"#0D1533","borderTop":"2px solid #8589E6","boxShadow":"0 24px 48px -16px rgba(0,0,0,0.4)","padding":"10px 0"}}>
              {(n.children || []).map((c, $index) => (<React.Fragment key={$index}>
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="hizmetler-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="hizmetler-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
    </nav>
  </div>
  {(mobileOpen) ? (<>
    <div style={{"borderTop":"1px solid rgba(255,255,255,0.1)","background":"#0D1533","maxHeight":"calc(100vh - 100px)","overflow":"auto"}}>
      <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"12px 40px 28px","display":"flex","flexDirection":"column"}}>
        {(nav || []).map((n, $index) => (<React.Fragment key={$index}>
          <div style={{"borderBottom":"1px solid rgba(255,255,255,0.1)","padding":"16px 0"}}>
            <a href={n.href} style={{"fontSize":"15px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase","color":"#fff"}}>{n.label}</a>
            {(n.hasChildren) ? (<>
              <div style={{"display":"flex","flexWrap":"wrap","gap":"8px 22px","marginTop":"10px"}}>
                {(n.children || []).map((c, $index) => (<React.Fragment key={$index}>
                  <a href={c.href} style={{"fontSize":"14px","color":"rgba(255,255,255,0.7)"}}>{c.label}</a>
                </React.Fragment>))}
              </div>
            </>) : null}
          </div>
        </React.Fragment>))}
      </div>
    </div>
  </>) : null}
</header>

<section data-screen-label="Hizmetler Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <div style={{"position":"absolute","top":"0","right":"0","bottom":"0","width":"48%"}}>
    <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero01.webp" alt="" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
    <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,#0D1533 0%,rgba(13,21,51,0.6) 40%,rgba(13,21,51,0.2) 100%)"}}></div>
  </div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 80px","minHeight":"440px","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"48px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.6)"}}>
      <a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="hizmetler-h2">Ana Sayfa</a><span>/</span><span>Hizmetler</span><span>/</span><span style={{"color":"#F6F7FB"}}>{sv.title}</span>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"40px"}}>
      <div>
        <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}><span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Ne Yapıyoruz?</div>
        <h1 style={{"margin":"0","fontStretch":"125%","fontWeight":"800","fontSize":"clamp(44px,6vw,92px)","lineHeight":"0.95","letterSpacing":"-0.01em","textTransform":"uppercase"}}>Hizmet<span style={{"fontWeight":"300","color":"#8589E6"}}>lerimiz</span></h1>
        <p style={{"margin":"24px 0 0","maxWidth":"520px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.8)","textWrap":"pretty"}}>Yaşam alanlarına değer katacak kalıcı çözümler üretiyoruz.</p>
      </div>
      <div style={{"maxWidth":"340px","borderLeft":"2px solid #8589E6","padding":"4px 0 4px 26px","fontSize":"clamp(22px,2vw,28px)","fontWeight":"600","fontStretch":"112%","lineHeight":"1.2","textTransform":"uppercase"}}>“Güvenli yapılar, daha iyi yarınlar.”</div>
    </div>
  </div>
</section>

<section data-screen-label="Hizmet Detay" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"80px 40px 120px","display":"grid","gridTemplateColumns":gridCols,"gap":"64px","alignItems":"start"}}>
    <aside style={{"position":sidePos,"top":"124px","display":"flex","flexDirection":"column","gap":"20px"}}>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#5A5C74"}}>Tüm Hizmetler</div>
      <div style={{"display":"flex","flexDirection":"column","border":"1px solid rgba(20,22,58,0.1)"}}>
        {(svList || []).map((s, $index) => (<React.Fragment key={$index}>
          <button onClick={s.select} style={{"display":"flex","alignItems":"center","gap":"16px","padding":"20px 22px","background":s.bg,"color":s.color,"border":"none","borderBottom":"1px solid rgba(20,22,58,0.08)","cursor":"pointer","fontFamily":"inherit","textAlign":"left","transition":"background 0.25s,color 0.25s"}}>
            <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.12em","color":s.numColor}}>{s.num}</span>
            <span style={{"flex":"1","fontSize":"16px","fontWeight":"600","fontStretch":"106%","lineHeight":"1.3"}}>{s.title}</span>
            <span style={{"fontSize":"16px","opacity":s.arrow}}>→</span>
          </button>
        </React.Fragment>))}
      </div>
      {(wide) ? (<>
        <div style={{"position":"relative","overflow":"hidden","background":"#0D1533","color":"#fff"}}>
          <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero02.webp" alt="" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","opacity":"0.35","display":"block"}} />
          <div style={{"position":"relative","padding":"30px 28px 28px","display":"flex","flexDirection":"column","gap":"14px"}}>
            <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6"}}>Projeniz İçin</div>
            <div style={{"fontSize":"24px","fontWeight":"700","fontStretch":"110%","lineHeight":"1.15"}}>Uzman ekibimiz yanınızda.</div>
            <p style={{"margin":"0","fontSize":"14px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Projenizin ihtiyaçlarını birlikte değerlendirelim, en uygun çözümü sunalım.</p>
            <a href="#" style={{"display":"flex","justifyContent":"space-between","alignItems":"center","height":"50px","padding":"0 20px","marginTop":"6px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="hizmetler-h3">Teklif Al <span>→</span></a>
            <a href="tel:+902122238812" style={{"fontSize":"15px","fontWeight":"600","color":"#F6F7FB"}} className="hizmetler-h4">+90 212 223 88 12</a>
          </div>
        </div>
      </>) : null}
    </aside>

    <div id="hz-top" style={{"minWidth":"0","display":"flex","flexDirection":"column","gap":"64px"}}>
      <div>
        <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"18px"}}><span style={{"width":"10px","height":"10px","background":"#3E43B8","transform":"rotate(45deg)"}}></span>Hizmet {sv.num}</div>
        <h2 style={{"margin":"0","fontSize":"clamp(38px,4.2vw,60px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.02em","textWrap":"balance"}}>{sv.title}</h2>
        <p style={{"margin":"26px 0 0","maxWidth":"760px","fontSize":"19px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>{sv.intro}</p>
      </div>

      <div style={{"position":"relative"}}>
        <div style={{"aspectRatio":"16/9","overflow":"hidden","background":"#E4E5F2"}}>
          <img src={sv.img} alt={sv.title} style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
        </div>
        <div style={{"position":"absolute","left":"0","bottom":"0","maxWidth":"min(440px,90%)","background":"#2F3091","color":"#fff","padding":"26px 30px","fontSize":"clamp(18px,1.7vw,23px)","fontWeight":"600","fontStretch":"108%","lineHeight":"1.3"}}>“{sv.quote}”</div>
      </div>

      {(sv.hasHighlights) ? (<>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(200px,100%),1fr))","gap":"1px","background":"rgba(20,22,58,0.1)","border":"1px solid rgba(20,22,58,0.1)"}}>
          {(sv.highlights || []).map((h, $index) => (<React.Fragment key={$index}>
            <div style={{"background":"#fff","padding":"26px 24px","display":"flex","flexDirection":"column","gap":"10px"}}>
              <span style={{"width":"9px","height":"9px","background":"#3E43B8","transform":"rotate(45deg)"}}></span>
              <div style={{"fontSize":"17px","fontWeight":"700","fontStretch":"106%","lineHeight":"1.3"}}>{h.t}</div>
              {(h.hasD) ? (<><div style={{"fontSize":"14px","lineHeight":"1.55","color":"#5A5C74"}}>{h.d}</div></>) : null}
            </div>
          </React.Fragment>))}
        </div>
      </>) : null}

      {(sv.hasStats) ? (<>
        <div style={{"background":"#2F3091","color":"#fff","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(170px,100%),1fr))"}}>
          {(sv.stats || []).map((st, $index) => (<React.Fragment key={$index}>
            <div style={{"padding":"34px 28px","borderLeft":"1px solid rgba(255,255,255,0.18)"}}>
              <div style={{"fontSize":"clamp(32px,3vw,44px)","fontWeight":"700","fontStretch":"115%","lineHeight":"1","letterSpacing":"-0.02em","whiteSpace":"nowrap"}}>{st.v}</div>
              <div style={{"marginTop":"12px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"rgba(255,255,255,0.75)"}}>{st.l}</div>
            </div>
          </React.Fragment>))}
        </div>
      </>) : null}

      {(sv.hasSteps) ? (<>
        <div>
          <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"14px"}}>Süreç</div>
          <h3 style={{"margin":"0 0 32px","fontSize":"34px","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.01em"}}>{sv.stepsTitle}</h3>
          <div style={{"display":"flex","flexDirection":"column"}}>
            {(sv.steps || []).map((p, $index) => (<React.Fragment key={$index}>
              <div style={{"display":"grid","gridTemplateColumns":"72px minmax(0,1fr)","gap":"24px","padding":"26px 0","borderTop":"1px solid rgba(20,22,58,0.12)"}}>
                <div style={{"width":"56px","height":"56px","display":"flex","alignItems":"center","justifyContent":"center","background":"#F6F7FB","border":"1px solid rgba(47,48,145,0.2)","fontSize":"16px","fontWeight":"700","fontStretch":"112%","color":"#2F3091"}}>{p.n}</div>
                <div>
                  <div style={{"fontSize":"20px","fontWeight":"700","fontStretch":"106%"}}>{p.t}</div>
                  <div style={{"marginTop":"8px","fontSize":"15px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>{p.d}</div>
                </div>
              </div>
            </React.Fragment>))}
          </div>
        </div>
      </>) : null}

      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(300px,100%),1fr))","gap":"24px"}}>
        {(sv.lists || []).map((l, $index) => (<React.Fragment key={$index}>
          <div style={{"background":"#F6F7FB","padding":"34px 32px 36px"}}>
            <h3 style={{"margin":"0 0 22px","fontSize":"22px","fontWeight":"700","fontStretch":"110%"}}>{l.title}</h3>
            {(l.chips) ? (<>
              <div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}>
                {(l.items || []).map((it, $index) => (<React.Fragment key={$index}><span style={{"padding":"9px 14px","background":"#fff","border":"1px solid rgba(47,48,145,0.2)","fontSize":"14px","fontWeight":"600","color":"#2F3091"}}>{it}</span></React.Fragment>))}
              </div>
            </>) : null}
            {(l.rows) ? (<>
              <div style={{"display":"flex","flexDirection":"column"}}>
                {(l.items || []).map((it, $index) => (<React.Fragment key={$index}>
                  <div style={{"display":"flex","alignItems":"baseline","gap":"14px","padding":"12px 0","borderTop":"1px solid rgba(20,22,58,0.08)","fontSize":"15px","lineHeight":"1.5","color":"#2A2C4A"}}><span style={{"width":"7px","height":"7px","flexShrink":"0","background":"#3E43B8","transform":"translateY(-2px) rotate(45deg)"}}></span>{it}</div>
                </React.Fragment>))}
              </div>
            </>) : null}
          </div>
        </React.Fragment>))}
      </div>

      {(sv.hasNote) ? (<>
        <div style={{"border":"1px solid rgba(47,48,145,0.25)","padding":"36px 36px 38px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(280px,100%),1fr))","gap":"28px","alignItems":"end"}}>
          <div>
            <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"12px"}}>Neden Sayda?</div>
            <h3 style={{"margin":"0","fontSize":"28px","fontWeight":"700","fontStretch":"112%","lineHeight":"1.15"}}>{sv.noteTitle}</h3>
            <p style={{"margin":"14px 0 0","fontSize":"16px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>{sv.noteText}</p>
          </div>
          <div style={{"display":"flex","justifyContent":"flex-end"}}>
            <a href="#" style={{"display":"inline-flex","alignItems":"center","gap":"12px","height":"52px","padding":"0 26px","background":"#2F3091","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="hizmetler-h5">Teklif Al <span>→</span></a>
          </div>
        </div>
      </>) : null}

      <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","borderTop":"1px solid rgba(20,22,58,0.12)"}}>
        <button onClick={goPrev} style={{"background":"none","border":"none","cursor":"pointer","fontFamily":"inherit","textAlign":"left","padding":"26px 16px 0 0","color":"#15182B","display":"flex","flexDirection":"column","gap":"8px"}}>
          <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.16em","color":"#5A5C74"}}>← ÖNCEKİ</span>
          <span style={{"fontSize":"18px","fontWeight":"700","fontStretch":"106%"}}>{prevTitle}</span>
        </button>
        <button onClick={goNext} style={{"background":"none","border":"none","cursor":"pointer","fontFamily":"inherit","textAlign":"right","padding":"26px 0 0 16px","color":"#15182B","display":"flex","flexDirection":"column","alignItems":"flex-end","gap":"8px"}}>
          <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.16em","color":"#5A5C74"}}>SONRAKİ →</span>
          <span style={{"fontSize":"18px","fontWeight":"700","fontStretch":"106%"}}>{nextTitle}</span>
        </button>
      </div>
    </div>
  </div>
</section>

<section data-screen-label="CTA" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero02.webp" alt="" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,rgba(47,48,145,0.95) 0%,rgba(13,21,51,0.85) 55%,rgba(13,21,51,0.55) 100%)"}}></div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"110px 40px","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"40px"}}>
    <div style={{"maxWidth":"680px"}}>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Birlikte Daha Güçlü Yapılar</div>
      <h2 style={{"margin":"0","fontSize":"clamp(36px,4vw,56px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.015em"}}>Yeni projeniz için bizimle çalışın.</h2>
      <p style={{"margin":"22px 0 0","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Deneyimimiz, uzman ekibimiz ve çözüm odaklı yaklaşımımızla yanınızdayız.</p>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="hizmetler-h6">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="hizmetler-h7">+90 212 223 88 12</a>
    </div>
  </div>
</section>

<footer style={{"background":"#0D1533","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"90px 40px 60px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))","gap":"56px"}}>
    <div style={{"gridColumn":"span 2","maxWidth":"420px"}}>
      <img src="/img/sayda-logo.png" alt="Sayda İnşaat" style={{"height":"52px","width":"auto","display":"block","filter":"brightness(0) invert(1)"}} />
      <div style={{"marginTop":"18px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.32em","textTransform":"uppercase","color":"#8589E6"}}>İnşaat Taahhüt · Since 1996</div>
      <p style={{"margin":"22px 0 0","fontSize":"15px","lineHeight":"1.7","color":"rgba(255,255,255,0.65)"}}>1996'dan bu yana İstanbul'da kentsel dönüşüm ve müteahhitlik.</p>
      <div style={{"display":"flex","gap":"10px","marginTop":"28px"}}>
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="hizmetler-h8">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="hizmetler-h9">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="hizmetler-h10">{l}</a>
          </React.Fragment>))}
        </div>
      </div>
    </React.Fragment>))}
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>İletişim</div>
      <div style={{"display":"flex","flexDirection":"column","gap":"14px","fontSize":"15px","lineHeight":"1.6","color":"rgba(255,255,255,0.75)"}}>
        <span>Şalcıkır Cad. Kaydırak Sok. No: 3/1<br />Tarabya / İstanbul</span>
        <a href="tel:+902122238812" style={{"color":"#fff","fontWeight":"600"}}>+90 212 223 88 12</a>
        <a href="mailto:info@sayda.com.tr" style={{"color":"#fff","fontWeight":"600"}}>info@sayda.com.tr</a>
      </div>
    </div>
  </div>
  <div style={{"borderTop":"1px solid rgba(255,255,255,0.1)"}}>
    <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"26px 40px","display":"flex","flexWrap":"wrap","justifyContent":"space-between","gap":"16px","fontSize":"13px","color":"rgba(255,255,255,0.5)"}}>
      <span>© 2026 Sayda İnşaat Taahhüt San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</span>
      <div style={{"display":"flex","gap":"24px"}}>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="hizmetler-h11">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="hizmetler-h12">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default Hizmetler;

import React from 'react';

class DCLogic extends React.Component {}

class ProjeDetay extends DCLogic {
  state = { menu: null, slug: 'referans-besiktas-abbasaga', broken: {} };
  PR = [
    ['referans-besiktas-abbasaga','Referans Beşiktaş Abbasağa Projesi','Beşiktaş','Beşiktaş · İstanbul','Kiler GYO','79.000 m²','Ocak 2024 — Devam Ediyor','Konut',1],
    ['referans-kartal-loca-1','Referans Kartal Loca 1 Projesi','Kartal','Kartal · İstanbul','Kiler GYO, Biskon Yapı A.Ş.','35.672 m²','2022 — 2024','Konut'],
    ['referans-kartal-loca-2','Referans Kartal Loca 2 Projesi','Kartal','Kartal · İstanbul','Kiler GYO, Biskon Yapı A.Ş.','40.437 m²','2021 — 2023','Konut'],
    ['kiler-besiktas-abbasaga-satis-ofisi','Kiler Beşiktaş Abbasağa Satış Ofisi','Beşiktaş','Abbasağa · İstanbul','Kiler Holding','','','Diğer'],
    ['buyukyali','Büyükyalı Projesi','Zeytinburnu','Zeytinburnu · İstanbul','Özak - Yenigün - Ziylan Ortaklığı','560.000 m²','2018 — 2020','Konut'],
    ['gaziantep-entegre-saglik-kampusu','Gaziantep Entegre Sağlık Kampüsü','','Gaziantep','CCN Altyapı Yatırımları ve İnşaat A.Ş.','640.000 m²','2018 — 2019','Sağlık',0,1],
    ['vadistanbul','Vadistanbul Projesi','Sarıyer','Ayazağa · İstanbul','Artaş - İnvest Ortak Girişimi','450.000 m²','2017 — 2018','AVM & Ticari'],
    ['atlas-park-avm-ofis','Atlas Park AVM ve Ofis Projesi','Sultanbeyli','Sultanbeyli · İstanbul','Mesturkuaz, Canovate, Uzman İnş., HD Gayrimenkul O.G.','160.000 m²','2013 — 2015','AVM & Ticari'],
    ['capital-tower-ofis','Capital Tower 10. Kat Ofis Projesi','Bağcılar','Güneşli · İstanbul','Uzman İnşaat A.Ş. & Mesturkuaz Madencilik A.Ş.','4.000 m²','2013 — 2014','Ofis & İş Merkezi'],
    ['torun-tower-ofis','Torun Tower Ofis Projesi','Beşiktaş','Gayrettepe · İstanbul','Torunlar GYO A.Ş.','97.000 m²','2013','Ofis & İş Merkezi',0,1],
    ['piazza-avm-anamon-otel','Piazza AVM & Anemon Otel Projesi','Canik','Canik · Samsun','Rönesans Teknik İnşaat A.Ş.','135.000 m²','2012 — 2013','AVM & Ticari'],
    ['akbati-avm-konut','Akbatı AVM & Konut Projesi','Başakşehir','Bahçeşehir · İstanbul','Akiş GYO A.Ş.','250.000 m²','2011','AVM & Ticari'],
    ['varyap-meridien-konut','Varyap Meridien Konut Projesi','Ataşehir','Batı Ataşehir · İstanbul','Varyap İnşaat Turizm A.Ş.','150.000 m²','2010 — 2011','Konut'],
    ['terrace-bahce-konut','Terrace Bahçe Konut Projesi','Sarıyer','Sarıyer · İstanbul','İnanlar İnşaat A.Ş.','14.000 m²','2010','Konut'],
    ['oyakkent-konut','Oyakkent Konut Projesi','Başakşehir','Başakşehir · İstanbul','Oyak İnşaat A.Ş.','650.000 m²','2007 — 2009','Konut'],
    ['omsan-depo-lojistik-merkezi','Omsan Depo & Lojistik Merkezi','Tuzla','Tuzla · İstanbul','Oyak Konut A.Ş.','100.000 m²','2006 — 2008','Depo & Endüstriyel'],
    ['isisan-buderus-bursa','Isısan-Buderus Bursa Bölge Binası','Osmangazi','Ovaakça · Bursa','Isısan Klima ve Isıtma San. A.Ş.','6.000 m²','','Ofis & İş Merkezi'],
    ['ciragan-otel-renovasyonu','Çırağan Otel Binası Renovasyonu','Beşiktaş','Ortaköy · İstanbul','Çırağan Palace Kempinski Otel A.Ş.','650 m²','','Otel & Turizm'],
    ['yasmin-resort-hotel','Yasmin Resort Hotel Projesi','Bodrum','Bodrum · Muğla','Birmod Turizm İnşaat A.Ş.','29.000 m²','','Otel & Turizm'],
    ['capital-tower-spor-kompleksi','Capital Tower Spor Kompleksi','Bağcılar','Basınekspres · İstanbul','Mutlu, Miltaş, Uzman İnşaat O.G.','800 m²','','Diğer'],
    ['executive-hall','Executive Hall Projesi','Beşiktaş','Ortaköy · İstanbul','Çırağan Palace Kempinski Otel A.Ş.','','','Otel & Turizm'],
    ['mis-sut-dudullu-uretim-tesisleri','Mis Süt Dudullu Üretim Tesisleri','Ümraniye','Dudullu · İstanbul','Nestlé Süt Ürünleri A.Ş.','5.800 m²','','Depo & Endüstriyel'],
    ['referans-gunesli','Referans Güneşli Projesi','Bağcılar','Güneşli · İstanbul','Kiler GYO A.Ş.','','','Konut'],
    ['m1-real-avm','M1 Real AVM Genişletme Projesi','','İstanbul','Metro Properties ve Fi-Ba Group','18.000 m²','','AVM & Ticari'],
    ['levent-print-center-is-merkezi','Levent Print Center İş Merkezi','Beşiktaş','Levent · İstanbul','Ran İnşaat Taahhüt San. Tic. Ltd. Şti.','8.500 m²','','Ofis & İş Merkezi'],
    ['dimas-antrepo','Dimaş Antrepo Projesi','','İstanbul','Ran İnşaat Taahhüt San. Tic. Ltd. Şti.','26.400 m²','','Depo & Endüstriyel'],
    ['kasaba-konut-residance','Kasaba Konut Residance Projesi','','İstanbul','İş-Koray GYO','','','Konut'],
    ['istanbul-projesi','İstanbul Projesi','','İstanbul','Yapı Kredi-Koray GYO','','','Konut'],
    ['suzer-plaza-ofis','Süzer Plaza Ofis Projesi','','İstanbul','Dolmabahçe Turizm İnşaat Ticaret A.Ş.','','','Ofis & İş Merkezi'],
    ['acarlar-acar-kent','Acarlar Şirketler Grubu / Acarkent','Beykoz','Acarkent · İstanbul','Dost İnşaat San. Tic. A.Ş.','10.800 m²','','Konut'],
    ['nidapark-istinye-satis-ofisi','Nidapark İstinye Satış Ofisi','Sarıyer','İstinye · İstanbul','Nida İnşaat Turizm A.Ş.','','','Diğer'],
    ['gaziantep-sehir-hastanesi','Gaziantep Şehir Hastanesi Projesi','','Gaziantep','','','','Sağlık'],
    ['genel-mudurluk-kum-koy-atik-ali-pasa','Genel Müdürlük / Kum Köy / Atik Ali Paşa Oteli','Beşiktaş','Gayrettepe, Kilyos, Beşiktaş · İstanbul','Enternasyonel Turizm Yatırımları A.Ş.','','','Otel & Turizm'],
    ['caviar-bar-restaurant','Caviar Bar ve Restaurant Projesi','Beşiktaş','Ortaköy · İstanbul','Çırağan Palace Kempinski Otel A.Ş.','','','Otel & Turizm'],
  ];
  DETAIL = {
    'referans-besiktas-abbasaga': { body: 'Proje kapsamında duvar, mantolama, sıva, şap, seramik, alçı levha, boya, kartonpiyer ve duvar kağıdı uygulamaları gerçekleştirilmektedir.', scope: ['Duvar', 'Mantolama', 'Sıva', 'Şap', 'Seramik', 'Alçı Levha', 'Boya', 'Kartonpiyer', 'Duvar Kağıdı'], lead: "Beşiktaş Abbasağa'da yer alan bu lüks konut / residence projesinde ince işler Sayda İnşaat tarafından yürütülmektedir.", client: 'Kiler GYO, Biskon Yapı A.Ş. İş Ortaklığı' },
  };
  componentDidMount() {
    document.documentElement.lang = 'tr';
    this.onHash = () => { const h = decodeURIComponent((location.hash || '').slice(1)); if (h && this.PR.some(p => p[0] === h)) { this.setState({ slug: h }); window.scrollTo(0, 0); } };
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
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Beyaz Yaka': '/kariyer#beyaz-yaka', 'Kalfa (Ekipli)': '/kariyer#kalfa-ekipli', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: i === 3,
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
        const L = this.PR.map(([slug, name, ilce, loc, client, area, date, type, ongoing, noImg]) => ({ slug, name, ilce, loc, client, area, date, type, ongoing: !!ongoing, noImg: !!noImg }));
        const idx = Math.max(0, L.findIndex(p => p.slug === this.state.slug)), p = L[idx], D = this.DETAIL[p.slug] || {};
        const imgOf = s => 'https://sayda-chi.vercel.app/img/projects/' + s + '/' + s + (s === 'dimas-antrepo' ? '-01' : '') + '.webp';
        const [start, end] = p.ongoing ? [(p.date || '').split(' — ')[0], 'Devam Ediyor'] : (p.date || '').includes('—') ? p.date.split(' — ') : [p.date || '—', p.date || '—'];
        const broken = !!this.state.broken[p.slug];
        if (!p.noImg && !broken && this._probed !== p.slug) { this._probed = p.slug; const im = typeof Image !== 'undefined' ? new Image() : {}; im.onerror = () => this.setState(s => ({ broken: { ...s.broken, [p.slug]: 1 } })); im.src = imgOf(p.slug); }
        const link = q => ({ name: q.name, href: '/proje-detay#' + q.slug });
        const rel = L.filter(q => q.slug !== p.slug && !q.noImg && q.type === p.type).concat(L.filter(q => q.slug !== p.slug && !q.noImg && q.type !== p.type)).slice(0, 3);
        const status = p.ongoing ? 'Devam Ediyor' : 'Tamamlandı';
        return {
          wide: w >= 1000, gridCols: w >= 1000 ? 'minmax(0,1fr) 380px' : 'minmax(0,1fr)', sidePos: w >= 1000 ? 'sticky' : 'static',
          pr: {
            name: p.name, loc: p.loc, type: p.type, img: imgOf(p.slug), hasImg: !p.noImg && !broken, noImg: p.noImg || broken,
            status: status.toLocaleUpperCase('tr'), badgeBg: p.ongoing ? '#3E43B8' : '#fff', badgeColor: p.ongoing ? '#fff' : '#2F3091',
            facts: [{ l: 'Toplam Alan', v: p.area || '—' }, { l: 'Başlangıç', v: start || '—' }, { l: 'Bitiş', v: end || '—' }, { l: 'Durum', v: status }],
            lead: D.lead || ('Sayda İnşaat, ' + p.loc + ' konumundaki ' + p.name + ' kapsamında ' + (p.client ? p.client + ' için ' : '') + 'taahhüt hizmeti vermiştir.'),
            hasBody: !!D.body, body: D.body || '', hasScope: !!(D.scope && D.scope.length), scope: D.scope || [],
            info: [['Proje', p.name], ['İşveren', D.client || p.client || '—'], ['Lokasyon', p.loc], ['İlçe', p.ilce || '—'], ['Alan', p.area || '—'], ['Başlangıç', start || '—'], ['Bitiş', end || '—'], ['Durum', status], ['Proje Türü', p.type]].map(([l, v]) => ({ l, v })),
          },
          prev: link(L[(idx - 1 + L.length) % L.length]), next: link(L[(idx + 1) % L.length]),
          related: rel.map(q => ({ name: q.name, loc: q.loc, area: q.area || '', img: imgOf(q.slug), href: '/proje-detay#' + q.slug })),
        };
      })(),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, pr, gridCols, prev, next, sidePos, burger, navShown, mobileOpen, nav, related, footerCols } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".projedetay-h0:hover{background:#2F3091 !important;color:#fff !important}\n.projedetay-h1:hover{background:#2F3091 !important;color:#fff !important}\n.projedetay-h2:hover{color:#fff !important}\n.projedetay-h3:hover{color:#fff !important}\n.projedetay-h4:hover{color:#2F3091 !important}\n.projedetay-h5:hover{color:#2F3091 !important}\n.projedetay-h6:hover{background:#2F3091 !important;color:#fff !important}\n.projedetay-h7:hover{color:#8589E6 !important}\n.projedetay-h8:hover{color:#8589E6 !important}\n.projedetay-h9:hover{color:#2F3091 !important}\n.projedetay-h10:hover{background:#2F3091 !important;color:#fff !important}\n.projedetay-h11:hover{border-color:#fff !important;color:#fff !important}\n.projedetay-h12:hover{border-color:#fff !important;color:#fff !important}\n.projedetay-h13:hover{border-color:#fff !important;color:#fff !important}\n.projedetay-h14:hover{color:#fff !important}\n.projedetay-h15:hover{color:#fff !important}\n.projedetay-h16:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="projedetay-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="projedetay-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Proje Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  {(pr.hasImg) ? (<><img src={pr.img} alt={pr.name} style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} /></>) : null}
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(0deg,rgba(13,21,51,0.95) 0%,rgba(13,21,51,0.55) 45%,rgba(13,21,51,0.25) 100%)"}}></div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 0","minHeight":"620px","display":"flex","flexDirection":"column"}}>
    <div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.7)"}}>
      <a href="/" style={{"color":"rgba(246,247,251,0.7)"}} className="projedetay-h2">Ana Sayfa</a><span>/</span><a href="/projeler" style={{"color":"rgba(246,247,251,0.7)"}} className="projedetay-h3">Projeler</a><span>/</span><span style={{"color":"#F6F7FB"}}>{pr.name}</span>
    </div>
    <div style={{"marginTop":"auto","paddingBottom":"56px","maxWidth":"900px"}}>
      <div style={{"display":"flex","flexWrap":"wrap","gap":"10px","marginBottom":"22px"}}>
        <span style={{"padding":"8px 14px","background":pr.badgeBg,"color":pr.badgeColor,"fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em"}}>{pr.status}</span>
        <span style={{"padding":"8px 14px","border":"1px solid rgba(255,255,255,0.35)","fontSize":"11px","fontWeight":"600","letterSpacing":"0.12em","textTransform":"uppercase"}}>{pr.type}</span>
      </div>
      <h1 style={{"margin":"0","fontStretch":"118%","fontWeight":"800","fontSize":"clamp(36px,5vw,72px)","lineHeight":"1","letterSpacing":"-0.015em","textWrap":"balance"}}>{pr.name}</h1>
      <div style={{"marginTop":"18px","fontSize":"15px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"#8589E6"}}>{pr.loc}</div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(180px,1fr))","borderTop":"1px solid rgba(255,255,255,0.2)"}}>
      {(pr.facts || []).map((f, $index) => (<React.Fragment key={$index}>
        <div style={{"padding":"26px 24px 30px 0"}}>
          <div style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.14em","textTransform":"uppercase","color":"rgba(246,247,251,0.6)"}}>{f.l}</div>
          <div style={{"marginTop":"8px","fontSize":"22px","fontWeight":"700","fontStretch":"110%"}}>{f.v}</div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Proje İçerik" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"100px 40px 110px","display":"grid","gridTemplateColumns":gridCols,"gap":"72px","alignItems":"start"}}>
    <div style={{"minWidth":"0","display":"flex","flexDirection":"column","gap":"56px"}}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>İş Kapsamı</div>
        <h2 style={{"margin":"0","fontSize":"40px","lineHeight":"1.08","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Sahada neler yaptık?</h2>
        <p style={{"margin":"24px 0 0","fontSize":"19px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>{pr.lead}</p>
        {(pr.hasBody) ? (<><p style={{"margin":"16px 0 0","fontSize":"16px","lineHeight":"1.7","color":"#5A5C74","textWrap":"pretty"}}>{pr.body}</p></>) : null}
        {(pr.hasScope) ? (<>
          <div style={{"display":"flex","flexWrap":"wrap","gap":"8px","marginTop":"28px"}}>
            {(pr.scope || []).map((s, $index) => (<React.Fragment key={$index}><span style={{"display":"flex","alignItems":"center","gap":"10px","padding":"10px 16px","background":"#F6F7FB","border":"1px solid rgba(47,48,145,0.15)","fontSize":"14px","fontWeight":"600","color":"#2F3091"}}><span style={{"width":"6px","height":"6px","background":"#3E43B8","transform":"rotate(45deg)"}}></span>{s}</span></React.Fragment>))}
          </div>
        </>) : null}
      </div>
      <div style={{"position":"relative","aspectRatio":"16/10","overflow":"hidden","background":"repeating-linear-gradient(135deg,#F6F7FB 0 14px,#ECEDF5 14px 28px)"}}>
        {(pr.hasImg) ? (<><img src={pr.img} alt={pr.name} style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} /></>) : null}
        {(pr.noImg) ? (<><div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"ui-monospace,monospace","fontSize":"12px","letterSpacing":"0.1em","color":"#5A5C74"}}>PROJE GÖRSELİ</div></>) : null}
      </div>
      <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","borderTop":"1px solid rgba(20,22,58,0.12)"}}>
        <a href={prev.href} style={{"padding":"24px 16px 0 0","display":"flex","flexDirection":"column","gap":"8px","color":"#15182B"}} className="projedetay-h4">
          <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.16em","color":"#5A5C74"}}>← ÖNCEKİ PROJE</span>
          <span style={{"fontSize":"18px","fontWeight":"700","fontStretch":"106%","lineHeight":"1.3"}}>{prev.name}</span>
        </a>
        <a href={next.href} style={{"padding":"24px 0 0 16px","display":"flex","flexDirection":"column","alignItems":"flex-end","textAlign":"right","gap":"8px","color":"#15182B"}} className="projedetay-h5">
          <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.16em","color":"#5A5C74"}}>SONRAKİ PROJE →</span>
          <span style={{"fontSize":"18px","fontWeight":"700","fontStretch":"106%","lineHeight":"1.3"}}>{next.name}</span>
        </a>
      </div>
    </div>

    <aside style={{"position":sidePos,"top":"124px","display":"flex","flexDirection":"column","gap":"20px"}}>
      <div style={{"border":"1px solid rgba(20,22,58,0.1)"}}>
        <div style={{"padding":"22px 26px","background":"#2F3091","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.16em","textTransform":"uppercase"}}>Proje Bilgileri</div>
        {(pr.info || []).map((r, $index) => (<React.Fragment key={$index}>
          <div style={{"display":"grid","gridTemplateColumns":"110px minmax(0,1fr)","gap":"16px","padding":"15px 26px","borderTop":"1px solid rgba(20,22,58,0.08)","fontSize":"14px","lineHeight":"1.45"}}>
            <span style={{"color":"#5A5C74"}}>{r.l}</span><span style={{"fontWeight":"600","color":"#15182B"}}>{r.v}</span>
          </div>
        </React.Fragment>))}
      </div>
      <div style={{"background":"#0D1533","color":"#fff","padding":"28px 26px","display":"flex","flexDirection":"column","gap":"12px"}}>
        <div style={{"fontSize":"22px","fontWeight":"700","fontStretch":"110%","lineHeight":"1.2"}}>Benzer proje için teklif alın</div>
        <p style={{"margin":"0","fontSize":"14px","lineHeight":"1.6","color":"rgba(246,247,251,0.75)"}}>Uzman ekibimiz projenizi değerlendirsin.</p>
        <a href="#" style={{"display":"flex","justifyContent":"space-between","alignItems":"center","height":"50px","padding":"0 20px","marginTop":"6px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="projedetay-h6">Teklif Al <span>→</span></a>
        <div style={{"display":"flex","flexDirection":"column","gap":"4px","marginTop":"6px","fontSize":"14px"}}>
          <a href="tel:+902122238812" style={{"color":"#F6F7FB","fontWeight":"600"}} className="projedetay-h7">+90 212 223 88 12</a>
          <a href="mailto:info@sayda.com.tr" style={{"color":"rgba(246,247,251,0.75)"}} className="projedetay-h8">info@sayda.com.tr</a>
        </div>
      </div>
    </aside>
  </div>
</section>

<section data-screen-label="Diğer Projeler" style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"110px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"24px","marginBottom":"44px"}}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Diğer Projeler</div>
        <h2 style={{"margin":"0","fontSize":"40px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em"}}>Benzer projelerimiz</h2>
      </div>
      <a href="/projeler" style={{"display":"flex","alignItems":"center","gap":"10px","paddingBottom":"6px","borderBottom":"2px solid #2F3091","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase","color":"#2F3091"}}>Tüm Projeler <span>→</span></a>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(320px,100%),1fr))","gap":"28px"}}>
      {(related || []).map((p, $index) => (<React.Fragment key={$index}>
        <a href={p.href} style={{"display":"flex","flexDirection":"column","background":"#fff","color":"#15182B"}} className="projedetay-h9">
          <div style={{"aspectRatio":"4/3","overflow":"hidden","background":"repeating-linear-gradient(135deg,#172052 0 14px,#1B255E 14px 28px)"}}>
            <img src={p.img} alt={p.name} loading="lazy" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
          </div>
          <div style={{"padding":"22px 24px 26px","display":"flex","flexDirection":"column","gap":"8px"}}>
            <div style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"#5A5C74"}}>{p.loc}</div>
            <h3 style={{"margin":"0","fontSize":"20px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.25"}}>{p.name}</h3>
            <div style={{"fontSize":"14px","fontWeight":"700","color":"#2F3091"}}>{p.area}</div>
          </div>
        </a>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="CTA" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero02.webp" alt="" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,rgba(47,48,145,0.95) 0%,rgba(13,21,51,0.85) 55%,rgba(13,21,51,0.55) 100%)"}}></div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"110px 40px","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"40px"}}>
    <div style={{"maxWidth":"680px"}}>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Birlikte Daha Güçlü Yapılar</div>
      <h2 style={{"margin":"0","fontSize":"clamp(36px,4vw,56px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.015em"}}>Benzer bir proje için bizimle çalışın.</h2>
      <p style={{"margin":"22px 0 0","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Deneyimimiz, uzman ekibimiz ve çözüm odaklı yaklaşımımızla yanınızdayız.</p>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="projedetay-h10">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="projedetay-h11">+90 212 223 88 12</a>
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
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="projedetay-h12">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="projedetay-h13">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="projedetay-h14">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="projedetay-h15">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="projedetay-h16">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default ProjeDetay;

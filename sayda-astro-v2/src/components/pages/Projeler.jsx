import React from 'react';

class DCLogic extends React.Component {}

class Projeler extends DCLogic {
  state = { menu: null, status: 'all', q: '', district: '', type: '' };
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
  componentDidMount() {
    document.documentElement.lang = 'tr';
    this.onHash = () => { const h = (location.hash || '').slice(1); if (h === 'devam-eden') this.setState({ status: 'ongoing' }); else if (h === 'tamamlanan') this.setState({ status: 'done' }); };
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
        const { status, q, district, type } = this.state;
        const all = this.PR.map(([slug, name, ilce, loc, client, area, date, ptype, ongoing, noImg]) => ({ slug, name, ilce, loc, client, area: area || '—', date: date || '', type: ptype, ongoing: !!ongoing, noImg: !!noImg }));
        const ql = q.trim().toLocaleLowerCase('tr');
        const base = all.filter(p => (!district || p.ilce === district) && (!type || p.type === type) && (!ql || (p.name + ' ' + p.loc + ' ' + p.client).toLocaleLowerCase('tr').includes(ql)));
        const list = base.filter(p => status === 'all' || (status === 'ongoing' ? p.ongoing : !p.ongoing));
        const districts = [...new Set(all.map(p => p.ilce).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'tr'));
        const types = ['AVM & Ticari', 'Depo & Endüstriyel', 'Konut', 'Ofis & İş Merkezi', 'Otel & Turizm', 'Sağlık', 'Diğer'];
        const tab = (key, label, count) => ({ label, count, bg: status === key ? '#2F3091' : '#fff', color: status === key ? '#fff' : '#15182B', select: () => this.setState({ status: key }) });
        return {
          stats: [{ v: '4.250.000 m²', l: 'Toplam Alan' }, { v: '33', l: 'Tamamlanan Proje' }, { v: '1', l: 'Devam Eden Proje' }, { v: '33', l: 'İş Bitirme Belgesi' }],
          tabs: [tab('all', 'Tümü', base.length), tab('ongoing', 'Devam Eden', base.filter(p => p.ongoing).length), tab('done', 'Tamamlanan', base.filter(p => !p.ongoing).length)],
          q, district, type,
          onQ: e => this.setState({ q: e.target.value }),
          onDistrict: e => this.setState({ district: e.target.value }),
          onType: e => this.setState({ type: e.target.value }),
          districtOpts: [{ v: '', l: 'Tüm İlçeler' }, ...districts.map(d => ({ v: d, l: d }))],
          typeOpts: [{ v: '', l: 'Tüm Proje Türleri' }, ...types.map(t => ({ v: t, l: t }))],
          hasFilter: !!(q || district || type || status !== 'all'),
          clear: () => this.setState({ q: '', district: '', type: '', status: 'all' }),
          resultCount: list.length, empty: list.length === 0,
          items: list.map(p => { if (!p.noImg && !(this._probed || (this._probed = {}))[p.slug]) { this._probed[p.slug] = 1; const im = typeof Image !== 'undefined' ? new Image() : {}; im.onerror = () => this.setState(s => ({ broken: { ...(s.broken || {}), [p.slug]: 1 } })); im.src = 'https://sayda-chi.vercel.app/img/projects/' + p.slug + '/' + p.slug + (p.slug === 'dimas-antrepo' ? '-01' : '') + '.webp'; } const br = !!(this.state.broken || {})[p.slug]; return { ...p, hasImg: !p.noImg && !br, noImg: p.noImg || br, img: 'https://sayda-chi.vercel.app/img/projects/' + p.slug + '/' + p.slug + (p.slug === 'dimas-antrepo' ? '-01' : '') + '.webp', status: p.ongoing ? 'DEVAM EDİYOR' : 'TAMAMLANDI', badgeBg: p.ongoing ? '#3E43B8' : '#fff', badgeColor: p.ongoing ? '#fff' : '#2F3091', href: '/proje-detay#' + p.slug }; }),
        };
      })(),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, q, onQ, district, onDistrict, type, onType, clear, burger, navShown, mobileOpen, nav, stats, tabs, districtOpts, typeOpts, hasFilter, items, empty, footerCols, resultCount } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".projeler-h0:hover{background:#2F3091 !important;color:#fff !important}\n.projeler-h1:hover{background:#2F3091 !important;color:#fff !important}\n.projeler-h2:hover{color:#fff !important}\n.projeler-h3:hover{background:#0D1533 !important;color:#fff !important}\n.projeler-h4:hover{color:#2F3091 !important}\n.projeler-h5:hover{background:#2F3091 !important;color:#fff !important}\n.projeler-h6:hover{border-color:#fff !important;color:#fff !important}\n.projeler-h7:hover{border-color:#fff !important;color:#fff !important}\n.projeler-h8:hover{border-color:#fff !important;color:#fff !important}\n.projeler-h9:hover{color:#fff !important}\n.projeler-h10:hover{color:#fff !important}\n.projeler-h11:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="projeler-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="projeler-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Projeler Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <div style={{"position":"absolute","top":"0","right":"0","bottom":"0","width":"50%"}}>
    <img src="https://sayda-chi.vercel.app/img/projects/vadistanbul/vadistanbul.webp" alt="" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
    <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,#0D1533 0%,rgba(13,21,51,0.55) 40%,rgba(13,21,51,0.15) 100%)"}}></div>
  </div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 0"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.6)"}}>
      <a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="projeler-h2">Ana Sayfa</a><span>/</span><span style={{"color":"#F6F7FB"}}>Projeler</span>
    </div>
    <div style={{"padding":"72px 0 80px","maxWidth":"760px"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}><span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Referanslarımız</div>
      <h1 style={{"margin":"0","fontStretch":"122%","fontWeight":"800","fontSize":"clamp(40px,5.4vw,80px)","lineHeight":"0.98","letterSpacing":"-0.01em","textTransform":"uppercase"}}>Hayata geçirdiğimiz<br /><span style={{"fontWeight":"300","color":"#8589E6"}}>projeler</span></h1>
      <p style={{"margin":"26px 0 0","maxWidth":"540px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.8)","textWrap":"pretty"}}>1996'dan bu yana İstanbul ve Türkiye genelinde tamamladığımız ve devam eden projeleri keşfedin.</p>
    </div>
  </div>
  <div style={{"position":"relative","background":"#2F3091"}}>
    <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(200px,1fr))"}}>
      {(stats || []).map((st, $index) => (<React.Fragment key={$index}>
        <div style={{"padding":"34px 28px","borderLeft":"1px solid rgba(255,255,255,0.2)"}}>
          <div style={{"fontSize":"clamp(30px,3vw,42px)","fontWeight":"700","fontStretch":"115%","lineHeight":"1","letterSpacing":"-0.02em","whiteSpace":"nowrap"}}>{st.v}</div>
          <div style={{"marginTop":"12px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"rgba(255,255,255,0.75)"}}>{st.l}</div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Devam Eden" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"100px 40px 40px"}}>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(460px,100%),1fr))","background":"#F6F7FB"}}>
      <div style={{"position":"relative","minHeight":"380px","overflow":"hidden","background":"#172052"}}>
        <img src="https://sayda-chi.vercel.app/img/projects/referans-besiktas-abbasaga/referans-besiktas-abbasaga.webp" alt="Referans Beşiktaş Abbasağa Projesi" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
        <span style={{"position":"absolute","top":"22px","left":"22px","display":"flex","alignItems":"center","gap":"10px","padding":"8px 14px","background":"#3E43B8","color":"#fff","fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em"}}><span style={{"width":"7px","height":"7px","background":"#fff","borderRadius":"50%"}}></span>DEVAM EDİYOR</span>
      </div>
      <div style={{"padding":"56px 52px","display":"flex","flexDirection":"column","gap":"18px"}}>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091"}}>Devam Eden Proje</div>
        <h2 style={{"margin":"0","fontSize":"clamp(30px,3vw,42px)","lineHeight":"1.06","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Referans Beşiktaş Abbasağa Projesi</h2>
        <div style={{"fontSize":"14px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#5A5C74"}}>Beşiktaş · İstanbul</div>
        <p style={{"margin":"0","fontSize":"17px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>Beşiktaş Abbasağa'da yer alan bu lüks konut / residence projesinde ince işler Sayda İnşaat tarafından yürütülmektedir.</p>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"32px","paddingTop":"18px","borderTop":"1px solid rgba(20,22,58,0.12)"}}>
          <div><div style={{"fontSize":"26px","fontWeight":"700","fontStretch":"112%","color":"#2F3091"}}>79.000 m²</div><div style={{"marginTop":"4px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#5A5C74"}}>TOPLAM ALAN</div></div>
          <div><div style={{"fontSize":"26px","fontWeight":"700","fontStretch":"112%","color":"#2F3091"}}>Ocak 2024</div><div style={{"marginTop":"4px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#5A5C74"}}>BAŞLANGIÇ</div></div>
        </div>
        <a href="/proje-detay#referans-besiktas-abbasaga" style={{"alignSelf":"flex-start","display":"inline-flex","alignItems":"center","gap":"12px","height":"52px","padding":"0 26px","marginTop":"8px","background":"#2F3091","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="projeler-h3">Projeyi İncele <span>→</span></a>
      </div>
    </div>
  </div>
</section>

<section data-screen-label="Proje Listesi" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"60px 40px 120px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"24px","marginBottom":"28px"}}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Tüm Projeler</div>
        <h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em"}}>Proje arşivi</h2>
      </div>
      <div style={{"display":"flex","border":"1px solid rgba(20,22,58,0.15)"}}>
        {(tabs || []).map((t, $index) => (<React.Fragment key={$index}>
          <button onClick={t.select} style={{"height":"48px","padding":"0 20px","background":t.bg,"color":t.color,"border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.06em","textTransform":"uppercase","whiteSpace":"nowrap","transition":"background 0.2s"}}>{t.label} <span style={{"opacity":"0.6"}}>({t.count})</span></button>
        </React.Fragment>))}
      </div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"minmax(0,2fr) minmax(0,1fr) minmax(0,1fr)","gap":"12px","padding":"20px","background":"#F6F7FB","marginBottom":"36px"}}>
      <input type="search" placeholder="Proje, işveren veya konum ara…" value={q} onChange={onQ} style={{"height":"52px","padding":"0 18px","background":"#fff","border":"1px solid rgba(20,22,58,0.15)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","minWidth":"0"}} />
      <select value={district} onChange={onDistrict} style={{"height":"52px","padding":"0 44px 0 18px","background":"#fff","border":"1px solid rgba(20,22,58,0.15)","fontFamily":"inherit","fontSize":"15px","fontWeight":"500","color":"#15182B","cursor":"pointer","appearance":"none","WebkitAppearance":"none","backgroundImage":"linear-gradient(45deg,transparent 50%,#2F3091 50%),linear-gradient(135deg,#2F3091 50%,transparent 50%)","backgroundPosition":"calc(100% - 22px) 50%,calc(100% - 16px) 50%","backgroundSize":"6px 6px","backgroundRepeat":"no-repeat","minWidth":"0"}}>
        {(districtOpts || []).map((o, $index) => (<React.Fragment key={$index}><option value={o.v}>{o.l}</option></React.Fragment>))}
      </select>
      <select value={type} onChange={onType} style={{"height":"52px","padding":"0 44px 0 18px","background":"#fff","border":"1px solid rgba(20,22,58,0.15)","fontFamily":"inherit","fontSize":"15px","fontWeight":"500","color":"#15182B","cursor":"pointer","appearance":"none","WebkitAppearance":"none","backgroundImage":"linear-gradient(45deg,transparent 50%,#2F3091 50%),linear-gradient(135deg,#2F3091 50%,transparent 50%)","backgroundPosition":"calc(100% - 22px) 50%,calc(100% - 16px) 50%","backgroundSize":"6px 6px","backgroundRepeat":"no-repeat","minWidth":"0"}}>
        {(typeOpts || []).map((o, $index) => (<React.Fragment key={$index}><option value={o.v}>{o.l}</option></React.Fragment>))}
      </select>
    </div>
    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"16px","marginBottom":"24px","fontSize":"14px","color":"#5A5C74"}}>
      <span><b style={{"color":"#15182B"}}>{resultCount}</b> proje listeleniyor</span>
      {(hasFilter) ? (<>
        <button onClick={clear} style={{"background":"none","border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","color":"#2F3091"}}>FİLTRELERİ TEMİZLE ×</button>
      </>) : null}
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill,minmax(min(340px,100%),1fr))","gap":"32px 28px"}}>
      {(items || []).map((p, $index) => (<React.Fragment key={$index}>
        <a href={p.href} style={{"display":"flex","flexDirection":"column","color":"#15182B"}} className="projeler-h4">
          <div style={{"position":"relative","aspectRatio":"4/3","overflow":"hidden","background":"#172052"}}>
            {(p.hasImg) ? (<><img src={p.img} alt={p.name} loading="lazy" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} /></>) : null}
            {(p.noImg) ? (<>
              <div style={{"position":"absolute","inset":"0","background":"repeating-linear-gradient(135deg,#172052 0 14px,#1B255E 14px 28px)","display":"flex","alignItems":"center","justifyContent":"center"}}><span style={{"fontFamily":"ui-monospace,monospace","fontSize":"12px","letterSpacing":"0.1em","color":"#8589E6"}}>PROJE GÖRSELİ</span></div>
            </>) : null}
            <span style={{"position":"absolute","top":"16px","left":"16px","padding":"7px 12px","background":p.badgeBg,"color":p.badgeColor,"fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em"}}>{p.status}</span>
            <span style={{"position":"absolute","top":"16px","right":"16px","padding":"7px 12px","background":"rgba(13,21,51,0.75)","color":"#fff","fontSize":"11px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase"}}>{p.type}</span>
          </div>
          <div style={{"paddingTop":"20px","display":"flex","flexDirection":"column","gap":"8px","flex":"1"}}>
            <div style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"#5A5C74"}}>{p.loc}</div>
            <h3 style={{"margin":"0","fontSize":"22px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.2","textWrap":"balance"}}>{p.name}</h3>
            <div style={{"fontSize":"14px","lineHeight":"1.5","color":"#5A5C74"}}>{p.client}</div>
            <div style={{"display":"flex","justifyContent":"space-between","gap":"16px","marginTop":"auto","paddingTop":"14px","borderTop":"1px solid rgba(20,22,58,0.12)","fontSize":"14px","color":"#5A5C74"}}>
              <span style={{"fontWeight":"700","color":"#15182B"}}>{p.area}</span><span>{p.date}</span>
            </div>
          </div>
        </a>
      </React.Fragment>))}
    </div>
    {(empty) ? (<>
      <div style={{"padding":"72px 24px","textAlign":"center","background":"#F6F7FB"}}>
        <div style={{"fontSize":"22px","fontWeight":"700","fontStretch":"108%"}}>Aramanıza uygun proje bulunamadı.</div>
        <button onClick={clear} style={{"marginTop":"18px","height":"48px","padding":"0 24px","background":"#2F3091","color":"#fff","border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em"}}>FİLTRELERİ TEMİZLE</button>
      </div>
    </>) : null}
  </div>
</section>

<section data-screen-label="CTA" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero02.webp" alt="" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,rgba(47,48,145,0.95) 0%,rgba(13,21,51,0.85) 55%,rgba(13,21,51,0.55) 100%)"}}></div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"110px 40px","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"40px"}}>
    <div style={{"maxWidth":"680px"}}>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Birlikte Daha Güçlü Yapılar</div>
      <h2 style={{"margin":"0","fontSize":"clamp(36px,4vw,56px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.015em"}}>Projeniz için bizimle çalışın.</h2>
      <p style={{"margin":"22px 0 0","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Deneyimimiz, uzman ekibimiz ve çözüm odaklı yaklaşımımızla yanınızdayız.</p>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="projeler-h5">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="projeler-h6">+90 212 223 88 12</a>
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
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="projeler-h7">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="projeler-h8">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="projeler-h9">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="projeler-h10">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="projeler-h11">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default Projeler;

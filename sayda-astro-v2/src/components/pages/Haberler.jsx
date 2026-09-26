import React from 'react';

class DCLogic extends React.Component {}

class Haberler extends DCLogic {
  state = { menu: null, cat: '', q: '', sort: 'new', broken: {} };
  NW = [
    ['2024-09-06','Teslim & Açılış','Referans Loca 1 Projesini Teslim Ettik','Teslimler yapılmış olup 205 daire ve 25 dükkânda yaşam başlamıştır.','referans-kartal-loca-1'],
    ['2024-04-02','Devam Eden İşler','Referans Beşiktaş Projesi İnce İşlerini Biz Yapıyoruz','Kiler GYO tarafından hayata geçirilen Referans Beşiktaş projesi; 16.655 m² arazi üzerine 10 blok, 295 ünite olarak hazırlanmış.','referans-besiktas-abbasaga'],
    ['2023-04-27','Satış Ofisi','Kiler Referans Pendik Projesi Satış Ofisini Biz Yaptık',"Yaklaşık 900 m² alana sahip satış ofisi, 2 ay gibi kısa bir sürede tamamlanarak 15 Nisan 2023'te hizmete girmiştir.",''],
    ['2022-07-27','Satış Ofisi','Kiler Beşiktaş Abbasağa Konut Projesi Satış Ofisini Biz Yapıyoruz',"1866'da Sultan Abdülaziz zamanında yapılmış tarihi Aziziye Karakolu (Süslü Karakol), Kiler Holding'in Beşiktaş Abbasağa konut projesinin satış ofisine dönüştürülüyor.",'kiler-besiktas-abbasaga-satis-ofisi'],
    ['2022-06-08','Devam Eden İşler','Referans Kartal Loca Projesi 2. Etap İnce İşlerini de Biz Yapıyoruz',"Devam etmekte olan Referans Kartal Loca Projesi'nin 2. etap ince işleri firmamız tarafından yapılmaktadır.",'referans-kartal-loca-2'],
    ['2021-12-20','Devam Eden İşler','Referans Kartal Loca Projesi İnce İşlerini Biz Yapıyoruz','Kiler GYO tarafından hayata geçirilen Referans Kartal Loca projesi; 36.000 m² arazi üzerine 2 blok, 33 mağaza, 202 daire olarak tasarlanmıştır.','referans-kartal-loca-1'],
    ['2018-04-14','Devam Eden İşler','Vadistanbul Projesi 3. Etap İnce İşlerini Biz Yapıyoruz',"Firmamızın 3. etabı 'Park' ince işlerini yapmakta olduğu Vadistanbul Projesi; Teras, Bulvar ve Park olmak üzere 3 etaptan oluşmaktadır.",'vadistanbul'],
    ['2018-03-05','Devam Eden İşler',"Büyükyalı Projesi'nin İnce İşlerini Biz Yapıyoruz",'İleri kaba işlerini yapmakta olduğumuz Büyükyalı Projesi, Kazlıçeşme sahil yolunda 560.000 m² inşaat alanını kapsamaktadır.','buyukyali'],
    ['2018-03-04','Devam Eden İşler',"Gaziantep Entegre Sağlık Kampüsü'nün İnce İşlerini Biz Yapıyoruz","1875 yatak kapasitesi ve 580.000 m² inşaat alanıyla Türkiye'nin en büyük hastanelerinden biri olacak kampüsün ince işleri firmamızca yapılmaktadır.",''],
    ['2016-06-22','Teslim & Açılış','Atlas Park AVM Hizmete Girdi','Proje kapsamındaki ince işleri firmamızca yapılan Sultanbeyli Atlas Park AVM hizmete girmiştir.','atlas-park-avm-ofis'],
    ['2016-06-21','Teslim & Açılış','Capital Tower 10. Kat Ofisleri Teslim Edildi',"Projesi tamamlanan Capital Tower 10. Kat Ofisleri, Uzman İnşaat ve Mesturkuaz Madencilik A.Ş.'ye teslim edilmiştir.",'capital-tower-ofis'],
    ['2016-06-20','Devam Eden İşler',"Kiler GYO'nun Referans Güneşli Projesi'nin İnce İşlerine Başladık","26.04.2016 tarihli sözleşme ile Referans Güneşli Projesi'nin ince işleri firmamızca üstlenilmiş olup imalatlar başlamıştır.",''],
    ['2016-06-19','Kurumsal','Sosyal Sorumluluk Projesi Kapsamında Yapılan Sınıflar Hizmete Girdi',"Firmamız, sosyal sorumluluk projesi kapsamında BİLSEM Beşiktaş Bilim ve Sanat Merkezi'nin 2 sınıfını tamamlayıp öğrencilerin hizmetine sunmuştur.",''],
  ];
  componentDidMount() {
    document.documentElement.lang = 'tr';
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onResize); }
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
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Beyaz Yaka': '/kariyer#beyaz-yaka', 'Kalfa (Ekipli)': '/kariyer#kalfa-ekipli', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: i === 5,
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
        const { cat, q, sort } = this.state;
        const M = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
        const fmt = d => { const [y, m, dd] = d.split('-'); return (+dd) + ' ' + M[+m - 1] + ' ' + y; };
        const dispDate = (d, t) => t.startsWith('Capital') || t.startsWith("Kiler GYO'nun") || t.startsWith('Sosyal') ? '22 Haziran 2016' : t.startsWith('Gaziantep') ? '5 Mart 2018' : fmt(d);
        this._probed = this._probed || {};
        const img = s => 'https://sayda-chi.vercel.app/img/projects/' + s + '/' + s + '.webp';
        const SL = ["referans-loca-1-teslim","referans-besiktas-ince-isler","kiler-referans-pendik-satis-ofisi","kiler-besiktas-abbasaga-satis-ofisi","referans-kartal-loca-2-etap-ince-isler","referans-kartal-loca-ince-isler","vadistanbul-3-etap-ince-isler","buyukyali-ince-isler","gaziantep-saglik-kampusu-ince-isler","atlas-park-avm-hizmete-girdi","kapital-tower-10-kat-ofis-teslim","referans-gunesli-ince-islere-basladik","bilsem-besiktas-sosyal-sorumluluk"];
        const all = this.NW.map(([d, c, t, s, p], i) => {
          if (p && !this._probed[p]) { this._probed[p] = 1; const im = typeof Image !== 'undefined' ? new Image() : {}; im.onerror = () => this.setState(st => ({ broken: { ...st.broken, [p]: 1 } })); im.src = img(p); }
          const ok = !!p && !this.state.broken[p];
          return { href: '/haber-detay#' + SL[i], d, cat: c, title: t, sum: s, date: dispDate(d, t), img: p ? img(p) : '', hasImg: ok, noImg: !ok };
        });
        const ql = q.trim().toLocaleLowerCase('tr');
        let list = all.slice(1).filter(n => (!cat || n.cat === cat) && (!ql || (n.title + ' ' + n.sum).toLocaleLowerCase('tr').includes(ql)));
        if (sort === 'old') list = list.slice().reverse();
        const cn = ['Teslim & Açılış', 'Devam Eden İşler', 'Satış Ofisi', 'Kurumsal'];
        const cb = (key, label, count) => ({ label, count, bg: cat === key ? '#2F3091' : '#fff', color: cat === key ? '#fff' : '#15182B', select: () => this.setState({ cat: key }) });
        const sb = (key, label) => ({ label, bg: sort === key ? '#2F3091' : '#fff', color: sort === key ? '#fff' : '#15182B', select: () => this.setState({ sort: key }) });
        return {
          top: all[0], q, onQ: e => this.setState({ q: e.target.value }),
          cats: [cb('', 'Tümü', all.length), ...cn.map(c => cb(c, c, all.filter(n => n.cat === c).length))],
          sorts: [sb('new', 'EN YENİ'), sb('old', 'EN ESKİ')],
          items: list, count: list.length, empty: list.length === 0,
          gridCols: w >= 1000 ? '300px minmax(0,1fr)' : 'minmax(0,1fr)', sidePos: w >= 1000 ? 'sticky' : 'static',
          rowCols: w >= 700 ? '260px minmax(0,1fr)' : 'minmax(0,1fr)',
        };
      })(),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, top, gridCols, sidePos, q, onQ, rowCols, burger, navShown, mobileOpen, nav, cats, sorts, items, empty, footerCols, count } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".haberler-h0:hover{background:#2F3091 !important;color:#fff !important}\n.haberler-h1:hover{background:#2F3091 !important;color:#fff !important}\n.haberler-h2:hover{color:#fff !important}\n.haberler-h3:hover{color:#2F3091 !important}\n.haberler-h4:hover{color:#2F3091 !important}\n.haberler-h5:hover{background:#2F3091 !important;color:#fff !important}\n.haberler-h6:hover{border-color:#fff !important;color:#fff !important}\n.haberler-h7:hover{border-color:#fff !important;color:#fff !important}\n.haberler-h8:hover{border-color:#fff !important;color:#fff !important}\n.haberler-h9:hover{color:#fff !important}\n.haberler-h10:hover{color:#fff !important}\n.haberler-h11:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="haberler-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="haberler-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Haberler Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <div style={{"position":"absolute","top":"0","right":"0","bottom":"0","width":"48%"}}>
    <img src="https://sayda-chi.vercel.app/img/projects/dimas-antrepo/dimas-antrepo-01.webp" alt="" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
    <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,#0D1533 0%,rgba(13,21,51,0.6) 40%,rgba(13,21,51,0.2) 100%)"}}></div>
  </div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 80px","minHeight":"420px","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"48px"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.6)"}}>
      <a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="haberler-h2">Ana Sayfa</a><span>/</span><span style={{"color":"#F6F7FB"}}>Haberler</span>
    </div>
    <div>
      <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}><span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Güncel</div>
      <h1 style={{"margin":"0","fontStretch":"125%","fontWeight":"800","fontSize":"clamp(44px,6vw,92px)","lineHeight":"0.95","letterSpacing":"-0.01em","textTransform":"uppercase"}}>Haber<span style={{"fontWeight":"300","color":"#8589E6"}}>ler</span></h1>
      <p style={{"margin":"24px 0 0","maxWidth":"540px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.8)","textWrap":"pretty"}}>Sayda İnşaat'tan güncel haberler, projelerimizdeki gelişmeler ve sektöre dair duyurular.</p>
    </div>
  </div>
</section>

<section data-screen-label="Öne Çıkan Haber" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"90px 40px 0"}}>
    <a href={top.href} style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(460px,100%),1fr))","background":"#F6F7FB","color":"#15182B"}} className="haberler-h3">
      <div style={{"position":"relative","minHeight":"380px","overflow":"hidden","background":"repeating-linear-gradient(135deg,#172052 0 14px,#1B255E 14px 28px)"}}>
        {(top.hasImg) ? (<><img src={top.img} alt={top.title} style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} /></>) : null}
        <span style={{"position":"absolute","top":"22px","left":"22px","padding":"8px 14px","background":"#3E43B8","color":"#fff","fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em"}}>SON HABER</span>
      </div>
      <div style={{"padding":"56px 52px","display":"flex","flexDirection":"column","gap":"18px","justifyContent":"center"}}>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"14px","alignItems":"center","fontSize":"13px","fontWeight":"600","color":"#5A5C74"}}>
          <span style={{"padding":"6px 12px","border":"1px solid rgba(47,48,145,0.25)","color":"#2F3091","fontSize":"11px","fontWeight":"700","letterSpacing":"0.12em","textTransform":"uppercase"}}>{top.cat}</span><span>{top.date}</span>
        </div>
        <h2 style={{"margin":"0","fontSize":"clamp(30px,3vw,44px)","lineHeight":"1.06","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>{top.title}</h2>
        <p style={{"margin":"0","fontSize":"17px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>{top.sum}</p>
        <span style={{"marginTop":"8px","fontSize":"13px","fontWeight":"700","letterSpacing":"0.1em","color":"#2F3091"}}>DEVAMINI OKU →</span>
      </div>
    </a>
  </div>
</section>

<section data-screen-label="Haber Listesi" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"72px 40px 120px","display":"grid","gridTemplateColumns":gridCols,"gap":"56px","alignItems":"start"}}>
    <aside style={{"position":sidePos,"top":"124px","display":"flex","flexDirection":"column","gap":"24px"}}>
      <input type="search" placeholder="Haberlerde ara…" value={q} onChange={onQ} style={{"height":"52px","padding":"0 18px","background":"#fff","border":"1px solid rgba(20,22,58,0.15)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} />
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#5A5C74","marginBottom":"14px"}}>Kategoriler</div>
        <div style={{"display":"flex","flexDirection":"column","border":"1px solid rgba(20,22,58,0.1)"}}>
          {(cats || []).map((c, $index) => (<React.Fragment key={$index}>
            <button onClick={c.select} style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"12px","padding":"16px 20px","background":c.bg,"color":c.color,"border":"none","borderBottom":"1px solid rgba(20,22,58,0.08)","cursor":"pointer","fontFamily":"inherit","fontSize":"15px","fontWeight":"600","textAlign":"left","transition":"background 0.2s"}}>
              <span>{c.label}</span><span style={{"fontSize":"13px","opacity":"0.65"}}>{c.count}</span>
            </button>
          </React.Fragment>))}
        </div>
      </div>
      <div style={{"background":"#2F3091","color":"#fff","padding":"28px 24px","display":"flex","flexDirection":"column","gap":"12px"}}>
        <div style={{"fontSize":"20px","fontWeight":"700","fontStretch":"110%","lineHeight":"1.2"}}>Gelişmeleri kaçırmayın</div>
        <p style={{"margin":"0","fontSize":"14px","lineHeight":"1.6","color":"rgba(255,255,255,0.78)"}}>En yeni haberler ve duyurular için e-posta bültenimize abone olun.</p>
        <input type="email" placeholder="E-posta adresiniz" style={{"height":"48px","padding":"0 16px","border":"none","fontFamily":"inherit","fontSize":"14px","outline":"none","width":"100%"}} />
        <button style={{"height":"48px","background":"#0D1533","color":"#fff","border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.1em"}}>ABONE OL</button>
      </div>
    </aside>
    <div style={{"minWidth":"0"}}>
      <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"16px","marginBottom":"28px","paddingBottom":"20px","borderBottom":"1px solid rgba(20,22,58,0.12)"}}>
        <span style={{"fontSize":"14px","color":"#5A5C74"}}><b style={{"color":"#15182B"}}>{count}</b> haber</span>
        <div style={{"display":"flex","border":"1px solid rgba(20,22,58,0.15)"}}>
          {(sorts || []).map((s, $index) => (<React.Fragment key={$index}>
            <button onClick={s.select} style={{"height":"40px","padding":"0 16px","background":s.bg,"color":s.color,"border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"12px","fontWeight":"700","letterSpacing":"0.08em"}}>{s.label}</button>
          </React.Fragment>))}
        </div>
      </div>
      <div style={{"display":"flex","flexDirection":"column"}}>
        {(items || []).map((n, $index) => (<React.Fragment key={$index}>
          <a href={n.href} style={{"display":"grid","gridTemplateColumns":rowCols,"gap":"32px","padding":"28px 0","borderBottom":"1px solid rgba(20,22,58,0.1)","color":"#15182B"}} className="haberler-h4">
            <div style={{"position":"relative","aspectRatio":"4/3","overflow":"hidden","background":"repeating-linear-gradient(135deg,#172052 0 14px,#1B255E 14px 28px)"}}>
              {(n.hasImg) ? (<><img src={n.img} alt={n.title} loading="lazy" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} /></>) : null}
              {(n.noImg) ? (<><div style={{"position":"absolute","inset":"0","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"ui-monospace,monospace","fontSize":"11px","letterSpacing":"0.1em","color":"#8589E6"}}>HABER GÖRSELİ</div></>) : null}
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"12px","justifyContent":"center","minWidth":"0"}}>
              <div style={{"display":"flex","flexWrap":"wrap","gap":"12px","alignItems":"center","fontSize":"13px","color":"#5A5C74"}}>
                <span style={{"padding":"5px 10px","background":"#F6F7FB","color":"#2F3091","fontSize":"11px","fontWeight":"700","letterSpacing":"0.12em","textTransform":"uppercase"}}>{n.cat}</span><span>{n.date}</span>
              </div>
              <h3 style={{"margin":"0","fontSize":"24px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.2","textWrap":"balance"}}>{n.title}</h3>
              <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>{n.sum}</p>
              <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.1em","color":"#2F3091"}}>DEVAMINI OKU →</span>
            </div>
          </a>
        </React.Fragment>))}
      </div>
      {(empty) ? (<>
        <div style={{"padding":"64px 24px","textAlign":"center","background":"#F6F7FB","fontSize":"20px","fontWeight":"700"}}>Aramanıza uygun haber bulunamadı.</div>
      </>) : null}
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
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="haberler-h5">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="haberler-h6">+90 212 223 88 12</a>
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
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="haberler-h7">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="haberler-h8">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="haberler-h9">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="haberler-h10">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="haberler-h11">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default Haberler;

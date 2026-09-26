import React from 'react';

class DCLogic extends React.Component {}

class AnaSayfa extends DCLogic {
  state = { slide: 0, menu: null, started: false };
  componentDidMount() {
    document.documentElement.lang = 'tr';
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    this.onResize();
    requestAnimationFrame(() => requestAnimationFrame(() => { this.setState({ started: true }); this.schedule(); }));
  }
  componentWillUnmount() { clearTimeout(this.t); window.removeEventListener('resize', this.onResize); }
  dur() { return (this.props.slideSeconds ?? 6) * 1000; }
  schedule() {
    clearTimeout(this.t);
    this.t = setTimeout(() => this.setState(s => ({ slide: (s.slide + 1) % 4 }), () => this.schedule()), this.dur());
  }
  go(i) { this.setState({ slide: i }, () => this.schedule()); }
  renderVals() {
    const { slide, menu, started } = this.state;
    const dur = this.dur();
    const raw = [
      ['https://www.sayda.com.tr/Admin/yuklenenler/1888085659.jpeg', 'Zamanında Teslim'],
      ['https://www.sayda.com.tr/Admin/yuklenenler/477466198.jpg', 'Profesyonel Çözümler'],
      ['https://www.sayda.com.tr/Admin/yuklenenler/135172425.jpg', 'Yüksek Kalitede Uygulamalar'],
      ['https://www.sayda.com.tr/Admin/yuklenenler/833357957.jpg', 'Kentsel Dönüşüm Çözümleri'],
    ];
    const slides = raw.map(([img, title], i) => {
      const on = i === slide;
      const live = on && started;
      return {
        img, title, num: '0' + (i + 1),
        opacity: on ? 1 : 0,
        scale: live ? 1 : 1.08,
        kbTransition: live ? `transform ${dur + 1500}ms ease-out` : 'transform 1.2s ease',
        tagY: on ? '0px' : (i < slide ? '-24px' : '24px'),
        tabColor: on ? '#F6F7FB' : 'rgba(246,247,251,0.55)',
        progress: live ? '100%' : '0%',
        progressTransition: live ? `width ${dur}ms linear` : 'none',
        select: () => this.go(i),
      };
    });
    const navRaw = [
      ['Ana Sayfa', []],
      ['Kurumsal', ['Hakkımızda', 'Vizyon & Misyon', 'Belgelerimiz']],
      ['Hizmetler', ['Alt Müteahhitlik', 'Anahtar Teslim Müteahhitlik', 'Kat Karşılığı İnşaat', 'Proje Yönetimi & Danışmanlık', 'Otel Renovasyonu']],
      ['Projeler', ['Devam Eden Projeler', 'Tamamlanan Projeler', 'İş Bitirme Belgeleri']],
      ['Kentsel Dönüşüm', []],
      ['Haberler', []],
      ['Rehber', []],
      ['İK', ['Beyaz Yaka', 'Kalfa (Ekipli)']],
    ];
    const nav = navRaw.map(([label, children], i) => ({
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href: ['/', '/kurumsal', '/hizmetler', '/projeler', '/kentsel-donusum', '/haberler'][i] || '#', hasChildren: children.length > 0, active: i === 0,
      open: menu === i && children.length > 0,
      enter: () => this.setState({ menu: i }),
    }));
    const fonts = {
      'Archivo Expanded': ["'Archivo', sans-serif", '125%', '-0.01em'],
      'Oswald': ["'Oswald', sans-serif", '100%', '0.02em'],
      'Montserrat': ["'Montserrat', sans-serif", '100%', '0em'],
    };
    const f = fonts[this.props.heroFont ?? 'Archivo Expanded'] || fonts['Archivo Expanded'];
    const img = s => `https://sayda-chi.vercel.app/img/projects/${s}/${s}.webp`;
    const w = this.state.w ?? 1440;
    const burger = w < 1180;
    const tight = w < 1360;
    return {
      nav, slides, burger, navShown: burger ? [] : nav,
      navPad: tight ? '9px' : '13px', navTrack: tight ? '0.05em' : '0.09em',
      mobileOpen: burger && !!this.state.mobileOpen,
      toggleMobile: () => this.setState(s => ({ mobileOpen: !s.mobileOpen })),
      closeMenu: () => this.setState({ menu: null }),
      heroFamily: f[0], heroStretch: f[1], heroTracking: f[2],
      showCaption: this.props.footerCaption ?? true,
      stats: [
        { value: '30', suffix: '+', label: 'Yıllık Deneyim' },
        { value: '4.25M', suffix: ' m²', label: 'Tamamlanan Alan' },
        { value: '33', suffix: '', label: 'İş Bitirme Belgesi' },
        { value: 'G', suffix: '', label: 'Yüklenici Yetki Belgesi' },
      ],
      services: [
        ['Kentsel Dönüşüm', 'Riskli yapı tespiti sonrası süreç yönetimi, kat karşılığı anlaşma ve inşaatın anahtar teslim tamamlanması.'],
        ['Kat Karşılığı İnşaat', 'Arsa veya bina sahipleriyle kat karşılığı anlaşma; tasarımdan teslim aşamasına kadar tüm süreç.'],
        ['Alt Müteahhitlik', 'Ana yükleniciye bağlı olarak kaba veya ince yapı işlerinin taşeronluğu.'],
        ['Anahtar Teslim Müteahhitlik', 'Projelendirmeden teslime kadar tüm inşaat sürecinin tek elden yürütülmesi.'],
        ['Proje Yönetimi & Danışmanlık', 'Bağımsız proje yönetimi, maliyet kontrolü ve teknik danışmanlık hizmetleri.'],
        ['Otel Renovasyonu', 'İşletme faaliyetini aksatmadan planlanan, kapsamlı otel yenileme ve modernizasyon projeleri.'],
      ].map(([title, desc], i) => ({ title, desc, num: '0' + (i + 1) })),
      projects: [
        { name: 'Vadistanbul Projesi', loc: 'Ayazağa · İstanbul', area: '450.000 m²', date: '2017 — 2018', img: img('vadistanbul') },
        { name: 'Atlas Park AVM ve Ofis', loc: 'Sultanbeyli · İstanbul', area: '160.000 m²', date: '2013 — 2015', img: img('atlas-park-avm-ofis') },
        { name: 'Capital Tower 10. Kat Ofis', loc: 'Güneşli · İstanbul', area: '4.000 m²', date: '2013 — 2014', img: img('capital-tower-ofis') },
      ],
      docs: [
        { title: 'Sertifikalarımız', desc: 'ISO 9001, ISO 14001, ISO 10002 kalite belgelerimiz.', cta: 'İNCELE →' },
        { title: 'Tanıtım Kataloğu', desc: 'Tüm proje ve hizmetlerimizi içeren PDF katalog.', cta: 'PDF İNDİR ↓' },
        { title: 'İş Bitirme Belgeleri', desc: '33 adet iş bitirme belgemize ait bilgiler.', cta: 'GÖRÜNTÜLE →' },
      ],
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, heroFamily, heroStretch, heroTracking, burger, navShown, mobileOpen, nav, slides, stats, services, projects, docs, showCaption, footerCols } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".anasayfa-h0:hover{background:#2F3091 !important;color:#fff !important}\n.anasayfa-h1:hover{background:#2F3091 !important;color:#fff !important}\n.anasayfa-h2:hover{background:#2F3091 !important;color:#fff !important}\n.anasayfa-h3:hover{border-color:#fff !important;background:rgba(255,255,255,0.1) !important;color:#fff !important}\n.anasayfa-h4:hover{background:#F6F7FB !important;color:#15182B !important}\n.anasayfa-h5:hover{color:#F6F7FB !important}\n.anasayfa-h6:hover{background:#0D1533 !important;color:#fff !important}\n.anasayfa-h7:hover{border-color:#8589E6 !important;background:#0D1533 !important;color:#fff !important}\n.anasayfa-h8:hover{border-color:#fff !important;color:#fff !important}\n.anasayfa-h9:hover{border-color:#fff !important;color:#fff !important}\n.anasayfa-h10:hover{color:#fff !important}\n.anasayfa-h11:hover{color:#fff !important}\n.anasayfa-h12:hover{color:#fff !important}" }} />
        <div lang="tr"><header style={{"position":"sticky","top":"0","zIndex":"50","background":"#0D1533","borderBottom":"1px solid rgba(255,255,255,0.1)"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","height":"100px","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"32px"}}>
    <a href="#" style={{"display":"flex","alignItems":"center","flexShrink":"0"}}>
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
            <div style={{"position":"absolute","top":"100%","left":"0","minWidth":"270px","background":"#0D1533","borderTop":"2px solid #8589E6","boxShadow":"0 24px 48px -16px rgba(20,22,58,0.22)","padding":"10px 0"}}>
              {(n.children || []).map((c, $index) => (<React.Fragment key={$index}>
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="anasayfa-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="anasayfa-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
    </nav>
  </div>
  {(mobileOpen) ? (<>
    <div style={{"borderTop":"1px solid rgba(255,255,255,0.1)","background":"#0D1533","maxHeight":"calc(100vh - 100px)","overflow":"auto"}}>
      <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"12px 40px 28px","display":"flex","flexDirection":"column"}}>
        {(nav || []).map((n, $index) => (<React.Fragment key={$index}>
          <div style={{"borderBottom":"1px solid rgba(255,255,255,0.1)","padding":"16px 0"}}>
            <a href="#" style={{"fontSize":"15px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase","color":"#fff"}}>{n.label}</a>
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

<section data-screen-label="Hero" style={{"position":"relative","height":"calc(100vh - 100px)","minHeight":"660px","maxHeight":"920px","overflow":"hidden","background":"#0D1533","color":"#fff"}}>
  {(slides || []).map((s, $index) => (<React.Fragment key={$index}>
    <div style={{"position":"absolute","inset":"0","opacity":s.opacity,"transition":"opacity 1.2s ease"}}>
      <img src={s.img} alt={s.title} style={{"width":"100%","height":"100%","objectFit":"cover","display":"block","transform":`scale(${s.scale})`,"transition":s.kbTransition}} />
    </div>
  </React.Fragment>))}
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,rgba(13,21,51,0.82) 0%,rgba(13,21,51,0.45) 48%,rgba(13,21,51,0.1) 100%)"}}></div>
  <div style={{"position":"absolute","inset":"auto 0 0 0","height":"45%","background":"linear-gradient(0deg,rgba(13,21,51,0.7),rgba(13,21,51,0))"}}></div>

  <div style={{"position":"relative","height":"100%","maxWidth":"1400px","margin":"0 auto","padding":"0 40px 150px","display":"flex","flexDirection":"column","justifyContent":"flex-end"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>
      <span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>1996'dan bu yana · İstanbul
    </div>
    <h1 style={{"margin":"0","fontFamily":heroFamily,"fontStretch":heroStretch,"fontWeight":"800","fontSize":"clamp(56px,8.6vw,140px)","lineHeight":"0.92","letterSpacing":heroTracking,"textTransform":"uppercase"}}>
      <span style={{"display":"block"}}>Sayda</span>
      <span style={{"display":"block","fontWeight":"300","color":"#8589E6"}}>İnşaat</span>
    </h1>
    <div style={{"position":"relative","height":"52px","marginTop":"30px","overflow":"hidden"}}>
      {(slides || []).map((s, $index) => (<React.Fragment key={$index}>
        <div style={{"position":"absolute","left":"0","top":"0","display":"flex","alignItems":"center","gap":"16px","opacity":s.opacity,"transform":`translateY(${s.tagY})`,"transition":"opacity 0.7s ease,transform 0.7s ease","whiteSpace":"nowrap"}}>
          <span style={{"width":"12px","height":"12px","background":"#8589E6","transform":"rotate(45deg)"}}></span>
          <span style={{"fontSize":"clamp(22px,2.4vw,34px)","fontWeight":"600","fontStretch":"112%","letterSpacing":"0.04em","textTransform":"uppercase"}}>{s.title}</span>
        </div>
      </React.Fragment>))}
    </div>
    <p style={{"margin":"18px 0 0","maxWidth":"560px","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)","textWrap":"pretty"}}>Kentsel dönüşüm, kat karşılığı inşaat ve anahtar teslim müteahhitlikte 30 yılı aşkın deneyim.</p>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px","marginTop":"34px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"54px","padding":"0 28px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="anasayfa-h2">Projelerimiz <span>→</span></a>
      <a href="#" style={{"display":"flex","alignItems":"center","height":"54px","padding":"0 28px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="anasayfa-h3">Teklif Alın</a>
    </div>
  </div>

  <div style={{"position":"absolute","left":"0","right":"0","bottom":"0","borderTop":"1px solid rgba(255,255,255,0.18)"}}>
    <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","display":"grid","gridTemplateColumns":"repeat(4,minmax(0,1fr))"}}>
      {(slides || []).map((s, $index) => (<React.Fragment key={$index}>
        <button onClick={s.select} style={{"position":"relative","background":"none","border":"none","cursor":"pointer","textAlign":"left","padding":"24px 20px 28px 0","color":s.tabColor,"fontFamily":"inherit","display":"flex","gap":"14px","alignItems":"baseline","transition":"color 0.4s"}}>
          <span style={{"position":"absolute","left":"0","right":"20px","top":"-1px","height":"2px","background":"rgba(255,255,255,0.15)"}}></span>
          <span style={{"position":"absolute","left":"0","top":"-1px","height":"2px","background":"#8589E6","width":s.progress,"transition":s.progressTransition,"maxWidth":"calc(100% - 20px)"}}></span>
          <span style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.12em"}}>{s.num}</span>
          <span style={{"fontSize":"14px","fontWeight":"600","letterSpacing":"0.06em","textTransform":"uppercase"}}>{s.title}</span>
        </button>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Sayılarla" style={{"background":"#2F3091","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"90px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(260px,1fr))","gap":"48px","alignItems":"end"}}>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Sayılarla Sayda</div>
      <h2 style={{"margin":"0","fontSize":"38px","lineHeight":"1.08","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.01em"}}>Güven. Deneyim.<br />Kalıcı değer.</h2>
    </div>
    <div style={{"gridColumn":"span 3","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(200px,1fr))","rowGap":"32px"}}>
      {(stats || []).map((st, $index) => (<React.Fragment key={$index}>
        <div style={{"padding":"8px 28px","borderLeft":"1px solid rgba(255,255,255,0.2)"}}>
          <div style={{"fontSize":"clamp(34px,3.6vw,48px)","fontWeight":"700","fontStretch":"115%","lineHeight":"1","color":"#fff","letterSpacing":"-0.02em","whiteSpace":"nowrap"}}>{st.value}<span style={{"fontSize":"24px","fontWeight":"500"}}>{st.suffix}</span></div>
          <div style={{"marginTop":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"rgba(255,255,255,0.75)"}}>{st.label}</div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Hizmetler" style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"32px","marginBottom":"56px"}}>
      <div style={{"maxWidth":"620px"}}>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Hizmetlerimiz</div>
        <h2 style={{"margin":"0","fontSize":"48px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Her aşamayı uzmanlıkla yönetiyoruz</h2>
      </div>
      <p style={{"margin":"0","maxWidth":"420px","fontSize":"17px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>Planlamadan teslimata kadar tüm süreçlerde kalite, güvenlik ve sürdürülebilirliği ön planda tutuyoruz.</p>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill,minmax(340px,1fr))","gap":"1px","background":"rgba(20,22,58,0.12)","border":"1px solid rgba(20,22,58,0.12)"}}>
      {(services || []).map((sv, $index) => (<React.Fragment key={$index}>
        <a href="#" style={{"display":"flex","flexDirection":"column","gap":"18px","minHeight":"280px","padding":"40px 36px","background":"#FFFFFF","color":"#15182B","transition":"background 0.3s"}} className="anasayfa-h4">
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <span style={{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.12em","color":"#2F3091"}}>{sv.num}</span>
            <span style={{"fontSize":"20px","color":"#2F3091"}}>→</span>
          </div>
          <h3 style={{"margin":"auto 0 0","fontSize":"24px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.15"}}>{sv.title}</h3>
          <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.6","color":"#5A5C74","textWrap":"pretty"}}>{sv.desc}</p>
        </a>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Projeler" style={{"background":"#172052","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"24px","marginBottom":"56px"}}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Öne Çıkan Projeler</div>
        <h2 style={{"margin":"0","fontSize":"48px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em"}}>Gerçek projeler,<br />gerçek sonuçlar</h2>
      </div>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"10px","paddingBottom":"6px","borderBottom":"2px solid #8589E6","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase","color":"#fff"}}>Tüm Projeler <span>→</span></a>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(360px,1fr))","gap":"28px"}}>
      {(projects || []).map((p, $index) => (<React.Fragment key={$index}>
        <a href="#" style={{"display":"flex","flexDirection":"column","color":"#fff"}} className="anasayfa-h5">
          <div style={{"position":"relative","aspectRatio":"4/3","overflow":"hidden","background":"#0D1533"}}>
            <img src={p.img} alt={p.name} style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
            <span style={{"position":"absolute","top":"18px","left":"18px","padding":"7px 12px","background":"#fff","color":"#2F3091","fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em"}}>TAMAMLANDI</span>
          </div>
          <div style={{"padding":"24px 0 0","display":"flex","flexDirection":"column","gap":"10px"}}>
            <div style={{"fontSize":"13px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"rgba(255,255,255,0.75)"}}>{p.loc}</div>
            <h3 style={{"margin":"0","fontSize":"26px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.15"}}>{p.name}</h3>
            <div style={{"display":"flex","gap":"20px","marginTop":"6px","paddingTop":"16px","borderTop":"1px solid rgba(255,255,255,0.2)","fontSize":"14px","color":"rgba(255,255,255,0.75)"}}>
              <span style={{"fontWeight":"700","color":"#fff"}}>{p.area}</span>
              <span>{p.date}</span>
            </div>
          </div>
        </a>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Hakkımızda" style={{"background":"#fff","color":"#15182B"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(420px,1fr))","gap":"80px","alignItems":"center"}}>
    <div style={{"position":"relative"}}>
      <div style={{"aspectRatio":"5/4","overflow":"hidden","background":"#E4E5F2"}}>
        <img src="https://sayda-chi.vercel.app/img/hakkimizda.png" alt="Sayda İnşaat" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
      </div>
      <div style={{"position":"absolute","right":"-24px","bottom":"-40px","background":"#2F3091","padding":"30px 40px 34px","boxShadow":"0 30px 60px -20px rgba(20,22,58,0.45)"}}>
        <div style={{"fontSize":"20px","fontWeight":"500","letterSpacing":"0.3em","textTransform":"uppercase","color":"rgba(255,255,255,0.8)"}}>Since</div>
        <div style={{"fontSize":"96px","fontWeight":"800","fontStretch":"120%","lineHeight":"0.9","letterSpacing":"-0.02em","marginTop":"6px"}}>1996</div>
      </div>
    </div>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Hakkımızda</div>
      <h2 style={{"margin":"0","fontSize":"48px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em"}}>Güvenle inşa ediyoruz</h2>
      <p style={{"margin":"28px 0 0","fontSize":"18px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>1996 yılında kurulan Sayda İnşaat, İstanbul ve Türkiye genelinde konut, ticari yapı, sağlık kampüsü ve otel projelerinde ince işler ile taahhüt hizmetleri sunmaktadır.</p>
      <p style={{"margin":"18px 0 0","fontSize":"16px","lineHeight":"1.7","color":"#5A5C74","textWrap":"pretty"}}>G grubu yüklenici yetki belgemiz ve 33 adet iş bitirme belgemizle sektörde güvenilir bir referans noktasıyız.</p>
      <div style={{"display":"flex","flexWrap":"wrap","gap":"10px","marginTop":"32px"}}>
        <span style={{"padding":"10px 16px","border":"1px solid rgba(43,46,140,0.3)","color":"#2F3091","fontSize":"13px","fontWeight":"600","letterSpacing":"0.06em"}}>ISO 9001 · 14001 · 10002</span>
        <span style={{"padding":"10px 16px","border":"1px solid rgba(43,46,140,0.3)","color":"#2F3091","fontSize":"13px","fontWeight":"600","letterSpacing":"0.06em"}}>G Grubu Yetki Belgesi</span>
      </div>
      <a href="#" style={{"display":"inline-flex","alignItems":"center","gap":"12px","height":"54px","padding":"0 28px","marginTop":"40px","background":"#2F3091","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="anasayfa-h6">Bizi Tanıyın <span>→</span></a>
    </div>
  </div>
</section>

<section data-screen-label="Belgeler" style={{"background":"#2F3091","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"130px 40px 110px"}}>
    <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Hızlı Erişim</div>
    <h2 style={{"margin":"0 0 48px","fontSize":"40px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em"}}>Belge &amp; dokümanlar</h2>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(300px,1fr))","gap":"20px"}}>
      {(docs || []).map((d, $index) => (<React.Fragment key={$index}>
        <a href="#" style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"36px","background":"#172052","border":"1px solid rgba(255,255,255,0.14)","color":"#fff","transition":"border-color 0.3s"}} className="anasayfa-h7">
          <h3 style={{"margin":"0","fontSize":"22px","fontWeight":"700","fontStretch":"108%"}}>{d.title}</h3>
          <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.6","color":"rgba(255,255,255,0.75)"}}>{d.desc}</p>
          <span style={{"marginTop":"12px","fontSize":"13px","fontWeight":"700","letterSpacing":"0.12em","color":"#8589E6"}}>{d.cta}</span>
        </a>
      </React.Fragment>))}
    </div>
  </div>
</section>

<footer style={{"background":"#0D1533","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"90px 40px 60px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))","gap":"56px"}}>
    <div style={{"gridColumn":"span 2","maxWidth":"420px"}}>
      <img src="/img/sayda-logo.png" alt="Sayda İnşaat" style={{"height":"52px","width":"auto","display":"block","filter":"brightness(0) invert(1)"}} />
      {(showCaption) ? (<>
        <div style={{"marginTop":"18px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.32em","textTransform":"uppercase","color":"#8589E6"}}>İnşaat Taahhüt · Since 1996</div>
        <p style={{"margin":"22px 0 0","fontSize":"15px","lineHeight":"1.7","color":"rgba(255,255,255,0.65)"}}>1996'dan bu yana İstanbul'da kentsel dönüşüm ve müteahhitlik.</p>
      </>) : null}
      <div style={{"display":"flex","gap":"10px","marginTop":"28px"}}>
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="anasayfa-h8">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="anasayfa-h9">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="anasayfa-h10">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="anasayfa-h11">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="anasayfa-h12">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default AnaSayfa;

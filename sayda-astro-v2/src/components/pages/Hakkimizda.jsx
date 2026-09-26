import React from 'react';

class DCLogic extends React.Component {}

class Hakkimizda extends DCLogic {
  state = { menu: null };
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
      ['İK', ['Beyaz Yaka', 'Kalfa (Ekipli)'], '#'],
    ];
    const nav = navRaw.map(([label, children, href], i) => ({
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: i === 1,
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
      hkStats: [
        { value: '1996', suffix: '', label: 'Kuruluş Yılı' },
        { value: '4.25M', suffix: ' m²', label: 'Tamamlanan Alan' },
        { value: '33', suffix: '', label: 'İş Bitirme Belgesi' },
        { value: 'G', suffix: '', label: 'Yüklenici Yetki Belgesi' },
      ],
      hkValues: [
        { num: '01', title: 'Güven', desc: 'Söz verdiğimiz gibi, zamanında ve kaliteli işler teslim ederiz.' },
        { num: '02', title: 'İnsan Odaklılık', desc: 'Çalışanlarımız, iş ortaklarımız ve müşterilerimiz bizim için değerlidir.' },
        { num: '03', title: 'Sürdürülebilirlik', desc: 'Gelecek nesiller için daha iyi yaşam alanları inşa ederiz.' },
        { num: '04', title: 'Kalite', desc: 'Her projede en yüksek standartları hedefleriz.' },
      ],
      journey: [
        { year: '1996', text: 'Sayda İnşaat kuruldu.' },
        { year: '2000+', text: 'İlk büyük ölçekli projeler.' },
        { year: '2010+', text: 'Farklı proje tiplerinde faaliyet alanı genişletildi.' },
        { year: '2020+', text: 'Türkiye genelinde projeler.' },
        { year: '2026', text: 'Bugün, yeni hedeflerle yolumuza devam ediyoruz.' },
      ],
      expertise: [
        { num: '01', title: 'Konut Projeleri', img: pimg('terrace-bahce-konut') },
        { num: '02', title: 'Ticari Yapılar', img: pimg('atlas-park-avm-ofis') },
        { num: '03', title: 'Sağlık Kampüsleri', img: pimg('capital-tower-ofis') },
        { num: '04', title: 'Otel Projeleri', img: pimg('yasmin-resort-hotel') },
      ],
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, burger, navShown, mobileOpen, nav, hkStats, hkValues, journey, expertise, refs, footerCols } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".hakkimizda-h0:hover{background:#2F3091 !important;color:#fff !important}\n.hakkimizda-h1:hover{background:#2F3091 !important;color:#fff !important}\n.hakkimizda-h2:hover{color:#fff !important}\n.hakkimizda-h3:hover{color:#fff !important}\n.hakkimizda-h4:hover{color:#fff !important}\n.hakkimizda-h5:hover{background:#2F3091 !important;color:#fff !important}\n.hakkimizda-h6:hover{border-color:#fff !important;color:#fff !important}\n.hakkimizda-h7:hover{border-color:#fff !important;color:#fff !important}\n.hakkimizda-h8:hover{border-color:#fff !important;color:#fff !important}\n.hakkimizda-h9:hover{color:#fff !important}\n.hakkimizda-h10:hover{color:#fff !important}\n.hakkimizda-h11:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="hakkimizda-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="hakkimizda-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Hakkımızda Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <div style={{"position":"absolute","top":"0","right":"0","bottom":"0","width":"52%"}}>
    <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero01.webp" alt="Sayda İnşaat şantiye" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
    <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,#0D1533 0%,rgba(13,21,51,0.55) 35%,rgba(13,21,51,0.15) 100%)"}}></div>
  </div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"72px 40px 96px","minHeight":"600px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(460px,100%),1fr))","gap":"48px","alignItems":"end"}}>
    <div>
      <div style={{"display":"flex","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.6)","marginBottom":"64px"}}>
        <a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="hakkimizda-h2">Ana Sayfa</a><span>/</span><a href="/kurumsal" style={{"color":"rgba(246,247,251,0.6)"}} className="hakkimizda-h3">Kurumsal</a><span>/</span><span style={{"color":"#F6F7FB"}}>Hakkımızda</span>
      </div>
      <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>
        <span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Kurumsal
      </div>
      <h1 style={{"margin":"0","fontStretch":"125%","fontWeight":"800","fontSize":"clamp(44px,6vw,92px)","lineHeight":"0.95","letterSpacing":"-0.01em","textTransform":"uppercase"}}>Hakkımızda<br /><span style={{"fontWeight":"300","color":"#8589E6"}}>Since 1996</span></h1>
      <p style={{"margin":"30px 0 0","maxWidth":"520px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.8)","textWrap":"pretty"}}>1996’dan bugüne daha iyi yaşam alanları için çalışıyoruz. Konut, ticari yapı, sağlık kampüsü ve otel projelerinde güvenilir çözüm ortağınızız.</p>
    </div>
    <div style={{"display":"flex","justifyContent":"flex-end"}}>
      <div style={{"maxWidth":"380px","borderLeft":"2px solid #8589E6","padding":"4px 0 4px 28px"}}>
        <div style={{"fontSize":"clamp(24px,2.4vw,34px)","fontWeight":"600","fontStretch":"112%","lineHeight":"1.2","textTransform":"uppercase","letterSpacing":"0.01em"}}>“Daha iyi yarınlar için sağlam yapılar”</div>
      </div>
    </div>
  </div>
</section>

<section data-screen-label="Biz Kimiz" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(440px,100%),1fr))","gap":"88px","alignItems":"center"}}>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Biz Kimiz?</div>
      <h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Yapının her aşamasında deneyim ve güven</h2>
      <p style={{"margin":"28px 0 0","fontSize":"18px","lineHeight":"1.7","color":"#2A2C4A","textWrap":"pretty"}}>Sayda İnşaat Taahhüt San. ve Tic. Ltd. Şti., 1996 yılında kurulmuş olup İstanbul ve Türkiye genelinde farklı ölçeklerde birçok projeye imza atmıştır.</p>
      <p style={{"margin":"18px 0 0","fontSize":"16px","lineHeight":"1.7","color":"#5A5C74","textWrap":"pretty"}}>Konut, ticari yapılar, sağlık kampüsleri ve otel projelerinde uzman ekibimizle taahhüt ve ince işler hizmetleri sunuyor; edindiğimiz deneyimi her yeni projede müşterilerimizin yanında kullanmaya devam ediyoruz.</p>
      <div style={{"marginTop":"40px","padding":"26px 28px","background":"#F6F7FB","display":"flex","gap":"20px","alignItems":"center"}}>
        <div style={{"width":"60px","height":"60px","flexShrink":"0","background":"#2F3091","color":"#fff","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"20px","fontWeight":"700","fontStretch":"115%"}}>AO</div>
        <div>
          <div style={{"fontSize":"18px","fontWeight":"700","fontStretch":"108%"}}>Ali Orhan Onur</div>
          <div style={{"marginTop":"4px","fontSize":"14px","lineHeight":"1.5","color":"#5A5C74"}}>Kurucu &amp; Genel Müdür · İTÜ İnşaat Fakültesi, 1990</div>
        </div>
      </div>
    </div>
    <div style={{"position":"relative","padding":"0 0 40px 40px"}}>
      <div style={{"aspectRatio":"4/5","overflow":"hidden","background":"#E4E5F2"}}>
        <img src="https://sayda-chi.vercel.app/img/projects/oyakkent-konut/oyakkent-konut.webp" alt="Sayda İnşaat konut projesi" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
      </div>
      <div style={{"position":"absolute","left":"0","bottom":"0","background":"#2F3091","color":"#fff","padding":"28px 36px 32px","boxShadow":"0 30px 60px -20px rgba(13,21,51,0.45)"}}>
        <div style={{"fontSize":"18px","fontWeight":"500","letterSpacing":"0.3em","textTransform":"uppercase","color":"rgba(255,255,255,0.8)"}}>Since</div>
        <div style={{"fontSize":"84px","fontWeight":"800","fontStretch":"120%","lineHeight":"0.9","letterSpacing":"-0.02em","marginTop":"6px"}}>1996</div>
      </div>
    </div>
  </div>
</section>

<section data-screen-label="Sayılar" style={{"background":"#2F3091","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))"}}>
    {(hkStats || []).map((st, $index) => (<React.Fragment key={$index}>
      <div style={{"padding":"44px 28px","borderLeft":"1px solid rgba(255,255,255,0.2)"}}>
        <div style={{"fontSize":"clamp(34px,3.4vw,48px)","fontWeight":"700","fontStretch":"115%","lineHeight":"1","letterSpacing":"-0.02em","whiteSpace":"nowrap"}}>{st.value}<span style={{"fontSize":"22px","fontWeight":"500"}}>{st.suffix}</span></div>
        <div style={{"marginTop":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.1em","textTransform":"uppercase","color":"rgba(255,255,255,0.75)"}}>{st.label}</div>
      </div>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="Değerlerimiz" style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(380px,100%),1fr))","gap":"64px","alignItems":"start"}}>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Değerlerimiz</div>
      <h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>“Yaşam alanlarına değer katmak için çalışıyoruz.”</h2>
    </div>
    <div style={{"gridColumn":"span 2","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(280px,100%),1fr))","gap":"20px"}}>
      {(hkValues || []).map((v, $index) => (<React.Fragment key={$index}>
        <div style={{"background":"#fff","border":"1px solid rgba(20,22,58,0.08)","padding":"34px 32px 36px","display":"flex","flexDirection":"column","gap":"14px"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"12px"}}>
            <span style={{"width":"10px","height":"10px","background":"#3E43B8","transform":"rotate(45deg)"}}></span>
            <span style={{"fontSize":"13px","fontWeight":"700","letterSpacing":"0.12em","color":"#2F3091"}}>{v.num}</span>
          </div>
          <h3 style={{"margin":"6px 0 0","fontSize":"24px","fontWeight":"700","fontStretch":"108%"}}>{v.title}</h3>
          <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>{v.desc}</p>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Yolculuğumuz" style={{"background":"#172052","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"32px","marginBottom":"64px"}}>
      <div><div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Yolculuğumuz</div><h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>1996’dan bugüne</h2></div>
      <p style={{"margin":"0","maxWidth":"440px","fontSize":"16px","lineHeight":"1.65","color":"rgba(255,255,255,0.72)","textWrap":"pretty"}}>Her projede daha iyisini hedefleyerek, sektörde kalıcı ve sürdürülebilir değerler üretmeye devam ediyoruz.</p>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(200px,1fr))","rowGap":"48px"}}>
      {(journey || []).map((j, $index) => (<React.Fragment key={$index}>
        <div style={{"position":"relative","padding":"40px 28px 0 0","borderTop":"2px solid rgba(133,137,230,0.35)"}}>
          <span style={{"position":"absolute","left":"0","top":"-8px","width":"14px","height":"14px","background":"#8589E6","transform":"rotate(45deg)"}}></span>
          <div style={{"fontSize":"40px","fontWeight":"700","fontStretch":"118%","lineHeight":"1","letterSpacing":"-0.02em"}}>{j.year}</div>
          <div style={{"marginTop":"16px","fontSize":"16px","lineHeight":"1.6","color":"rgba(255,255,255,0.75)","textWrap":"pretty"}}>{j.text}</div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Uzmanlık" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"32px","marginBottom":"48px"}}>
      <div><div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Uzmanlık Alanlarımız</div><h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Güçlü yapılar, güvenli yarınlar</h2></div>
      <p style={{"margin":"0","maxWidth":"420px","fontSize":"16px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>Farklı sektörlerde edindiğimiz deneyimle yaşam alanlarına değer katıyoruz.</p>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(280px,100%),1fr))","gap":"20px"}}>
      {(expertise || []).map((e, $index) => (<React.Fragment key={$index}>
        <a href="#" style={{"position":"relative","display":"block","aspectRatio":"3/4","overflow":"hidden","background":"#172052","color":"#fff"}} className="hakkimizda-h4">
          <img src={e.img} alt={e.title} style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
          <div style={{"position":"absolute","inset":"0","background":"linear-gradient(0deg,rgba(13,21,51,0.9) 0%,rgba(13,21,51,0.1) 55%)"}}></div>
          <div style={{"position":"absolute","left":"28px","right":"28px","bottom":"28px","display":"flex","justifyContent":"space-between","alignItems":"flex-end","gap":"12px"}}>
            <div>
              <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.14em","color":"#8589E6"}}>{e.num}</div>
              <div style={{"marginTop":"8px","fontSize":"24px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.15"}}>{e.title}</div>
            </div>
            <span style={{"fontSize":"20px"}}>→</span>
          </div>
        </a>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Referanslar" style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"marginBottom":"40px"}}><div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Çalıştığımız Kurumlar</div><h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Müteahhit ve alt müteahhit olarak yer aldığımız projeler</h2></div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill,minmax(min(260px,100%),1fr))","gap":"1px","background":"rgba(20,22,58,0.1)","border":"1px solid rgba(20,22,58,0.1)"}}>
      {(refs || []).map((r, $index) => (<React.Fragment key={$index}>
        <div style={{"background":"#fff","padding":"28px 26px","minHeight":"112px","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"12px"}}>
          <div style={{"fontSize":"17px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.25"}}>{r.name}</div>
          <div style={{"fontSize":"12px","fontWeight":"600","letterSpacing":"0.08em","textTransform":"uppercase","color":"#5A5C74"}}>{r.project}</div>
        </div>
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
      <h2 style={{"margin":"0","fontSize":"clamp(36px,4vw,56px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.015em"}}>Yeni projeniz için bizimle çalışın.</h2>
      <p style={{"margin":"22px 0 0","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Deneyimimiz, uzman ekibimiz ve çözüm odaklı yaklaşımımızla yanınızdayız.</p>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="hakkimizda-h5">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="hakkimizda-h6">+90 212 223 88 12</a>
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
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="hakkimizda-h7">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="hakkimizda-h8">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="hakkimizda-h9">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="hakkimizda-h10">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="hakkimizda-h11">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default Hakkimizda;

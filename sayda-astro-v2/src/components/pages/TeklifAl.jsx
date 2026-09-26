import React from 'react';

class DCLogic extends React.Component {}

class TeklifAl extends DCLogic {
  state = { menu: null, svc: '', name: '', phone: '', kvkk: false, err: false, sent: false };
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
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Beyaz Yaka': '/kariyer#beyaz-yaka', 'Kalfa (Ekipli)': '/kariyer#kalfa-ekipli', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: -1 === i,
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
        const S = ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Anahtar Teslim', 'Alt Müteahhitlik', 'Proje Yönetimi', 'Otel Renovasyonu'];
        const st = this.state;
        return {
          gridCols: w >= 1000 ? 'minmax(0,1fr) 380px' : 'minmax(0,1fr)',
          services: S.map(l => { const on = st.svc === l; return { label: l, bg: on ? '#2F3091' : '#fff', color: on ? '#fff' : '#15182B', border: on ? '#2F3091' : 'rgba(20,22,58,0.15)', dot: on ? '#8589E6' : '#3E43B8', select: () => this.setState({ svc: l }) }; }),
          name: st.name, phone: st.phone, kvkk: st.kvkk,
          onName: e => this.setState({ name: e.target.value }), onPhone: e => this.setState({ phone: e.target.value }), onKvkk: e => this.setState({ kvkk: e.target.checked }),
          showErr: st.err, sent: st.sent, notSent: !st.sent,
          submit: () => { if (st.svc && st.name.trim() && st.phone.trim() && st.kvkk) { this.setState({ sent: true, err: false }); window.scrollTo({ top: 0, behavior: 'smooth' }); } else this.setState({ err: true }); },
          reset: () => this.setState({ svc: '', name: '', phone: '', kvkk: false, err: false, sent: false }),
          flow: [{ n: '01', t: 'Talebinizi alırız', d: 'Formu doldurun veya bizi arayın.' }, { n: '02', t: 'Ön değerlendirme', d: 'Ekibimiz 1 iş günü içinde dönüş yapar.' }, { n: '03', t: 'Yerinde inceleme & teklif', d: 'Keşif sonrası detaylı teklifinizi hazırlarız.' }],
        };
      })(),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, gridCols, reset, name, onName, phone, onPhone, kvkk, onKvkk, submit, burger, navShown, mobileOpen, nav, sent, notSent, services, showErr, flow, footerCols } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".teklifal-h0:hover{background:#2F3091 !important;color:#fff !important}\n.teklifal-h1:hover{background:#2F3091 !important;color:#fff !important}\n.teklifal-h2:hover{color:#fff !important}\n.teklifal-h3:hover{border-color:#fff !important;color:#fff !important}\n.teklifal-h4:hover{border-color:#fff !important;color:#fff !important}\n.teklifal-h5:hover{color:#fff !important}\n.teklifal-h6:hover{color:#fff !important}\n.teklifal-h7:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="teklifal-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="teklifal-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Teklif Al" style={{"background":"#0D1533","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 64px"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"10px","fontSize":"13px","color":"rgba(246,247,251,0.6)"}}><a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="teklifal-h2">Ana Sayfa</a><span>/</span><span style={{"color":"#F6F7FB"}}>Teklif Al</span></div>
    <div style={{"marginTop":"48px","display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6"}}><span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Ücretsiz Ön Değerlendirme</div>
    <h1 style={{"margin":"20px 0 0","fontStretch":"122%","fontWeight":"800","fontSize":"clamp(40px,5.4vw,80px)","lineHeight":"0.98","textTransform":"uppercase"}}>Teklif <span style={{"fontWeight":"300","color":"#8589E6"}}>alın</span></h1>
    <p style={{"margin":"22px 0 0","maxWidth":"560px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.8)"}}>Projenizi anlatın; uzman ekibimiz en kısa sürede sizinle iletişime geçsin.</p>
  </div>
</section>

<section style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"72px 40px 120px","display":"grid","gridTemplateColumns":gridCols,"gap":"40px","alignItems":"start"}}>
    <div style={{"background":"#fff","border":"1px solid rgba(20,22,58,0.08)","padding":"44px 44px 48px","minWidth":"0"}}>
      {(sent) ? (<>
        <div style={{"padding":"48px 0","display":"flex","flexDirection":"column","gap":"16px","alignItems":"flex-start"}}>
          <span style={{"width":"56px","height":"56px","display":"flex","alignItems":"center","justifyContent":"center","background":"#2F3091","color":"#fff","fontSize":"26px"}}>✓</span>
          <h2 style={{"margin":"0","fontSize":"34px","fontWeight":"700","fontStretch":"112%"}}>Talebiniz alındı.</h2>
          <p style={{"margin":"0","fontSize":"17px","lineHeight":"1.65","color":"#5A5C74"}}>Ekibimiz en geç 1 iş günü içinde sizinle iletişime geçecek.</p>
          <button onClick={reset} style={{"marginTop":"8px","height":"50px","padding":"0 24px","background":"#2F3091","color":"#fff","border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em"}}>YENİ TALEP</button>
        </div>
      </>) : null}
      {(notSent) ? (<>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","color":"#2F3091"}}>01 · HİZMET TÜRÜ</div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill,minmax(min(200px,100%),1fr))","gap":"10px","marginTop":"16px"}}>
          {(services || []).map((s, $index) => (<React.Fragment key={$index}>
            <button onClick={s.select} style={{"minHeight":"64px","padding":"14px 16px","background":s.bg,"color":s.color,"border":`1px solid ${s.border}`,"cursor":"pointer","fontFamily":"inherit","fontSize":"15px","fontWeight":"600","textAlign":"left","display":"flex","alignItems":"center","gap":"12px","transition":"background 0.2s"}}>
              <span style={{"width":"9px","height":"9px","flexShrink":"0","background":s.dot,"transform":"rotate(45deg)"}}></span>{s.label}
            </button>
          </React.Fragment>))}
        </div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","color":"#2F3091","marginTop":"40px"}}>02 · PROJE BİLGİLERİ</div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(240px,100%),1fr))","gap":"18px","marginTop":"16px"}}>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B"}}>İlçe / Konum<input placeholder="Örn. Beşiktaş, İstanbul" style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} /></label>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B"}}>Yaklaşık alan (m²)<input placeholder="Örn. 1.200" style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} /></label>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B","gridColumn":"1/-1"}}>Proje hakkında<textarea rows="5" placeholder="Bina yaşı, kat sayısı, bağımsız bölüm sayısı, beklentileriniz…" style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%","height":"auto","padding":"14px 16px","resize":"vertical","lineHeight":"1.6"}}></textarea></label>
        </div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","color":"#2F3091","marginTop":"40px"}}>03 · İLETİŞİM</div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(240px,100%),1fr))","gap":"18px","marginTop":"16px"}}>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B"}}>Ad Soyad *<input value={name} onChange={onName} style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} /></label>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B"}}>Telefon *<input value={phone} onChange={onPhone} placeholder="05xx xxx xx xx" style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} /></label>
          <label style={{"display":"flex","flexDirection":"column","gap":"8px","fontSize":"13px","fontWeight":"600","color":"#15182B","gridColumn":"1/-1"}}>E-posta<input type="email" placeholder="ornek@mail.com" style={{"height":"54px","padding":"0 16px","background":"#fff","border":"1px solid rgba(20,22,58,0.18)","fontFamily":"inherit","fontSize":"15px","color":"#15182B","outline":"none","width":"100%"}} /></label>
        </div>
        <label style={{"display":"flex","gap":"12px","alignItems":"flex-start","marginTop":"24px","fontSize":"14px","lineHeight":"1.5","color":"#5A5C74","cursor":"pointer"}}><input type="checkbox" checked={kvkk} onChange={onKvkk} style={{"width":"18px","height":"18px","marginTop":"2px","accentColor":"#2F3091"}} />KVKK Aydınlatma Metni'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.</label>
        {(showErr) ? (<><div style={{"marginTop":"16px","padding":"12px 16px","background":"#F6F7FB","borderLeft":"3px solid #3E43B8","fontSize":"14px","color":"#15182B"}}>Lütfen hizmet türü, ad soyad, telefon ve KVKK onayını doldurun.</div></>) : null}
        <button onClick={submit} style={{"marginTop":"28px","height":"58px","padding":"0 32px","background":"#3E43B8","color":"#fff","border":"none","cursor":"pointer","fontFamily":"inherit","fontSize":"14px","fontWeight":"700","letterSpacing":"0.1em","display":"flex","alignItems":"center","gap":"14px"}}>TEKLİF TALEBİ GÖNDER <span>→</span></button>
      </>) : null}
    </div>
    <aside style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
      <div style={{"background":"#2F3091","color":"#fff","padding":"32px 30px","display":"flex","flexDirection":"column","gap":"18px"}}>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","color":"#8589E6"}}>NASIL İLERLİYORUZ?</div>
        {(flow || []).map((f, $index) => (<React.Fragment key={$index}>
          <div style={{"display":"grid","gridTemplateColumns":"40px 1fr","gap":"14px","paddingTop":"16px","borderTop":"1px solid rgba(255,255,255,0.18)"}}>
            <span style={{"fontSize":"20px","fontWeight":"800","fontStretch":"118%","color":"#8589E6"}}>{f.n}</span>
            <div><div style={{"fontSize":"16px","fontWeight":"700"}}>{f.t}</div><div style={{"marginTop":"4px","fontSize":"14px","lineHeight":"1.5","color":"rgba(255,255,255,0.75)"}}>{f.d}</div></div>
          </div>
        </React.Fragment>))}
      </div>
      <div style={{"background":"#fff","border":"1px solid rgba(20,22,58,0.08)","padding":"28px 30px","display":"flex","flexDirection":"column","gap":"12px","fontSize":"15px"}}>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","color":"#5A5C74"}}>DOĞRUDAN İLETİŞİM</div>
        <a href="tel:+902122238812" style={{"fontSize":"22px","fontWeight":"700","fontStretch":"110%","color":"#2F3091"}}>+90 212 223 88 12</a>
        <a href="mailto:info@sayda.com.tr" style={{"fontWeight":"600","color":"#15182B"}}>info@sayda.com.tr</a>
        <span style={{"lineHeight":"1.6","color":"#5A5C74"}}>Şalcıkır Cad. Kaydırak Sok. No: 3/1<br />Tarabya / İstanbul</span>
      </div>
    </aside>
  </div>
</section>

<footer style={{"background":"#0D1533","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"90px 40px 60px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))","gap":"56px"}}>
    <div style={{"gridColumn":"span 2","maxWidth":"420px"}}>
      <img src="/img/sayda-logo.png" alt="Sayda İnşaat" style={{"height":"52px","width":"auto","display":"block","filter":"brightness(0) invert(1)"}} />
      <div style={{"marginTop":"18px","fontSize":"12px","fontWeight":"600","letterSpacing":"0.32em","textTransform":"uppercase","color":"#8589E6"}}>İnşaat Taahhüt · Since 1996</div>
      <p style={{"margin":"22px 0 0","fontSize":"15px","lineHeight":"1.7","color":"rgba(255,255,255,0.65)"}}>1996'dan bu yana İstanbul'da kentsel dönüşüm ve müteahhitlik.</p>
      <div style={{"display":"flex","gap":"10px","marginTop":"28px"}}>
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="teklifal-h3">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="teklifal-h4">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="teklifal-h5">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="teklifal-h6">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="teklifal-h7">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default TeklifAl;

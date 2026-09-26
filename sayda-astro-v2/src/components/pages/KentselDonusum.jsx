import React from 'react';

class DCLogic extends React.Component {}

class KentselDonusum extends DCLogic {
  state = { menu: null, faq: 0 };
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
      label, children: children.map(c => ({ label: c, href: ({ 'Hakkımızda': '/hakkimizda', 'Vizyon & Misyon': '/hakkimizda/vizyon-misyon', 'Belgelerimiz': '/belgeler', 'Beyaz Yaka': '/kariyer#beyaz-yaka', 'Kalfa (Ekipli)': '/kariyer#kalfa-ekipli', 'Kat Karşılığı İnşaat': '/hizmetler#kat-karsiligi-insaat', 'Alt Müteahhitlik': '/hizmetler#alt-muteahhitlik', 'Anahtar Teslim Müteahhitlik': '/hizmetler#anahtar-teslim-muteahhitlik', 'Proje Yönetimi & Danışmanlık': '/hizmetler#proje-yonetimi-danismanlik', 'Otel Renovasyonu': '/hizmetler#otel-renovasyonu', 'Devam Eden Projeler': '/projeler#devam-eden', 'Tamamlanan Projeler': '/projeler#tamamlanan' })[c] || '#' })), href, hasChildren: children.length > 0, active: i === 4,
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
      pillars: [
        { t: 'Güvenli Yapılar', d: 'Depreme dayanıklı, uzun ömürlü' },
        { t: 'Uzman Kadro', d: 'Deneyimli mühendis ve mimarlar' },
        { t: 'Yasal Uyum', d: 'Tüm süreçlerde mevzuata uygunluk' },
      ],
      perks: [
        { n: '01', t: 'Modern Yaşam Alanları', d: 'Konforlu ve estetik projeler' },
        { n: '02', t: 'Şeffaf Süreç', d: 'Arsa ve bina sahiplerine tüm adımlarda bilgilendirme' },
        { n: '03', t: 'Kira ve Kredi Desteği', d: 'Devlet destekleriyle güçlü çözümler' },
        { n: '04', t: 'Deneyim ve Güven', d: 'İstanbul ve çevresinde başarılı projeler' },
      ],
      steps: [
        ['Risk Tespiti ve Ön Değerlendirme', 'İmar durumu, yapı analizi, risk analizi ve fizibilite çalışması yapılır.'],
        ['Şartname ve Sözleşme', 'Kat karşılığı veya sözleşme koşulları netleştirilir.'],
        ['Projelendirme', 'Mimari, statik, mekanik ve elektrik projeleri hazırlanır.'],
        ['Ruhsat ve Yasal İzinler', 'Gerekli tüm ruhsat ve yasal izin süreçleri yürütülür.'],
        ['İnşaat Süreci', 'Saha ekibimiz projeyi zaman planına göre yürütür.'],
        ['Teslim & İskan', 'İskan belgesi alınır ve anahtar teslimi yapılır.'],
      ].map(([t, d], i) => ({ n: '0' + (i + 1), t, d })),
      legal: [
        { t: 'Arsa ve Bina Sahiplerine Özel Çözümler', d: 'Her proje için yerinde analiz ve en uygun dönüşüm modeli.' },
        { t: 'Finansman ve Destek Yönetimi', d: 'Kira yardımı, kredi desteği ve teşvik süreçlerinde danışmanlık.' },
        { t: 'Tek Muhatap, Tüm Süreç', d: 'Projelendirmeden iskan alımına kadar tek ekiple koordinasyon.' },
        { t: 'Şeffaf ve Güvenilir Yaklaşım', d: 'Düzenli bilgilendirme, raporlama ve açık iletişim.' },
      ],
      faq: [
        ['Kat karşılığı oranı nasıl belirlenir?', 'Arsanın/binanın bulunduğu bölgenin emsal değerleri, imar durumu ve inşaat maliyeti birlikte değerlendirilerek hak sahipleri ile müteahhit arasında karşılıklı olarak belirlenir. Bölgeden bölgeye oran değişebilir.'],
        ['Süreç ortalama ne kadar sürer?', 'Risk raporu alımından iskana kadar geçen süre binanın büyüklüğüne, kat maliklerinin anlaşma hızına ve ruhsat sürecine bağlıdır. Teknik değerlendirme ve anlaşma aşaması genellikle birkaç ay, inşaat süreci ise proje ölçeğine göre 1–2 yıl sürer.'],
        ['Kira yardımından kim, nasıl yararlanır?', "6306 sayılı kanun kapsamında risk raporu alınan binalardaki hak sahipleri, Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na başvurarak kira yardımı veya kredi desteğinden yararlanabilir. Başvuru için risk raporu, tapu ve hak sahipliğini gösteren belgeler gereklidir."],
        ['Kat maliklerinin tamamı anlaşmak zorunda mı?', 'Hayır. 6306 sayılı kanun gereği kat maliklerinin en az 2/3 çoğunluğunun kararı yeterlidir; azınlıkta kalanlar bu karara uymak zorundadır.'],
        ['Müteahhit seçerken nelere dikkat edilmeli?', 'İş bitirme belgesi geçmişi, müteahhitlik yetki belgesi grubu, tamamlanan proje referansları ve sözleşme şartlarının netliği (teslim tarihi, malzeme kalitesi, kat karşılığı oranı) en önemli kriterlerdir.'],
        ['Riskli yapı tespiti nasıl yapılır?', 'Binanın deprem güvenliği, lisanslı kuruluşlar tarafından yapılan inceleme ve analizlerle belirlenir; sonuç risk raporu olarak düzenlenir. Ayrıntılar için Rehber sayfamızdaki yazıya göz atabilirsiniz.'],
      ].map(([q, a], i) => { const open = this.state.faq === i; return { q, a, open, icon: open ? '−' : '+', iconBg: open ? '#2F3091' : '#F6F7FB', iconColor: open ? '#fff' : '#2F3091', border: open ? 'rgba(47,48,145,0.45)' : 'rgba(20,22,58,0.08)', toggle: () => this.setState(s => ({ faq: s.faq === i ? -1 : i })) }; }),
      footerCols: [
        { title: 'Hizmetler', links: ['Kentsel Dönüşüm', 'Kat Karşılığı İnşaat', 'Alt Müteahhitlik', 'Anahtar Teslim', 'Proje Yönetimi', 'Otel Renovasyonu'] },
        { title: 'Kurumsal', links: ['Hakkımızda', 'Vizyon & Misyon', 'Projeler', 'Belgeler', 'Haberler', 'İK', 'İletişim'] },
      ],
    };
  }
  render() {
    const { toggleMobile, closeMenu, navPad, navTrack, burger, navShown, mobileOpen, nav, pillars, perks, steps, legal, faq, footerCols } = this.renderVals();
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: ".kentseldonusum-h0:hover{background:#2F3091 !important;color:#fff !important}\n.kentseldonusum-h1:hover{background:#2F3091 !important;color:#fff !important}\n.kentseldonusum-h2:hover{color:#fff !important}\n.kentseldonusum-h3:hover{background:#2F3091 !important;color:#fff !important}\n.kentseldonusum-h4:hover{border-color:#fff !important;background:rgba(255,255,255,0.08) !important;color:#fff !important}\n.kentseldonusum-h5:hover{color:#8589E6 !important}\n.kentseldonusum-h6:hover{background:#0D1533 !important;color:#fff !important}\n.kentseldonusum-h7:hover{border-color:#2F3091 !important;color:#2F3091 !important}\n.kentseldonusum-h8:hover{background:#2F3091 !important;color:#fff !important}\n.kentseldonusum-h9:hover{border-color:#fff !important;color:#fff !important}\n.kentseldonusum-h10:hover{border-color:#fff !important;color:#fff !important}\n.kentseldonusum-h11:hover{border-color:#fff !important;color:#fff !important}\n.kentseldonusum-h12:hover{color:#fff !important}\n.kentseldonusum-h13:hover{color:#fff !important}\n.kentseldonusum-h14:hover{color:#fff !important}" }} />
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
                <a href={c.href} style={{"display":"block","padding":"12px 24px","fontSize":"14px","fontWeight":"500","color":"rgba(255,255,255,0.85)"}} className="kentseldonusum-h0">{c.label}</a>
              </React.Fragment>))}
            </div>
          </>) : null}
        </div>
      </React.Fragment>))}
      <a href="/teklif-al" style={{"marginLeft":"14px","display":"flex","alignItems":"center","gap":"10px","height":"48px","padding":"0 24px","background":"#3E43B8","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.09em","textTransform":"uppercase","fontStretch":"108%","whiteSpace":"nowrap"}} className="kentseldonusum-h1">Teklif Al <span style={{"fontSize":"16px"}}>→</span></a>
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

<section data-screen-label="Kentsel Hero" style={{"position":"relative","background":"#0D1533","color":"#fff","overflow":"hidden"}}>
  <img src="https://sayda-chi.vercel.app/img/sayda-insaat-hero01.webp" alt="Kentsel dönüşüm şantiyesi" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
  <div style={{"position":"absolute","inset":"0","background":"linear-gradient(90deg,rgba(13,21,51,0.94) 0%,rgba(13,21,51,0.7) 50%,rgba(13,21,51,0.3) 100%)"}}></div>
  <div style={{"position":"relative","maxWidth":"1400px","margin":"0 auto","padding":"56px 40px 0","minHeight":"720px","display":"flex","flexDirection":"column"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"10px","fontSize":"13px","fontWeight":"500","color":"rgba(246,247,251,0.6)"}}>
      <a href="/" style={{"color":"rgba(246,247,251,0.6)"}} className="kentseldonusum-h2">Ana Sayfa</a><span>/</span><span style={{"color":"#F6F7FB"}}>Kentsel Dönüşüm</span>
    </div>
    <div style={{"flex":"1","display":"flex","flexDirection":"column","justifyContent":"center","padding":"64px 0","maxWidth":"820px"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"14px","fontSize":"13px","fontWeight":"600","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}><span style={{"width":"36px","height":"2px","background":"#8589E6"}}></span>Kentsel Dönüşüm</div>
      <h1 style={{"margin":"0","fontStretch":"122%","fontWeight":"800","fontSize":"clamp(40px,5.4vw,80px)","lineHeight":"0.98","letterSpacing":"-0.01em","textTransform":"uppercase"}}>Daha güvenli,<br />daha yaşanabilir<br /><span style={{"fontWeight":"300","color":"#8589E6"}}>bir gelecek için</span></h1>
      <p style={{"margin":"28px 0 0","maxWidth":"600px","fontSize":"18px","lineHeight":"1.65","color":"rgba(246,247,251,0.82)","textWrap":"pretty"}}>Riskli yapı tespitinden anahtar teslimine kadar kentsel dönüşüm sürecinin tamamında bina ve arsa sahiplerinin yanındayız. Yasal süreçler, finansman destekleri ve teknik uzmanlığımızla güvenli yaşam alanları üretiyoruz.</p>
      <div style={{"display":"flex","flexWrap":"wrap","gap":"12px","marginTop":"36px"}}>
        <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 28px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="kentseldonusum-h3">Ücretsiz Ön Değerlendirme <span>→</span></a>
        <a href="#" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 28px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="kentseldonusum-h4">Süreç Hakkında Bilgi Al</a>
      </div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(220px,1fr))","borderTop":"1px solid rgba(255,255,255,0.18)"}}>
      {(pillars || []).map((p, $index) => (<React.Fragment key={$index}>
        <div style={{"padding":"28px 24px 32px 0","display":"flex","gap":"16px","alignItems":"flex-start"}}>
          <span style={{"width":"10px","height":"10px","marginTop":"7px","flexShrink":"0","background":"#8589E6","transform":"rotate(45deg)"}}></span>
          <div><div style={{"fontSize":"17px","fontWeight":"700","fontStretch":"108%"}}>{p.t}</div><div style={{"marginTop":"4px","fontSize":"14px","color":"rgba(246,247,251,0.7)"}}>{p.d}</div></div>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Avantajlar" style={{"background":"#2F3091","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(240px,1fr))"}}>
    {(perks || []).map((p, $index) => (<React.Fragment key={$index}>
      <div style={{"padding":"40px 28px","borderLeft":"1px solid rgba(255,255,255,0.2)","display":"flex","flexDirection":"column","gap":"10px"}}>
        <span style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.14em","color":"#8589E6"}}>{p.n}</span>
        <div style={{"fontSize":"19px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.25"}}>{p.t}</div>
        <div style={{"fontSize":"14px","lineHeight":"1.55","color":"rgba(255,255,255,0.75)"}}>{p.d}</div>
      </div>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="Süreç" style={{"background":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px"}}>
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"flex-end","gap":"32px","marginBottom":"56px"}}>
      <div style={{"maxWidth":"640px"}}><div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Süreç</div><h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Kentsel dönüşüm süreci nasıl işliyor?</h2></div>
      <p style={{"margin":"0","maxWidth":"420px","fontSize":"16px","lineHeight":"1.65","color":"#5A5C74","textWrap":"pretty"}}>Projenizin her aşamasında şeffaf, planlı ve koordineli bir çalışma modeliyle ilerliyoruz.</p>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(360px,100%),1fr))","gap":"1px","background":"rgba(20,22,58,0.1)","border":"1px solid rgba(20,22,58,0.1)"}}>
      {(steps || []).map((s, $index) => (<React.Fragment key={$index}>
        <div style={{"background":"#fff","padding":"40px 36px 44px","display":"flex","flexDirection":"column","gap":"14px","minHeight":"240px"}}>
          <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start"}}>
            <span style={{"fontSize":"56px","fontWeight":"800","fontStretch":"120%","lineHeight":"0.9","color":"#2F3091","letterSpacing":"-0.02em"}}>{s.n}</span>
            <span style={{"padding":"6px 10px","background":"#F6F7FB","fontSize":"11px","fontWeight":"700","letterSpacing":"0.14em","color":"#5A5C74"}}>ADIM</span>
          </div>
          <h3 style={{"margin":"auto 0 0","fontSize":"22px","fontWeight":"700","fontStretch":"108%","lineHeight":"1.2"}}>{s.t}</h3>
          <p style={{"margin":"0","fontSize":"15px","lineHeight":"1.6","color":"#5A5C74","textWrap":"pretty"}}>{s.d}</p>
        </div>
      </React.Fragment>))}
    </div>
  </div>
</section>

<section data-screen-label="Yasal Güvence" style={{"background":"#172052","color":"#fff"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(460px,100%),1fr))","gap":"72px","alignItems":"center"}}>
    <div>
      <div style={{"position":"relative","aspectRatio":"4/3","overflow":"hidden","background":"#0D1533"}}>
        <img src="https://sayda-chi.vercel.app/img/projects/oyakkent-konut/oyakkent-konut.webp" alt="Konut projesi" style={{"width":"100%","height":"100%","objectFit":"cover","display":"block"}} />
        <div style={{"position":"absolute","left":"0","bottom":"0","background":"#2F3091","padding":"22px 28px"}}>
          <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","color":"#8589E6"}}>KANUN</div>
          <div style={{"fontSize":"48px","fontWeight":"800","fontStretch":"120%","lineHeight":"1"}}>6306</div>
        </div>
      </div>
    </div>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Yasal Güvence</div>
      <h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>6306 sayılı kanun kapsamında güvenli dönüşüm</h2>
      <p style={{"margin":"24px 0 0","fontSize":"17px","lineHeight":"1.7","color":"rgba(255,255,255,0.78)","textWrap":"pretty"}}>Kira ve kredi desteği süreçlerinden hak sahiplerinin başvurularına kadar tüm yasal adımlarda sizinleyiz.</p>
      <div style={{"display":"flex","flexDirection":"column","marginTop":"32px"}}>
        {(legal || []).map((l, $index) => (<React.Fragment key={$index}>
          <div style={{"display":"grid","gridTemplateColumns":"28px minmax(0,1fr)","gap":"16px","padding":"20px 0","borderTop":"1px solid rgba(255,255,255,0.14)"}}>
            <span style={{"width":"10px","height":"10px","marginTop":"8px","background":"#8589E6","transform":"rotate(45deg)"}}></span>
            <div><div style={{"fontSize":"18px","fontWeight":"700","fontStretch":"108%"}}>{l.t}</div><div style={{"marginTop":"6px","fontSize":"15px","lineHeight":"1.6","color":"rgba(255,255,255,0.7)"}}>{l.d}</div></div>
          </div>
        </React.Fragment>))}
      </div>
      <a href="#" style={{"display":"inline-flex","alignItems":"center","gap":"10px","marginTop":"28px","paddingBottom":"6px","borderBottom":"2px solid #8589E6","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase","color":"#fff"}} className="kentseldonusum-h5">Detaylı Bilgi <span>→</span></a>
    </div>
  </div>
</section>

<section data-screen-label="SSS" style={{"background":"#F6F7FB"}}>
  <div style={{"maxWidth":"1400px","margin":"0 auto","padding":"120px 40px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(360px,100%),1fr))","gap":"64px","alignItems":"start"}}>
    <div>
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#2F3091","marginBottom":"16px"}}>Merak Edilenler</div>
      <h2 style={{"margin":"0","fontSize":"44px","lineHeight":"1.05","fontWeight":"700","fontStretch":"112%","letterSpacing":"-0.015em","textWrap":"balance"}}>Sıkça sorulan sorular</h2>
      <p style={{"margin":"22px 0 0","maxWidth":"380px","fontSize":"16px","lineHeight":"1.65","color":"#5A5C74"}}>Aklınıza takılan başka bir soru varsa ekibimiz size yardımcı olmaktan memnuniyet duyar.</p>
      <div style={{"display":"flex","flexWrap":"wrap","gap":"12px","marginTop":"32px"}}>
        <a href="#" style={{"display":"inline-flex","alignItems":"center","gap":"10px","height":"50px","padding":"0 24px","background":"#2F3091","color":"#fff","fontSize":"13px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="kentseldonusum-h6">Tüm Soruları Gör <span>→</span></a>
        <a href="tel:+902122238812" style={{"display":"inline-flex","alignItems":"center","height":"50px","padding":"0 20px","border":"1.5px solid rgba(47,48,145,0.3)","color":"#2F3091","fontSize":"14px","fontWeight":"700"}} className="kentseldonusum-h7">+90 212 223 88 12</a>
      </div>
    </div>
    <div style={{"gridColumn":"span 2","display":"flex","flexDirection":"column","gap":"10px"}}>
      {(faq || []).map((q, $index) => (<React.Fragment key={$index}>
        <div style={{"background":"#fff","border":`1px solid ${q.border}`,"transition":"border-color 0.25s"}}>
          <button onClick={q.toggle} style={{"width":"100%","display":"flex","justifyContent":"space-between","alignItems":"center","gap":"20px","padding":"24px 28px","background":"none","border":"none","cursor":"pointer","fontFamily":"inherit","textAlign":"left","color":"#15182B"}}>
            <span style={{"fontSize":"18px","fontWeight":"700","fontStretch":"106%","lineHeight":"1.35"}}>{q.q}</span>
            <span style={{"width":"36px","height":"36px","flexShrink":"0","display":"flex","alignItems":"center","justifyContent":"center","background":q.iconBg,"color":q.iconColor,"fontSize":"20px","fontWeight":"500","transition":"background 0.25s"}}>{q.icon}</span>
          </button>
          {(q.open) ? (<>
            <div style={{"padding":"0 28px 26px","fontSize":"16px","lineHeight":"1.7","color":"#5A5C74","textWrap":"pretty"}}>{q.a}</div>
          </>) : null}
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
      <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.22em","textTransform":"uppercase","color":"#8589E6","marginBottom":"16px"}}>Birlikte Daha Güvenli Yarınlar</div>
      <h2 style={{"margin":"0","fontSize":"clamp(36px,4vw,56px)","lineHeight":"1.02","fontWeight":"700","fontStretch":"115%","letterSpacing":"-0.015em"}}>Kentsel dönüşüm projenizi birlikte hayata geçirelim.</h2>
      <p style={{"margin":"22px 0 0","fontSize":"18px","lineHeight":"1.6","color":"rgba(246,247,251,0.8)"}}>Deneyimimiz, uzman ekibimiz ve çözüm odaklı yaklaşımımızla yanınızdayız.</p>
    </div>
    <div style={{"display":"flex","flexWrap":"wrap","gap":"12px"}}>
      <a href="#" style={{"display":"flex","alignItems":"center","gap":"12px","height":"56px","padding":"0 30px","background":"#3E43B8","color":"#fff","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em","textTransform":"uppercase"}} className="kentseldonusum-h8">Teklif Al <span>→</span></a>
      <a href="tel:+902122238812" style={{"display":"flex","alignItems":"center","height":"56px","padding":"0 30px","border":"1.5px solid #8589E6","color":"#F6F7FB","fontSize":"14px","fontWeight":"700","letterSpacing":"0.08em"}} className="kentseldonusum-h9">+90 212 223 88 12</a>
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
        <a href="https://www.instagram.com/saydainsaat" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="kentseldonusum-h10">INSTAGRAM</a>
        <a href="#" style={{"display":"flex","alignItems":"center","justifyContent":"center","height":"40px","padding":"0 16px","border":"1px solid rgba(255,255,255,0.2)","fontSize":"12px","fontWeight":"600","letterSpacing":"0.1em","color":"#fff"}} className="kentseldonusum-h11">LINKEDIN</a>
      </div>
    </div>
    {(footerCols || []).map((fc, $index) => (<React.Fragment key={$index}>
      <div>
        <div style={{"fontSize":"12px","fontWeight":"700","letterSpacing":"0.2em","textTransform":"uppercase","color":"#8589E6","marginBottom":"22px"}}>{fc.title}</div>
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          {(fc.links || []).map((l, $index) => (<React.Fragment key={$index}>
            <a href="#" style={{"fontSize":"15px","color":"rgba(255,255,255,0.75)"}} className="kentseldonusum-h12">{l}</a>
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
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="kentseldonusum-h13">Gizlilik Politikası</a>
        <a href="#" style={{"color":"rgba(255,255,255,0.5)"}} className="kentseldonusum-h14">KVKK Aydınlatma Metni</a>
      </div>
    </div>
  </div>
</footer></div>
      </>
    );
  }
}

export default KentselDonusum;

/* global React, ReactDOM */
const { useState, useEffect } = React;

/* ───────────────────── Atoms ───────────────────── */

const Under = ({ children, thickness = 3, offset = 4 }) => (
  <span className="under" style={{ "--ub-t": thickness + "px", "--ub-o": offset + "px" }}>
    {children}
  </span>
);

const CourtLines = ({ opacity = 0.07 }) => (
  <svg className="court-lines" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
    <defs>
      <linearGradient id="cl-fade" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#7EC845" stopOpacity="0"/>
        <stop offset="40%" stopColor="#7EC845" stopOpacity="1"/>
        <stop offset="100%" stopColor="#7EC845" stopOpacity="0.2"/>
      </linearGradient>
    </defs>
    <g stroke="url(#cl-fade)" strokeWidth="1.2" fill="none">
      <rect x="120" y="120" width="1360" height="660" />
      <line x1="240" y1="120" x2="240" y2="780" />
      <line x1="1360" y1="120" x2="1360" y2="780" />
      <line x1="240" y1="320" x2="1360" y2="320" />
      <line x1="240" y1="580" x2="1360" y2="580" />
      <line x1="800" y1="320" x2="800" y2="580" />
      <line x1="800" y1="115" x2="800" y2="135" />
      <line x1="800" y1="765" x2="800" y2="785" />
      <line x1="120" y1="450" x2="1480" y2="450" strokeWidth="1.6"/>
    </g>
  </svg>
);

const Logo = ({ size = 28 }) => (
  <img
    src="assets/mptennis-logo.png"
    alt="MPTennis"
    className="logo-img"
    style={{ height: size + "px", width: "auto", display: "block" }}
  />
);

const CTA = ({ children, variant = "solid", onClick, full = false, arrow = true, size = "" }) => (
  <button className={`cta cta-${variant}${full ? " cta-full" : ""}${size ? " cta-" + size : ""}`} onClick={onClick} type="button">
    <span>{children}</span>
    {arrow && (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square"/>
      </svg>
    )}
  </button>
);

const Eyebrow = ({ children }) => (
  <div className="eyebrow">
    <span className="eyebrow-bar"/>
    <span>{children}</span>
  </div>
);

/* ───────────────────── Nav ───────────────────── */

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(window.innerWidth <= 880);

  React.useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 880);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const linkStyle = {fontSize:"11.5px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.78)",whiteSpace:"nowrap",textDecoration:"none"};
  const mobileLinkStyle = {fontSize:"15px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.9)",textDecoration:"none",display:"block",padding:"4px 0"};

  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:500,background:"rgba(10,22,40,0.97)",backdropFilter:"blur(14px)",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
      <div style={{maxWidth:"1320px",margin:"0 auto",padding:"14px clamp(20px,4vw,56px)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#top" aria-label="MPTennis" style={{flexShrink:0}}>
          <img src="assets/mptennis-logo.png" alt="MPTennis" style={{height: mobile ? "44px" : "100px",width:"auto",display:"block"}}/>
        </a>

        {!mobile && (
          <ul style={{display:"flex",gap:"22px",listStyle:"none",margin:0,padding:0,flex:1,justifyContent:"center"}}>
            <li><a href="#system" style={linkStyle}>The system</a></li>
            <li><a href="#access" style={linkStyle}>Three ways</a></li>
            <li><a href="#youtube" style={linkStyle}>YouTube</a></li>
            <li><a href="blog/" style={linkStyle}>Blog</a></li>
            <li><a href="tools/swingweight-estimator.html" style={linkStyle}>Tools</a></li>
            <li><a href="shop/" style={linkStyle}>Shop</a></li>
            <li><a href="#about" style={linkStyle}>About</a></li>
          </ul>
        )}

        {!mobile && (
          <div style={{display:"flex",alignItems:"center",gap:"24px",flexShrink:0}}>
            <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener" style={{fontSize:"12px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.12em",color:"#7EC845",whiteSpace:"nowrap",textDecoration:"none"}}>Watch free</a>
            <CTA variant="solid" arrow={false} onClick={() => window.open('https://www.acetenniscoach.ca','_blank','noopener')}>Try Ace free</CTA>
          </div>
        )}

        {mobile && (
          <button onClick={() => setOpen(o => !o)} aria-label="Menu" style={{display:"flex",flexDirection:"column",gap:"5px",background:"none",border:"none",cursor:"pointer",padding:"8px",flexShrink:0}}>
            <span style={{display:"block",width:"24px",height:"2px",background:"white",borderRadius:"2px"}}></span>
            <span style={{display:"block",width:"24px",height:"2px",background:"white",borderRadius:"2px"}}></span>
            <span style={{display:"block",width:"24px",height:"2px",background:"white",borderRadius:"2px"}}></span>
          </button>
        )}
      </div>

      {mobile && open && (
        <div style={{background:"rgba(10,22,40,0.98)",padding:"20px clamp(20px,4vw,56px) 28px",borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",flexDirection:"column",gap:"20px"}}>
          <a href="#system" onClick={() => setOpen(false)} style={mobileLinkStyle}>The system</a>
          <a href="#access" onClick={() => setOpen(false)} style={mobileLinkStyle}>Three ways</a>
          <a href="#youtube" onClick={() => setOpen(false)} style={mobileLinkStyle}>YouTube</a>
          <a href="blog/" onClick={() => setOpen(false)} style={mobileLinkStyle}>Blog</a>
          <a href="tools/swingweight-estimator.html" onClick={() => setOpen(false)} style={mobileLinkStyle}>Tools</a>
          <a href="shop/" onClick={() => setOpen(false)} style={mobileLinkStyle}>Shop</a>
          <a href="#about" onClick={() => setOpen(false)} style={mobileLinkStyle}>About</a>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"16px",display:"flex",flexDirection:"column",gap:"12px"}}>
            <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener" style={{...mobileLinkStyle,color:"#7EC845"}}>Watch free</a>
            <a href="https://www.acetenniscoach.ca" target="_blank" rel="noopener" onClick={() => setOpen(false)} style={{display:"inline-block",background:"#7EC845",color:"#0A1628",fontWeight:700,fontSize:"13px",letterSpacing:"0.1em",textTransform:"uppercase",padding:"12px 24px",borderRadius:"4px",textDecoration:"none",textAlign:"center"}}>Try Ace free</a>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ───────────────────── Hero ───────────────────── */

const audiencePills = ["Club Players", "Juniors"];
const credentialPills = [
  "Cade Nadeau · 11.20 UTR",
  "NCAA Captain",
  "Top-40 Canada"
];

const Hero = () => (
  <section id="top" className="hero hero-cinematic">
    <div className="hero-bg">
      <img src="assets/cade-snhu-court.jpg" alt="" />
      <div className="hero-cine-grad"/>
      <CourtLines opacity={0.05}/>
    </div>
    <div className="hero-cine-content">
      <Eyebrow>Club Players &amp; Juniors</Eyebrow>
      <h1 className="display display-xl">
        For players who<br/>
        want to <Under>actually</Under><br/>
        get better.
      </h1>
      <p className="lede lede-cine">
        Most club players train without a system. We fix that. One methodology,
        built for players who actually compete.
      </p>
      <ul className="hero-pills" aria-label="Audience">
        {audiencePills.map(p => (
          <li key={p} className="hero-pill hero-pill-audience">{p}</li>
        ))}
      </ul>
      <ul className="hero-pills" aria-label="Credentials">
        {credentialPills.map(p => (
          <li key={p} className="hero-pill">{p}</li>
        ))}
      </ul>
      <div className="hero-ctas">
        <CTA variant="solid" onClick={() => document.getElementById('access')?.scrollIntoView({behavior:'smooth'})}>Start here</CTA>
        <CTA variant="ghost" onClick={() => document.getElementById('youtube')?.scrollIntoView({behavior:'smooth'})}>Watch free on YouTube</CTA>
      </div>
    </div>
    <div className="hero-cine-credits">
      <span>13K+ subs</span>
      <span>·</span>
      <span>4M+ views</span>
      <span>·</span>
      <span>NCAA Captain · Top 40 Canada</span>
    </div>
    <div className="scroll-hint">
      <span>Scroll</span>
      <span className="scroll-line"/>
    </div>
  </section>
);

/* ───────────────────── Marquee ───────────────────── */

const Marquee = () => {
  const items = [
    "Tactical before technical", "Coached by competitors", "Match-pattern training",
    "11.20 UTR · still competing", "NCAA Captain · #1 S&D", "Top-40 Canada Doubles",
    "13,000+ YouTube subs", "4M+ video views", "Tennis Canada Club Pro 1"
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot"/>{t}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ───────────────────── Three Access Points ───────────────────── */

const accessPoints = [
  {
    id: "youtube",
    tag: "01 · Watch free",
    name: "MPTennis on YouTube",
    sub: "Start here.",
    desc: "Match breakdowns, tactics, and gear — the way we actually think about the game.",
    cta: "Watch now",
    note: "13K+ subs · 4M+ views · new video most weeks",
    img: "assets/cade-serve.jpg",
    href: "https://youtube.com/@mptennis",
    external: true
  },
  {
    id: "ace",
    tag: "02 · Try Ace free",
    name: "Ace Tennis Coach",
    sub: "AI coaching in your pocket.",
    desc: "Tactics before matches, racquet fit, drill modes — built around how club players actually play.",
    cta: "Try free",
    note: "5 sessions/mo free · $9/mo for unlimited",
    img: "assets/ace-app-dashboard.png",
    href: "https://www.acetenniscoach.ca/",
    external: true
  },
  {
    id: "inperson",
    tag: "03 · In person",
    name: "Train with us",
    sub: "Direct coaching from someone who still competes.",
    desc: "Limited spots. The same system we used to get Cade to college and pro tennis — applied to your game, in person.",
    cta: "Inquire",
    note: "Limited spots · juniors + competitive adults",
    img: "assets/cade-coaching-group.jpg",
    href: "mailto:chris@mptennis.ca"
  }
];

const AccessPoints = () => {
  const [open, setOpen] = useState("youtube");
  return (
    <section id="access" className="section section-access">
      <div className="section-head">
        <Eyebrow>Three ways to access the system</Eyebrow>
        <h2 className="display display-md">
          One <Under>methodology</Under>.<br/>
          Three ways in.
        </h2>
        <p className="section-sub">
          Club players, juniors, junior parents — wherever you are, whatever you can afford,
          there's a way to train with us.
        </p>
      </div>
      <div className="access-grid">
        {accessPoints.map(p => (
          <article
            key={p.id}
            className={`access-card${open === p.id ? " is-open" : ""}`}
            onMouseEnter={() => setOpen(p.id)}
          >
            <div className="access-img">
              <img src={p.img} alt=""/>
              <div className="access-img-grad"/>
            </div>
            <div className="access-body">
              <span className="access-tag">{p.tag}</span>
              <h3 className="access-name">{p.name}</h3>
              <p className="access-sub">{p.sub}</p>
              <p className="access-desc">{p.desc}</p>
              <div className="access-foot">
                <a href={p.href} className="access-cta" {...(p.external ? {target: "_blank", rel: "noopener"} : {})}>
                  {p.cta}
                  <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden>
                    <path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                  </svg>
                </a>
                <span className="access-note">{p.note}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

/* ───────────────────── The System / Method ───────────────────── */

const pillars = [
  {
    n: "01",
    t: "Tactical before technical",
    d: "Most lessons fix your grip. We fix your decisions. Technique follows tactics — not the other way around."
  },
  {
    n: "02",
    t: "Play · Practice · Play",
    d: "Drills that connect to points. Every practice session has a beginning, a middle, and a game situation at the end."
  },
  {
    n: "03",
    t: "Live ball, not feeding",
    d: "Basket feeding builds muscle memory. Live ball builds tennis players. We train the way the game is actually played."
  },
  {
    n: "04",
    t: "Coached by competitors",
    d: "Cade still competes. Chris still competes. We don't teach theory — we teach what we tested last weekend."
  }
];

const System = () => (
  <section id="system" className="section section-method">
    <div className="section-head">
      <Eyebrow>The MPTennis system</Eyebrow>
      <h2 className="display display-md">
        What actually <Under>works</Under>.<br/>
        And why most lessons don't.
      </h2>
      <p className="section-sub">
        Four principles. Twenty-plus years of competitive coaching behind them.
        It's not proprietary — it's just done honestly, every session, by coaches who still play.
      </p>
    </div>
    <div className="method-grid">
      {pillars.map(s => (
        <article key={s.n} className="method-card">
          <div className="method-num">{s.n}</div>
          <h3 className="method-title">{s.t}</h3>
          <p className="method-desc">{s.d}</p>
          <div className="method-line"/>
        </article>
      ))}
    </div>
  </section>
);

/* ───────────────────── Ace deep-dive ───────────────────── */

const aceModes = [
  { n: "01", t: "Ask Ace", d: "Any tennis question, anytime. Tactics, technique, footwork, mental game." },
  { n: "02", t: "Match Mode", d: "Tell Ace about your opponent. Get a tactical plan tailored to both of your games." },
  { n: "03", t: "Drill Mode", d: "Targeted drills with progressions. Practice with purpose, not by rote." },
  { n: "04", t: "Racquet Fit", d: "Frame, string, tension, lead tape — dial in a setup that matches how you actually play." }
];

const Ace = () => (
  <section id="ace" className="section section-ace">
    <CourtLines opacity={0.04}/>
    <div className="ace-head">
      <Eyebrow>A tool we built · Ace Tennis Coach</Eyebrow>
      <h2 className="display display-lg">
        The coaching <Under>system</Under>.<br/>
        In your pocket.
      </h2>
      <p className="ace-lede">
        Match prep, drills, and racquet fit — the same system we used to get Cade to
        college and pro tennis, in your pocket. Try it free, no credit card required.
      </p>
    </div>

    <div className="ace-supademo">
      <iframe
        src="https://app.supademo.com/embed/cmo0aunrt0004x20ja37bt1xi?embed_v=2&utm_source=embed"
        loading="lazy"
        title="Ace Tennis Coach · interactive walkthrough"
        allow="clipboard-write"
        frameBorder="0"
        allowFullScreen
      />
    </div>

    <div className="ace-modes">
      {aceModes.map(m => (
        <article key={m.n} className="ace-mode">
          <div className="ace-mode-head">
            <span className="ace-mode-num">{m.n}</span>
            <h3 className="ace-mode-title">{m.t}</h3>
          </div>
          <p className="ace-mode-desc">{m.d}</p>
        </article>
      ))}
    </div>

    <div className="ace-out">
      <CTA variant="solid" size="lg" onClick={() => window.open('https://www.acetenniscoach.ca', '_blank', 'noopener')}>
        Try Ace free
      </CTA>
      <span className="ace-out-note">No credit card required · 5 free sessions · acetenniscoach.ca</span>
    </div>
  </section>
);

/* ───────────────────── Quote ───────────────────── */

const Quote = () => (
  <section className="section section-quote">
    <div className="quote-inner">
      <div className="quote-mark">"</div>
      <blockquote className="quote-text">
        I was up 4-1 and uncomfortable. At the changeover I opened Ace, told it what was happening,
        got a <Under>game plan</Under> in 30 seconds. I finished 2nd in the tournament.
      </blockquote>
      <footer className="quote-by">
        <span className="quote-name">Bobby M.</span>
        <span className="quote-meta">Club player · Saint John, NB</span>
      </footer>
    </div>
  </section>
);

/* ───────────────────── YouTube ───────────────────── */

const ytVideos = [
  { tag: "Featured", time: "", title: "I'm Back. This Is The Racquet I'm Trusting in My Next Tournament", views: "", id: "tAbzn-1JjZQ", featured: true },
  { tag: "Match", time: "", title: "I Lowered My Tension to 44 lbs — You Should Too", views: "", id: "Q_OsDJT2rK8" },
  { tag: "Tactics", time: "", title: "8 Strength Training Exercises YOU NEED TO START DOING", views: "", id: "xpinp1WtmhY" },
  { tag: "Gear", time: "", title: "I Didn't Expect This From the Pro Staff 97 Classic", views: "", id: "4I5bnl3f988" },
  { tag: "Customisation", time: "", title: "I Trained 19 Days to Hit a 130 MPH Serve", views: "", id: "-hPJRxFafiA" }
].map(v => ({ ...v, img: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`, href: `https://youtu.be/${v.id}` }));

const YouTube = () => (
  <section id="youtube" className="section section-library">
    <div className="section-head section-head-row">
      <div>
        <Eyebrow>The system on YouTube · Free</Eyebrow>
        <h2 className="display display-md">
          Watch. Steal. <Under>Win</Under>.
        </h2>
      </div>
      <div className="yt-stats">
        <div><span className="yt-num">13K+</span><span className="yt-lbl">Subscribers</span></div>
        <div><span className="yt-num">4M+</span><span className="yt-lbl">Views</span></div>
        <div><span className="yt-num">Weekly</span><span className="yt-lbl">New videos</span></div>
      </div>
    </div>

    <div className="yt-grid">
      {ytVideos.map(v => (
        <a key={v.id} href={v.href} target="_blank" rel="noopener" className="yt-card">
          <div className="yt-thumb">
            <img src={v.img} alt={v.title} loading="lazy"/>
            <span className="play-btn" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="20" height="20"><path d="M14 10 L30 20 L14 30 Z" fill="currentColor"/></svg>
            </span>
          </div>
          <div className="yt-meta">
            <span className="yt-tag">{v.tag}</span>
            <h3 className="yt-title">{v.title}</h3>
          </div>
        </a>
      ))}
    </div>

    <div className="yt-foot">
      <CTA variant="ghost" onClick={() => window.open('https://youtube.com/@mptennis', '_blank', 'noopener')}>
        Subscribe on YouTube
      </CTA>
    </div>
  </section>
);

/* ───────────────────── About ───────────────────── */

const About = () => (
  <section id="about" className="section section-about">
    <div className="about-head">
      <Eyebrow>The team behind MPTennis</Eyebrow>
      <h2 className="display display-md">
        A competitor who <Under>coaches</Under>.<br/>
        A father who <Under>built it with him</Under>.
      </h2>
    </div>
    <div className="coaches">
      <article className="coach">
        <div className="coach-portrait">
          <img src="assets/cade-snhu-court.jpg" alt="Cade Nadeau"/>
          <div className="coach-tag">
            <span>Cade Nadeau</span>
            <span className="muted">Founder · Head coach · The face of MPTennis</span>
          </div>
        </div>
        <div className="coach-copy">
          <ul className="coach-creds" aria-label="Credentials">
            <li>11.20 UTR</li>
            <li>NCAA Captain</li>
            <li>Top 40 Canada · Doubles</li>
            <li>Tennis Canada Club Pro 1</li>
          </ul>
          <p>
            Active competitor. Hosts the YouTube channel. Founded Ace because club
            players deserve the same coaching juniors get.
          </p>
        </div>
      </article>
      <article className="coach">
        <div className="coach-portrait">
          <img src="assets/chris-cade-unb-gala.jpg" alt="Chris Nadeau (left) with Cade Nadeau"/>
          <div className="coach-tag">
            <span>Chris Nadeau</span>
            <span className="muted">Co-founder · Coach · Behind the scenes</span>
          </div>
        </div>
        <div className="coach-copy">
          <ul className="coach-creds" aria-label="Credentials">
            <li>UNB Reds · Head Coach</li>
            <li>Rothesay TC · Tennis Director</li>
            <li>Tennis Canada Club Pro 1</li>
            <li>25 yrs digital marketing</li>
          </ul>
          <p>
            Cade's father and business partner. Head Coach at UNB. Built MPTennis with
            Cade to scale what works — pro-level coaching, accessible everywhere.
          </p>
        </div>
      </article>
    </div>
  </section>
);

/* ───────────────────── Final CTA + Footer ───────────────────── */

const Foot = () => (
  <>
    <section className="section section-cta">
      <CourtLines opacity={0.05}/>
      <div className="cta-inner">
        <h2 className="display display-lg">
          Train with the <Under>system</Under>.<br/>
          Pick your access point.
        </h2>
        <p className="cta-sub">
          Start free on Ace. Watch on YouTube. Or come train with us in person.
          Pro-level coaching, three ways in.
        </p>
        <div className="hero-ctas">
          <a href="https://www.acetenniscoach.ca" target="_blank" rel="noopener" className="cta cta-solid">Start with Ace · Free →</a>
          <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener" className="cta cta-ghost">Subscribe on YouTube →</a>
          <a href="mailto:chris@mptennis.ca" className="cta cta-ghost">Inquire about coaching →</a>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="footer-inner">
        <Logo size={112} />
        <div className="footer-newsletter">
          <span className="footer-h">Newsletter</span>
          <p className="footer-news-sub">
            Get our 7 favourite drills — free. New tactics + gear notes most weeks.
          </p>
          <a href="https://go.mptennis.ca/7drills" target="_blank" rel="noopener" className="footer-news-cta">
            Get the 7 drills →
          </a>
        </div>
        <div className="footer-cols">
          <div>
            <span className="footer-h">Ace</span>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">Try free</a>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">Pricing</a>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">FAQ</a>
          </div>
          <div>
            <span className="footer-h">Watch &amp; Read</span>
            <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener">YouTube</a>
            <a href="https://www.instagram.com/mptennisnb/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/mptennisnb" target="_blank" rel="noopener">Facebook</a>
            <a href="blog/">Blog</a>
          </div>
          <div>
            <span className="footer-h">In person</span>
            <a href="https://rothesaytennis.com" target="_blank" rel="noopener">Rothesay TC</a>
            <a href="mailto:chris@mptennis.ca">help@mptennis.ca</a>
          </div>
        </div>
        <div className="footer-fine">
          <span>© 2026 MPTennis</span>
          <span>One system. Three ways in.</span>
        </div>
      </div>
    </footer>
  </>
);

/* ───────────────────── Tweaks ───────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "courtLines": true,
  "accentIntensity": "balanced"
}/*EDITMODE-END*/;

const Tweaks = ({ tweaks, setTweak }) => {
  const TP = window.TweaksPanel, TS = window.TweakSection,
        TR = window.TweakRadio, TT = window.TweakToggle;
  if (!TP) return null;
  return (
    <TP title="Tweaks">
      <TS label="Court line texture">
        <TT value={tweaks.courtLines} onChange={v => setTweak("courtLines", v)} label="Show on hero / CTA"/>
      </TS>
      <TS label="Accent intensity">
        <TR
          value={tweaks.accentIntensity}
          onChange={v => setTweak("accentIntensity", v)}
          options={[
            { value: "restrained", label: "Restrained" },
            { value: "balanced", label: "Balanced" },
            { value: "bold", label: "Bold" }
          ]}
        />
      </TS>
    </TP>
  );
};

/* ───────────────────── Root ───────────────────── */

const App = () => {
  const useTweaks = window.useTweaks;
  const [tweaks, setTweak] = useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-court-lines", !tweaks.courtLines);
    document.documentElement.dataset.accent = tweaks.accentIntensity || "balanced";
  }, [tweaks.courtLines, tweaks.accentIntensity]);

  return (
    <>
      <Nav/>
      <Hero/>
      <Marquee/>
      <AccessPoints/>
      <System/>
      <Ace/>
      <Quote/>
      <YouTube/>
      <About/>
      <Foot/>
      <Tweaks tweaks={tweaks} setTweak={setTweak}/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

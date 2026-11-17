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

/* ───────────────────── Hero ───────────────────── */

const Hero = () => (
  <section id="top" className="hero hero-cinematic">
    <div className="hero-bg">
      <img src="assets/cade-hero.jpg" alt="" style={{objectPosition: "center 25%"}} />
      <div className="hero-cine-grad"/>
      <CourtLines opacity={0.05}/>
    </div>
    <div className="hero-cine-content">
      <Eyebrow>MPTennis · For club players</Eyebrow>
      <h1 className="display display-xl">
        Gear that fits.<br/>
        Matches you <Under>win</Under>.
      </h1>
      <p className="lede lede-cine">
        Honest racquet and string tests, real match breakdowns, and the club player
        version of what works at the high level.
      </p>
      <div className="hero-ctas">
        <CTA variant="solid" onClick={() => window.open('https://youtube.com/@mptennis?sub_confirmation=1', '_blank', 'noopener')}>Subscribe on YouTube</CTA>
        <CTA variant="ghost" onClick={() => window.open('https://go.mptennis.ca/7drills', '_blank', 'noopener')}>Get the 7 free drills</CTA>
      </div>
    </div>
    <div className="hero-cine-credits">
      <span>14K+ subs</span>
      <span>·</span>
      <span>5M+ views</span>
      <span>·</span>
      <span>Cade Nadeau · 11.20 UTR · NCAA Captain</span>
    </div>
  </section>
);

/* ───────────────────── Featured video ───────────────────── */

const Featured = () => (
  <section id="featured" className="section">
    <div className="section-head">
      <Eyebrow>Latest video</Eyebrow>
      <h2 className="display display-md">
        The test a racquet has to <Under>pass</Under>.
      </h2>
      <p className="section-sub">
        Before Cade switches, a racquet has to hold up in real points. Here's the test the
        Head Boom Pro 98 went through, and how to run it on your own shots.
      </p>
    </div>
    <div style={{position: "relative", width: "100%", aspectRatio: "16 / 9", border: "1px solid var(--hairline)", overflow: "hidden"}}>
      <iframe
        src="https://www.youtube.com/embed/_ifBM0PsE-w?rel=0&modestbranding=1"
        title="The Test a Racquet Has to Pass Before I Switch (Head Boom Pro 98)"
        style={{position: "absolute", inset: 0, width: "100%", height: "100%", border: 0}}
        loading="lazy"
        allowFullScreen
      />
    </div>
    <div className="yt-foot" style={{justifyContent: "flex-start"}}>
      <a href="blog/how-to-test-a-tennis-racquet-head-boom-pro-98.html" className="access-cta">
        Read the write up
        <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden>
          <path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        </svg>
      </a>
    </div>
  </section>
);

/* ───────────────────── Video rows ───────────────────── */

const yt = (id, title) => ({ id, title, img: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, href: `https://youtu.be/${id}` });

const rows = [
  {
    id: "gear",
    eyebrow: "Gear tests",
    title: <>Find your <Under>fit</Under>. Then stop shopping.</>,
    sub: "Honest racquet and string reviews from a player who still competes. Who it fits, who should skip it, and the one flaw.",
    videos: [
      yt("xj4s3ucKj84", "Head Boom Pro 98: I Hated It... Now It's in My Bag"),
      yt("h8bIR9YbhWc", "I Like the Wilson Defyer 100 More Than the 98… Except For One Thing"),
      yt("FQ8n7oocRcA", "Best Tennis Strings for Club Players? I Tested 3 Hybrids"),
      yt("vFL523aGfnE", "Head Extreme Pro 98 Review: The Weight Caught Me Off Guard"),
      yt("Q_OsDJT2rK8", "I Lowered My Tension to 44 lbs")
    ]
  },
  {
    id: "matches",
    eyebrow: "On court with Cade",
    title: <>Play smarter, <Under>not more</Under>.</>,
    sub: "Cade playing, coaching and learning on court. What works at the high level, and how club players can use it.",
    videos: [
      yt("MVuKYsBQXoA", "He Switched to the Defyer 98. Then He Beat Me 6-2, 6-3"),
      yt("Wn646SLw858", "I Assessed My 55 Year Old Dad's Tennis Game: Here's What's Holding Him Back"),
      yt("EkfYiAzv1wQ", "I Had 5 Days to Prepare for a Pro Tennis Match"),
      yt("ELzO0vXt4QU", "I Won the First Set 6-0 vs a D1 Player. Then I Collapsed"),
      yt("-s9oyz-S8Xg", "What 15 Years of Tennis Has Taught Me About Getting Better")
    ]
  }
];

const VideoRow = ({ row }) => (
  <section id={row.id} className="section section-library">
    <div className="section-head">
      <Eyebrow>{row.eyebrow}</Eyebrow>
      <h2 className="display display-md">{row.title}</h2>
      <p className="section-sub">{row.sub}</p>
    </div>
    <div className="yt-grid">
      {row.videos.map(v => (
        <a key={v.id} href={v.href} target="_blank" rel="noopener" className="yt-card">
          <div className="yt-thumb">
            <img src={v.img} alt={v.title} loading="lazy"/>
            <span className="play-btn" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="20" height="20"><path d="M14 10 L30 20 L14 30 Z" fill="currentColor"/></svg>
            </span>
          </div>
          <div className="yt-meta">
            <h3 className="yt-title">{v.title}</h3>
          </div>
        </a>
      ))}
    </div>
  </section>
);

/* ───────────────────── Ace (styled like acetenniscoach.ca) ───────────────────── */

const acePlan = [
  { where: "On court", focus: "Closing out sets", task: "Serve plus one pattern", detail: "Pick your best serve and first ball. Play it out 20 times at match pace.", min: 15 },
  { where: "At home", focus: "Match routine", task: "Shadow your closing pattern", detail: "Shadow it at match speed, with your routine between points.", min: 10 },
  { where: "Off court", focus: "Your choice", task: "Strength", detail: "Lower body and core, sized to the time you have.", min: 30 }
];

const AceSection = () => (
  <section id="ace" className="section ace-brand">
    <div className="ace-brand-panel">
      <div className="ace-brand-copy">
        <div className="ace-brand-logo"><span className="ace-ball"/>Ace</div>
        <p className="ace-brand-eyebrow">Your daily tennis coach</p>
        <h2 className="ace-brand-h">Stop guessing what to practice. Know exactly what to work on today.</h2>
        <p className="ace-brand-sub">
          Ace builds three focused tasks every day around your game. On court or at home,
          sized to the time you have. Built by MPTennis.
        </p>
        <ul className="ace-brand-chips">
          <li>3 focused daily tasks</li>
          <li>Fits your schedule</li>
          <li>No court required</li>
        </ul>
        <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener" className="ace-brand-btn">Build My Free Plan →</a>
      </div>
      <div className="ace-brand-card" aria-label="Example daily plan">
        <div className="ace-brand-card-head">
          <span>Today's Plan</span>
          <span className="ace-mono">Example</span>
        </div>
        {acePlan.map(t => (
          <div key={t.task} className="ace-brand-task">
            <div className="ace-brand-task-top">
              <span className="ace-mono ace-where">{t.where}</span>
              <span className="ace-focus">Focus: <b>{t.focus}</b></span>
            </div>
            <div className="ace-brand-task-name">{t.task} <span>({t.min} min)</span></div>
            <p>{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────────────────── Where to go next ───────────────────── */

const links = [
  {
    id: "youtube",
    name: "MPTennis on YouTube",
    desc: "New gear tests and match lessons every week.",
    cta: "Subscribe",
    img: "assets/cade-serve.jpg",
    href: "https://youtube.com/@mptennis?sub_confirmation=1",
    external: true
  },
  {
    id: "reviews",
    name: "Reviews and tools",
    desc: "Written reviews, the racquet test, and the free swingweight estimator.",
    cta: "Browse",
    img: "assets/cade-backhand.jpg",
    href: "blog/"
  },
  {
    id: "coaching",
    name: "Coaching in person",
    desc: "Limited spots in New Brunswick for competitive adults and juniors.",
    cta: "Inquire",
    img: "assets/cade-coaching-group.jpg",
    href: "mailto:chris@mptennis.ca"
  }
];

const Links = () => (
  <section id="access" className="section section-access">
    <div className="section-head">
      <Eyebrow>Where to go next</Eyebrow>
      <h2 className="display display-md">Watch. Read. <Under>Play</Under>.</h2>
    </div>
    <div className="access-grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"}}>
      {links.map(p => (
        <a key={p.id} href={p.href} className="access-card" style={{textDecoration: "none", color: "inherit"}} {...(p.external ? {target: "_blank", rel: "noopener"} : {})}>
          <div className="access-img">
            <img src={p.img} alt=""/>
            <div className="access-img-grad"/>
          </div>
          <div className="access-body">
            <h3 className="access-name">{p.name}</h3>
            <p className="access-desc">{p.desc}</p>
            <div className="access-foot">
              <span className="access-cta">
                {p.cta}
                <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden>
                  <path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                </svg>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

/* ───────────────────── About ───────────────────── */

const About = () => (
  <section id="about" className="section">
    <div className="section-head" style={{marginBottom: 0}}>
      <Eyebrow>About MPTennis</Eyebrow>
      <h2 className="display display-md">High level to <Under>club level</Under>.</h2>
      <p className="section-sub">
        Honestly? Most of us don't need a new racquet. We need the right one, and a smarter way to play.
        Cade Nadeau played NCAA tennis, still competes, and coaches high performance juniors every day.
        His dad Chris coaches club players and the UNB teams. Together we take what works at the high level
        and bring it to club players who love to compete.
      </p>
    </div>
  </section>
);

/* ───────────────────── Signup ───────────────────── */

const Signup = () => (
  <section className="section section-cta">
    <CourtLines opacity={0.05}/>
    <div className="cta-inner">
      <h2 className="display display-lg">
        Get the 7 drills we use<br/>
        to win more <Under>matches</Under>.
      </h2>
      <p className="cta-sub">
        Free. Plus our weekly deep dive on gear and match play.
      </p>
      <div className="hero-ctas">
        <a href="https://go.mptennis.ca/7drills" target="_blank" rel="noopener" className="cta cta-solid">Get the free drills →</a>
      </div>
    </div>
  </section>
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
      <Hero/>
      <Featured/>
      {rows.map(r => <VideoRow key={r.id} row={r}/>)}
      <AceSection/>
      <Links/>
      <About/>
      <Signup/>
      <Tweaks tweaks={tweaks} setTweak={setTweak}/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

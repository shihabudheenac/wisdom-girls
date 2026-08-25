const LINKS = {
  peaceRadioAndroid: "https://play.google.com/store/apps/details?id=com.peaceradio",
  peaceRadioIos: "https://apps.apple.com/us/app/peace-radio-app/id1041963250?ls=1",
  zameelAndroid: "https://play.google.com/store/apps/details?id=com.wisdom.zameel&hl=en_IN",
  zameelIos: "https://apps.apple.com/in/app/zameel/id1505352802",
  whatsapp: "https://whatsapp.com/channel/0029Va9xkVmBA1euwvVulx0O",
  feedback: "FORM_URL_HERE"
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 18v2h14v-2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

function AppCard({
  logo,
  name,
  description,
  android,
  ios,
  accent
}: {
  logo: string;
  name: string;
  description: string;
  android?: string;
  ios?: string;
  accent: string;
}) {
  return (
    <article className="resource-card" style={{ "--accent": accent } as React.CSSProperties}>
      <div className="resource-head">
        <div className="app-logo-wrap">
          <img src={logo} alt="" className="app-logo" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="resource-actions">
        {android && (
          <a className="store-button" href={android} target="_blank" rel="noreferrer">
            <span className="store-icon">A</span>
            <span>
              <small>Download for</small>
              <strong>Android</strong>
            </span>
            <ArrowIcon />
          </a>
        )}
        {ios && (
          <a className="store-button" href={ios} target="_blank" rel="noreferrer">
            <span className="store-icon apple">●</span>
            <span>
              <small>Download for</small>
              <strong>iPhone / iOS</strong>
            </span>
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <div className="hero-inner">
          <img src="/girls-logo.png" alt="Wisdom Girls" className="girls-logo" />

          <div className="eyebrow">WISDOM GIRLS</div>
          <h1>
            കണ്ണൂർ ജില്ലാ
            <br />
            <span>വിദ്യാർത്ഥിനി സമ്മേളനം</span>
          </h1>

          <div className="event-meta">
            <div className="meta-item">
              <span className="meta-icon">27</span>
              <div>
                <small>തീയതി</small>
                <strong>2026 ആഗസ്റ്റ് 27</strong>
              </div>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-icon pin">⌖</span>
              <div>
                <small>വേദി</small>
                <strong>മുണ്ടയാട് ഇൻഡോർ സ്റ്റേഡിയം, കണ്ണൂർ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="section-heading">
          <span className="section-kicker">USEFUL RESOURCES</span>
          <h2>സമ്മേളനത്തിനൊപ്പം ആവശ്യമായവ</h2>
          <p>ആവശ്യമായ ആപ്പുകളും അപ്ഡേറ്റുകളും താഴെ നിന്ന് എളുപ്പത്തിൽ ലഭ്യമാക്കാം.</p>
        </div>

        <div className="resources">
          <AppCard
            logo="/peace-radio.png"
            name="Peace Radio"
            description="Peace Radio ആപ്പ് ഡൗൺലോഡ് ചെയ്ത് റേഡിയോ പരിപാടികൾ കേൾക്കാം."
            android={LINKS.peaceRadioAndroid}
            ios={LINKS.peaceRadioIos}
            accent="#00ad88"
          />

          <AppCard
            logo="/zameel.png"
            name="Zameel"
            description="Wisdom-ന്റെ Zameel ആപ്പ് ഉപയോഗിച്ച് ആവശ്യമായ സേവനങ്ങളിലേക്ക് എത്താം."
            android={LINKS.zameelAndroid}
            ios={LINKS.zameelIos}
            accent="#d51a83"
          />

          <article className="single-card whatsapp-card">
            <div className="resource-head">
              <div className="simple-icon whatsapp-icon">◉</div>
              <div>
                <h2>Wisdom Kannur WhatsApp Channel</h2>
                <p>സമ്മേളനവുമായി ബന്ധപ്പെട്ട പുതിയ അറിയിപ്പുകളും അപ്ഡേറ്റുകളും ലഭിക്കാൻ ചാനൽ പിന്തുടരുക.</p>
              </div>
            </div>
            <a className="primary-button" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp Channel തുറക്കുക</span>
              <ExternalIcon />
            </a>
          </article>

          <article className="feedback-card">
            <div className="feedback-mark">✦</div>
            <div className="feedback-copy">
              <span className="section-kicker">YOUR VOICE MATTERS</span>
              <h2>സമ്മേളനത്തെക്കുറിച്ചുള്ള അഭിപ്രായം പങ്കുവെക്കൂ</h2>
              <p>നിങ്ങളുടെ വിലയേറിയ അഭിപ്രായങ്ങളും നിർദേശങ്ങളും ഞങ്ങളുമായി പങ്കുവെക്കുക.</p>
            </div>
            <a
              className="feedback-button"
              href={LINKS.feedback}
              target="_blank"
              rel="noreferrer"
            >
              Feedback Form
              <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <footer>
        <img src="/girls-logo.png" alt="Wisdom Girls" />
        <p>കണ്ണൂർ ജില്ലാ വിദ്യാർത്ഥിനി സമ്മേളനം · 2026</p>
      </footer>
    </main>
  );
}
import { ChevronRight, ExternalLinkIcon } from "lucide-react";

const LINKS = {
  peaceRadioAndroid: "https://play.google.com/store/apps/details?id=com.peaceradio",
  peaceRadioIos: "https://apps.apple.com/us/app/peace-radio-app/id1041963250?ls=1",
  zameelAndroid: "https://play.google.com/store/apps/details?id=com.wisdom.zameel&hl=en_IN",
  zameelIos: "https://apps.apple.com/in/app/zameel/id1505352802",
  feedback: "https://docs.google.com/forms/d/e/1FAIpQLSf1G9VHzPVWB6xRuooEALAk09PH-aIUGoARsDU-AsJLCsC8jg/viewform?usp=header",
  kannurGirlsWhatsapp: "https://whatsapp.com/channel/0029Vb7YDuXDjiOXzzuqDV0D",
  stateGirlsInstagram: "https://www.instagram.com/wisdomgirlskerala?igsi=MTZsbzM0ZmVxZjM4eA==",
  stateGirlsWhatsapp: "https://whatsapp.com/channel/0029Va976FW9cDDbXqgw6U3h",
  profcon: "https://www.profcon.in",
  wisdomGlobalTv: "https://youtube.com/@wisdomglobaltv?si=w8Z5LWF7my5O9D_l"
};

function ArrowIcon() {
  return (
    // <svg viewBox="0 0 24 24" aria-hidden="true">
    //   <path d="M5 12h13M13 6l6 6-6 6" />
    // </svg>
    <ChevronRight />
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
    // <svg viewBox="0 0 24 24" aria-hidden="true">
    //   <path d="M14 4h6v6M20 4l-9 9" />
    //   <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    // </svg>
    <ExternalLinkIcon />
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
    <article className="relative overflow-hidden p-5 border border-white/10 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)]" style={{ "--accent": accent } as React.CSSProperties}>
      <div className="flex items-center gap-[15px]">
        <div className="w-[66px] h-[66px] shrink-0 grid place-items-center rounded-[17px] bg-white/90 overflow-hidden">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div>
          <h2 className="m-0 mb-1.5 text-lg">{name}</h2>
          <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[9px] mt-[17px]">
        {android && (
          <a className="flex items-center gap-[9px] min-w-0 p-[11px_10px] border border-white/10 bg-black/20 rounded-[13px] transition hover:-translate-y-0.5 hover:border-white/25" href={android} target="_blank" rel="noreferrer">
            <span className="w-7 h-7 shrink-0 grid place-items-center rounded-[9px] bg-[#222d32] text-[#9eeede] font-black text-[11px]">A</span>
            <span>
              <small className="block text-[8px] text-[#8f989f]">Download for</small>
              <strong className="block text-[11px] whitespace-nowrap">Android</strong>
            </span>
            <ArrowIcon />
          </a>
        )}
        {ios && (
          <a className="flex items-center gap-[9px] min-w-0 p-[11px_10px] border border-white/10 bg-black/20 rounded-[13px] transition hover:-translate-y-0.5 hover:border-white/25" href={ios} target="_blank" rel="noreferrer">
            <span className="w-7 h-7 shrink-0 grid place-items-center rounded-[9px] bg-[#222d32] text-white font-black text-[11px]">●</span>
            <span>
              <small className="block text-[8px] text-[#8f989f]">Download for</small>
              <strong className="block text-[11px] whitespace-nowrap">iPhone / iOS</strong>
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
    <main className="min-h-screen overflow-hidden relative">
      <div className="absolute w-[260px] h-[260px] rounded-full blur-[90px] pointer-events-none opacity-35 bg-[#00ad88] -left-[180px] top-40" />
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none opacity-35 bg-[#d51a83] -right-[200px] top-[540px]" />

      <section className="relative px-5 pt-8 pb-[34px] text-center">
        <div className="max-w-[900px] mx-auto">
          <img src="/girls-logo.png" alt="Wisdom Girls" className="w-[78px] h-[68px] sm:w-[88px] sm:h-[88px] object-contain mx-auto mb-2 sm:mb-2 drop-shadow-[0_12px_35px_rgba(213,26,131,.22)]" />

          {/* <div className="text-[11px] tracking-[.2em] font-extrabold text-[#6fe4c8]">WISDOM GIRLS</div> */}
          <h1 className="text-3xl leading-tight tracking-[-.025em] font-[Manjari,sans-serif] my-2 mb-4">
            <span className="text-lg !text-white">കണ്ണൂർ ജില്ലാ</span>
            <br />
            <span>വിദ്യാർത്ഥിനി സമ്മേളനം</span>
          </h1>

          {/* <div className="event-meta px-4 py-3"> */}
          <div className="px-4 py-3 flex flex-col md:flex-row gap-3 max-w-lg mx-auto justify-center bg-white/35 rounded-lg backdrop-blur-2xl">
            <div className="flex items-center gap-[11px]">
              {/* <span className="meta-icon">27</span> */}
              <div>
                {/* <small>തീയതി</small> */}
                <strong className="block text-xs leading-[1.35]">2026 ആഗസ്റ്റ് 27</strong>
              </div>
            </div>
            <div className="h-px w-full md:h-auto md:w-px bg-white/10" />
            <div className="flex items-center gap-[11px]">
              {/* <span className="meta-icon pin">⌖</span> */}
              <div>
                {/* <small>വേദി</small> */}
                <strong className="block text-xs leading-[1.35]">മുണ്ടയാട് ഇൻഡോർ സ്റ്റേഡിയം, കണ്ണൂർ</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-[880px] mx-auto px-[18px] pt4 pb-[70px]">
        {/* <div className="text-center mb-7">
          <span className="text-[11px] tracking-[.2em] font-extrabold text-[#6fe4c8]">USEFUL RESOURCES</span>
          <h2>സമ്മേളനത്തിനൊപ്പം ആവശ്യമായവ</h2>
          <p>ആവശ്യമായ ആപ്പുകളും അപ്ഡേറ്റുകളും താഴെ നിന്ന് എളുപ്പത്തിൽ ലഭ്യമാക്കാം.</p>
        </div> */}

        <div className="grid gap-3.5 sm:grid-cols-2">
          <article className="mt-px sm:col-span-2 p-[23px] rounded-[25px] bg-gradient-to-br from-[#d51a83]/15 via-[#4a28a9]/15 to-[#00ad88]/10] border border-white/10 md:grid md:grid-cols-[1fr_auto] md:gap-[30px] md:items-center">
            {/* <div className="feedback-mark">✦</div> */}
            <div className="min-w-0">
              <span className="text-[11px] tracking-[.2em] font-extrabold text-[#6fe4c8]">YOUR VOICE MATTERS</span>
              <h2 className="font-[Manjari,sans-serif] text-2xl leading-[1.35] my-2">സമ്മേളനത്തെക്കുറിച്ചുള്ള അഭിപ്രായം പങ്കുവെക്കൂ</h2>
              <p className="text-xs leading-[1.6] text-[#b7bec3] m-0">നിങ്ങളുടെ വിലയേറിയ അഭിപ്രായങ്ങളും നിർദേശങ്ങളും ഞങ്ങളുമായി പങ്കുവെക്കുക.</p>
            </div>
            <a
              className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-base font-extrabold bg-white text-[#16161b] md:w-[190px] md:mt-0"
              href={LINKS.feedback}
              target="_blank"
              rel="noreferrer"
            >
              Feedback Form
              <ArrowIcon />
            </a>
          </article>
          <AppCard
            logo="/radio-p.png"
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

          <article className="relative overflow-hidden p-5 border border-[#00ad88]/25 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-[15px]">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#00ad88]/15 text-[#4ce0bb] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                  <path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.2-.2.2-.7.7-.7 1.8s.7 2.1.8 2.2c.1.1 1.4 2.2 3.5 3.1.5.2.9.4 1.2.5.5.2.9.2 1.3.1.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2Z" />
                </svg>
              </div>
              <div>
                <h2>Girls Kannur WhatsApp Channel</h2>
                <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">കണ്ണൂർ ജില്ലാ വിദ്യാർത്ഥിനി വിഭാഗത്തിന്റെ പുതിയ അറിയിപ്പുകളും അപ്ഡേറ്റുകളും ലഭിക്കാൻ ചാനൽ പിന്തുടരുക.</p>
              </div>
            </div>
            <a className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-xs font-extrabold bg-[#00ad88] text-[#03130f]" href={LINKS.kannurGirlsWhatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp Channel തുറക്കുക</span>
              <ExternalIcon />
            </a>
          </article>

          <div className="relative overflow-hidden p-5 border border-white/10 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-[15px]">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#e1306c] to-[#f77737] text-white grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                </svg>
              </div>
              <div>
                <h2>State Girls Instagram</h2>
                <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">Wisdom Girls Keralaയുടെ ഔദ്യോഗിക Instagram പേജ് പിന്തുടരുക.</p>
              </div>
            </div>
            <a className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-xs font-extrabold bg-[#00ad88] text-[#03130f]" href={LINKS.stateGirlsInstagram} target="_blank" rel="noreferrer">
              <span>Instagram തുറക്കുക</span>
              <ExternalIcon />
            </a>
          </div>

          <div className="relative overflow-hidden p-5 border border-white/10 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-[15px]">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#00ad88]/15 text-[#4ce0bb] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                  <path d="M12 2a9.8 9.8 0 0 0-8.5 14.8L2 22l5.4-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.2-.2.2-.7.7-.7 1.8s.7 2.1.8 2.2c.1.1 1.4 2.2 3.5 3.1.5.2.9.4 1.2.5.5.2.9.2 1.3.1.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2Z" />
                </svg>
              </div>
              <div>
                <h2>State Girls WhatsApp Channel</h2>
                <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">സംസ്ഥാന തലത്തിലുള്ള Girls വിഭാഗത്തിന്റെ പുതിയ അറിയിപ്പുകൾ ലഭിക്കാൻ ചാനൽ പിന്തുടരുക.</p>
              </div>
            </div>
            <a className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-xs font-extrabold bg-[#00ad88] text-[#03130f]" href={LINKS.stateGirlsWhatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp Channel തുറക്കുക</span>
              <ExternalIcon />
            </a>
          </div>

          <div className="relative overflow-hidden border border-white/10 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:col-span-2">
            <div className="p-3 sm:p-4">
              <img
                src="/profcon-poster.jpg"
                alt="Profcon 2026 Professional Students Global Conference poster"
                className="w-full rounded-[16px] object-cover"
              />
            </div>
            <div className="px-5 pb-5">
              <div className="flex items-center gap-[15px]">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 text-white grid place-items-center text-2xl">↗</div>
                <div>
                  <h2 className="m-0 mb-1.5 text-lg">Profcon Registration</h2>
                  <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">Professional Students Global Conference 2026 — September 11, 12 & 13, Palakkad.</p>
                </div>
              </div>
              <a className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-xs font-extrabold bg-[#00ad88] text-[#03130f]" href={LINKS.profcon} target="_blank" rel="noreferrer">
                <span>Profcon Registration</span>
                <ExternalIcon />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden p-5 border border-white/10 rounded-[23px] bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-[15px]">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ff0000]/15 text-[#ff4d4d] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
                </svg>
              </div>
              <div>
                <h2>Wisdom Global TV</h2>
                <p className="m-0 text-xs leading-[1.55] text-[#a7afb5]">Wisdom Global TV YouTube ചാനലിലെ പുതിയ വീഡിയോകൾ കാണാം.</p>
              </div>
            </div>
            <a className="mt-[17px] w-full flex items-center justify-center gap-2.5 p-[13px_16px] rounded-[13px] text-xs font-extrabold bg-[#00ad88] text-[#03130f]" href={LINKS.wisdomGlobalTv} target="_blank" rel="noreferrer">
              <span>YouTube തുറക്കുക</span>
              <ExternalIcon />
            </a>
          </div>


        </div>
      </section>

      <footer className="px-5 py-[26px] pb-[38px] text-center border-t border-white/10">
        <img src="/girls-logo.png" alt="Wisdom Girls" width="100" className="mx-auto" />
        <p className="text-[10px] text-[#69737a] mt-2">Wisdom Islamic Girls Organization, Kannur District Committee</p>
      </footer>
    </main>
  );
}
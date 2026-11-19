function SignalArtwork() {
  return (
    <div className="signal-artwork" aria-label="Abstract signal emerging from a luminous digital horizon" role="img">
      <div className="artwork-glow artwork-glow-violet" />
      <div className="artwork-glow artwork-glow-cyan" />
      <div className="artwork-orbit orbit-outer" />
      <div className="artwork-orbit orbit-mid" />
      <div className="artwork-orbit orbit-inner" />
      <div className="artwork-crosshair crosshair-horizontal" />
      <div className="artwork-crosshair crosshair-vertical" />

      <svg className="signal-svg" viewBox="0 0 700 610" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="signalStroke" x1="112" y1="340" x2="588" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7465FF" stopOpacity="0" />
            <stop offset=".23" stopColor="#8A7BFF" />
            <stop offset=".53" stopColor="#78F4FF" />
            <stop offset=".77" stopColor="#8A7BFF" />
            <stop offset="1" stopColor="#7465FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamStroke" x1="350" y1="100" x2="350" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#81F5FF" stopOpacity="0" />
            <stop offset=".49" stopColor="#81F5FF" stopOpacity=".85" />
            <stop offset="1" stopColor="#8B79FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="coreFill" cx="0" cy="0" r="1" gradientTransform="matrix(0 90 -90 0 350 304)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A8FBFF" stopOpacity=".95" />
            <stop offset=".13" stopColor="#60EAF7" stopOpacity=".36" />
            <stop offset="1" stopColor="#6C66FF" stopOpacity="0" />
          </radialGradient>
          <filter id="signalBlur" x="65" y="205" width="570" height="250" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <path className="signal-beam" d="M350 87V527" stroke="url(#beamStroke)" strokeWidth="1" />
        <path d="M84 347H616M111 329H589M143 365H557" stroke="#A4AFCB" strokeOpacity=".12" strokeWidth="1" />
        <path className="signal-wave signal-wave-blur" d="M89 347H210L238 346L260 331L279 364L305 277L328 393L350 226L373 381L396 316L419 351L443 344H611" stroke="url(#signalStroke)" strokeWidth="8" filter="url(#signalBlur)" />
        <path className="signal-wave" d="M89 347H210L238 346L260 331L279 364L305 277L328 393L350 226L373 381L396 316L419 351L443 344H611" stroke="url(#signalStroke)" strokeWidth="2" />
        <circle cx="350" cy="307" r="94" fill="url(#coreFill)" />
        <circle className="core-ring core-ring-a" cx="350" cy="307" r="61" stroke="#8FF7FF" strokeOpacity=".55" />
        <circle className="core-ring core-ring-b" cx="350" cy="307" r="42" stroke="#C2FBFF" strokeOpacity=".72" />
        <circle cx="350" cy="307" r="6" fill="#D7FFFF" />
        <circle cx="350" cy="307" r="13" stroke="#9CF9FF" strokeOpacity=".65" />
        <path d="M350 199V214M350 400V415M242 307H257M443 307H458" stroke="#B5F9FF" strokeOpacity=".8" strokeWidth="1.5" />
        <path d="M350 109V184M350 430V501" stroke="url(#beamStroke)" strokeDasharray="2 8" />
        <circle cx="350" cy="144" r="2" fill="#B7FCFF" />
        <circle cx="350" cy="475" r="2" fill="#A596FF" />
      </svg>

      <span className="artwork-label label-top"><i /> SIGNAL DETECTED</span>
      <span className="artwork-label label-bottom">FREQUENCY <b>∞</b> / 27</span>
      <span className="artwork-coordinate coordinate-left">NIT / TRICHY</span>
      <span className="artwork-coordinate coordinate-right">ACM / CHAPTER</span>
      <span className="artwork-star star-one" aria-hidden="true">✳</span>
      <span className="artwork-star star-two" aria-hidden="true">✳</span>
      <span className="artwork-star star-three" aria-hidden="true">·</span>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ACM STUDENT CHAPTER · NIT TRICHY</p>
          <h1 id="hero-title">
            BEYOND<br />
            THE <span className="signal-word">SIGNAL<span className="title-period">.</span></span>
          </h1>
          <p className="hero-tagline">Where technology meets imagination.</p>
          <p className="hero-description">
            INFOTREK '27 is NIT Trichy's annual technical festival—a meeting point for curious minds, bold ideas, and what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#events">
              Explore events <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href="#about">
              <span className="play-icon" aria-hidden="true">▶</span> Discover more
            </a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-dot" />
            <span>AN OPEN INVITATION TO WHAT'S NEXT</span>
          </div>
        </div>

        <div className="hero-visual">
          <SignalArtwork />
        </div>
      </div>

      <div className="hero-bottom-bar" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
        <span>EST. NIT TRICHY</span>
      </div>
    </section>
  )
}

export default HeroSection

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-copy">
          <p className="eyebrow about-eyebrow">
            <span className="eyebrow-line" /> ABOUT THE EXPERIENCE
          </p>
          <h2 id="about-title">
            Curiosity is where
            <br />
            <span className="about-heading-accent">the future begins.</span>
          </h2>
          <p className="about-description">
            INFOTREK '27 is the annual technical festival of the ACM Student
            Chapter at NIT Tiruchirappalli. It brings curious minds together to
            explore technology, turn imaginative ideas into possibilities, and
            take on problems through creativity and collaboration.
          </p>
          <p className="about-description about-description-secondary">
            Beyond the signal is an invitation to experiment, share what you
            know, and discover what we can create when different perspectives
            meet.
          </p>
          <a className="about-link" href="#home">
            <span>BACK TO THE SIGNAL</span>
            <span aria-hidden="true">&uarr;</span>
          </a>
        </div>

        <div className="about-visual" role="img" aria-label="Abstract network of connected ideas">
          <div className="about-visual-grid" aria-hidden="true" />
          <div className="about-orbit about-orbit-outer" aria-hidden="true" />
          <div className="about-orbit about-orbit-inner" aria-hidden="true" />
          <div className="about-orbit-node node-north" aria-hidden="true" />
          <div className="about-orbit-node node-east" aria-hidden="true" />
          <div className="about-orbit-node node-south" aria-hidden="true" />
          <div className="about-orbit-node node-west" aria-hidden="true" />
          <div className="about-core" aria-hidden="true">
            <span className="about-core-mark">&infin;</span>
            <span className="about-core-label">IMAGINE / BUILD</span>
          </div>
          <span className="about-visual-caption caption-top" aria-hidden="true">IDEAS IN MOTION</span>
          <span className="about-visual-caption caption-bottom" aria-hidden="true">TECHNOLOGY &times; IMAGINATION</span>
        </div>
      </div>
      <div className="about-bottom-rule" aria-hidden="true">
        <span>INFOTREK '27</span>
        <span className="about-rule-line" />
        <span>WHERE TECHNOLOGY MEETS IMAGINATION</span>
      </div>
    </section>
  )
}

export default AboutSection

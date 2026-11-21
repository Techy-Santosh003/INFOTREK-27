import './Footer.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  function handleBackToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-wordmark" href="#home" aria-label="INFOTREK '27 home">
              <span className="footer-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>INFOTREK</span>
              <span className="footer-year">'27</span>
            </a>
            <p className="footer-identity">BEYOND THE SIGNAL</p>
            <p className="footer-tagline">Where technology meets imagination.</p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <p className="footer-label">EXPLORE</p>
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-attribution">
            <p className="footer-label">PRESENTED BY</p>
            <p>ACM Student Chapter</p>
            <p className="footer-institution">NIT Tiruchirappalli</p>
          </div>

          <button className="footer-back-to-top" type="button" onClick={handleBackToTop}>
            <span>Back to top</span>
            <span className="footer-top-arrow" aria-hidden="true">↑</span>
          </button>
        </div>

        <div className="footer-bottom">
          <span>© INFOTREK '27. All rights reserved.</span>
          <span className="footer-bottom-identity">BEYOND THE SIGNAL</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

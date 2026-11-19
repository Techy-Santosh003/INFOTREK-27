import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="INFOTREK '27 home" onClick={closeMenu}>
          <span className="wordmark-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="wordmark-name">INFOTREK</span>
          <span className="wordmark-year">'27</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <a
              className={index === 0 ? 'nav-link is-current' : 'nav-link'}
              href={item.href}
              aria-current={index === 0 ? 'page' : undefined}
              key={item.label}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="button button-register"
          type="button"
          disabled
          title="Official registration details have not been announced."
        >
          <span>Register</span>
          <span className="button-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </header>
  )
}

export default SiteHeader

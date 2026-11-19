import { useState } from 'react'

const contactCards = [
  {
    number: '01',
    label: 'OFFICIAL EMAIL',
    value: 'Email address placeholder',
    detail: 'Official contact details will be added here.',
    icon: '@',
    accent: 'cyan',
  },
  {
    number: '02',
    label: 'ORGANIZING TEAM',
    value: 'Team contact placeholder',
    detail: 'A way to reach the organizing team will be shared here.',
    icon: '+',
    accent: 'violet',
  },
  {
    number: '03',
    label: 'ACM STUDENT CHAPTER',
    value: 'NIT Tiruchirappalli',
    detail: "Organizers of INFOTREK '27.",
    icon: 'N',
    accent: 'lime',
  },
]

function ContactSection() {
  const [formStatus, setFormStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('Demo only: your entries passed browser validation. No message was sent or stored.')
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        <header className="contact-heading">
          <p className="eyebrow contact-eyebrow">
            <span className="eyebrow-line" /> CONNECT WITH US
          </p>
          <h2 id="contact-title">
            Let's Build
            <br />
            <span className="contact-heading-accent">What's Next.</span>
          </h2>
          <p className="contact-intro">
            Have a question or an idea to share? We’d love to hear from you.
            Reach out to the INFOTREK organizing team when official contact
            details are available.
          </p>
        </header>

        <div className="contact-cards">
          {contactCards.map((card) => (
            <article className={`contact-card contact-card-${card.accent}`} key={card.number}>
              <div className="contact-card-topline">
                <span className="contact-card-number">{card.number} / CONTACT</span>
                <span className="contact-card-icon" aria-hidden="true">{card.icon}</span>
              </div>
              <p className="contact-card-label">{card.label}</p>
              <h3>{card.value}</h3>
              <p className="contact-card-detail">{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="contact-form-layout">
          <div className="contact-form-copy">
            <span className="contact-form-index" aria-hidden="true">04</span>
            <p className="contact-form-kicker">A NOTE TO THE TEAM</p>
            <h3>Start a conversation.</h3>
            <p>
              Share a note using this frontend demo. It does not connect to an
              inbox or transmit your information.
            </p>
            <div className="contact-form-signal" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-form-note">
            <p className="contact-form-note" id="contact-form-note">
              Frontend-only demonstration. Fields are checked in your browser; nothing is sent or saved.
            </p>
            <div className="contact-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                minLength={2}
                maxLength={80}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                maxLength={254}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Write your note..."
                minLength={10}
                maxLength={1200}
                required
              />
            </div>
            <div className="contact-form-submit-row">
              <button className="contact-submit" type="submit">
                <span>Validate demo form</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <span className="contact-submit-caption">NO MESSAGE WILL BE SENT</span>
            </div>
            <p className="contact-form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
        </div>
      </div>

      <div className="contact-bottom-rule" aria-hidden="true">
        <span>INFOTREK '27</span>
        <span className="contact-rule-line" />
        <span>WHERE TECHNOLOGY MEETS IMAGINATION</span>
      </div>
    </section>
  )
}

export default ContactSection

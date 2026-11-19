const eventPlaceholders = [
  {
    number: '01',
    title: 'Event 01',
    category: 'Category placeholder',
    description: 'Placeholder description: event information will be added here.',
    visual: 'prism',
  },
  {
    number: '02',
    title: 'Event 02',
    category: 'Category placeholder',
    description: 'Placeholder description: event information will be added here.',
    visual: 'signal',
  },
  {
    number: '03',
    title: 'Event 03',
    category: 'Category placeholder',
    description: 'Placeholder description: event information will be added here.',
    visual: 'orbit',
  },
]

function EventsSection() {
  return (
    <section className="events-section" id="events" aria-labelledby="events-title">
      <div className="events-container">
        <header className="events-heading">
          <p className="eyebrow events-eyebrow">
            <span className="eyebrow-line" /> EXPLORE THE LINEUP
          </p>
          <h2 id="events-title">
            Where Ideas
            <br />
            <span className="events-heading-accent">Become Action.</span>
          </h2>
          <p className="events-intro">
            Explore the events and activities taking shape for INFOTREK '27.
            Details will be added as the lineup is announced.
          </p>
        </header>

        <div className="events-grid">
          {eventPlaceholders.map((event) => (
            <article className={`event-card event-card-${event.visual}`} key={event.number}>
              <div className="event-art" aria-hidden="true">
                <span className="event-art-index">PLACEHOLDER / {event.number}</span>
                <span className="event-art-geometry" />
                <span className="event-art-coordinate">SIGNAL / 27</span>
              </div>
              <div className="event-card-copy">
                <div className="event-card-meta">
                  <span className="event-card-number">{event.number}</span>
                  <span className="event-category">{event.category}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-card-footer">
                  <span>Details Coming Soon</span>
                  <span className="event-status-dot" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="events-placeholder-note">All event cards contain placeholder content.</p>
      </div>
      <div className="events-bottom-rule" aria-hidden="true">
        <span>LINEUP IN DEVELOPMENT</span>
        <span className="events-rule-line" />
        <span>INFOTREK '27</span>
      </div>
    </section>
  )
}

export default EventsSection

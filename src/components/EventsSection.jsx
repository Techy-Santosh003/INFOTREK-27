import { useState } from 'react'
import events from '../data/events.js'
import EventDetailsModal from './EventDetailsModal.jsx'

function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
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
              The event names reference INFOTREK '26; these proposed descriptions are
              provisional and subject to confirmation. Official details are coming soon.
            </p>
          </header>

          <div className="events-grid">
            {events.map((event) => (
              <article
                className={`event-card event-card-${event.visual}`}
                id={event.id}
                tabIndex="-1"
                aria-labelledby={`${event.id}-title`}
                key={event.id}
              >
                <div className="event-art" aria-hidden="true">
                  <span className="event-art-index">REFERENCE / {event.number}</span>
                  <span className="event-art-geometry" />
                  <span className="event-art-coordinate">SIGNAL / 27</span>
                </div>
                <div className="event-card-copy">
                  <div className="event-card-meta">
                    <span className="event-card-number">{event.number}</span>
                    <span className="event-provisional">PROVISIONAL</span>
                  </div>
                  <h3 id={`${event.id}-title`}>{event.title}</h3>
                  <p className="event-card-description">{event.description}</p>
                  <div className="event-card-footer">
                    <span>INFOTREK '27 · Details Coming Soon</span>
                    <span className="event-status-dot" aria-hidden="true" />
                  </div>
                </div>
                <button
                  className="event-card-trigger"
                  type="button"
                  aria-label={`Open provisional details for ${event.title}`}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvent(event)}
                />
              </article>
            ))}
          </div>
        </div>
        <div className="events-bottom-rule" aria-hidden="true">
          <span>LINEUP IN DEVELOPMENT</span>
          <span className="events-rule-line" />
          <span>INFOTREK '27</span>
        </div>
      </section>
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  )
}

export default EventsSection

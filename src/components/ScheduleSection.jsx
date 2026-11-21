import events, { proposedDays } from '../data/events.js'

function ScheduleSection() {
  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="schedule-container">
        <header className="schedule-heading">
          <p className="eyebrow schedule-eyebrow">
            <span className="eyebrow-line" /> THE ROADMAP
          </p>
          <h2 id="schedule-title">
            Three Days,
            <br />
            <span className="schedule-heading-accent">Beyond the Signal.</span>
          </h2>
          <p className="schedule-intro">
            Explore the proposed three-day lineup for INFOTREK '27. Dates, timings
            and venue details are subject to official organizer confirmation.
          </p>
          <p className="schedule-provisional-banner">
            <span className="schedule-provisional-dot" aria-hidden="true" />
            PROPOSED SCHEDULE DETAILS · SUBJECT TO OFFICIAL ORGANIZER CONFIRMATION
          </p>
        </header>

        <div className="schedule-days">
          {proposedDays.map((day) => (
            <section
              className={`schedule-day schedule-day-${day.accent}`}
              aria-labelledby={`schedule-day-${day.number}`}
              key={day.number}
            >
              <header className="schedule-day-header">
                <div>
                  <p className="schedule-day-kicker">PROPOSED DATE</p>
                  <h3 id={`schedule-day-${day.number}`}>{day.label}</h3>
                </div>
                <time dateTime={day.date}>{day.displayDate}</time>
              </header>

              <ol className="schedule-day-events">
                {events.filter((event) => event.day === day.number).map((event) => (
                  <li className="schedule-entry" key={event.id}>
                    <div className="schedule-entry-topline">
                      <span className="schedule-entry-number">{event.number}</span>
                      <span className="schedule-entry-day">{day.label} · PROPOSED</span>
                    </div>
                    <time className="schedule-entry-date" dateTime={day.date}>
                      {day.displayDate}
                    </time>
                    <h4>
                      <a className="schedule-event-link" href={`#${event.id}`}>
                        {event.title}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </h4>
                    <dl className="schedule-entry-details">
                      <div>
                        <dt>Proposed timing</dt>
                        <dd>{event.details.dateAndTime.time}</dd>
                      </div>
                      <div>
                        <dt>Proposed venue</dt>
                        <dd>{event.details.venue}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
      <div className="schedule-bottom-rule" aria-hidden="true">
        <span>PROPOSED LINEUP · DETAILS TO BE ANNOUNCED</span>
        <span className="schedule-rule-line" />
        <span>INFOTREK '27</span>
      </div>
    </section>
  )
}

export default ScheduleSection

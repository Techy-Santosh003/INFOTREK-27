const schedulePlaceholders = [
  {
    number: '01',
    time: '09:00 AM',
    title: 'Opening Ceremony — Placeholder',
    description: 'Placeholder description: introductory activity details will be added here.',
    accent: 'cyan',
  },
  {
    number: '02',
    time: '10:30 AM',
    title: 'Featured Session — Placeholder',
    description: 'Placeholder description: session information will be added here.',
    accent: 'violet',
  },
  {
    number: '03',
    time: '12:00 PM',
    title: 'Interactive Activity — Placeholder',
    description: 'Placeholder description: activity information will be added here.',
    accent: 'lime',
  },
  {
    number: '04',
    time: '02:00 PM',
    title: 'Collaborative Session — Placeholder',
    description: 'Placeholder description: session information will be added here.',
    accent: 'violet',
  },
  {
    number: '05',
    time: '04:00 PM',
    title: 'Closing Ceremony — Placeholder',
    description: 'Placeholder description: closing activity details will be added here.',
    accent: 'cyan',
  },
]

function ScheduleSection() {
  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="schedule-container">
        <header className="schedule-heading">
          <p className="eyebrow schedule-eyebrow">
            <span className="eyebrow-line" /> THE ROADMAP
          </p>
          <h2 id="schedule-title">
            Every Moment,
            <br />
            <span className="schedule-heading-accent">Engineered.</span>
          </h2>
          <p className="schedule-intro">
            A sample sequence of moments for INFOTREK '27. The times and
            activities shown here are illustrative placeholders; official
            schedule details will be added later.
          </p>
        </header>

        <ol className="schedule-timeline" aria-label="Illustrative schedule placeholders">
          {schedulePlaceholders.map((item, index) => (
            <li className={`schedule-item schedule-item-${item.accent}`} key={item.number}>
              <span className="schedule-marker" aria-hidden="true">
                <span>{item.number}</span>
              </span>
              <article className="schedule-card">
                <div className="schedule-card-topline">
                  <span className="schedule-sequence">ACTIVITY / {item.number}</span>
                  <span className="schedule-time">
                    <span>ILLUSTRATIVE TIME</span>
                    <time>{item.time}</time>
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="schedule-card-index" aria-hidden="true">0{index + 1}</span>
              </article>
            </li>
          ))}
        </ol>

        <p className="schedule-placeholder-note">All times and activity details on this roadmap are placeholders.</p>
      </div>
      <div className="schedule-bottom-rule" aria-hidden="true">
        <span>SEQUENCE IN DEVELOPMENT</span>
        <span className="schedule-rule-line" />
        <span>INFOTREK '27</span>
      </div>
    </section>
  )
}

export default ScheduleSection

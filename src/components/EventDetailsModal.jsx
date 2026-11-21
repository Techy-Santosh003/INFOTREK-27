import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function EventDetailsModal({ event, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
      previouslyFocused?.focus?.()
    }
  }, [])

  function handleKeyDown(keyboardEvent) {
    if (keyboardEvent.key === 'Escape') {
      keyboardEvent.preventDefault()
      onClose()
      return
    }

    if (keyboardEvent.key !== 'Tab') return

    const focusableElements = dialogRef.current?.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    const focusable = Array.from(focusableElements ?? [])
    const firstElement = focusable[0]
    const lastElement = focusable[focusable.length - 1]

    if (!firstElement || !lastElement) {
      keyboardEvent.preventDefault()
      return
    }

    if (keyboardEvent.shiftKey && document.activeElement === firstElement) {
      keyboardEvent.preventDefault()
      lastElement.focus()
    } else if (!keyboardEvent.shiftKey && document.activeElement === lastElement) {
      keyboardEvent.preventDefault()
      firstElement.focus()
    }
  }

  function handleBackdropClick(clickEvent) {
    if (clickEvent.target === clickEvent.currentTarget) onClose()
  }

  const detailSections = [
    { title: 'About the Event', paragraphs: [event.details.aboutEvent] },
    { title: 'Objective', paragraphs: [event.details.objective] },
    { title: 'Proposed Format', items: event.details.proposedFormat },
    { title: 'Proposed Rounds', items: event.details.proposedRounds },
    { title: 'Suggested Eligibility', paragraphs: [event.details.suggestedEligibility] },
    { title: 'Suggested Team Size', paragraphs: [event.details.suggestedTeamSize] },
    { title: 'Proposed Rules', items: event.details.proposedRules },
    { title: 'Suggested Evaluation Criteria', items: event.details.suggestedEvaluationCriteria },
    { title: 'Suggested Skills Required', items: event.details.suggestedSkills },
    {
      title: 'Proposed Date and Time',
      items: [
        `${event.details.dateAndTime.day}: ${event.details.dateAndTime.date}`,
        event.details.dateAndTime.time,
      ],
    },
    { title: 'Proposed Venue', paragraphs: [event.details.venue] },
    { title: 'Proposed Prizes', items: event.details.prizes },
    { title: 'Proposed Registration', paragraphs: [event.details.registration] },
  ]

  return createPortal(
    <div className="event-modal-backdrop" onClick={handleBackdropClick}>
      <section
        className="event-modal"
        id="event-details-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-introduction"
        ref={dialogRef}
        tabIndex="-1"
        onKeyDown={handleKeyDown}
      >
        <div className="event-modal-header">
          <div className="event-modal-heading-copy">
            <p className="event-modal-kicker">EVENT FILE / {event.number}</p>
            <h2 id="event-modal-title">{event.title}</h2>
          </div>
          <button
            className="event-modal-close"
            type="button"
            aria-label={`Close ${event.title} details`}
            ref={closeButtonRef}
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p className="event-modal-notice" role="note">
          PROPOSED EVENT DETAILS — Subject to official confirmation by the organizers.
        </p>

        <section className="event-modal-introduction" aria-labelledby="event-modal-introduction-title">
          <p className="event-modal-section-label" id="event-modal-introduction-title">SHORT INTRODUCTION</p>
          <p id="event-modal-introduction">{event.description}</p>
        </section>

        <div className="event-modal-details">
          {detailSections.map((section) => (
            <section className="event-modal-detail" key={section.title}>
              <h3>{section.title}</h3>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && (
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </section>
    </div>,
    document.body,
  )
}

export default EventDetailsModal

import { useDonation } from '../context/DonationContext.jsx'
import { HeartIcon, PledgeHandIcon } from './NgoIcons.jsx'

export default function CauseCard({ cause }) {
  const { openDonationModal, starredCauses, toggleStar } = useDonation()

  const percentRaised = Math.min(100, Math.round((cause.raised / cause.goal) * 100))
  const isStarred = starredCauses.includes(cause.id)

  return (
    <article className="cause-card">
      <div className="cause-card__img-container">
        <img
          src={cause.image}
          alt={cause.title}
          className="cause-card__img"
          loading="lazy"
        />
        <div className="cause-card__badges">
          <span className="cause-card__badge-cat">{cause.category}</span>
          {cause.urgent && (
            <span className="cause-card__badge-urgent">Urgent Need</span>
          )}
        </div>
        <button
          className={`cause-card__star-btn ${isStarred ? 'active' : ''}`}
          onClick={() => toggleStar(cause.id)}
          aria-label={isStarred ? 'Remove from saved causes' : 'Save cause'}
          title="Save this initiative"
        >
          <HeartIcon filled={isStarred} />
        </button>
      </div>

      <div className="cause-card__content">
        <div className="cause-card__location">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{cause.location}</span>
        </div>

        <h3 className="cause-card__title">{cause.title}</h3>
        <p className="cause-card__desc">{cause.tagline}</p>

        {/* Progress Bar & Financials */}
        <div className="cause-card__progress-box">
          <div className="cause-card__progress-bar">
            <div
              className="cause-card__progress-fill"
              style={{ width: `${percentRaised}%` }}
            />
          </div>
          <div className="cause-card__progress-metrics">
            <div>
              <span className="cause-card__metric-label">Raised</span>
              <strong className="cause-card__metric-val">₦{cause.raised.toLocaleString()}</strong>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span className="cause-card__metric-label">Funded</span>
              <strong className="cause-card__metric-val highlight">{percentRaised}%</strong>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="cause-card__metric-label">Goal</span>
              <strong className="cause-card__metric-val">₦{cause.goal.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        <div className="cause-card__impact-badge">
          <span>🎯 {cause.impactMetric}</span>
        </div>
      </div>

      <div className="cause-card__footer">
        <button
          className="btn btn--primary btn--full"
          onClick={() => openDonationModal(cause)}
        >
          <PledgeHandIcon />
          <span>Support This Cause</span>
        </button>
      </div>
    </article>
  )
}

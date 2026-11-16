import { useState } from 'react'
import { useDonation } from '../context/DonationContext.jsx'
import { causes } from '../data/causes.js'
import { CloseIcon, PledgeHandIcon } from './NgoIcons.jsx'

export default function DonationDrawer() {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    selectedCauseForDonation,
    setSelectedCauseForDonation,
    pledges,
    totalPledged,
    addPledge,
    removePledge,
    clearAllPledges
  } = useDonation()

  const [activeAmount, setActiveAmount] = useState(10000)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [selectedCauseId, setSelectedCauseId] = useState(
    selectedCauseForDonation ? selectedCauseForDonation.id : causes[0].id
  )
  const [isCompleted, setIsCompleted] = useState(false)

  const presetAmounts = [2500, 5000, 10000, 25000, 50000]

  const currentCause = causes.find(c => c.id === Number(selectedCauseId)) || causes[0]

  const finalAmount = customAmount ? Number(customAmount) : activeAmount

  // Dynamic impact calculation based on selected amount
  const getImpactDescription = (amt) => {
    if (amt >= 50000) {
      return 'Sponsors a complete emergency food or medical relief pack for an entire community cluster.'
    } else if (amt >= 25000) {
      return 'Funds comprehensive prenatal diagnostic checkups, vitamins, and birth kits for 5 expectant mothers.'
    } else if (amt >= 10000) {
      return 'Supplies 1 child with textbooks, a backpack, writing supplies, and school shoes for a whole session.'
    } else if (amt >= 5000) {
      return 'Delivers 3 months of clean water purification and household hygiene kits for a rural family.'
    } else {
      return 'Provides nutrient-dense supplementary meals to 5 malnourished infants at a community health camp.'
    }
  }

  const handlePledgeSubmit = (e) => {
    e.preventDefault()
    if (!finalAmount || finalAmount < 500) {
      alert('Please enter a donation amount of at least ₦500')
      return
    }

    addPledge(
      currentCause,
      finalAmount,
      frequency,
      donorName.trim() || 'Generous Supporter'
    )

    setIsCompleted(true)
    setTimeout(() => {
      setIsCompleted(false)
      setCustomAmount('')
    }, 2800)
  }

  if (!isDrawerOpen) return null

  return (
    <>
      <div
        className="drawer-overlay"
        onClick={() => {
          setIsDrawerOpen(false)
          setSelectedCauseForDonation(null)
        }}
      />
      <aside className="donation-drawer">
        <div className="donation-drawer__header">
          <div className="donation-drawer__title-wrap">
            <span className="donation-drawer__badge">Make a Difference</span>
            <h2 className="donation-drawer__title">Donation & Pledge Portal</h2>
          </div>
          <button
            className="donation-drawer__close-btn"
            onClick={() => {
              setIsDrawerOpen(false)
              setSelectedCauseForDonation(null)
            }}
            aria-label="Close donation drawer"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="donation-drawer__body">
          {/* Cause selector */}
          <div className="drawer-section">
            <label className="drawer-label" htmlFor="cause-select">Select Initiative to Support</label>
            <select
              id="cause-select"
              className="drawer-select"
              value={selectedCauseId}
              onChange={(e) => setSelectedCauseId(e.target.value)}
            >
              {causes.map(c => (
                <option key={c.id} value={c.id}>
                  {c.category}: {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Giving Frequency */}
          <div className="drawer-section">
            <label className="drawer-label">Giving Frequency</label>
            <div className="frequency-tabs">
              <button
                type="button"
                className={`frequency-tab ${frequency === 'one-time' ? 'active' : ''}`}
                onClick={() => setFrequency('one-time')}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                className={`frequency-tab ${frequency === 'monthly' ? 'active' : ''}`}
                onClick={() => setFrequency('monthly')}
              >
                Monthly Sustainer 🌱
              </button>
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="drawer-section">
            <label className="drawer-label">Choose Donation Amount (NGN)</label>
            <div className="amount-pills">
              {presetAmounts.map(amt => (
                <button
                  key={amt}
                  type="button"
                  className={`amount-pill ${activeAmount === amt && !customAmount ? 'active' : ''}`}
                  onClick={() => {
                    setActiveAmount(amt)
                    setCustomAmount('')
                  }}
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="custom-amount-wrap">
              <span className="custom-amount-prefix">₦</span>
              <input
                type="number"
                placeholder="Or enter custom amount in Naira"
                className="custom-amount-input"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                min="500"
              />
            </div>
          </div>

          {/* Real-time Impact Box */}
          <div className="impact-callout">
            <div className="impact-callout__icon">✨</div>
            <div className="impact-callout__text">
              <strong>Your Impact (₦{finalAmount.toLocaleString()}):</strong>
              <p>{getImpactDescription(finalAmount)}</p>
            </div>
          </div>

          {/* Donor details form */}
          <form onSubmit={handlePledgeSubmit} className="drawer-form">
            <div className="form-group-sm">
              <label htmlFor="donorName">Donor Name (or Anonymous)</label>
              <input
                id="donorName"
                type="text"
                className="drawer-input"
                placeholder="e.g. Onyibe Feodora"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
              />
            </div>

            <div className="form-group-sm">
              <label htmlFor="donorEmail">Receipt Email</label>
              <input
                id="donorEmail"
                type="email"
                className="drawer-input"
                placeholder="your.email@example.com"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
            </div>

            {isCompleted ? (
              <div className="drawer-success">
                <span>🎉 Pledge of ₦{finalAmount.toLocaleString()} recorded successfully! Thank you for transforming lives.</span>
              </div>
            ) : (
              <button type="submit" className="btn btn--primary btn--full btn--lg">
                <PledgeHandIcon />
                <span>Confirm Pledge of ₦{finalAmount.toLocaleString()}</span>
              </button>
            )}
          </form>

          {/* List of Previous Pledges in Context */}
          {pledges.length > 0 && (
            <div className="drawer-pledges-list">
              <div className="drawer-pledges-header">
                <h4>Your Pledged Contributions ({pledges.length})</h4>
                <button className="text-btn-danger" onClick={clearAllPledges}>
                  Clear All
                </button>
              </div>

              <div className="drawer-pledges-items">
                {pledges.map(item => (
                  <div key={item.id} className="drawer-pledge-card">
                    <img src={item.image} alt={item.title} className="drawer-pledge-thumb" />
                    <div className="drawer-pledge-info">
                      <div className="drawer-pledge-title">{item.title}</div>
                      <div className="drawer-pledge-meta">
                        ₦{item.amount.toLocaleString()} · {item.frequency} · {item.date}
                      </div>
                    </div>
                    <button
                      className="drawer-pledge-remove"
                      onClick={() => removePledge(item.id)}
                      title="Remove pledge"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="drawer-pledges-total">
                <span>Total Pledged:</span>
                <strong>₦{totalPledged.toLocaleString()}</strong>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

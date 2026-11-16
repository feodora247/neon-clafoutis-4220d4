import { useState } from 'react'
import { useDonation } from '../context/DonationContext.jsx'
import { CloseIcon } from './NgoIcons.jsx'

export default function VolunteerModal() {
  const { isVolunteerModalOpen, setIsVolunteerModalOpen } = useDonation()

  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Lagos',
    interestArea: 'Education & Teaching',
    availability: 'Weekends'
  })

  const [submitted, setSubmitted] = useState(false)

  if (!isVolunteerModalOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!volunteerData.fullName || !volunteerData.email) {
      alert('Please fill in your name and email.')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setIsVolunteerModalOpen(false)
    }, 2400)
  }

  return (
    <div className="modal-backdrop" onClick={() => setIsVolunteerModalOpen(false)}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-dialog__header">
          <div>
            <span className="badge-pill">Join Our Mission</span>
            <h3 className="modal-dialog__title">Become a HopeSpring Volunteer</h3>
          </div>
          <button
            className="modal-dialog__close"
            onClick={() => setIsVolunteerModalOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {submitted ? (
          <div className="modal-dialog__success">
            <div className="success-icon-wrap">🌟</div>
            <h4>Thank You for Stepping Up!</h4>
            <p>
              Your volunteer application has been received. Our community coordinator will reach out to <strong>{volunteerData.email}</strong> shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-dialog__form">
            <p className="modal-dialog__subtitle">
              Lend your time, passion, and professional skills to bring hope to communities across Nigeria.
            </p>

            <div className="form-group-sm">
              <label htmlFor="volName">Full Name *</label>
              <input
                id="volName"
                type="text"
                required
                className="drawer-input"
                placeholder="e.g. Onyibe Feodora"
                value={volunteerData.fullName}
                onChange={(e) => setVolunteerData(prev => ({ ...prev, fullName: e.target.value }))}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group-sm">
                <label htmlFor="volEmail">Email Address *</label>
                <input
                  id="volEmail"
                  type="email"
                  required
                  className="drawer-input"
                  placeholder="name@example.com"
                  value={volunteerData.email}
                  onChange={(e) => setVolunteerData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="form-group-sm">
                <label htmlFor="volPhone">Phone / WhatsApp</label>
                <input
                  id="volPhone"
                  type="tel"
                  className="drawer-input"
                  placeholder="+234 800 000 0000"
                  value={volunteerData.phone}
                  onChange={(e) => setVolunteerData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group-sm">
                <label htmlFor="volArea">Primary Area of Interest</label>
                <select
                  id="volArea"
                  className="drawer-select"
                  value={volunteerData.interestArea}
                  onChange={(e) => setVolunteerData(prev => ({ ...prev, interestArea: e.target.value }))}
                >
                  <option value="Education & Teaching">Education & Literacy</option>
                  <option value="Medical & Clinical Aid">Healthcare & Medical Outreach</option>
                  <option value="Clean Water & Engineering">Clean Water & WASH</option>
                  <option value="Food Bank & Distribution">Food Bank & Logistics</option>
                  <option value="Digital Skills & Media">Media & Storytelling</option>
                  <option value="Community Advocacy">Community Advocacy</option>
                </select>
              </div>

              <div className="form-group-sm">
                <label htmlFor="volCity">Base Location</label>
                <select
                  id="volCity"
                  className="drawer-select"
                  value={volunteerData.city}
                  onChange={(e) => setVolunteerData(prev => ({ ...prev, city: e.target.value }))}
                >
                  <option value="Lagos">Lagos State</option>
                  <option value="Abuja">Abuja (FCT)</option>
                  <option value="Port Harcourt">Port Harcourt (Rivers)</option>
                  <option value="Ibadan">Ibadan (Oyo)</option>
                  <option value="Kaduna">Kaduna State</option>
                  <option value="Enugu">Enugu State</option>
                  <option value="Other">Other Location</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn--primary btn--full btn--lg">
              Submit Volunteer Application
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useContactForm } from '../hooks/useContactForm.js'
import { ChevronDownIcon, PledgeHandIcon } from '../components/NgoIcons.jsx'
import { useDonation } from '../context/DonationContext.jsx'

export default function Contact() {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit, resetForm } = useContactForm()
  const { openDonationModal, setIsVolunteerModalOpen } = useDonation()

  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(prev => prev === index ? null : index)
  }

  const faqs = [
    {
      q: 'How does HopeSpring Foundation ensure donor funds reach the field?',
      a: 'We adhere to strict zero-waste governance. 92% of all donated funds go directly to on-the-ground project procurement, engineering, and medical supplies. We publish bi-annual independent audit reports with geotagged project photographic proof.'
    },
    {
      q: 'Can I designate my donation to a specific cause or community?',
      a: 'Yes, absolutely. Through our donation portal or when making a direct bank transfer, you can specify whether your contribution supports Clean Water Boreholes, Rural School Kits, Mobile Clinics, Food Banks, or Emergency Relief.'
    },
    {
      q: 'How can I volunteer my professional skills (medical, teaching, engineering)?',
      a: 'We actively welcome skilled Nigerian and diaspora volunteers! You can click "Join as a Volunteer" anywhere on the site or fill out the volunteer inquiry in the form above. Our community team deploys volunteer cohorts based on scheduled outreach dates.'
    },
    {
      q: 'Are donations to HopeSpring Foundation tax-deductible in Nigeria?',
      a: 'Yes, HopeSpring Foundation is a registered non-profit organization under the Companies and Allied Matters Act (CAMA). We provide formal donation receipts and tax-deductible documentation for individual philanthropists and corporate donors.'
    },
    {
      q: 'Can corporate bodies sponsor an entire community borehole or mobile clinic?',
      a: 'Yes. We regularly partner with corporate organizations for CSR initiatives. A branded community borehole or dedicated mobile medical day can be fully sponsored with custom community hand-over ceremonies and plaque installations.'
    }
  ]

  return (
    <div className="contact-page">
      {/* =========================================================================
          CONTACT HERO
          ========================================================================= */}
      <section className="contact-hero">
        <div className="container">
          <span className="badge-pill badge-pill--light">Get In Touch</span>
          <h1 className="contact-hero__title">Connect with HopeSpring Foundation</h1>
          <p className="contact-hero__lead">
            Whether you want to partner on a community project, make a corporate pledge, or volunteer on the field, we are here to collaborate with you.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CONTACT INFO & VALIDATED FORM LAYOUT
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Official Contact Channels */}
            <div className="contact-info">
              <span className="section__eyebrow">Direct Channels</span>
              <h2 className="contact-info__heading">We’d Love to Hear From You</h2>
              <p className="contact-info__intro">
                Our administrative secretariat and project coordinators are available Monday through Saturday.
              </p>

              <div className="contact-cards">
                {/* Office Card */}
                <div className="contact-card">
                  <div className="contact-card__icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#000000" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-card__label">Headquarters</span>
                    <strong className="contact-card__value">Plot 14, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria</strong>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="contact-card">
                  <div className="contact-card__icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#000000" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.03a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5l.19 1.42z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-card__label">Telephone & WhatsApp</span>
                    <strong className="contact-card__value">+234 800 HOPE AID (Toll Free)<br />+234 802 987 6543 / +234 813 456 7890</strong>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-card">
                  <div className="contact-card__icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#000000" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-card__label">Official Email</span>
                    <strong className="contact-card__value">contact@hopespring.org.ng<br />donations@hopespring.org.ng</strong>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="contact-card">
                  <div className="contact-card__icon-badge">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#000000" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-card__label">Office Hours</span>
                    <strong className="contact-card__value">Monday – Friday: 8:00 AM – 5:30 PM<br />Saturday: 10:00 AM – 3:00 PM</strong>
                  </div>
                </div>
              </div>

              {/* Quick Action Box */}
              <div className="contact-action-box">
                <h4>Want to Volunteer or Sponsor Directly?</h4>
                <p>We deploy volunteers to rural medical camps, schools, and borehole drillings monthly.</p>
                <div className="contact-action-box__buttons">
                  <button className="btn btn--outline btn--sm" onClick={() => setIsVolunteerModalOpen(true)}>
                    Register as Volunteer
                  </button>
                  <button className="btn btn--primary btn--sm" onClick={() => openDonationModal()}>
                    <PledgeHandIcon />
                    <span>Make Direct Pledge</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Controlled & Validated React Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-card">
                <span className="badge-pill">Inquiry & Partnership</span>
                <h3 className="contact-form__title">Send Us a Direct Message</h3>
                <p className="contact-form__subtitle">
                  Please fill in the details below. Our field and partnership desk will reply within 24 hours.
                </p>

                {isSuccess ? (
                  <div className="form-success-banner">
                    <div className="form-success-icon">✅</div>
                    <h3 className="form-success-title">Message Delivered Successfully!</h3>
                    <p className="form-success-desc">
                      Thank you for contacting HopeSpring Foundation. A confirmation reference has been logged and our team will get in touch with you shortly.
                    </p>
                    <button
                      type="button"
                      className="btn btn--primary"
                      onClick={resetForm}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    {/* Full Name Input */}
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                        placeholder="e.g. Onyibe Feodora"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone / WhatsApp Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Program Area / Subject Row */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="programInterest">Initiative of Interest</label>
                        <select
                          id="programInterest"
                          name="programInterest"
                          className="form-select"
                          value={formData.programInterest}
                          onChange={handleChange}
                        >
                          <option value="General Inquiry">General Inquiry / Information</option>
                          <option value="Clean Water Borehole">Clean Water Borehole Project</option>
                          <option value="Child Education Drive">Child Education & Scholarships</option>
                          <option value="Mobile Medical Clinic">Mobile Medical & Maternal Clinic</option>
                          <option value="Community Food Bank">Zero-Hunger Food Relief</option>
                          <option value="Corporate CSR Partnership">Corporate CSR Partnership</option>
                          <option value="Volunteer Coordination">Volunteer Coordination</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className={`form-input ${errors.subject ? 'error' : ''}`}
                          placeholder="e.g. CSR Partnership Proposal"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <span className="form-error">{errors.subject}</span>}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="form-group">
                      <label htmlFor="message">Your Message or Proposal *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        placeholder="Please write your detailed message, partnership proposal, or questions here..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn--primary btn--full btn--lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Message...</span>
                      ) : (
                        <span>Send Message to Secretariat</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FAQ ACCORDION
          ========================================================================= */}
      <section className="section section--grey">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section__header">
            <span className="section__eyebrow">Common Questions</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
            <p className="section__subtitle">
              Find clear answers on our donation transparency, field operations, and volunteer onboarding.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-chevron">
                      <ChevronDownIcon />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

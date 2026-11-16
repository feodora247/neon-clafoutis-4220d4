import { Link } from 'react-router-dom'
import { useDonation } from '../context/DonationContext.jsx'

export default function Footer() {
  const { openDonationModal, setIsVolunteerModalOpen } = useDonation()
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home Page' },
    { to: '/about', label: 'About HopeSpring' },
    { to: '/causes', label: 'Our Causes & Projects' },
    { to: '/contact', label: 'Contact Us' }
  ]

  const focusPillars = [
    'Clean Water & Sanitation',
    'Child Education & Scholarships',
    'Community Medical Clinics',
    'Zero Hunger Food Relief',
    'Women Vocational Grants',
    'Emergency Disaster Response'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Organization Mission */}
          <div className="footer__col">
            <div className="footer__brand">
              <div className="footer__logo-badge">
                <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
                  <path d="M16 4C16 4 19 11 25 12C25 18 19 23 16 28C13 23 7 18 7 12C13 11 16 4 16 4Z" fill="#10b981"/>
                  <path d="M16 28V15" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="footer__brand-title">HopeSpring Foundation</span>
            </div>
            <p className="footer__description">
              A registered non-profit, humanitarian organisation dedicated to ending extreme poverty, expanding clean water access, supporting vulnerable children, and providing medical relief across Nigeria.
            </p>
            <div className="footer__reg-badge">
              <span>Verified Non-Governmental Organisation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Navigation</h4>
            <ul className="footer__list">
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
              <li>
                <button
                  className="footer__text-btn"
                  onClick={() => setIsVolunteerModalOpen(true)}
                >
                  Join as a Volunteer
                </button>
              </li>
              <li>
                <button
                  className="footer__text-btn highlight"
                  onClick={() => openDonationModal()}
                >
                  Make a Direct Donation
                </button>
              </li>
            </ul>
          </div>

          {/* Pillars */}
          <div className="footer__col">
            <h4 className="footer__heading">Focus Initiatives</h4>
            <ul className="footer__list">
              {focusPillars.map(p => (
                <li key={p}>
                  <Link to="/causes">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Lagos Secretariat</h4>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Plot 14, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
            </div>

            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.03a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5l.19 1.42z"/>
              </svg>
              <span>+234 800 HOPE AID / +234 802 987 6543</span>
            </div>

            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>contact@hopespring.org.ng</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Student Info */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © {year} HopeSpring Foundation. Built for social impact and community development.
          </div>
          <div className="footer__student-credit">
            Developed by: <strong>Onyibe Feodora</strong> &nbsp;|&nbsp;
            Department: <strong>Computer Science</strong> &nbsp;|&nbsp;
            Project: <strong>NGO / Charity Web Application</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}

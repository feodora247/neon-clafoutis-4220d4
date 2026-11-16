import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDonation } from '../context/DonationContext.jsx'
import { HeartIcon, PledgeHandIcon } from './NgoIcons.jsx'
import DonationDrawer from './DonationDrawer.jsx'
import VolunteerModal from './VolunteerModal.jsx'

export default function Navbar() {
  const { pledgeCount, openDonationModal, setIsVolunteerModalOpen } = useDonation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/causes', label: 'Our Causes' },
    { to: '/contact', label: 'Contact & Volunteer' }
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          {/* Brand Logo */}
          <Link to="/" className="navbar__brand" onClick={closeMenu}>
            <div className="navbar__logo-badge">
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none">
                <path d="M16 4C16 4 19 11 25 12C25 18 19 23 16 28C13 23 7 18 7 12C13 11 16 4 16 4Z" fill="#10b981"/>
                <path d="M16 28V15" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">HopeSpring</span>
              <span className="navbar__brand-sub">Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar__nav">
            <ul className="navbar__links">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="navbar__actions">
            <button
              className="btn btn--outline btn--sm hide-mobile"
              onClick={() => setIsVolunteerModalOpen(true)}
            >
              Volunteer
            </button>

            <button
              className="btn btn--primary btn--sm navbar__donate-btn"
              onClick={() => openDonationModal()}
            >
              <HeartIcon filled={true} />
              <span>Donate Now</span>
              {pledgeCount > 0 && (
                <span className="navbar__badge-count">{pledgeCount}</span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav__links">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav__cta-box">
            <button
              className="btn btn--primary btn--full"
              onClick={() => {
                closeMenu()
                openDonationModal()
              }}
            >
              <PledgeHandIcon />
              <span>Make a Donation</span>
            </button>

            <button
              className="btn btn--outline btn--full"
              style={{ marginTop: '10px' }}
              onClick={() => {
                closeMenu()
                setIsVolunteerModalOpen(true)
              }}
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </header>

      {/* Global Interactive Modals */}
      <DonationDrawer />
      <VolunteerModal />
    </>
  )
}

/* =========================================================================
   OLED Black NGO Icons — Well-defined geometric silhouettes in rounded badges
   Badge: 76×76px, 2px solid #000000, 20px radius, white background.
   ========================================================================= */

// Clean Water & Sanitation
export function WaterIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Clean Water & Sanitation">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Water Droplet */}
        <path d="M24 4C24 4 10 20 10 30C10 37.732 16.268 44 24 44C31.732 44 38 37.732 38 30C38 20 24 4 24 4Z" fill="#000000"/>
        {/* Negative space water ripple & reflection shine */}
        <path d="M24 16C23 18 16 26 16 31C16 34.5 18.5 37 21 37.8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="28" cy="34" r="2.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Child Education & Scholarships
export function EducationIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Education & Literacy">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graduation Mortarboard */}
        <path d="M24 6L6 16L24 26L42 16L24 6Z" fill="#000000"/>
        <path d="M12 20V32C12 36.5 17.5 40 24 40C30.5 40 36 36.5 36 32V20L24 27L12 20Z" fill="#000000"/>
        {/* Open book white cutout */}
        <path d="M16 28C19 28 22 29 24 30.5C26 29 29 28 32 28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        {/* Tassel */}
        <path d="M38 18.5V29" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="38" cy="30" r="1.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Community Healthcare & Medical Outreach
export function HealthIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Healthcare & Medical Outreach">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Heart container */}
        <path d="M24 42L21.4 39.4C11.5 29.8 5 23.5 5 15.8C5 9.5 9.8 4.7 16 4.7C19.5 4.7 22.8 6.4 24 9.1C25.2 6.4 28.5 4.7 32 4.7C38.2 4.7 43 9.5 43 15.8C43 23.5 36.5 29.8 26.6 39.4L24 42Z" fill="#000000"/>
        {/* Medical Cross in negative space */}
        <rect x="21" y="14" width="6" height="18" rx="1.5" fill="#ffffff"/>
        <rect x="15" y="20" width="18" height="6" rx="1.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Food Security & Zero Hunger
export function NutritionIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Food Security & Nutrition">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nutrition Bowl */}
        <path d="M8 22C8 32.5 15.5 41 24 41C32.5 41 40 32.5 40 22H8Z" fill="#000000"/>
        {/* Bowl Stand */}
        <path d="M18 41H30V44H18V41Z" fill="#000000"/>
        {/* Grain Sheaf / Steam Rising */}
        <path d="M24 7V19" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M19 10C21 12 24 13 24 13C24 13 27 12 29 10" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M17 14C20 16 24 17 24 17C24 17 28 16 31 14" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Bowl rim cutout */}
        <ellipse cx="24" cy="22" rx="13" ry="2.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Women & Youth Empowerment
export function EmpowermentIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Women & Youth Empowerment">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Uplifted Figure with Sunburst Wings */}
        <circle cx="24" cy="11" r="5" fill="#000000"/>
        <path d="M24 18C17 18 12 24 12 30V42H36V30C36 24 31 18 24 18Z" fill="#000000"/>
        {/* Rising wings / open hands cutouts */}
        <path d="M16 28C18 23 21 21 24 21C27 21 30 23 32 28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 26V38" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="2.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Emergency Relief & Crisis Response
export function EmergencyIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Emergency Relief & Crisis Response">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Protective Shield */}
        <path d="M24 5L8 11V23C8 33 15 41 24 44C33 41 40 33 40 23V11L24 5Z" fill="#000000"/>
        {/* White Lifeline Cross / Beacon */}
        <path d="M24 14V34" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
        <path d="M14 24H34" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

// Mission Icon (Compass Star)
export function MissionIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Our Mission">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="19" fill="#000000"/>
        <circle cx="24" cy="24" r="15" fill="#ffffff"/>
        {/* Compass Pointer Needle */}
        <path d="M24 11L28 24L24 21L20 24L24 11Z" fill="#000000"/>
        <path d="M24 37L20 24L24 27L28 24L24 37Z" fill="#000000"/>
        <circle cx="24" cy="24" r="2.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Vision Icon (Lighthouse / All-seeing Beacon)
export function VisionIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Our Vision">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Eye of Vision with Horizon Rays */}
        <path d="M6 24C6 24 13 11 24 11C35 11 42 24 42 24C42 24 35 37 24 37C13 37 6 24 6 24Z" fill="#000000"/>
        <circle cx="24" cy="24" r="8" fill="#ffffff"/>
        <circle cx="24" cy="24" r="4.5" fill="#000000"/>
        <circle cx="26" cy="22" r="1.5" fill="#ffffff"/>
      </svg>
    </div>
  )
}

// Objectives Icon (Bullseye & Precision Arrow)
export function ObjectivesIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Our Objectives">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Target rings */}
        <circle cx="24" cy="24" r="20" fill="#000000"/>
        <circle cx="24" cy="24" r="14" fill="#ffffff"/>
        <circle cx="24" cy="24" r="8" fill="#000000"/>
        <circle cx="24" cy="24" r="3" fill="#ffffff"/>
        {/* Incoming Arrow */}
        <line x1="33" y1="9" x2="25" y2="23" stroke="#000000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 7H37V14" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

// Transparency & Accountability
export function TransparencyIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Transparency & Financial Integrity">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8H38V40H10V8Z" rx="2" fill="#000000"/>
        <path d="M16 16H32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 23H32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 30H24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 31L30 35L36 27" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

// Community Partnership
export function CommunityIcon({ className = 'icon-badge' }) {
  return (
    <div className={className} title="Community Ownership">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="4" fill="#000000"/>
        <circle cx="12" cy="20" r="3.5" fill="#000000"/>
        <circle cx="36" cy="20" r="3.5" fill="#000000"/>
        <path d="M17 40V33C17 29.5 20.1 27 24 27C27.9 27 31 29.5 31 33V40H17Z" fill="#000000"/>
        <path d="M7 40V35C7 32.5 9.2 30.5 12 30.5C13.5 30.5 14.8 31.2 15.6 32.3C15.2 33.3 15 34.4 15 35.6V40H7Z" fill="#000000"/>
        <path d="M41 40V35C41 32.5 38.8 30.5 36 30.5C34.5 30.5 33.2 31.2 32.4 32.3C32.8 33.3 33 34.4 33 35.6V40H41Z" fill="#000000"/>
      </svg>
    </div>
  )
}

// Heart / Donate Icon
export function HeartIcon({ filled = false }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={filled ? '#e11d48' : 'none'} stroke={filled ? '#e11d48' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

// Hand Holding Heart / Pledge Icon
export function PledgeHandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  )
}

// Search Icon
export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

// Chevron Down Icon
export function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}

// Close / X Icon
export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

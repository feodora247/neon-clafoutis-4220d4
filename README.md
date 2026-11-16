# HopeSpring Foundation — NGO & Charity Organisation React Application

## Student Submission Information
- **Student Full Name:** Onyibe Feodora
- **Department:** Computer Science
- **Course Assignment:** React JS Web Application Project
- **Selected Category:** 6. NGO or Charity Organisation Website
- **Project Title:** HopeSpring Foundation — Transforming Hope into Action Across Nigeria

---

## 1. Project Overview & Business Description
**HopeSpring Foundation** is a modern, responsive React JS web application developed for an accredited humanitarian non-governmental organization (NGO) operating in Nigeria. The organization addresses systemic challenges in underprivileged communities through 6 core intervention pillars:
1. **Clean Water & Sanitation (WASH):** Solar-powered motorized community boreholes.
2. **Child Education & Literacy:** School uniforms, backpacks, curriculum textbooks, and tuition scholarships.
3. **Mobile Healthcare Clinics:** Primary medical checkups, prenatal maternal care, and malaria interventions.
4. **Zero-Hunger Food Relief:** Community food bank pantries and nutrition recovery drives.
5. **Women Vocational Empowerment:** Garment making, agro-processing toolkits, and micro-capital grants.
6. **Disaster & Emergency Relief:** Rapid deployment of shelter kits, water purifiers, and emergency sustenance during flood disasters.

---

## 2. Page Structure & Features

### A. Home Page (`/`)
- **Brand & Welcome Message:** Prominent display of "HopeSpring Foundation" and humanitarian lead message.
- **Hero Section:** High-resolution field photography, verified transparency badge, call to action buttons ("Support a Community" & "Discover Our Story").
- **Live Impact Counters:** 45,000+ Lives Touched, 120+ Boreholes & Clinics, 85+ Communities Reached.
- **Interactive Impact Calculator:** Allows donors to select amounts (₦5,000, ₦10,000, ₦25,000, ₦50,000, ₦100,000) or enter a custom amount to see real-time calculated field impact.
- **Core Interventions (Pillars):** 6 reusable cards featuring **OLED Black (`#000000`) high-definition SVG icons** centered inside rounded-square badges (`76px × 76px`, `border: 2px solid #000000`, `border-radius: 20px`).
- **Urgent Campaigns Carousel:** Rendered with reusable `CauseCard` components using `.map()`.
- **Beneficiary Testimonials:** First-person stories from elders, mothers, and community members.
- **Call to Action Banner:** Direct links to donation drawer and volunteer modal.

### B. About Us Page (`/about`)
- **Organizational Background:** Comprehensive history from 2017 grassroots volunteer group in Lagos to a nationwide accredited foundation.
- **Mission, Vision & Strategic Objectives:** Reusable cards with custom OLED black badges (`MissionIcon`, `VisionIcon`, `ObjectivesIcon`).
- **Core Ethical Values:** Radical Transparency, Community Ownership, and Unconditional Compassion.
- **Interactive Milestone Timeline:** Historical track record from 2017 to present.
- **Humanitarian Leadership Team:** Bios and photographs of directors and field engineers.

### C. Our Causes / Projects Page (`/causes`)
- **6 Active Field Campaigns:** Clean water, education kit drive, mobile clinics, food bank, vocational micro-grants, and flood relief.
- **Interactive Search Bar:** Live search filtering causes by title, keyword, or community location.
- **Category Filter Tabs:** Instant filtering across 'All', 'Clean Water', 'Education', 'Healthcare', 'Food Security', 'Empowerment', 'Emergency Relief'.
- **Sorting Options:** Sort by Urgent Needs, Highest % Funded, or Goal Amount.
- **Saved / Starred Causes Filter:** Toggle to view bookmarked initiatives stored in `localStorage`.
- **Progress Tracking:** Dynamic calculation of percentage funded, amount raised vs goal, and donors count.

### D. Contact & Volunteer Page (`/contact`)
- **Official Contact Details:** Lagos headquarters address, phone lines, toll-free number, and official email addresses.
- **Controlled Contact Form:** Full Name, Email Address, Phone Number, Initiative of Interest, Subject, and Message.
- **Form Validation:** Validates required fields, email structure via regex, and message character length.
- **Interactive Success State:** Clean green confirmation banner with "Send Another Message" reset action.
- **Interactive FAQ Accordion:** Accessible questions and answers on fund transparency, tax deductibility, and volunteer deployments.

### E. Global Interactive Features
- **Slide-out Donation Drawer:** Choose pre-selected cause, select giving frequency (One-Time or Monthly), preset or custom donation amount, dynamic impact calculation, donor credentials, and pledge list with total calculations.
- **Volunteer Onboarding Modal:** Pop-up dialog to register for medical, educational, clean water, or media field volunteer cohorts.

---

## 3. React JS Technical Concepts Demonstrated

| Technical Requirement | How It Is Implemented |
|---|---|
| **React Project Setup** | Vite 6 + React 18, clean file hierarchy (`public/`, `src/components`, `src/context`, `src/hooks`, `src/data`, `src/pages`). |
| **Functional Components** | 100% modular functional components (`Navbar`, `Footer`, `CauseCard`, `DonationDrawer`, `VolunteerModal`, `NgoIcons`, etc.). |
| **JSX** | Clean JSX syntax, conditional rendering, dynamic attributes, and JavaScript expressions. |
| **Props** | Reusable `CauseCard` accepts `cause` object prop; `NgoIcons` accept `className` and `filled` props. |
| **`useState` Hook** | Manages donation amounts, custom inputs, search queries, active category tabs, modal visibility, mobile menu state, and FAQ accordion toggles. |
| **`useEffect` Hook** | Smooth window scroll-to-top on route change; localStorage synchronization for pledges and starred causes. |
| **`useContext` Hook** | `DonationContext.jsx` provides global application state for pledges, donation drawer, and volunteer modal across all routes. |
| **Custom Hook** | `useContactForm.js` encapsulates form input state, real-time error validation, and submission feedback. |
| **Event Handling** | Comprehensive use of `onClick`, `onChange`, and `onSubmit` handlers. |
| **Array Methods** | Extensive use of `.map()` for lists/grids, `.filter()` for search and categories, `.reduce()` for totals, and `.sort()` for ordering. |
| **React Router v6** | Client-side routing with `BrowserRouter`, `Routes`, `Route`, `NavLink` with active states, and 404 handling. |
| **Responsive CSS** | Custom design system using Flexbox and CSS Grid, CSS custom properties, and media queries (desktop, tablet, mobile). |

---

## 4. How to Run the Project Locally

```powershell
# Navigate into the project directory
cd "c:\Users\USER\OneDrive\Desktop\polio\ngoapp"

# Start the Vite development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

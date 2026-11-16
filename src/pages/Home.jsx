import { useState } from 'react'
import { Link } from 'react-router-dom'
import { causes, impactLevels } from '../data/causes.js'
import CauseCard from '../components/CauseCard.jsx'
import {
  WaterIcon,
  EducationIcon,
  HealthIcon,
  NutritionIcon,
  EmpowermentIcon,
  EmergencyIcon,
  PledgeHandIcon
} from '../components/NgoIcons.jsx'
import { useDonation } from '../context/DonationContext.jsx'

export default function Home() {
  const { openDonationModal, setIsVolunteerModalOpen } = useDonation()

  // Interactive Impact Calculator state
  const [calculatorAmount, setCalculatorAmount] = useState(10000)
  const [calculatorCustom, setCalculatorCustom] = useState('')

  const activeCalcAmount = calculatorCustom ? Number(calculatorCustom) : calculatorAmount

  const getCalculatedOutcome = (amt) => {
    if (amt >= 100000) {
      return {
        badge: 'Transformational Gift',
        title: 'Deep Community Borehole or Mobile Clinic Sponsorship',
        desc: 'Directly funds the casing, solar-pump mechanics, and piping of a deep community water well, or fully finances an entire weekend mobile clinic serving over 800 rural residents.'
      }
    } else if (amt >= 50000) {
      return {
        badge: 'Major Relief Pack',
        title: 'Emergency Food & Safe Shelter Supplies for 3 Families',
        desc: 'Provides comprehensive household survival packages consisting of nutrient-fortified food staples, safe water storage vessels, blankets, and hygiene kits for 3 displaced families.'
      }
    } else if (amt >= 25000) {
      return {
        badge: 'Healthcare & Maternal Bundle',
        title: 'Safe Delivery Kit & Antenatal Checkups for 4 Mothers',
        desc: 'Covers essential prenatal consultations, sterile delivery equipment, ultrasound checks, and infant nutrition packages in remote primary healthcare centers.'
      }
    } else if (amt >= 10000) {
      return {
        badge: 'Education & Literacy',
        title: 'Complete School Uniform, Books & Term Support for 1 Child',
        desc: 'Funds sturdy school shoes, a waterproof backpack, standard national curriculum textbooks, exercise books, and term enrollment support for a vulnerable pupil.'
      }
    } else {
      return {
        badge: 'Essential Sustenance',
        title: 'Clean Water Purification & High-Calorie Nutrition Ration',
        desc: 'Supplies water purification tablets and vitamin-rich porridge supplement packets to sustain a mother and child for a month.'
      }
    }
  }

  const outcome = getCalculatedOutcome(activeCalcAmount)

  const pillars = [
    {
      icon: <WaterIcon />,
      title: 'Clean Water & Sanitation',
      desc: 'Drilling solar-powered motorized boreholes and establishing community WASH committees to eradicate waterborne diseases in rural agrarian communities.'
    },
    {
      icon: <EducationIcon />,
      title: 'Child Education & Literacy',
      desc: 'Removing barriers to basic education through backpacks, textbook donations, teacher training, and tuition grants for orphaned and underprivileged pupils.'
    },
    {
      icon: <HealthIcon />,
      title: 'Healthcare & Medical Outreach',
      desc: 'Mobile clinics providing free malaria diagnostic tests, prescription drugs, dental care, eye exams, and maternal health packages in hard-to-reach riverine areas.'
    },
    {
      icon: <NutritionIcon />,
      title: 'Food Security & Zero Hunger',
      desc: 'Organising community food banks and nutritional rehabilitation drives to protect vulnerable infants, elderly citizens, and impoverished families from starvation.'
    },
    {
      icon: <EmpowermentIcon />,
      title: 'Women & Youth Empowerment',
      desc: 'Providing vocational skills training, sewing equipment, catering toolkits, and micro-enterprise startup grants to enable sustainable financial independence.'
    },
    {
      icon: <EmergencyIcon />,
      title: 'Disaster & Emergency Relief',
      desc: 'Deploying immediate rescue supplies, temporary shelter tarpaulins, water filters, and emergency rations when floods and crisis situations displace communities.'
    }
  ]

  const featuredCauses = causes.filter(c => c.featured)

  const beneficiaryStories = [
    {
      id: 1,
      quote: 'Before HopeSpring drilled the solar borehole in our village, our daughters had to walk 6 kilometres every morning to fetch muddy stream water. Now, clean water is right in the village square and our children are on time for school every single day.',
      name: 'Elder Olasunkanmi Adeleke',
      community: 'Ifo Community, Ogun State',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      tag: 'Clean Water Initiative'
    },
    {
      id: 2,
      quote: 'When my husband passed away, I had no means of paying my twins’ primary school fees or buying their textbooks. HopeSpring not only covered their school year, they gave me an industrial sewing machine to start my tailoring business.',
      name: 'Mrs. Chidinma Okafor',
      community: 'Onitsha, Anambra State',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
      tag: 'Women Empowerment & Education'
    },
    {
      id: 3,
      quote: 'The mobile clinic arrived in our riverine village just when my pregnant wife was experiencing high fever and complications. The medical team diagnosed malaria, provided immediate clinical care, and gave us prenatal supplies at zero cost.',
      name: 'Tariemi Douglas',
      community: 'Brass Island, Bayelsa State',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      tag: 'Medical Outreach'
    }
  ]

  return (
    <div className="home-page">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-pulse" />
              <span>HopeSpring Humanitarian Foundation</span>
            </div>

            <h1 className="hero__title">
              Transforming <span className="text-gradient">Hope</span> into Tangible Action Across Nigeria
            </h1>

            <p className="hero__lead">
              Welcome to HopeSpring Foundation. We are dedicated to providing sustainable clean water, quality education, life-saving mobile healthcare, and poverty alleviation for Nigeria’s most vulnerable communities.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary btn--lg"
                onClick={() => openDonationModal()}
              >
                <PledgeHandIcon />
                <span>Support a Community</span>
              </button>

              <Link to="/about" className="btn btn--outline btn--lg">
                Discover Our Story
              </Link>
            </div>

            {/* Impact Metric Counters */}
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-num">45,000+</span>
                <span className="hero__stat-label">Lives Touched</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">120+</span>
                <span className="hero__stat-label">Boreholes & Clinics</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">85+</span>
                <span className="hero__stat-label">Communities</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
                alt="HopeSpring Foundation humanitarian work"
                className="hero__img"
              />
              <div className="hero__image-overlay" />
            </div>

            {/* Floating Impact Card */}
            <div className="hero__floating-card">
              <div className="hero__floating-badge">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <strong>100% Transparent Giving</strong>
                <p>Every naira tracked directly to field projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE IMPACT CALCULATOR
          ========================================================================= */}
      <section className="section section--calculator">
        <div className="container">
          <div className="calculator-box">
            <div className="calculator-header">
              <span className="badge-pill">Interactive Giving Calculator</span>
              <h2 className="section__title">See How Your Contribution Changes Lives</h2>
              <p className="section__subtitle">
                Select an amount below to visualize the real, measurable difference your partnership creates on the ground in Nigerian communities.
              </p>
            </div>

            <div className="calculator-content">
              {/* Amount buttons */}
              <div className="calculator-amounts">
                {impactLevels.map(lvl => (
                  <button
                    key={lvl.amount}
                    type="button"
                    className={`calc-amount-btn ${calculatorAmount === lvl.amount && !calculatorCustom ? 'active' : ''}`}
                    onClick={() => {
                      setCalculatorAmount(lvl.amount)
                      setCalculatorCustom('')
                    }}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

              {/* Custom amount entry */}
              <div className="calc-custom-box">
                <span className="calc-currency">₦</span>
                <input
                  type="number"
                  placeholder="Or enter custom donation amount..."
                  className="calc-custom-input"
                  value={calculatorCustom}
                  onChange={(e) => setCalculatorCustom(e.target.value)}
                  min="500"
                />
              </div>

              {/* Real-time Dynamic Result */}
              <div className="calc-result-card">
                <div className="calc-result-header">
                  <span className="calc-result-tag">{outcome.badge}</span>
                  <span className="calc-result-sum">₦{activeCalcAmount.toLocaleString()} NGN</span>
                </div>
                <h3 className="calc-result-title">{outcome.title}</h3>
                <p className="calc-result-desc">{outcome.desc}</p>

                <div className="calc-result-actions">
                  <button
                    className="btn btn--primary btn--lg"
                    onClick={() => openDonationModal()}
                  >
                    <PledgeHandIcon />
                    <span>Pledge ₦{activeCalcAmount.toLocaleString()} to This Cause</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PILLARS (OLED BLACK ICONS SECTION)
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Core Interventions</span>
            <h2 className="section__title">Comprehensive Community Support</h2>
            <p className="section__subtitle">
              We address the root causes of systemic poverty through six integrated pillars designed for long-term sustainability.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="pillars-grid">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card">
                <div className="pillar-card__icon-wrapper">
                  {p.icon}
                </div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED CAUSES SECTION
          ========================================================================= */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Urgent Appeals</span>
            <h2 className="section__title">Initiatives Requiring Your Immediate Support</h2>
            <p className="section__subtitle">
              These verified grassroots campaigns are actively deployed in the field and need immediate funding to meet critical community needs.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="causes-grid">
            {featuredCauses.map(cause => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/causes" className="btn btn--outline btn--lg">
              Explore All 6 Humanitarian Causes
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BENEFICIARY STORIES / TESTIMONIALS
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Voices of Hope</span>
            <h2 className="section__title">Stories of Lives Transformed</h2>
            <p className="section__subtitle">
              Read first-hand accounts from community leaders, mothers, and students whose lives have been permanently changed.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="stories-grid">
            {beneficiaryStories.map(story => (
              <div key={story.id} className="story-card">
                <span className="story-card__tag">{story.tag}</span>
                <p className="story-card__quote">"{story.quote}"</p>
                <div className="story-card__author">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="story-card__avatar"
                  />
                  <div>
                    <h4 className="story-card__name">{story.name}</h4>
                    <span className="story-card__community">{story.community}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <span className="cta-banner__tag">Take Action Today</span>
            <h2 className="cta-banner__title">Be the Catalyst for Lasting Change</h2>
            <p className="cta-banner__lead">
              Whether you donate, sponsor a school child, or volunteer your professional skills, your partnership directly restores dignity and saves lives.
            </p>
            <div className="cta-banner__buttons">
              <button
                className="btn btn--primary btn--lg"
                onClick={() => openDonationModal()}
              >
                <PledgeHandIcon />
                <span>Make a Charitable Gift</span>
              </button>
              <button
                className="btn btn--outline btn--lg"
                style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}
                onClick={() => setIsVolunteerModalOpen(true)}
              >
                Sign Up as a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

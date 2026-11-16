import {
  MissionIcon,
  VisionIcon,
  ObjectivesIcon,
  TransparencyIcon,
  CommunityIcon,
  HealthIcon
} from '../components/NgoIcons.jsx'
import { Link } from 'react-router-dom'
import { useDonation } from '../context/DonationContext.jsx'

export default function About() {
  const { openDonationModal, setIsVolunteerModalOpen } = useDonation()

  const milestones = [
    {
      year: '2017',
      title: 'Foundation Inception in Lagos',
      desc: 'HopeSpring Foundation was established as a youth-led community response in Lagos, providing weekend nutrition relief and primary tutoring for children in Makoko.'
    },
    {
      year: '2019',
      title: 'First 10 Solar Clean Water Boreholes',
      desc: 'Commissioned our flagship clean water intervention across 10 rural farming communities in Ogun and Oyo States, eliminating recurring cholera outbreaks.'
    },
    {
      year: '2021',
      title: 'Launch of Mobile Medical Fleet',
      desc: 'Acquired and deployed two purpose-built mobile clinic vans staffed by volunteer Nigerian doctors and nurses to provide free healthcare in riverine areas.'
    },
    {
      year: '2023',
      title: 'Women Agro-Vocational Academy',
      desc: 'Established our women empowerment vocational center, graduating over 400 female micro-entrepreneurs equipped with toolkits and seed grants.'
    },
    {
      year: '2025 – Present',
      title: 'Nationwide Expansion & Disaster Response',
      desc: 'Surpassed 45,000 direct beneficiaries across 85 communities, establishing rapid emergency response teams for flood relief and humanitarian assistance.'
    }
  ]

  const coreValues = [
    {
      icon: <TransparencyIcon className="icon-badge icon-badge--sm" />,
      title: 'Radical Transparency',
      desc: 'Every naira donated is audited, documented, and publicly accounted for with comprehensive impact project reports.'
    },
    {
      icon: <CommunityIcon className="icon-badge icon-badge--sm" />,
      title: 'Community Ownership',
      desc: 'We never impose solutions. Projects are planned, executed, and maintained in direct partnership with local community leadership.'
    },
    {
      icon: <HealthIcon className="icon-badge icon-badge--sm" />,
      title: 'Unconditional Compassion',
      desc: 'Serving every vulnerable individual regardless of ethnicity, religion, or background with unwavering dignity and respect.'
    }
  ]

  const leadershipTeam = [
    {
      name: 'Dr. Adeyemi Adeleke',
      role: 'Founder & Executive Director',
      bio: 'Public health physician and grassroots community advocate with 15+ years managing health initiatives across West Africa.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
    },
    {
      name: 'Engr. Nnamdi Eze',
      role: 'Head of Water & Infrastructure',
      bio: 'Hydrological engineer passionate about off-grid solar-powered water systems and community-managed infrastructure.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Fatima Mohammed',
      role: 'Director of Education & Youth',
      bio: 'Former secondary school educator dedicated to expanding primary education access and girls’ literacy in rural northern Nigeria.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
    }
  ]

  return (
    <div className="about-page">
      {/* =========================================================================
          ABOUT HERO
          ========================================================================= */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <span className="badge-pill badge-pill--light">Our Story & Purpose</span>
            <h1 className="about-hero__title">Dedicated to Human Dignity, Equality & Hope</h1>
            <p className="about-hero__lead">
              HopeSpring Foundation is a Nigerian non-profit organisation that believes access to clean water, basic healthcare, quality education, and food security is a fundamental human right.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BACKGROUND & HISTORY
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="about-history-grid">
            <div className="about-history__text">
              <span className="section__eyebrow">Our Origins</span>
              <h2 className="section__title">From a Small Volunteer Drive to a Nationwide Movement</h2>
              <p>
                Founded in 2017 in Lagos, HopeSpring Foundation emerged when a dedicated group of Nigerian professionals, educators, and doctors came together to respond to acute disparities in clean water access and primary schooling in vulnerable settlements.
              </p>
              <p>
                What began as a grassroots weekend feeding and reading initiative has blossomed into an accredited non-governmental organization that has mobilized over ₦150 million in humanitarian aid, drilled scores of community boreholes, and treated tens of thousands of patients.
              </p>
              <p>
                We operate on the principle of sustainable community-led development: we don’t just drill a borehole or drop off supplies; we form local management committees, train local maintenance technicians, and ensure each initiative remains self-sustaining for decades.
              </p>

              <div className="about-history__cta">
                <button
                  className="btn btn--primary"
                  onClick={() => openDonationModal()}
                >
                  Partner With Our Mission
                </button>
                <button
                  className="btn btn--outline"
                  onClick={() => setIsVolunteerModalOpen(true)}
                >
                  Volunteer Your Talents
                </button>
              </div>
            </div>

            <div className="about-history__visual">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
                alt="HopeSpring educational intervention"
                className="about-history__img"
              />
              <div className="about-history__card-overlay">
                <span className="about-history__stat-number">9 Years</span>
                <span className="about-history__stat-desc">Of Dedicated Field Impact Across Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MISSION, VISION & OBJECTIVES (OLED BLACK BADGES)
          ========================================================================= */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Guiding Compass</span>
            <h2 className="section__title">Mission, Vision & Strategic Objectives</h2>
            <p className="section__subtitle">
              Our clear organizational mandate drives every borehole drilled, classroom built, and medical outreach conducted.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="mvv-grid">
            {/* Mission */}
            <div className="mvv-card">
              <div className="mvv-card__icon-box">
                <MissionIcon />
              </div>
              <h3 className="mvv-card__title">Our Mission</h3>
              <p className="mvv-card__desc">
                To transform marginalized Nigerian communities by providing clean drinking water, quality primary education, essential healthcare outreach, and economic empowerment that permanently breaks cycles of generational poverty.
              </p>
            </div>

            {/* Vision */}
            <div className="mvv-card">
              <div className="mvv-card__icon-box">
                <VisionIcon />
              </div>
              <h3 className="mvv-card__title">Our Vision</h3>
              <p className="mvv-card__desc">
                An Africa where every child has access to safe drinking water and quality learning, where no mother dies from preventable childbirth complications, and where communities possess the resources to thrive autonomously.
              </p>
            </div>

            {/* Objectives */}
            <div className="mvv-card">
              <div className="mvv-card__icon-box">
                <ObjectivesIcon />
              </div>
              <h3 className="mvv-card__title">Our Objectives</h3>
              <p className="mvv-card__desc">
                1. Commission 50 additional solar boreholes by 2028.<br />
                2. Support 10,000 vulnerable children with full school scholarships.<br />
                3. Conduct 100 free mobile clinics across underserved riverine communities.<br />
                4. Empower 2,000 women breadwinners with micro-capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE VALUES
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Ethical Foundation</span>
            <h2 className="section__title">Our Core Operational Values</h2>
            <div className="gold-divider" />
          </div>

          <div className="values-grid">
            {coreValues.map(v => (
              <div key={v.title} className="value-item">
                <div className="value-item__badge-wrap">
                  {v.icon}
                </div>
                <div className="value-item__body">
                  <h3 className="value-item__title">{v.title}</h3>
                  <p className="value-item__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MILESTONES TIMELINE
          ========================================================================= */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Journey</span>
            <h2 className="section__title">Milestones in Humanitarian Service</h2>
            <div className="gold-divider" />
          </div>

          <div className="timeline-container">
            {milestones.map((m, index) => (
              <div key={m.year} className={`timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-node">
                  <span className="timeline-year">{m.year}</span>
                </div>
                <div className="timeline-card">
                  <h3 className="timeline-card__title">{m.title}</h3>
                  <p className="timeline-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP TEAM
          ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Humanitarian Leadership</span>
            <h2 className="section__title">The People Driving Our Work</h2>
            <p className="section__subtitle">
              Experienced professionals dedicated to field stewardship, accountability, and ethical governance.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="team-grid">
            {leadershipTeam.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-card__img-wrap">
                  <img src={member.image} alt={member.name} className="team-card__img" />
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

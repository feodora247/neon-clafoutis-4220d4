export const causes = [
  {
    id: 1,
    title: 'Clean Water Borehole & Solar Pump Project',
    category: 'Clean Water',
    tagline: 'Providing clean, potable drinking water to rural agrarian communities.',
    description: 'Over 60 million Nigerians lack direct access to safe drinking water. Our solar-powered motorized boreholes replace contaminated stream water with clean, tested water, curbing waterborne diseases like cholera and dysentery.',
    goal: 4500000,
    raised: 3750000,
    donorsCount: 342,
    location: 'Ogun & Oyo States, Nigeria',
    beneficiaries: '14,000+ Villagers',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&q=80',
    featured: true,
    urgent: true,
    impactMetric: '1 Solar Borehole = 2,500 People Served Daily'
  },
  {
    id: 2,
    title: 'Rural Primary School Kit & Tuition Drive',
    category: 'Education',
    tagline: 'Equipping vulnerable children with backpacks, books, and tuition support.',
    description: 'We believe no child should drop out of school due to the inability to afford basic learning materials. This drive funds school bags, textbooks, writing materials, uniforms, and term fees for orphaned and underprivileged primary school pupils.',
    goal: 3000000,
    raised: 2450000,
    donorsCount: 289,
    location: 'Kaduna & Kano States, Nigeria',
    beneficiaries: '2,500+ Children',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    featured: true,
    urgent: false,
    impactMetric: '₦10,000 = Complete School Kit & 1 Term Fee'
  },
  {
    id: 3,
    title: 'Mobile Medical Clinic & Maternal Health Outreach',
    category: 'Healthcare',
    tagline: 'Bringing doctors, diagnostic testing, and prenatal care to underserved riverine areas.',
    description: 'Delivering essential healthcare directly to remote communities without health centers. Our mobile medical teams perform free malaria screenings, blood pressure monitoring, diabetes checks, dental care, and prenatal packages for expectant mothers.',
    goal: 5000000,
    raised: 4120000,
    donorsCount: 415,
    location: 'Delta & Bayelsa Riverine Communities',
    beneficiaries: '8,200+ Patients',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    featured: true,
    urgent: true,
    impactMetric: '₦15,000 = Maternal Care Pack & Safe Delivery Kit'
  },
  {
    id: 4,
    title: 'Community Food Bank & Malnutrition Intervention',
    category: 'Food Security',
    tagline: 'Distributing fortified food parcels to vulnerable households and elderly citizens.',
    description: 'Addressing acute food insecurity and childhood stunting through monthly community food pantries. We distribute nutritious staples including rice, beans, nutrient-fortified cereal, cooking oil, and vitamins to families facing hardship.',
    goal: 3500000,
    raised: 2890000,
    donorsCount: 310,
    location: 'Makoko & Ajegunle, Lagos State',
    beneficiaries: '5,000+ Families',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    featured: false,
    urgent: true,
    impactMetric: '₦20,000 = 1 Month Nutritious Family Food Hamper'
  },
  {
    id: 5,
    title: 'Women Tailoring & Agro-Processing Micro-Grants',
    category: 'Empowerment',
    tagline: 'Financial independence through vocational toolkits and seed capital.',
    description: 'Empowering widowed mothers and young female breadwinners with vocational training in garment making, catering, and cassava processing. Graduates receive sewing machines, industrial ovens, and micro-grants to establish viable businesses.',
    goal: 4000000,
    raised: 3100000,
    donorsCount: 220,
    location: 'Enugu & Ebonyi States, Nigeria',
    beneficiaries: '450+ Women Entrepreneurs',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    featured: false,
    urgent: false,
    impactMetric: '₦45,000 = Industrial Sewing Machine + Startup Seed Grant'
  },
  {
    id: 6,
    title: 'Rapid Emergency & Flood Displacement Relief',
    category: 'Emergency Relief',
    tagline: 'Immediate shelter kits, clean water purification, and emergency supplies.',
    description: 'Responding urgently when disasters strike. We deliver emergency temporary shelter tarpaulins, water purification tablets, hygiene kits, blankets, and dry food rations to displaced families in flood-affected coastal and basin communities.',
    goal: 6000000,
    raised: 4850000,
    donorsCount: 512,
    location: 'Kogi & Anambra River Basin',
    beneficiaries: '9,000+ Displaced Persons',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    featured: false,
    urgent: true,
    impactMetric: '₦25,000 = Emergency Family Shelter & Purification Pack'
  }
]

export const categories = [
  'All',
  'Clean Water',
  'Education',
  'Healthcare',
  'Food Security',
  'Empowerment',
  'Emergency Relief'
]

export const impactLevels = [
  {
    amount: 5000,
    label: '₦5,000',
    impact: 'Supplies 1 child with school supplies and textbooks for a full school year.'
  },
  {
    amount: 10000,
    label: '₦10,000',
    impact: 'Provides clean drinking water purification tablets for 4 families for 3 months.'
  },
  {
    amount: 25000,
    label: '₦25,000',
    impact: 'Funds full malaria screening, medications, and clinical care for 15 children.'
  },
  {
    amount: 50000,
    label: '₦50,000',
    impact: 'Provides an emergency food & nutrition package feeding an entire household for a month.'
  },
  {
    amount: 100000,
    label: '₦100,000',
    impact: 'Contributes directly to drilling solar-powered community borehole piping.'
  }
]

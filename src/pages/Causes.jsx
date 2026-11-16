import { useState, useMemo } from 'react'
import { causes, categories } from '../data/causes.js'
import CauseCard from '../components/CauseCard.jsx'
import { SearchIcon, HeartIcon } from '../components/NgoIcons.jsx'
import { useDonation } from '../context/DonationContext.jsx'

export default function Causes() {
  const { starredCauses } = useDonation()

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [showStarredOnly, setShowStarredOnly] = useState(false)

  const filteredCauses = useMemo(() => {
    let list = [...causes]

    // Category filter
    if (selectedCategory !== 'All') {
      list = list.filter(c => c.category === selectedCategory)
    }

    // Starred only filter
    if (showStarredOnly) {
      list = list.filter(c => starredCauses.includes(c.id))
    }

    // Keyword search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      )
    }

    // Sorting
    if (sortBy === 'urgent') {
      list.sort((a, b) => (b.urgent ? 1 : 0) - (a.urgent ? 1 : 0))
    } else if (sortBy === 'funded-high') {
      list.sort((a, b) => (b.raised / b.goal) - (a.raised / a.goal))
    } else if (sortBy === 'goal-high') {
      list.sort((a, b) => b.goal - a.goal)
    } else if (sortBy === 'goal-low') {
      list.sort((a, b) => a.goal - b.goal)
    }

    return list
  }, [selectedCategory, searchQuery, sortBy, showStarredOnly, starredCauses])

  const totalFundedAcrossFiltered = filteredCauses.reduce((sum, c) => sum + c.raised, 0)
  const totalGoalAcrossFiltered = filteredCauses.reduce((sum, c) => sum + c.goal, 0)

  return (
    <div className="causes-page">
      {/* =========================================================================
          PAGE HERO
          ========================================================================= */}
      <section className="causes-hero">
        <div className="container">
          <span className="badge-pill badge-pill--light">Humanitarian Initiatives</span>
          <h1 className="causes-hero__title">Our Active Causes & Field Projects</h1>
          <p className="causes-hero__lead">
            Every donation directly funds verified field projects bringing clean water, education, maternal healthcare, and emergency food supplies to families across Nigeria.
          </p>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE TOOLBAR: SEARCH & CATEGORY FILTER
          ========================================================================= */}
      <section className="causes-toolbar-section">
        <div className="container">
          <div className="causes-toolbar">
            {/* Search Input */}
            <div className="search-bar">
              <SearchIcon />
              <input
                type="text"
                className="search-bar__input"
                placeholder="Search causes by title, location or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-bar__clear"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="category-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & Starred Filter Options */}
            <div className="filter-controls">
              <button
                className={`filter-starred-btn ${showStarredOnly ? 'active' : ''}`}
                onClick={() => setShowStarredOnly(prev => !prev)}
                title="Filter causes you've starred"
              >
                <HeartIcon filled={showStarredOnly} />
                <span>Saved ({starredCauses.length})</span>
              </button>

              <select
                className="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="urgent">Urgent Need First</option>
                <option value="funded-high">Highest % Funded</option>
                <option value="goal-high">Highest Goal (₦)</option>
                <option value="goal-low">Lowest Goal (₦)</option>
              </select>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="results-summary">
            <div>
              Showing <strong>{filteredCauses.length}</strong> of <strong>{causes.length}</strong> initiatives
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {showStarredOnly && ' (Saved causes only)'}
            </div>
            <div className="results-summary__stats">
              <span>Total Mobilized: <strong>₦{totalFundedAcrossFiltered.toLocaleString()}</strong></span>
              <span>•</span>
              <span>Total Goal: <strong>₦{totalGoalAcrossFiltered.toLocaleString()}</strong></span>
            </div>
          </div>

          {/* =========================================================================
              CAUSES GRID (REUSABLE CAUSECARD COMPONENTS VIA .map)
              ========================================================================= */}
          <div className="causes-grid-wrap">
            {filteredCauses.length > 0 ? (
              <div className="causes-grid">
                {filteredCauses.map(cause => (
                  <CauseCard key={cause.id} cause={cause} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state__icon">🔍</div>
                <h3>No Matching Causes Found</h3>
                <p>We couldn’t find any initiatives matching your current search or filter criteria.</p>
                <button
                  className="btn btn--outline"
                  onClick={() => {
                    setSelectedCategory('All')
                    setSearchQuery('')
                    setShowStarredOnly(false)
                    setSortBy('default')
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

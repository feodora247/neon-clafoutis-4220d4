import { Link } from 'react-router-dom'
import { PledgeHandIcon } from '../components/NgoIcons.jsx'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page or humanitarian cause you are looking for does not exist or has been relocated.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn--primary">
              <PledgeHandIcon />
              <span>Return to Home</span>
            </Link>
            <Link to="/causes" className="btn btn--outline">
              Explore Active Causes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom';

export default function AppHeader({ showLinks = false }) {
  return (
    <header className="topbar app-header">
      <Link to="/" className="brand-mark">
        <span className="brand-dot" />
        <span>ABTalks</span>
      </Link>
      {showLinks ? (
        <nav className="header-links" aria-label="Primary navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#tracks">Tracks</a>
          <a href="#why-abtalks">Why ABTalks</a>
        </nav>
      ) : (
        <Link to="/dashboard" className="ghost-btn compact-btn">Dashboard</Link>
      )}
    </header>
  );
}

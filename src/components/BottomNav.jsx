import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Challenge' },
  { to: '/day/12', label: 'Progress' },
  { to: '/dashboard', label: 'Profile' }
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {links.map((item) => {
        const isActive = location.pathname === item.to;
        if (item.label === 'Progress') {
          return (
            <Link key={item.label} to="/day/12" className={`bottom-nav-item ${isActive ? 'active' : ''}`}>
              {item.label}
            </Link>
          );
        }
        return (
          <Link key={item.label} to={item.to} className={`bottom-nav-item ${isActive ? 'active' : ''}`}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

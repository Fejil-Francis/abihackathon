import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDayPage';

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/day/:dayNumber" element={<ChallengeDayPage />} />
      </Routes>
    </div>
  );
}

export default App;

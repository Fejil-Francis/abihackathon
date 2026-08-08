import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { challengeDays, studentProfile } from './data/mockData';

function LandingPage() {
  return (
    <div className="page landing-page">
      <header className="hero-card">
        <div className="brand-row">
          <span className="brand-badge">ABTalks</span>
          <span className="pill">60-day challenge</span>
        </div>
        <h1>Turn daily building into your strongest habit.</h1>
        <p>
          Join a student-first challenge built for college life: one small win every day,
          visible proof, and a streak that keeps growing.
        </p>
        <div className="hero-actions">
          <Link to="/dashboard" className="primary-btn">
            Start my challenge
          </Link>
          <a href="#why-it-works" className="secondary-btn">
            See how it works
          </a>
        </div>
      </header>

      <section className="info-grid" id="why-it-works">
        <article className="info-card">
          <h3>Build daily</h3>
          <p>Pick a track and ship one meaningful piece of work every day for 60 days.</p>
        </article>
        <article className="info-card">
          <h3>Show proof</h3>
          <p>Post your GitHub progress and a LinkedIn reflection to keep momentum visible.</p>
        </article>
        <article className="info-card">
          <h3>Stay consistent</h3>
          <p>Even a short day still counts, and the app nudges you back on track fast.</p>
        </article>
      </section>

      <section className="trust-card">
        <h2>Why students stick with it</h2>
        <ul>
          <li>Designed for late-night phone use and quick check-ins</li>
          <li>Built around visible streaks instead of perfection</li>
          <li>Clear next steps so you never feel lost on a busy day</li>
        </ul>
      </section>
    </div>
  );
}

function DashboardPage() {
  const profile = studentProfile;
  const currentTask = challengeDays[11];

  return (
    <div className="page dashboard-page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Student dashboard</p>
          <h2>Welcome back, {profile.name.split(' ')[0]}.</h2>
        </div>
        <Link to="/" className="ghost-btn">Home</Link>
      </header>

      <section className="hero-card dashboard-hero">
        <div className="streak-pill">🔥 {profile.streak} day streak</div>
        <h3>{profile.missedDays > 0 ? 'A missed day is not the end of the streak.' : 'You are building momentum.'}</h3>
        <p>{profile.tagline}</p>
      </section>

      <section className="card-stack">
        <article className="card">
          <div className="card-header">
            <h3>Today’s task</h3>
            <span className="chip">Day {currentTask.day}</span>
          </div>
          <p>{currentTask.title}</p>
          <Link to={`/day/${currentTask.day}`} className="primary-btn block-btn">
            Open today’s challenge
          </Link>
        </article>

        <article className="card">
          <div className="card-header">
            <h3>Challenge progress</h3>
            <span>{profile.completedDays}/60</span>
          </div>
          <div className="progress-bar">
            <div style={{ width: `${(profile.completedDays / 60) * 100}%` }} />
          </div>
          <p className="subtle">You are {profile.completedDays} days into a 60-day story.</p>
        </article>

        <article className="card">
          <div className="card-header">
            <h3>Standing</h3>
            <span className="chip">Top 18%</span>
          </div>
          <p>{profile.achievement}</p>
          <div className="mini-grid">
            <div>
              <strong>{profile.badges}</strong>
              <p>Badges</p>
            </div>
            <div>
              <strong>{profile.followers}</strong>
              <p>Followers</p>
            </div>
          </div>
        </article>

        <article className="card recovery-card">
          <div className="card-header">
            <h3>Recovery mode</h3>
            <span className="chip accent">Thoughtful idea</span>
          </div>
          <p>
            If you miss a day, the app offers a 10-minute comeback task so you do not lose the
            feeling of momentum.
          </p>
        </article>
      </section>
    </div>
  );
}

function DayPage() {
  const { dayNumber } = useParams();
  const numericDay = Number(dayNumber);
  const task = useMemo(() => challengeDays.find((entry) => entry.day === numericDay) ?? challengeDays[11], [numericDay]);
  const [proof, setProof] = useState({ github: false, linkedin: false });

  return (
    <div className="page day-page">
      <header className="topbar">
        <div>
          <p className="eyebrow">Challenge day</p>
          <h2>Day {task.day}</h2>
        </div>
        <div className="topbar-actions">
          <Link to="/dashboard" className="ghost-btn">Dashboard</Link>
          <Link to="/" className="ghost-btn">Home</Link>
        </div>
      </header>

      <section className="hero-card day-hero">
        <div className="streak-pill">{task.focus}</div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </section>

      <section className="card-stack">
        <article className="card">
          <div className="card-header">
            <h3>What you need to build</h3>
            <span className="chip">{task.time}</span>
          </div>
          <ul className="bullet-list">
            {task.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <div className="card-header">
            <h3>Submit proof of work</h3>
            <span className="chip">Mobile-friendly</span>
          </div>

          <button
            className={`proof-btn ${proof.github ? 'done' : ''}`}
            onClick={() => setProof((current) => ({ ...current, github: !current.github }))}
          >
            {proof.github ? '✓ GitHub repo ready' : 'Add GitHub repo / commit'}
          </button>

          <button
            className={`proof-btn ${proof.linkedin ? 'done' : ''}`}
            onClick={() => setProof((current) => ({ ...current, linkedin: !current.linkedin }))}
          >
            {proof.linkedin ? '✓ LinkedIn post ready' : 'Share the LinkedIn post'}
          </button>

          <div className="proof-status">
            <strong>{proof.github && proof.linkedin ? 'You are ready to log today’s win.' : 'Complete both steps to finish the day.'}</strong>
          </div>
        </article>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/day/:dayNumber" element={<DayPage />} />
      </Routes>
    </div>
  );
}

export default App;

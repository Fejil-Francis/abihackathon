import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { tracks } from '../data/mockChallenges';

export default function LandingPage() {
  return (
    <div className="page landing-page">
      <AppHeader showLinks />

      <section className="hero-card">
        <div className="pill-row">
          <span className="pill">Built for Indian college students</span>
          <span className="pill">60 days • Daily proof • Public progress</span>
        </div>
        <h1>60 days. 60 commits. One version of you that does not quit.</h1>
        <p>
          Build something every day, prove your work, and turn consistency into a portfolio that tells a real story.
        </p>
        <div className="hero-actions">
          <Link to="/dashboard" className="primary-btn">Start the 60-Day Challenge</Link>
          <a href="#how-it-works" className="secondary-btn">See how it works</a>
        </div>
      </section>

      <section className="visual-card" aria-label="Challenge preview">
        <div className="visual-label">Challenge preview</div>
        <div className="day-bubbles">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} className={index === 11 ? 'bubble current' : 'bubble'}>
              {index + 1}
            </span>
          ))}
        </div>
        <p className="subtle">Each day adds one more proof point to your learning journey.</p>
      </section>

      <section id="how-it-works" className="info-grid">
        <article className="info-card">
          <span className="step-number">01</span>
          <h3>Pick a track</h3>
          <p>Choose a direction that fits your energy and goals for the next two months.</p>
        </article>
        <article className="info-card">
          <span className="step-number">02</span>
          <h3>Build every day</h3>
          <p>Keep the bar simple: one meaningful build, one focused hour, one honest update.</p>
        </article>
        <article className="info-card">
          <span className="step-number">03</span>
          <h3>Commit + share</h3>
          <p>Post your progress to GitHub and LinkedIn so your work becomes visible.</p>
        </article>
        <article className="info-card">
          <span className="step-number">04</span>
          <h3>Finish with proof</h3>
          <p>Use each completed day as evidence that you kept showing up.</p>
        </article>
      </section>

      <section id="tracks" className="card-stack">
        {tracks.map((track) => (
          <article key={track.name} className="card track-card">
            <div className="card-header">
              <h3>{track.name}</h3>
              <span className="chip">{track.difficulty}</span>
            </div>
            <p>{track.description}</p>
            <p className="subtle">Example: {track.example}</p>
          </article>
        ))}
      </section>

      <section id="why-abtalks" className="card why-card">
        <h3>Why ABTalks?</h3>
        <div className="why-grid">
          <div>
            <strong>Consistency</strong>
            <p>60 days of visible progress that feel real and achievable.</p>
          </div>
          <div>
            <strong>Portfolio</strong>
            <p>Your GitHub tells the story of what you built and how you learned.</p>
          </div>
          <div>
            <strong>Visibility</strong>
            <p>Your LinkedIn becomes a public record of your momentum.</p>
          </div>
          <div>
            <strong>Confidence</strong>
            <p>Small daily wins become real confidence rather than forgotten intentions.</p>
          </div>
        </div>
      </section>

      <section className="card social-proof-card">
        <div className="social-metric">
          <strong>60 days</strong>
          <span>Daily challenge format</span>
        </div>
        <div className="social-metric">
          <strong>2 proof points</strong>
          <span>GitHub + LinkedIn</span>
        </div>
        <div className="social-metric">
          <strong>1 public journey</strong>
          <span>Learning that stays visible</span>
        </div>
      </section>

      <section className="hero-card final-cta">
        <h2>Your next 60 days are going to pass anyway.</h2>
        <p>Make something out of them.</p>
        <Link to="/dashboard" className="primary-btn">Start Day 1</Link>
      </section>

      <footer className="footer">
        <span>ABTalks</span>
        <a href="#">Challenge</a>
        <a href="#">Tracks</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </footer>
    </div>
  );
}

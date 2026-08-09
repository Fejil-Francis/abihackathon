import { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import ProofCard from '../components/ProofCard';
import EmptyState from '../components/EmptyState';
import { getChallengeByDay } from '../data/mockChallenges';
import { proofInitialState } from '../data/mockAchievements';

export default function ChallengeDayPage() {
  const { dayNumber } = useParams();
  const challenge = useMemo(() => getChallengeByDay(dayNumber), [dayNumber]);
  const [proof, setProof] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('abtalks-proof');
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return proofInitialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('abtalks-proof', JSON.stringify(proof));
    }
  }, [proof]);

  const complete = proof.github.submitted && proof.linkedin.submitted;
  const missingGithub = !proof.github.submitted;
  const missingLinkedin = !proof.linkedin.submitted;

  return (
    <div className="page day-page">
      <AppHeader />

      <section className="card day-hero">
        <div className="card-header">
          <div>
            <p className="eyebrow">Day {challenge.day} of 60</p>
            <h3>{challenge.track}</h3>
          </div>
          <span className="chip">{challenge.difficulty}</span>
        </div>
        <h2>{challenge.title}</h2>
        <p className="task-description">Estimated time: {challenge.estimatedMinutes} minutes</p>
        <p className="subtle">Build a small REST API that demonstrates CRUD operations and clean endpoint design.</p>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <p className="eyebrow">What you're building</p>
            <h3>Build a simple task management API</h3>
          </div>
        </div>
        <ul className="bullet-list">
          <li>Create a task</li>
          <li>Read tasks</li>
          <li>Update a task</li>
          <li>Delete a task</li>
        </ul>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Requirements</p>
            <h3>What counts as done</h3>
          </div>
        </div>
        <ul className="bullet-list">
          <li>At least 3 API endpoints</li>
          <li>GET and POST requests</li>
          <li>Basic error handling</li>
          <li>README documentation</li>
          <li>Push your code to GitHub</li>
        </ul>
      </section>

      <ProofCard
        title="GitHub"
        description="GitHub proof"
        placeholder="Paste GitHub URL"
        value={proof.github.url}
        onChange={(event) => setProof((current) => ({ ...current, github: { ...current.github, url: event.target.value } }))}
        onVerify={() => setProof((current) => ({ ...current, github: { ...current.github, submitted: true } }))}
        verified={proof.github.submitted}
        accentClass="github-card"
      />

      <ProofCard
        title="LinkedIn"
        description="LinkedIn proof"
        placeholder="Paste LinkedIn URL"
        value={proof.linkedin.url}
        onChange={(event) => setProof((current) => ({ ...current, linkedin: { ...current.linkedin, url: event.target.value } }))}
        onVerify={() => setProof((current) => ({ ...current, linkedin: { ...current.linkedin, submitted: true } }))}
        verified={proof.linkedin.submitted}
        accentClass="linkedin-card"
      />

      {missingGithub ? (
        <EmptyState
          title="GitHub proof missing"
          message="Submit your repository or today's commit to keep your progress verified."
        />
      ) : null}

      {missingLinkedin ? (
        <EmptyState
          title="LinkedIn proof missing"
          message="Share today's progress so your learning journey stays visible."
        />
      ) : null}

      <section className="card completion-card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Day 12 progress</p>
            <h3>{complete ? 'Day 12 complete 🎉' : 'Keep going'}</h3>
          </div>
        </div>
        <p className="subtle">{complete ? 'Your streak continues. 11 → 12 days.' : 'Complete both proof steps to finish the day.'}</p>
        <div className="status-list">
          <span className="status-pill">✓ Task understood</span>
          <span className="status-pill">✓ Build completed</span>
          <span className={`status-pill ${proof.github.submitted ? 'done' : ''}`}>{proof.github.submitted ? '✓ GitHub submitted' : '○ GitHub submitted'}</span>
          <span className={`status-pill ${proof.linkedin.submitted ? 'done' : ''}`}>{proof.linkedin.submitted ? '✓ LinkedIn submitted' : '○ LinkedIn submitted'}</span>
        </div>
        {complete ? <Link to="/dashboard" className="primary-btn full-width">Continue to Day 13</Link> : null}
      </section>

      <BottomNav />
    </div>
  );
}

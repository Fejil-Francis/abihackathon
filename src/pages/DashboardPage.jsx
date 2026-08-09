import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';
import ProgressBar from '../components/ProgressBar';
import CommitmentCard from '../components/CommitmentCard';
import DayGrid from '../components/DayGrid';
import { studentProfile } from '../data/mockStudent';
import { challenges } from '../data/mockChallenges';
import { achievements } from '../data/mockAchievements';

export default function DashboardPage() {
  const profile = studentProfile;
  const currentTask = challenges.find((item) => item.day === profile.currentDay) ?? challenges[11];
  const progressPercent = Math.round(profile.completionPercentage);

  return (
    <div className="page dashboard-page">
      <AppHeader />

      <section className="hero-card dashboard-hero">
        <div className="avatar-row">
          <div className="avatar">{profile.avatar}</div>
          <div>
            <p className="eyebrow">Good evening, {profile.name}</p>
            <h2>Day {profile.currentDay} of {profile.totalDays}</h2>
          </div>
        </div>
        <div className="streak-banner">
          <span className="streak-icon">🔥</span>
          <div>
            <strong>{profile.currentStreak} day streak</strong>
            <p>Your longest: {profile.longestStreak} days</p>
          </div>
        </div>
      </section>

      <section className="card main-task-card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Today's task</p>
            <h3>Day {currentTask.day}</h3>
          </div>
          <span className="chip">{currentTask.difficulty}</span>
        </div>
        <h4>{currentTask.title}</h4>
        <p className="subtle">{currentTask.track}</p>
        <p className="task-description">Estimated time: {currentTask.estimatedMinutes} minutes</p>
        <Link to={`/day/${currentTask.day}`} className="primary-btn full-width">Continue Day {currentTask.day}</Link>
      </section>

      <CommitmentCard buildDone={true} commitDone={profile.githubSubmitted} shareDone={profile.linkedinSubmitted} />

      <section className="card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Challenge progress</p>
            <h3>{profile.completedDays} / {profile.totalDays} days</h3>
          </div>
          <span className="chip">{progressPercent}% complete</span>
        </div>
        <ProgressBar value={progressPercent} label="Momentum" />
        <DayGrid currentDay={profile.currentDay} />
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Achievements</p>
            <h3>Unlocked wins</h3>
          </div>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="achievement-card">
              <strong>{achievement.title}</strong>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card standing-card">
        <div className="card-header">
          <div>
            <p className="eyebrow">Your standing</p>
            <h3>Day {profile.currentDay}</h3>
          </div>
          <span className="chip">Top 24% this week</span>
        </div>
        <div className="standing-grid">
          <div>
            <strong>{profile.currentStreak}</strong>
            <p>Consistency</p>
          </div>
          <div>
            <strong>{profile.completedDays}</strong>
            <p>Proof submitted</p>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}

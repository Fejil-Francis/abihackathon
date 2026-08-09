export default function CommitmentCard({ buildDone, commitDone, shareDone }) {
  const total = [buildDone, commitDone, shareDone].filter(Boolean).length;
  const finished = total === 3;

  return (
    <section className="card commitment-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Tonight's commitment</p>
          <h3>Finish Day 12</h3>
        </div>
        <span className="chip">~45 min</span>
      </div>
      <p className="commitment-copy">
        You do not need a perfect project. You just need proof that you showed up.
      </p>
      <div className="commitment-steps" aria-label="commitment checklist">
        <div className={`step-pill ${buildDone ? 'done' : ''}`}>✓ Build</div>
        <div className={`step-pill ${commitDone ? 'done' : ''}`}>✓ Commit</div>
        <div className={`step-pill ${shareDone ? 'done' : ''}`}>✓ Share</div>
      </div>
      <div className="commitment-footer">
        <span>{finished ? 'Day complete 🎉' : `${total}/3 steps done`}</span>
      </div>
    </section>
  );
}

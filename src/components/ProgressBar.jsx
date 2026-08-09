export default function ProgressBar({ value, label }) {
  return (
    <div className="progress-block">
      <div className="progress-meta">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}

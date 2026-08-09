export default function EmptyState({ title, message, action }) {
  return (
    <section className="card empty-state-card" aria-live="polite">
      <p className="eyebrow">Status</p>
      <h3>{title}</h3>
      <p className="subtle">{message}</p>
      {action ? <div className="empty-action">{action}</div> : null}
    </section>
  );
}

export default function ProofCard({ title, description, placeholder, value, onChange, onVerify, verified, accentClass }) {
  return (
    <section className={`card proof-card ${accentClass}`}>
      <div className="card-header">
        <div>
          <p className="eyebrow">{title}</p>
          <h3>{description}</h3>
        </div>
        <span className="chip">{verified ? 'Verified' : 'Pending'}</span>
      </div>
      <label className="input-label" htmlFor={`${title.toLowerCase()}-url`}>
        {placeholder}
      </label>
      <input
        id={`${title.toLowerCase()}-url`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="proof-input"
      />
      <button className="primary-btn full-width" onClick={onVerify} type="button">
        {verified ? 'Verified' : 'Verify proof'}
      </button>
    </section>
  );
}

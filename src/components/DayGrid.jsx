export default function DayGrid({ currentDay }) {
  const days = Array.from({ length: 60 }, (_, index) => index + 1);
  const statuses = days.map((day) => {
    if (day < 12) return 'completed';
    if (day === 12) return 'current';
    return 'upcoming';
  });

  return (
    <div className="day-grid" role="list" aria-label="Challenge progress grid">
      {days.map((day, index) => (
        <div key={day} className={`day-pill ${statuses[index]} ${day === currentDay ? 'active' : ''}`}>
          {day < 10 ? `0${day}` : day}
          {statuses[index] === 'completed' ? ' ✓' : statuses[index] === 'current' ? ' →' : ''}
        </div>
      ))}
    </div>
  );
}

export const student = {
  name: 'Alex',
  track: 'Full Stack Development',
  currentDay: 12,
  totalDays: 60,
  currentStreak: 11,
  longestStreak: 11,
  completedDays: 11,
  completionPercentage: 18.3,
  missedDay: false,
  previousStreak: 8,
  githubSubmitted: true,
  linkedinSubmitted: false,
  avatar: 'A'
};

export const studentProfile = {
  ...student,
  tagline: 'Small daily wins keep the streak alive.'
};

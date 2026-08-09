export const challenges = [
  { day: 1, title: 'Build Your First Landing Page', difficulty: 'Beginner', estimatedMinutes: 30, track: 'Full Stack Development' },
  { day: 2, title: 'Create a Responsive Navbar', difficulty: 'Beginner', estimatedMinutes: 30, track: 'Full Stack Development' },
  { day: 3, title: 'Plan Your Habit Loop', difficulty: 'Beginner', estimatedMinutes: 20, track: 'Product Thinking' },
  { day: 4, title: 'Add a Progress View', difficulty: 'Beginner', estimatedMinutes: 25, track: 'UI/UX' },
  { day: 5, title: 'Improve Your First Impression', difficulty: 'Beginner', estimatedMinutes: 30, track: 'Design' },
  { day: 6, title: 'Write Better Learning Notes', difficulty: 'Beginner', estimatedMinutes: 20, track: 'Reflection' },
  { day: 7, title: 'Create a Weekly Snapshot', difficulty: 'Beginner', estimatedMinutes: 15, track: 'Planning' },
  { day: 8, title: 'Refine Your Story', difficulty: 'Beginner', estimatedMinutes: 20, track: 'Communication' },
  { day: 9, title: 'Polish the Main Flow', difficulty: 'Intermediate', estimatedMinutes: 25, track: 'UX' },
  { day: 10, title: 'Add a Comeback Tool', difficulty: 'Intermediate', estimatedMinutes: 15, track: 'Product' },
  { day: 11, title: 'Turn Feedback Into Progress', difficulty: 'Intermediate', estimatedMinutes: 25, track: 'Iteration' },
  { day: 12, title: 'Build a REST API', difficulty: 'Intermediate', estimatedMinutes: 45, track: 'Full Stack Development' }
];

export const tracks = [
  {
    name: 'Full Stack Development',
    description: 'Build complete apps from UI to backend and learn how systems fit together.',
    difficulty: 'Intermediate',
    example: 'A task manager with auth and a dashboard'
  },
  {
    name: 'AI / Machine Learning',
    description: 'Explore models, prompts, datasets, and product ideas with real code.',
    difficulty: 'Intermediate',
    example: 'A simple chatbot or recommendation demo'
  },
  {
    name: 'Data Science',
    description: 'Work with real datasets, visualizations, and insight-driven stories.',
    difficulty: 'Beginner',
    example: 'A dashboard that explains trends clearly'
  },
  {
    name: 'Cybersecurity',
    description: 'Study secure workflows, analysis, and practical defense strategies.',
    difficulty: 'Intermediate',
    example: 'A small security checklist or analyzer'
  },
  {
    name: 'App Development',
    description: 'Create polished mobile-friendly experiences with modern interfaces.',
    difficulty: 'Beginner',
    example: 'A daily habit tracker with a strong UI'
  }
];

export function getChallengeByDay(dayNumber) {
  return challenges.find((challenge) => challenge.day === Number(dayNumber)) ?? challenges[11];
}

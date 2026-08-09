# ABTalks Redesign

## Overview
ABTalks is a mobile-first redesign of a 60-day coding challenge experience for Indian college students. The product is built to make daily progress feel clear, achievable, and motivating, especially for students who are balancing classes, projects, and late-night study sessions.

## Features
- Mobile-first landing page that explains the challenge clearly
- Student dashboard with streaks, progress, tasks, and achievements
- Daily challenge experience for Day 12 with build guidance and proof submission
- GitHub and LinkedIn proof submission with mocked frontend validation
- Reusable UI states for first-day, missed-day, and empty-profile situations
- Local mock data for student profile, challenge content, and achievements

## Tech Stack
- React
- Vite
- React Router DOM
- CSS for responsive UI styling

## Running Locally
```bash
npm install
npm run dev
```

## Routes
```text
/
/dashboard
/day/12
```

## Design Decisions
The redesign focuses on helping students understand their next step quickly. The dashboard includes a compact commitment card that highlights three small actions: build, commit, and share. This makes the experience feel less overwhelming and more actionable when a student only has a short window of time at night.

## Project Structure
- src/pages/LandingPage.jsx: landing experience and challenge intro
- src/pages/DashboardPage.jsx: student dashboard and progress overview
- src/pages/ChallengeDayPage.jsx: day-specific challenge flow and proof submission
- src/data/mockStudent.js: student profile mock data
- src/data/mockChallenges.js: challenge and track mock data
- src/data/mockAchievements.js: achievements and proof defaults
- src/components: reusable UI building blocks for headers, cards, progress, and proof flows
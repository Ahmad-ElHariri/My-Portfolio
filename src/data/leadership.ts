export type LeadershipItem = {
  title: string;
  org: string;
  period: string;
  date: string; // ISO date for sorting (newest → oldest)
  imageUrl: string;
  bullets: string[];
  status?: 'coming_soon';
};

export const leadership: LeadershipItem[] = [
  {
    title: 'Logistics Officer',
    org: 'Google Developers Club — AUB',
    period: '2024 — 2025',
    date: '2025-05-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/build-with-ai.jpg?raw=true',
    bullets: ['Supported event operations and coordination for developer-focused community activities.']
  },
  {
    title: 'Communications Officer',
    org: 'Insight Club',
    period: '2024 — 2025',
    date: '2025-04-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/insight.png?raw=true',
    bullets: ['Coordinated communications and outreach to support community engagement.']
  },
  {
    title: 'Year Representative',
    org: 'IEEE Club',
    period: '2024',
    date: '2024-10-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/ieee.png?raw=true',
    bullets: ['Represented cohort coordination and supported club initiatives and logistics.']
  },
  {
    title: 'Community Service Artifact',
    org: 'Community / Volunteering',
    period: 'Coming Soon',
    date: '2026-01-19',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/coming-soon.png?raw=true',
    bullets: ['A dedicated artifact highlighting community service outcomes and impact — details coming soon.'],
    status: 'coming_soon'
  }
];

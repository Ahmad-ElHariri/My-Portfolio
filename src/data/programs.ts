export type Program = {
  name: string;
  org: string;
  period: string;
  date: string; // ISO date for sorting (newest → oldest)
  imageUrl: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    name: 'Physics Research Program',
    org: 'American University of Beirut (AUB)',
    period: '2024',
    date: '2024-07-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/physics.jpg?raw=true',
    highlights: ['Research exposure and analytical practice in academic environments.']
  },
  {
    name: 'AI Bootcamp',
    org: 'ZAKA',
    period: '2025',
    date: '2025-08-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/zakabootcamp.png?raw=true',
    highlights: ['ML/DL foundations across NLP, CV, and practical model reasoning.']
  },
  {
    name: 'Machine Learning Boot Camp',
    org: 'IEEE Club',
    period: '2024',
    date: '2024-10-01',
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/ml-bootcamp.png?raw=true',
    highlights: ['Hands-on exposure to core ML concepts and workflows.']
  }
];

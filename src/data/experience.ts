export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: 'AI Engineering Intern',
    org: 'EDM',
    period: 'June 2025 — August 2025',
    location: 'Beirut, Lebanon',
    bullets: [
      'Built automation and GenAI workflows that reduce repetitive operations and improve delivery consistency.',
      'Integrated tools and APIs into structured pipelines (agents + retrieval + formatting) for business outputs.',
      'Delivered end-to-end systems: requirements → workflow logic → implementation → iteration.'
    ],
    tags: ['GenAI', 'Automation', 'n8n', 'Python']
  },
  {
    role: 'Product Management Track',
    org: 'Amazon Industry Program',
    period: 'June 2025 — August 2025',
    location: 'Remote',
    bullets: [
      'Worked on product direction and structured planning for an education-focused product initiative.',
      'Translated user needs into clear feature definitions and prioritized delivery milestones.'
    ],
    tags: ['Product', 'Strategy', 'Execution']
  }
];

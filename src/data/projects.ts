export type Project = {
  title: string;
  date: string; // ISO date string for sorting
  summary: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  websiteUrl: string;
  status?: 'coming_soon';
};

// NOTE: Keep date in YYYY-MM-DD format. Projects are rendered newest → oldest.
export const projects: Project[] = [
  {
    title: 'AI Image Generator for T-Shirts',
    date: '2026-01-20',
    summary: 'Coming soon — Generate print-ready t-shirt designs from prompts and deliver realistic mockups.',
    tags: ['GenAI', 'Image Generation', 'Product'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/coming-soon.png?raw=true',
    githubUrl: 'GITHUB_URL_COMING_SOON',
    websiteUrl: 'WEBSITE_URL_COMING_SOON',
    status: 'coming_soon'
  },
  {
    title: 'Slide Automation',
    date: '2026-01-13',
    summary: 'Automated slide production by mapping structured content into PowerPoint templates with clean formatting.',
    tags: ['Python', 'PowerPoint', 'Automation'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/slide-automation.png?raw=true',
    githubUrl: 'GITHUB_URL_SLIDE_AUTOMATION',
    websiteUrl: 'WEBSITE_URL_SLIDE_AUTOMATION'
  },
  {
    title: 'AI Consulting Slide Builder',
    date: '2025-12-27',
    summary: 'Transforms messy consulting inputs into structured, slide-ready narratives and layouts for fast deck creation.',
    tags: ['GenAI', 'Structured Output', 'Automation'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/consulting-slide.png?raw=true',
    githubUrl: 'https://github.com/Ahmad-ElHariri/consulting-slides-builder',
    websiteUrl: 'WEBSITE_URL_CONSULTING_SLIDES'
  },
  {
    title: 'Long Document Workflow',
    date: '2025-08-07',
    summary: 'Multi-agent document generator that outlines, writes sections iteratively, persists memory, and outputs styled HTML/PDF.',
    tags: ['Agents', 'RAG', 'MongoDB', 'n8n'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/longdocument.jpg?raw=true',
    githubUrl: 'GITHUB_URL_LONG_DOC',
    websiteUrl: 'WEBSITE_URL_LONG_DOC'
  },
  {
    title: 'SAP Offer AI Generator',
    date: '2025-07-08',
    summary: 'Agentic pipeline for generating SAP proposals from internal documents using retrieval and structured writing chains.',
    tags: ['RAG', 'Proposals', 'Enterprise'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/sap.png?raw=true',
    githubUrl: 'GITHUB_URL_SAP_OFFER',
    websiteUrl: 'WEBSITE_URL_SAP_OFFER'
  },
  {
    title: 'Wood Offers Agent',
    date: '2025-07-14',
    summary: 'Offer/pricing automation for a wood factory: rules-based pricing + structured outputs for professional offers.',
    tags: ['Pricing', 'Automation', 'Data Modeling'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/wood.png?raw=true',
    githubUrl: 'WEBSITE_URL_WOOD_AGENT',
    websiteUrl: 'WEBSITE_URL_WOOD_AGENT'
  },
  {
    title: 'Wazir AI / Ministry Helper Bot',
    date: '2025-09',
    summary: 'AI workflow that uses internal knowledge based on official ministry laws and documents to answer peoples\' questions about ministries',
    tags: ['Microsoft Graph', 'Agents', 'Automation'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/wazirai.jpg?raw=true',
    githubUrl: 'https://github.com/Ahmad-ElHariri/Ministry-Bot',
    websiteUrl: 'https://wazir-ai.netlify.app/'
  },
  {
    title: 'Vid2Sign',
    date: '2025-06-07',
    summary: 'Chrome extension that translates YouTube captions into sign language videos to improve accessibility for deaf users.',
    tags: ['Chrome Extension', 'Accessibility', 'NLP'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/vid2sign.png?raw=true',
    githubUrl: 'GITHUB_URL_VID2SIGN',
    websiteUrl: 'WEBSITE_URL_VID2SIGN'
  },
  {
    title: 'MyToolKit',
    date: '2025-05-30',
    summary: 'A clean web experience showcasing therapeutic/psychology books with demo pages and structured content.',
    tags: ['Web', 'Content', 'Delivery'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/mytoolkit.jpg?raw=true',
    githubUrl: 'https://github.com/JadHdh689/MyToolKit',
    websiteUrl: 'https://mytoolkit-books.vercel.app/'
  },
  {
    title: 'Turbo Motors',
    date: '2025-01-05',
    summary: 'Car rental platform with booking flows and a full-stack foundation (UI + backend + database).',
    tags: ['Full-Stack', 'Web App', 'Database'],
    imageUrl: 'https://github.com/Ahmad-ElHariri/My-Portfolio/blob/main/images/turbo-motors.png?raw=true',
    githubUrl: 'https://github.com/Ahmad-ElHariri/Turbo-Motors',
    websiteUrl: 'WEBSITE_URL_TURBO_MOTORS'
  }
];

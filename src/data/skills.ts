export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    title: 'Web Development',
    items: ['HTML/CSS', 'Node.js', 'Express.js']
  },
  {
    title: 'Backend & API Development',
    items: ['FastAPI', 'REST APIs (design + integration)', 'Postman (API testing)', 'Authentication flows', 'Microsoft Graph API (Outlook email integration)']
  },
  {
    title: 'Software Engineering Fundamentals',
    items: ['OOP', 'Data Structures & Algorithms', 'Clean code']
  },
  {
    title: 'Databases & Data Modeling',
    items: ['MongoDB Atlas', 'MySQL']
  },
  {
    title: 'GenAI / LLM & Retrieval',
    items: [
      'RAG pipelines',
      'Tool-using agents (ReAct-style)',
      'Prompting for structured outputs',
      'Vector databases: Pinecone, Qdrant',
      'Embeddings: OpenAI embeddings, Jina embeddings',
      'OpenAI API',
      'Groq API',
      'Tavily web search',
      'Memory-aware workflows (session-based persistence)'
    ]
  },
  {
    title: 'DevOps & Engineering Tooling',
    items: ['Docker (local environments, containers, persistence concepts)', 'Git / GitHub', 'Basic environment setup and troubleshooting', 'Tunneling/testing for public endpoints (ngrok)']
  },
  {
    title: 'Machine Learning / Deep Learning Foundations',
    items: ['Data preprocessing', 'Supervised ML (linear regression, logistic regression)', 'Deep learning foundations', 'Computer vision foundations, NLP foundations', 'Time series forecasting foundations', 'Libraries: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch (general overview)']
  },
  {
    title: 'Automation & Workflow Orchestration',
    items: ['n8n', 'Webhooks and workflow routing', 'WhatsApp Business API Platform', 'Python automation pipelines', 'Google Cloud Console', 'Google APIs', 'Meta Developers Platform']
  },
  {
    title: 'Dev Tools & Engineering Platforms',
    items: ['GitHub', 'Docker', 'VS Code', 'Cisco Packet Tracer', 'WSL', 'Jira', 'Vercel', 'Bolt.new']
  },
  {
    title: 'Productivity / Media Tools',
    items: ['Microsoft Visio', 'Microsoft PowerPoint (Intermediate Level)', 'WordPress', 'OneDrive', 'LeetCode', 'CapCut', 'Veo 3']
  },
  {
    title: 'Soft Skills',
    items: ['ROI / value framing (Automation impact)', 'Product vision (Amazon mentorship)', 'Agile', 'Community outreach (Clubs)', 'Documentation & structuring']
  }
];

import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'CNNs & Transfer Learning', level: 87 },
      { name: 'Model Evaluation (Precision/Recall/F1)', level: 82 },
      { name: 'Data Preprocessing & Feature Engineering', level: 84 },
    ],
  },
  {
    title: 'LLMs & Data Systems',
    skills: [
      { name: 'LLaMA 3 (Ollama)', level: 80 },
      { name: 'RAG (Retrieval-Augmented Generation)', level: 82 },
      { name: 'FAISS Vector Search', level: 80 },
      { name: 'Prompt Engineering', level: 78 },
      { name: 'ETL Pipelines (PDF + Web Data)', level: 83 },
    ],
  },
  {
    title: 'Backend, Web & Deployment',
    skills: [
      { name: 'FastAPI / Flask', level: 88 },
      { name: 'REST API Design', level: 86 },
      { name: 'React (Frontend Integration)', level: 75 },
      { name: 'Docker & Deployment', level: 80 },
      { name: 'Git & GitHub', level: 90 },
    ],
  },
];
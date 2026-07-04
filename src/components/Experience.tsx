import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: "project",
    title: "Amazon Product Price Prediction",
    organization: "Multimodal Machine Learning Project",
    period: "2026",
    description:
      "Built an end-to-end multimodal machine learning pipeline to predict Amazon product prices by combining textual, categorical, and image features from 75,000+ products.",
    highlights: [
      "Engineered multimodal features using TF-IDF for product text, one-hot encoding for categorical attributes, and EfficientNet image embeddings extracted with PyTorch",
      "Trained and benchmarked LightGBM, CatBoost, and XGBoost regression models, then implemented a weighted ensemble to improve prediction accuracy",
      "Optimized the LightGBM-based pipeline, achieving 11.42 MAE, 33.04 RMSE, 0.277 R², and 50.14% SMAPE on the validation set",
      "Developed an interactive web application for real-time product price prediction with image upload and automated feature preprocessing",
    ],
  },
  {
    type: "project",
    title: "Grid07 – Enterprise Knowledge Graph Agent",
    organization: "Enterprise AI + Knowledge Graph Project",
    period: "2026",
    description:
      "Built an enterprise AI platform that enables semantic search and question answering over structured knowledge graphs and enterprise documents using Retrieval-Augmented Generation (RAG).",
    highlights: [
      "Developed a hybrid RAG pipeline for intelligent enterprise document retrieval",
      "Built FastAPI backend integrated with Neo4j Knowledge Graph for contextual search",
      "Implemented LLM-powered semantic querying and response generation",
      "Containerized the complete application using Docker for scalable deployment",
    ],
  },
  {
    type: "project",
    title: "MoSPI Scraper + LLaMA-Powered RAG Chatbot",
    organization: "LLM + Data Engineering Project",
    period: "2026",
    description:
      "Built a production-ready RAG system for querying MoSPI publications by combining incremental web scraping, ETL pipelines, and LLaMA 3-powered semantic search.",
    highlights: [
      "Implemented incremental web scraper using SHA-256 fingerprinting to prevent duplicate ingestion",
      "Built ETL pipeline with BeautifulSoup and pdfplumber for HTML and PDF processing",
      "Developed LLaMA 3 + FAISS powered chatbot with FastAPI backend",
      "Containerized the entire application using Docker for scalable deployment",
    ],
  },
  {
    type: "project",
    title: "AI Driver Monitoring System",
    organization: "Computer Vision + Real-Time AI Project",
    period: "2026",
    description:
      "Developed a real-time AI-powered driver monitoring system for fatigue, distraction, and emotion detection using computer vision and deep learning.",
    highlights: [
      "Built a low-latency inference pipeline using PyTorch, OpenCV, and MobileNetV2",
      "Implemented real-time fatigue, distraction, and emotion detection",
      "Designed a dynamic risk-scoring engine combining multiple AI model outputs",
      "Integrated FastAPI backend with Streamlit dashboard for live monitoring and analytics",
    ],
  },
];


const education = [
  {
    type: 'education',
    title: 'B.Tech, Mining Engineering',
    organization: 'IIT ISM Dhanbad',
    period: '2024 - 2028',
    description:
      'Undergraduate student with strong focus on Machine Learning, Data Structures & Algorithms, and full-stack development alongside core academics.',
  },
];


export const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subheading mx-auto">
              My professional journey and academic background
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-xl">Project Experience</h3>
              </div>
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className={`timeline-item transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="glass-card p-5 rounded-xl">
                      <span className="text-primary text-sm font-medium">{exp.period}</span>
                      <h4 className="font-display font-semibold text-lg mt-1">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                      {exp.highlights && (
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight) => (
                            <li key={highlight} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="text-accent" size={20} />
                </div>
                <h3 className="font-display font-semibold text-xl">Education</h3>
              </div>
              <div className="space-y-0">
                {education.map((edu, index) => (
                  <div
                    key={edu.title}
                    className={`timeline-item transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${450 + index * 150}ms` }}
                  >
                    <div className="glass-card p-5 rounded-xl">
                      <span className="text-accent text-sm font-medium">{edu.period}</span>
                      <h4 className="font-display font-semibold text-lg mt-1">{edu.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{edu.organization}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

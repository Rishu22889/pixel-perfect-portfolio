import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'project',
    title: 'MoSPI Scraper + LLaMA-Powered RAG Chatbot',
    organization: 'LLM + Data Engineering Project',
    period: '2026',
    description:
      'Built a production-style RAG system for querying MoSPI publications using LLaMA 3. Designed an incremental web scraping and ETL pipeline for HTML and PDF data, enabling efficient document ingestion and semantic retrieval.',
    highlights: [
      'Implemented incremental scraper with SHA-256 fingerprinting to prevent duplicate ingestion',
      'Built ETL pipeline using BeautifulSoup and pdfplumber with chunking for LLM processing',
      'Developed RAG chatbot using LLaMA 3, FAISS vector search, and FastAPI backend',
      'Containerized full system using Docker for scalable deployment',
    ],
  },
  {
    type: 'project',
    title: 'AI Driver Monitoring System',
    organization: 'Computer Vision + Real-Time System',
    period: '2026',
    description:
      'Developed a real-time AI system to monitor driver fatigue, distraction, and emotions using deep learning and computer vision techniques.',
    highlights: [
      'Built low-latency inference pipeline using PyTorch and OpenCV',
      'Used MobileNetV2 for efficient real-time detection',
      'Designed dynamic risk scoring system combining multiple model outputs',
      'Integrated FastAPI backend with Streamlit dashboard for live analytics',
    ],
  },
  {
    type: 'project',
    title: 'MRI Brain Tumor Detection System',
    organization: 'Deep Learning Project',
    period: '2026',
    description:
      'Implemented a deep learning-based MRI classification system to detect brain tumors using transfer learning.',
    highlights: [
      'Trained ResNet-18 with transfer learning for 4-class classification',
      'Applied data augmentation, layer freezing, and model checkpointing',
      'Achieved high validation performance with precision/recall/F1 evaluation',
      'Deployed as an interactive Streamlit web application',
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

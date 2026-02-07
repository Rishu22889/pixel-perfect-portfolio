import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'project',
    title: 'Placement Prediction System',
    organization: 'Machine Learning Project',
    period: '2026',
    description:
      'Built an end-to-end ML web application to predict student placement outcomes using a Random Forest model. Handled data preprocessing, model training, evaluation, and deployment.',
    highlights: [
      'Implemented Random Forest from scikit-learn',
      'Designed Flask-based inference API',
      'Focused on model interpretability and clean inputs',
    ],
  },
  {
    type: 'project',
    title: 'AgentHire',
    organization: 'AI Automation Project',
    period: '2026',
    description:
      'AI-powered job application automation platform that analyzes job descriptions, matches resumes, and assists with applications.',
    highlights: [
      'Resume–job description matching',
      'FastAPI backend with modular design',
      'Scalable architecture for automation',
    ],
  },
  {
    type: 'project',
    title: 'Email Spam Classifier',
    organization: 'NLP Project',
    period: '2025',
    description:
      'Developed a spam detection system using TF-IDF and probabilistic classifiers. Deployed as a web application for real-time predictions.',
    highlights: [
      'Applied TF-IDF feature extraction',
      'Built end-to-end ML pipeline',
      'Integrated model with web interface',
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

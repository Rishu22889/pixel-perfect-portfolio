import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    organization: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise SaaS products. Architecting microservices, mentoring junior developers, and implementing CI/CD pipelines.',
    highlights: ['Led team of 5 developers', 'Reduced load time by 40%', 'Implemented automated testing'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained multiple web applications from scratch. Worked closely with design team to implement pixel-perfect UIs.',
    highlights: ['Developed 3 major products', 'Integrated 10+ third-party APIs', 'Improved SEO scores by 50%'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    organization: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Created responsive websites and web applications for various clients. Focused on performance and accessibility.',
    highlights: ['Delivered 20+ client projects', 'Achieved 95+ Lighthouse scores', 'Mentored 2 interns'],
  },
];

const education = [
  {
    type: 'education',
    title: 'M.S. Computer Science',
    organization: 'Stanford University',
    period: '2017 - 2019',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Research focus on natural language processing.',
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    organization: 'MIT',
    period: '2013 - 2017',
    description: 'Graduated with honors. Active member of the coding club and hackathon organizer.',
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
                <h3 className="font-display font-semibold text-xl">Work Experience</h3>
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

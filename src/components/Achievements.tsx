import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    organization: 'TechCrunch Disrupt 2023',
    description: 'First place for building an AI-powered accessibility tool in 48 hours.',
  },
  {
    icon: Award,
    title: 'AWS Solutions Architect',
    organization: 'Amazon Web Services',
    description: 'Professional certification for designing distributed systems on AWS.',
  },
  {
    icon: Star,
    title: 'Open Source Contributor',
    organization: 'React Ecosystem',
    description: 'Top 100 contributor to popular React libraries with 500+ commits.',
  },
  {
    icon: Medal,
    title: 'Google Cloud Professional',
    organization: 'Google Cloud Platform',
    description: 'Certified Cloud Developer with expertise in GCP services.',
  },
  {
    icon: Award,
    title: 'Meta Frontend Developer',
    organization: 'Meta (Coursera)',
    description: 'Professional certificate in advanced React and frontend development.',
  },
  {
    icon: Trophy,
    title: 'Best Innovation Award',
    organization: 'TechCorp Annual Awards',
    description: 'Recognized for developing an internal tool that saved 200+ hours monthly.',
  },
];

export const Achievements = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Achievements & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subheading mx-auto">
              Recognition and credentials that validate my expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`skill-card group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-primary text-sm mb-2">{achievement.organization}</p>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

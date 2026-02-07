import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Participant',
    organization: 'AI Hackathons & Hackfest',
    description:
      'Participated in multiple AI-focused hackathons and Hackfest events, working on real-world problem statements under time constraints.',
  },
  {
    icon: Award,
    title: 'Machine Learning Specialization',
    organization: 'Coursera',
    description:
      'Completed a comprehensive ML specialization covering supervised learning, unsupervised learning, and model evaluation.',
  },
  {
    icon: Medal,
    title: 'AI Engineer Certification',
    organization: 'Simplilearn',
    description:
      'Certified AI Engineer with hands-on exposure to machine learning workflows, model building, and deployment concepts.',
  },
  {
    icon: Award,
    title: 'Deep Learning Certificate',
    organization: 'Coursera',
    description:
      'Completed deep learning coursework covering neural networks, optimization, and practical model training concepts.',
  },
  {
    icon: Star,
    title: 'Competitive Programming',
    organization: 'Codeforces & LeetCode',
    description:
      'Achieved 1200+ Codeforces rating and solved 100+ LeetCode problems, strengthening algorithmic thinking and problem-solving skills.',
  },
  {
    icon: Trophy,
    title: 'Project-Based Learning',
    organization: 'Personal & Academic Projects',
    description:
      'Built multiple end-to-end ML and web projects including placement prediction, spam classification, and automation tools.',
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
              Certifications, competitions, and milestones from my learning journey
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

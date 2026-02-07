import { Code, Palette, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  {
    icon: Code,
    title: 'Strong Fundamentals',
    description: 'Solid foundations in data structures, algorithms, and core programming concepts',
  },
  {
    icon: Zap,
    title: 'Applied Machine Learning',
    description: 'Building and deploying ML models with a focus on real-world use cases and performance',
  },
  {
    icon: Palette,
    title: 'End-to-End Projects',
    description: 'Taking ideas from data preprocessing and modeling to complete web applications',
  },
  {
    icon: Users,
    title: 'Consistent Learner',
    description: 'Actively improving through competitive programming, projects, and certifications',
  },
];


export const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subheading mx-auto">
              A passionate developer dedicated to creating impactful digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a B.Tech student at IIT ISM Dhanbad focused on building systems where machine learning meets production software. I enjoy shipping end-to-end products — from data pipelines and models to responsive UIs and reliable deployments. My work emphasizes reproducibility, scale, and measurable impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              <ul>
    <li>Strong foundations in DSA, algorithms, and system thinking</li>
    <li>Hands-on experience deploying ML models as web applications</li>
    <li>Comfortable with both backend logic and frontend UX</li>
  </ul>
                 </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">2nd</span>
                  <span className="text-muted-foreground ml-2">Year Student</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">5+</span>
                  <span className="text-muted-foreground ml-2">Projects Completed</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">1200+</span>
                  <span className="text-muted-foreground ml-2">Codeforces Rating</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`skill-card transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

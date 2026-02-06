import { Code, Palette, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'Design Eye',
    description: 'Creating visually appealing and intuitive user interfaces',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building fast, optimized applications for the best UX',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in agile teams and with stakeholders',
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
                I'm a full-stack developer with 5+ years of experience building web applications
                that solve real-world problems. My journey started with curiosity about how
                websites work, and it evolved into a passion for creating seamless digital experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud technologies, and creating
                accessible, performant applications. When I'm not coding, you'll find me
                exploring new technologies, contributing to open-source, or mentoring aspiring developers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in continuous learning and pushing the boundaries of what's possible
                with technology. Let's build something amazing together.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">5+</span>
                  <span className="text-muted-foreground ml-2">Years Experience</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">50+</span>
                  <span className="text-muted-foreground ml-2">Projects Completed</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">20+</span>
                  <span className="text-muted-foreground ml-2">Happy Clients</span>
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

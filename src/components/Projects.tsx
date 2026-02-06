import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration. Built with modern technologies for optimal performance.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop, and team workspaces.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: 'Leverages GPT-4 to generate marketing copy, blog posts, and social media content with custom templates.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search, map integration, and virtual tour capabilities.',
    tech: ['Vue.js', 'Express', 'MongoDB', 'Mapbox'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first PWA for tracking workouts, nutrition, and progress with data visualization.',
    tech: ['React Native', 'Firebase', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool that generates beautiful portfolio websites from a simple JSON configuration.',
    tech: ['Node.js', 'Handlebars', 'CLI'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              A selection of projects that showcase my skills and passion
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <Folder size={48} className="text-primary opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-primary transition-colors"
                        aria-label="View GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:text-primary transition-colors"
                        aria-label="View Live"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="font-display font-semibold text-xl text-center mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`skill-card group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${450 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={32} />
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

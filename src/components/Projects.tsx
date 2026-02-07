import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Folder,
  MoreVertical,
} from 'lucide-react';

/* ===================== DATA ===================== */

const projects = [
  {
    title: 'Placement Prediction System',
    image: '/projects/placement.png',
    description:
      'End-to-end machine learning web application that predicts student placement outcomes using a Random Forest model based on academic and skill-related features.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Flask'],
    featured: true,
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rishu22889/ML/tree/main/Projects/Student_Placement',
        icon: Github,
      },
      {
        label: 'Live Demo',
        url: 'https://ml-dfgy.onrender.com/',
        icon: ExternalLink,
      },
    ],
  },
  {
    title: 'Email Spam Classifier',
    image: '/projects/spam.png',
    description:
      'Machine learning-based spam detection system using TF-IDF feature extraction and probabilistic models.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF'],
    featured: true,
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rishu22889/email_spam_classifier',
        icon: Github,
      },
      {
        label: 'Live Demo',
        url: 'https://email-spam-classifier-7pct.onrender.com',
        icon: ExternalLink,
      },
    ],
  },
  {
    title: 'AgentHire',
    image: '/projects/agenthire.png',
    description:
      'AI-powered job application automation platform that analyzes job descriptions, matches resumes, and assists in applying to relevant roles.',
    tech: ['Python', 'FastAPI', 'AI APIs', 'React'],
    featured: true,
    links: [
      {
        label: 'Web App',
        url: 'https://agenthire-ten.vercel.app',
        icon: ExternalLink,
      },
      {
        label: 'Backend API',
        url: 'https://agent-hire-backend.onrender.com',
        icon: ExternalLink,
      },
      {
        label: 'Backend Code',
        url: 'https://github.com/Rishu22889/agenthire-backend',
        icon: Github,
      },
      {
        label: 'Sandbox',
        url: 'https://agent-hire-sandbox.onrender.com',
        icon: ExternalLink,
      },
    ],
  },
  {
    title: 'ML Models From Scratch',
    description:
      'Implemented core machine learning algorithms from scratch using NumPy to deeply understand mathematical foundations.',
    tech: ['Python', 'NumPy', 'Linear Regression', 'Decision Trees'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rishu22889/ML/tree/main/ML_from_Scratch',
        icon: Github,
      },
    ],
  },
  {
    title: 'Anomaly Detection System',
    description:
      'Unsupervised learning project to detect anomalies in structured datasets using statistical methods.',
    tech: ['Python', 'Unsupervised ML', 'NumPy'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rishu22889/ML/tree/main/ML_from_Scratch/AnomalyDetection',
        icon: Github,
      },
    ],
  },
  {
    title: 'Codeforces Problem Finder',
    description:
      'Web utility that helps competitive programmers discover Codeforces problems based on rating and tags.',
    tech: ['JavaScript', 'APIs', 'Web Scraping'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Rishu22889/codeforces-problem-finder',
        icon: Github,
      },
    ],
  },
];

/* ===================== THREE DOT MENU ===================== */

const ProjectMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="p-2 rounded-full hover:bg-primary/10 transition"
        aria-label="Project links"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg border bg-background shadow-lg z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {links.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/10 transition"
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subheading mx-auto">
              A selection of projects that showcase my skills and passion
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card group overflow-hidden transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-primary/10">
                      <Folder size={40} className="text-primary/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ProjectMenu links={project.links} />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
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
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${450 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={32} />
                  <ProjectMenu links={project.links} />
                </div>

                <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(tech => (
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

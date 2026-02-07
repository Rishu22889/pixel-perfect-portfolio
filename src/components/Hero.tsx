import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const roles = [
  'an IITian building ML systems',
  'an Aspiring AI/ML Engineer',
  'a Data Science Enthusiast',
  'a Competitive Programmer',
];


export const Hero = () => {
  const typingText = useTypingEffect(roles, 100, 50, 2000);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-up">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-fade-up delay-100">
              Risu <span className="gradient-text">Raj</span>
            </h1>
            <div className="h-12 md:h-14 mb-6 animate-fade-up delay-200">
              <span className="text-xl md:text-2xl text-muted-foreground">
                I'm {' '}
                <span className="text-foreground font-medium">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              Building production-ready web apps powered by clean code and practical ML.
              </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up delay-400">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up delay-500">
              <a
                href="https://github.com/Rishu22889"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-muted hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/risuraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-muted hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rk1258106@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-muted hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow-effect">
                <img
                  src="/profile.jpeg"
                  alt="Risu Raj"
                  className="zoom-img w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full animate-pulse-glow">
                <span className="text-sm font-medium">Always learning. Always building.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

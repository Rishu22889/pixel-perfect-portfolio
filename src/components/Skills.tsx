import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'Model Evaluation & Tuning', level: 82 },
    ],
  },
  {
    title: 'Algorithms & Problem Solving',
    skills: [
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'Competitive Programming', level: 85 },
      { name: 'Codeforces (1200+)', level: 80 },
      { name: 'LeetCode (100+)', level: 78 },
      { name: 'Algorithmic Thinking', level: 86 },
    ],
  },
  {
    title: 'Web, Backend & Deployment',
    skills: [
      { name: 'Flask / FastAPI', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'React', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker & Deployment', level: 78 },
    ],
  },
];


export const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subheading mx-auto">
              A practical toolkit for building and deploying ML-powered applications            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`skill-card transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <h3 className="font-display font-semibold text-xl mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            background: 'var(--gradient-primary)',
                            transitionDelay: `${catIndex * 150 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Icons */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {['🐍', '🤖', '📊', '🧠', '⚙️', '🧮', '🐳', '⚡'].map((icon, index) => (
              <div
                key={index}
                className={`w-16 h-16 glass-card rounded-xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:glow-effect ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

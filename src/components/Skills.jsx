import useScrollReveal from '../hooks/useScrollReveal';

const frontendSkills = [
  { icon: '⚛️', name: 'React.js' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '📄', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '💨', name: 'Tailwind CSS' },
  { icon: '⚡', name: 'Vite' },
];

const toolsSkills = [
  { icon: '🔀', name: 'Git & GitHub' },
  { icon: '🔌', name: 'REST APIs' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL' },
  { icon: '▲', name: 'Vercel' },
];

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section">
      <div ref={ref} className="container reveal">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-subtitle">
          My core toolkit for building modern web applications.
        </p>

        <div className="skills__category">
          <h3 className="skills__category-title">Frontend &amp; Core</h3>
          <div className="skills__grid">
            {frontendSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-card__icon">{skill.icon}</span>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__category">
          <h3 className="skills__category-title">Tools &amp; Backend</h3>
          <div className="skills__grid">
            {toolsSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-card__icon">{skill.icon}</span>
                <span className="skill-card__name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className="container reveal">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Building interfaces that users{' '}
          <span className="gradient-text">love</span>
        </h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a frontend-focused developer currently working as a Software
              Engineer with{' '}
              <span className="about__highlight">DeepKlarity</span>, where I
              build production-grade React dashboards and interactive UIs for an
              AI-powered platform.
            </p>
            <p>
              My strength lies in translating complex requirements into clean,
              responsive, component-based interfaces. I'm deeply familiar with
              React Hooks, ES6+ patterns, REST API integration, and modern CSS
              — and I'm always looking to sharpen my craft.
            </p>
            <p>
              When I'm not coding, I'm probably exploring new frontend libraries
              or building side projects to push my skills further.
            </p>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">3+</span>
              <span className="about__stat-label">Projects Shipped</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">8+</span>
              <span className="about__stat-label">Technologies</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">50+</span>
              <span className="about__stat-label">Commits (Work)</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">Remote</span>
              <span className="about__stat-label">Work Style</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

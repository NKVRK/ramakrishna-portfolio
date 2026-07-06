import useScrollReveal from '../hooks/useScrollReveal';

function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div ref={ref} className="container reveal">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I've worked</h2>

        <div className="experience__timeline">
          {/* Role 1 */}
          <div className="experience__item">
            <div className="experience__dot"></div>
            <div className="experience__header">
              <h3 className="experience__role">Software Engineer</h3>
              <span className="experience__period">Jan 2026 — Present</span>
            </div>
            <p className="experience__company">DeepKlarity</p>
            <ul className="experience__list">
              <li>
                <strong>GROK AI Engine:</strong> Contributed across the full stack of an internal AI platform that converts natural-language IoT/AIoT problem statements into executable code.
              </li>
              <li>
                <strong>Multi-Provider LLM Integration:</strong> Extended the orchestration layer to support Google Gemini 2.5 Pro alongside Claude Sonnet and GPT-4o, updating the model-selection UI across chat interfaces.
              </li>
              <li>
                <strong>Generation Health Dashboard:</strong> Designed and built a full-stack SuperAdmin analytics dashboard (FastAPI REST + React) that tracks pipeline success and failure rates to enable data-driven UI optimizations.
              </li>
              <li>
                <strong>Debug Tooling & Bug Resolution:</strong> Overhauled primary debug tooling with responsive collapsible panels and restructured API routes; resolved production bugs spanning state synchronization and routing.
              </li>
            </ul>
            <div className="experience__tags">
              {['React', 'Python', 'FastAPI', 'LangChain', 'Multi-LLM'].map(
                (tag) => (
                  <span key={tag} className="experience__tag">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Role 2 */}
          <div className="experience__item">
            <div className="experience__dot"></div>
            <div className="experience__header">
              <h3 className="experience__role">Full-Stack Developer Intern</h3>
              <span className="experience__period">Oct 2025 — Jan 2026</span>
            </div>
            <p className="experience__company">DeepKlarity</p>
            <ul className="experience__list">
              <li>
                <strong>Smart Mandi — Real-Time Voice AI:</strong> Sole engineer on a voice assistant enabling Indian farmers to query live commodity prices. Architected a WebSocket audio pipeline and a dynamic frontend UI for natural interactions.
              </li>
              <li>
                <strong>Subtitle Generator — Chrome Extension:</strong> Built a serverless extension that captures live YouTube audio, processes it through Sarvam AI, and injects synchronized subtitle overlays into the YouTube video DOM.
              </li>
            </ul>
            <div className="experience__tags">
              {['React Native', 'Chrome Extensions', 'WebSockets', 'Python', 'Sarvam AI'].map(
                (tag) => (
                  <span key={tag} className="experience__tag">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

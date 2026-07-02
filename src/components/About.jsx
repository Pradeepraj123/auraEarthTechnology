import useReveal from '../hooks/useReveal';
import './About.css';

const PILLARS = [
  {
    title: 'Built on trust',
    text: 'Every driver is verified and every ride is logged, so trust is designed in, not promised after.',
  },
  {
    title: 'Powered by AI',
    text: 'Route intelligence learns expected paths for every trip and flags the moment something changes.',
  },
  {
    title: 'People first',
    text: "From students to daily commuters, the app is built around one question: is this rider okay?",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="about">
      <div className="container about__inner" ref={ref}>
        <div className="about__text reveal">
          <p className="eyebrow">About Aura Earth</p>
          <h2 className="section-heading">
            A mobility platform built around one promise &mdash; you arrive safely.
          </h2>
          <p className="section-sub" style={{ marginBottom: 28 }}>
            Aura Earth Technology connects riders with autos, bikes and cabs
            through a single app, layered with real-time GPS tracking and
            AI-driven route monitoring. We started with a simple belief:
            convenience should never come at the cost of safety, especially
            for women travelling alone.
          </p>
          <div className="about__pillars">
            {PILLARS.map((pillar) => (
              <div className="about__pillar" key={pillar.title}>
                <span className="about__pillar-dot" />
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__visual reveal">
          <div className="about__blob" aria-hidden="true" />
          <div className="about__panel">
            <div className="about__panel-row">
              <span className="about__panel-num">24/7</span>
              <span className="about__panel-label">Safety monitoring</span>
            </div>
            <div className="about__panel-row">
              <span className="about__panel-num">100%</span>
              <span className="about__panel-label">Driver verification</span>
            </div>
            <div className="about__panel-row">
              <span className="about__panel-num">3</span>
              <span className="about__panel-label">Ride types, one app</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

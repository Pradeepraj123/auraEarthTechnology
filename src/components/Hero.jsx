import './Hero.css';

const STATS = [
  { value: '2.4M+', label: 'Safe rides completed' },
  { value: '<1s', label: 'Route alert response' },
  { value: '35+', label: 'Cities covered' },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Ride-hailing, engineered for safety</p>
          <h1 className="hero__title">
            Every ride, <span className="hero__title-accent">watched over</span> from
            pickup to drop.
          </h1>
          <p className="hero__subtitle">
            Aura Earth Technology powers auto, bike and cab bookings with live GPS
            tracking and AI route monitoring that reacts the moment something
            feels wrong &mdash; so every passenger gets home safe.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">Book a Ride</a>
            <a href="#safety" className="btn btn-outline">See How Safety Works</a>
          </div>

          <div className="hero__stats">
            {STATS.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__card-top">
              <span className="hero__pulse-dot" />
              <span>Live tracking active</span>
            </div>
            <svg viewBox="0 0 320 260" className="hero__route" fill="none">
              <path
                d="M20 220 C 70 200, 90 140, 140 120 S 220 60, 300 40"
                stroke="rgba(244,196,48,0.35)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 14"
              />
              <path
                d="M20 220 C 70 200, 90 140, 140 120 S 220 60, 300 40"
                stroke="url(#routeGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="120 400"
                className="hero__route-progress"
              />
              <defs>
                <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFD84D" />
                  <stop offset="100%" stopColor="#F4C430" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="220" r="7" fill="#F4C430" />
              <circle cx="300" cy="40" r="7" fill="#ffffff" fillOpacity="0.8" />
              <g className="hero__moving-dot">
                <circle cx="140" cy="120" r="10" fill="#F4C430" opacity="0.25" />
                <circle cx="140" cy="120" r="5" fill="#0B0B0C" />
                <circle cx="140" cy="120" r="5" fill="#F4C430" />
              </g>
            </svg>
            <div className="hero__card-footer">
              <div>
                <span className="hero__card-footer-label">Driver</span>
                <span className="hero__card-footer-value">On expected route</span>
              </div>
              <span className="hero__status-chip">Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

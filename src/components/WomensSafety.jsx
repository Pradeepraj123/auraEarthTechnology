import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import './WomensSafety.css';

const STEPS = [
  {
    key: 'monitoring',
    label: 'Monitoring',
    title: 'AI watches the route',
    text: 'From pickup to drop, our AI compares the live GPS path against the expected route for the trip.',
  },
  {
    key: 'deviation',
    label: 'Deviation found',
    title: 'A deviation is detected',
    text: 'The moment the driver turns off the expected path, the system flags it instantly.',
  },
  {
    key: 'alert',
    label: 'Alert sent',
    title: '"Are you safe?" in under 1 second',
    text: 'A prompt reaches the rider\u2019s phone within one second, asking them to confirm they\u2019re okay.',
  },
  {
    key: 'sos',
    label: 'SOS triggered',
    title: 'No response? SOS activates',
    text: 'If the rider taps "No" or doesn\u2019t respond, live location goes straight to emergency contacts and SOS is triggered.',
  },
];

const STEP_DURATION = 2800;

export default function WomensSafety() {
  const ref = useReveal();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  const current = STEPS[activeStep];

  return (
    <section id="safety" className="safety">
      <div className="safety__glow" aria-hidden="true" />
      <div className="container safety__inner" ref={ref}>
        <div className="safety__text reveal">
          <p className="eyebrow eyebrow--light">Women&rsquo;s Safety, by design</p>
          <h2 className="section-heading safety__heading">
            Safety that reacts in under one second
          </h2>
          <p className="section-sub safety__sub">
            Our AI continuously monitors the ride route using GPS. If the
            driver deviates from the expected route, the app sends an alert
            within one second asking, &ldquo;Are you safe?&rdquo; If the rider
            selects &ldquo;No&rdquo; or doesn&rsquo;t respond, the system
            shares live location with emergency contacts and triggers an SOS
            alert &mdash; automatically.
          </p>

          <ul className="safety__steps">
            {STEPS.map((step, i) => (
              <li
                key={step.key}
                className={`safety__step ${i === activeStep ? 'safety__step--active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <span className="safety__step-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="safety__step-label">{step.label}</span>
                  <p>{step.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="safety__demo reveal">
          <div className={`safety__phone safety__phone--${current.key}`}>
            <div className="safety__phone-top">
              <span className={`safety__status-dot safety__status-dot--${current.key}`} />
              <span>{current.label}</span>
            </div>

            <svg viewBox="0 0 260 220" className="safety__map" fill="none">
              <path
                d="M20 190 C 60 170, 80 130, 110 110 S 170 70, 240 30"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 12"
              />
              <path
                d="M20 190 C 60 170, 80 130, 110 110"
                stroke="#F4C430"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {activeStep >= 1 && (
                <path
                  d="M110 110 C 130 150, 160 165, 195 175"
                  stroke="#FF5A4E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="safety__deviation-path"
                />
              )}
              <circle cx="20" cy="190" r="6" fill="#F4C430" />
              <circle cx="240" cy="30" r="6" fill="#ffffff" fillOpacity="0.6" />
              <circle
                cx={activeStep >= 1 ? 195 : 110}
                cy={activeStep >= 1 ? 175 : 110}
                r="7"
                fill={activeStep >= 1 ? '#FF5A4E' : '#F4C430'}
                className="safety__live-dot"
              />
            </svg>

            {(current.key === 'alert' || current.key === 'sos') && (
              <div className={`safety__alert-card ${current.key === 'sos' ? 'safety__alert-card--sos' : ''}`}>
                {current.key === 'alert' ? (
                  <>
                    <p className="safety__alert-title">Are you safe?</p>
                    <p className="safety__alert-text">Route deviation detected. Please confirm.</p>
                    <div className="safety__alert-actions">
                      <span className="safety__alert-btn">Yes</span>
                      <span className="safety__alert-btn safety__alert-btn--no">No</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="safety__alert-title safety__alert-title--sos">SOS Activated</p>
                    <p className="safety__alert-text">
                      Live location shared with emergency contacts.
                    </p>
                  </>
                )}
              </div>
            )}

            <p className="safety__phone-caption">{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

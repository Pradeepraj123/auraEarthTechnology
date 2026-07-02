import useReveal from '../hooks/useReveal';
import './HowItWorks.css';

const STEPS = [
  {
    num: '01',
    title: 'Book your ride',
    text: 'Choose auto, bike or cab, set your pickup and drop, and confirm in seconds.',
  },
  {
    num: '02',
    title: 'Trip goes live',
    text: 'GPS tracking starts instantly and your trip link can be shared with anyone you trust.',
  },
  {
    num: '03',
    title: 'AI monitors the route',
    text: 'Our system compares live movement against the expected path for the entire journey.',
  },
  {
    num: '04',
    title: 'Alert on deviation',
    text: 'Any unexpected turn triggers an instant "Are you safe?" prompt on your phone.',
  },
  {
    num: '05',
    title: 'Arrive, or SOS activates',
    text: 'Reach your drop safely, or let the system alert your contacts automatically if you can\u2019t respond.',
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" className="how">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>The journey</p>
          <h2 className="section-heading">How it works, step by step</h2>
          <p className="section-sub">
            A ride on Aura Earth follows the same safety-first sequence every
            time &mdash; from booking to drop-off.
          </p>
        </div>

        <div className="how__road" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="how__vehicle how__vehicle--auto" fill="none">
            <path d="M4 28h2l2-8a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 8h2M7 28v3a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 11 31v-3M27 28v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-3M7 22h24" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 40 40" className="how__vehicle how__vehicle--bike" fill="none">
            <circle cx="9" cy="28" r="5" stroke="#0B0B0C" strokeWidth="2" />
            <circle cx="29" cy="28" r="5" stroke="#0B0B0C" strokeWidth="2" />
            <path d="M9 28l5-13h5l-3 6h7l5 7M14 15h5" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 40 40" className="how__vehicle how__vehicle--cab" fill="none">
            <path d="M5 26l2.5-8.5A3.5 3.5 0 0 1 11 15h14a3.5 3.5 0 0 1 3.5 2.5L31 26M5 26h30M5 26v5a1.3 1.3 0 0 0 1.3 1.3h1.7A1.3 1.3 0 0 0 9.3 31v-1.7M26.7 26v5a1.3 1.3 0 0 0 1.3 1.3h1.7a1.3 1.3 0 0 0 1.3-1.3v-1.7M9 20h18" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="how__timeline">
          <div className="how__line" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <div
              className={`how__step reveal ${i % 2 === 0 ? 'how__step--left' : 'how__step--right'}`}
              key={step.num}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="how__step-card">
                <span className="how__step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="how__step-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

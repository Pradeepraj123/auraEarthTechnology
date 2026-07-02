import useReveal from '../hooks/useReveal';
import './WhyChooseUs.css';

const REASONS = [
  {
    title: 'Safety-first design',
    text: 'Every feature is built around the rider\u2019s safety, not added on afterwards.',
  },
  {
    title: 'Verified drivers',
    text: 'Background-checked, document-verified drivers across every ride type.',
  },
  {
    title: 'Transparent fares',
    text: 'Know your fare before you book, with no hidden surge surprises.',
  },
  {
    title: '24/7 support',
    text: 'A real support team on standby around the clock, every day of the year.',
  },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section id="why-us" className="why">
      <div className="container why__inner" ref={ref}>
        <div className="why__reasons">
          {REASONS.map((reason, i) => (
            <div
              className="why__card reveal"
              key={reason.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="why__card-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#0B0B0C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="why__text reveal">
          <p className="eyebrow">Why choose Aura Earth</p>
          <h2 className="section-heading">
            Mobility you can rely on, safety you can feel
          </h2>
          <p className="section-sub">
            We built Aura Earth to close the gap between a convenient ride
            and a genuinely safe one. That means real-time visibility for
            every trip, an AI layer that never sleeps, and a support team
            that treats every alert seriously.
          </p>
          <a href="#contact" className="btn btn-dark why__cta">Talk to Our Team</a>
        </div>
      </div>
    </section>
  );
}

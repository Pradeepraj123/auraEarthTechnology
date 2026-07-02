import useReveal from '../hooks/useReveal';
import './FamilyCircle.css';


const CIRCLE_STEPS = [
  { title: 'Add trusted contacts', text: 'Save family or friends as your emergency circle, right from your profile.' },
  { title: 'Auto-share on every ride', text: 'Your live trip link goes out to your circle the moment a ride starts.' },
  { title: 'Instant alerts if something\u2019s off', text: 'If the AI flags a route deviation, your circle is notified immediately, not after the fact.' },
];

export default function FamilyCircle() {
  const ref = useReveal();

  return (
    <section id="family-circle" className="family-circle">
      <div className="container reveal" ref={ref}>
        <div className="family-circle__grid">
          <div>
            <p className="eyebrow">Peace of mind, shared</p>
            <h2 className="section-heading">Your circle, always in the loop</h2>
            <p className="section-sub" style={{ margin: '18px 0 32px' }}>
              Safety isn't just for the rider &mdash; it's for everyone who
              cares about them. Set up your emergency circle once, and every
              ride after that is watched by the people you trust.
            </p>

            <div className="family-circle__steps">
              {CIRCLE_STEPS.map((step, i) => (
                <div className="family-circle__step reveal" key={step.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="family-circle__dot" aria-hidden="true" />
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="family-circle__card reveal">
            <h3>Prefer a woman driver?</h3>
            <p>
              Riders can choose the women-driver option where available,
              built for anyone who feels safer that way.
            </p>
            <div className="family-circle__toggle">
              <span>Women driver preference</span>
              <span className="family-circle__switch" aria-hidden="true">
                <span className="family-circle__switch-knob" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

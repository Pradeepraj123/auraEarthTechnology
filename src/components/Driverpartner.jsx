import { useState, useMemo } from 'react';
import useReveal from '../hooks/useReveal';
import './DriverPartner.css';

const PER_TRIP_EARNING = 55; // avg net earning per trip in rupees, for illustration

const STEPS = [
  { title: 'Sign up', text: 'Submit your details and documents in the app, takes under 5 minutes.' },
  { title: 'Get verified', text: 'Our team verifies your documents and vehicle within 24-48 hours.' },
  { title: 'Start earning', text: 'Go online, accept rides, and get paid directly to your account.' },
];

export default function DriverPartner() {
  const ref = useReveal();
  const [tripsPerDay, setTripsPerDay] = useState(15);

  const monthlyEarning = useMemo(
    () => (tripsPerDay * PER_TRIP_EARNING * 30).toLocaleString('en-IN'),
    [tripsPerDay]
  );

  return (
    <section id="drive-with-us" className="driver">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Drive with us</p>
          <h2 className="section-heading">Earn more, keep more</h2>
          <p className="section-sub">
            Lower commissions and less competition than big-city platforms.
            Built for drivers in small towns who deserve a fair share.
          </p>
        </div>

        <div className="driver__grid">
          <div className="driver__calc reveal">
            <h3 className="driver__calc-title">Estimate your monthly earnings</h3>
            <label className="driver__slider-label" htmlFor="tripsSlider">
              Trips per day: <strong>{tripsPerDay}</strong>
            </label>
            <input
              id="tripsSlider"
              type="range"
              min="5"
              max="40"
              value={tripsPerDay}
              onChange={(e) => setTripsPerDay(Number(e.target.value))}
              className="driver__slider"
            />
            <div className="driver__result">
              <span className="driver__result-label">Estimated monthly earnings</span>
              <span className="driver__result-value">&#8377;{monthlyEarning}</span>
            </div>
            <p className="driver__disclaimer">
              Estimate only; actual earnings vary by town, ride type and hours driven.
            </p>
          </div>

          <div className="driver__steps">
            {STEPS.map((step, i) => (
              <div className="driver__step reveal" key={step.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="driver__step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="driver__cta"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Become a Driver Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
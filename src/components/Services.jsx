import useReveal from '../hooks/useReveal';
import './Services.css';
import MarketPotential from './MarketPotential';

const SERVICES = [
  {
    title: 'Auto Booking',
    text: 'Quick, affordable auto rides for short hops across the city, on demand.',
    icon: (
      <path d="M4 32h4l3-11a4 4 0 0 1 3.8-2.8h14.4a4 4 0 0 1 3.8 2.8l3 11h4M8 32v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4M28 32v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4M8 24h24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Bike Taxi Booking',
    text: 'Beat the traffic with two-wheeler rides built for fast, solo commutes.',
    icon: (
      <>
        <circle cx="10" cy="30" r="6" strokeWidth="2.2" />
        <circle cx="30" cy="30" r="6" strokeWidth="2.2" />
        <path d="M10 30l6-16h6l-4 8h9l6 8M16 14h6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Cab Booking',
    text: 'Comfortable, air-conditioned cabs for families, work trips and airport runs.',
    icon: (
      <path d="M6 26l3-10a4 4 0 0 1 3.8-2.8h14.4A4 4 0 0 1 31 16l3 10M6 26h28M6 26v6a1.5 1.5 0 0 0 1.5 1.5h2A1.5 1.5 0 0 0 11 32v-2M27 26v6a1.5 1.5 0 0 0 1.5 1.5h2A1.5 1.5 0 0 0 33 32v-2M11 20h16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Live GPS Tracking',
    text: 'Track every ride in real time and share your trip link with anyone you trust.',
    icon: (
      <>
        <path d="M20 4C13 4 8 9.4 8 16c0 9 12 20 12 20s12-11 12-20c0-6.6-5-12-12-12z" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="20" cy="16" r="4.5" strokeWidth="2.2" />
      </>
    ),
  },
  {
    title: 'AI Route Monitoring',
    text: 'AI compares live movement against the expected route, watching every turn.',
    icon: (
      <path d="M6 30c6-2 8-14 14-16s10 4 14 2M20 6v4M20 30v4M32 12l4-2M4 24l4-2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Emergency SOS',
    text: 'One tap, or automatic detection, alerts contacts and shares live location instantly.',
    icon: (
      <path d="M20 4l4.5 9.6L35 15l-7.5 7.2L29.4 33 20 27.6 10.6 33l1.9-10.8L5 15l10.5-1.4z" strokeWidth="2.2" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <>
      <section id="services" className="services">
        <div className="container reveal" ref={ref}>
          <div className="section-head center">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>What we offer</p>
            <h2 className="section-heading">Every ride you need, in one app</h2>
            <p className="section-sub">
              From a quick auto hop to a cross-city cab ride, Aura Earth covers
              the full spectrum of urban mobility &mdash; backed by safety tech
              that runs quietly in the background of every trip.
            </p>
          </div>

          <div className="services__grid">
            {SERVICES.map((service, i) => (
              <article
                className="service-card reveal"
                key={service.title}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="service-card__icon">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MarketPotential />
    </>
  );
}
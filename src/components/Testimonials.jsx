import useReveal from '../hooks/useReveal';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Daily commuter',
    quote:
      'I take a cab home late from work often, and the route alert genuinely changed how safe I feel doing that.',
  },
  {
    name: 'Ananya Reddy',
    role: 'College student',
    quote:
      'My parents can see my trip live now. That one feature convinced them to let me book my own rides.',
  },
  {
    name: 'Meera Nair',
    role: 'Frequent traveller',
    quote:
      'The bike taxi option gets me through traffic fast, and I never worry about the route being tracked.',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="testimonials">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Riders trust us</p>
          <h2 className="section-heading">What our riders say</h2>
        </div>

        <div className="testimonials__road" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="testimonials__vehicle testimonials__vehicle--auto" fill="none">
            <path d="M4 28h2l2-8a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 8h2M7 28v3a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 11 31v-3M27 28v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-3M7 22h24" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 40 40" className="testimonials__vehicle testimonials__vehicle--bike" fill="none">
            <circle cx="9" cy="28" r="5" stroke="#0B0B0C" strokeWidth="2" />
            <circle cx="29" cy="28" r="5" stroke="#0B0B0C" strokeWidth="2" />
            <path d="M9 28l5-13h5l-3 6h7l5 7M14 15h5" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 40 40" className="testimonials__vehicle testimonials__vehicle--cab" fill="none">
            <path d="M5 26l2.5-8.5A3.5 3.5 0 0 1 11 15h14a3.5 3.5 0 0 1 3.5 2.5L31 26M5 26h30M5 26v5a1.3 1.3 0 0 0 1.3 1.3h1.7A1.3 1.3 0 0 0 9.3 31v-1.7M26.7 26v5a1.3 1.3 0 0 0 1.3 1.3h1.7a1.3 1.3 0 0 0 1.3-1.3v-1.7M9 20h18" stroke="#0B0B0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              className="testimonial-card reveal"
              key={t.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="testimonial-card__quote-mark">&ldquo;</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial-card__avatar">{t.name.charAt(0)}</span>
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

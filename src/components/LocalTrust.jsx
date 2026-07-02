import useReveal from '../hooks/useReveal';
import './LocalTrust.css';

const TRUST_ITEMS = [
  {
    title: 'Pay however you like',
    text: 'Cash, UPI, or card — no forced digital payments. Pay the way that works for you.',
  },
  {
    title: 'Speaks your language',
    text: 'Available in Tamil, Hindi, and more, so booking a ride never feels unfamiliar.',
  },
  {
    title: 'Local landmarks as pickup points',
    text: 'Set pickup near a known shop or landmark instead of relying on GPS pins alone.',
  },
  {
    title: 'No surge surprises',
    text: 'Transparent, upfront fares that don\u2019t spike just because you need a ride now.',
  },
];

export default function LocalTrust() {
  const ref = useReveal();

  return (
    <section id="local-trust" className="local-trust">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Made for Bharat</p>
          <h2 className="section-heading">Built the way small towns actually work</h2>
          <p className="section-sub">
            No assumptions carried over from big-city apps &mdash; every detail
            is designed around how small towns book, pay, and travel.
          </p>
        </div>

        <div className="local-trust__grid">
          {TRUST_ITEMS.map((item, i) => (
            <div
              className="local-trust__card reveal"
              key={item.title}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
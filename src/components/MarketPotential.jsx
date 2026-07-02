import useReveal from '../hooks/useReveal';
import './MarketPotential.css';

const OTHERS = [
  'High Competition',
  'High Marketing Cost',
  'Low Profit Margins',
  'Ignoring 70%+ of India',
];

const VAANDIGO = [
  'Less Competition',
  'Low Marketing Cost',
  'High Profit Margins',
  'Unlocking 70%+ New India',
];

const HIGHLIGHTS = [
  { title: 'Auto, Bike & Cab Bookings', text: 'All three ride types, one app.' },
  { title: 'Lower Commissions', text: 'More earnings stay with our riders.' },
  { title: 'Higher Earnings', text: 'Less competition means better trips.' },
  { title: 'Built for Bharat', text: 'Designed for small-town India.' },
];

export default function MarketPotential() {
  const ref = useReveal();

  return (
    <section id="market-potential" className="market-potential">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Where we're headed</p>
          <h2 className="section-heading">
            Big towns only? Small towns, bigger potential.
          </h2>
          <p className="section-sub">
            Real growth is beyond the metro. The future is in small towns
            &mdash; and we're building for it, one town at a time.
          </p>
        </div>

        <div className="market-compare">
          <div className="market-compare__col market-compare__col--others reveal">
            <h3 className="market-compare__title">What Others Do</h3>
            <p className="market-compare__subtitle">Focus only on big cities</p>
            <ul className="market-compare__list">
              {OTHERS.map((item) => (
                <li key={item} className="market-compare__item market-compare__item--no">
                  <span className="market-compare__mark" aria-hidden="true">&#10005;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="market-compare__vs" aria-hidden="true">VS</div>

          <div className="market-compare__col market-compare__col--vaandigo reveal">
            <h3 className="market-compare__title">What VaandiGo Does</h3>
            <p className="market-compare__subtitle">Prioritizing small towns</p>
            <ul className="market-compare__list">
              {VAANDIGO.map((item) => (
                <li key={item} className="market-compare__item market-compare__item--yes">
                  <span className="market-compare__mark" aria-hidden="true">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="market-mission reveal">
          <h3 className="market-mission__title">Our Mission</h3>
          <p className="market-mission__text">
            Cover every small town, connect every rider.
          </p>
        </div>

        <div className="market-highlights">
          {HIGHLIGHTS.map((item, i) => (
            <div
              className="market-highlight reveal"
              key={item.title}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="market-closing reveal">
          <p className="market-closing__line">
            We don't ignore small towns. We build the future with them.
          </p>
          <p className="market-closing__tag">VaandiGo &mdash; For Every Town. For Every You.</p>
        </div>
      </div>
    </section>
  );
}
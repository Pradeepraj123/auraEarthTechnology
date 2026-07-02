import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './TownCoverage.css';

const LIVE_TOWNS = [
  'Aundipatty', 'Theni', 'Bodinayakanur', 'Cumbum', 'Uthamapalayam',
  'Periyakulam', 'Andipatti', 'Chinnamanur', 'Gudalur', 'Kambam',
];

const STATS = [
  { value: '35+', label: 'Towns covered' },
  { value: '2,400+', label: 'Rides completed today' },
  { value: '120+', label: 'New towns in pipeline' },
];

export default function TownCoverage() {
  const ref = useReveal();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    const isLive = LIVE_TOWNS.some(
      (town) => town.toLowerCase() === trimmed.toLowerCase()
    );
    setResult({ town: trimmed, isLive });
  };

  return (
    <section id="coverage" className="coverage">
      <div className="container reveal" ref={ref}>
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Where we ride</p>
          <h2 className="section-heading">Is VandiGo in your town?</h2>
          <p className="section-sub">
            We're adding new towns every month. Check yours, or tell us
            where you'd like us to go next.
          </p>
        </div>

        <form className="coverage__search" onSubmit={handleSearch}>
          <input
            type="text"
            className="coverage__input"
            placeholder="Enter your town name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search your town"
          />
          <button type="submit" className="coverage__btn">Check availability</button>
        </form>

        {result && (
          <div className={`coverage__result ${result.isLive ? 'coverage__result--yes' : 'coverage__result--soon'}`}>
            {result.isLive ? (
              <p>Great news &mdash; VaandiGo is live in <strong>{result.town}</strong>. Book your ride now!</p>
            ) : (
              <p>We're not in <strong>{result.town}</strong> yet, but it's on our radar. Join the waitlist and we'll notify you.</p>
            )}
          </div>
        )}

        <div className="coverage__stats">
          {STATS.map((stat) => (
            <div className="coverage__stat" key={stat.label}>
              <div className="coverage__stat-value">{stat.value}</div>
              <div className="coverage__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="coverage__towns">
          <p className="coverage__towns-title">Currently live in</p>
          <div className="coverage__towns-list">
            {LIVE_TOWNS.map((town) => (
              <span className="coverage__town-chip" key={town}>{town}</span>
            ))}
            <span className="coverage__town-chip coverage__town-chip--more">+25 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
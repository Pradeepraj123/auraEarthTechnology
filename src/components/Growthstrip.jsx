import useReveal from '../hooks/useReveal';
import './GrowthStrip.css';

const PRESS_MENTIONS = [
  'The Hindu', 'Times of India', 'YourStory', 'Economic Times', 'Deccan Chronicle',
];

export default function GrowthStrip() {
  const ref = useReveal();

  return (
    <section id="growth" className="growth">
      <div className="container reveal" ref={ref}>
        <div className="growth__referral">
          <div>
            <p className="eyebrow">Refer &amp; earn</p>
            <h2 className="section-heading">Invite a friend, ride free</h2>
            <p className="section-sub" style={{ margin: '14px 0 0' }}>
              Share your code. When your friend takes their first ride,
              you both get a free trip credit &mdash; no limit on how many
              friends you invite.
            </p>
          </div>
          <div className="growth__code-card reveal">
            <span className="growth__code-label">Your referral code</span>
            <span className="growth__code">VAANDI250</span>
            <button type="button" className="growth__copy-btn">Copy code</button>
          </div>
        </div>

        <div className="growth__press">
          <p className="growth__press-title">As featured in</p>
          <div className="growth__press-list">
            {PRESS_MENTIONS.map((name) => (
              <span className="growth__press-item" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
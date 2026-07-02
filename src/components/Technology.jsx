import useReveal from '../hooks/useReveal';
import './Technology.css';

const STACK = [
  { label: 'GPS Engine', text: 'Continuous location capture with sub-second update intervals.' },
  { label: 'AI Route Model', text: 'Learns the expected path for each trip and flags anomalies live.' },
  { label: 'Alert Layer', text: 'Pushes in-app prompts and SOS signals within a single second.' },
  { label: 'Cloud Infrastructure', text: 'Scales securely across cities with encrypted trip data.' },
];

export default function Technology() {
  const ref = useReveal();

  return (
    <section id="technology" className="tech">
      <div className="container tech__inner" ref={ref}>
        <div className="tech__visual reveal">
          <div className="tech__ring tech__ring--outer">
            <div className="tech__ring tech__ring--inner">
              <div className="tech__core">AI</div>
            </div>
          </div>
          {STACK.map((item, i) => (
            <span
              className={`tech__node tech__node--${i}`}
              key={item.label}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="tech__text reveal">
          <p className="eyebrow eyebrow--light">Under the hood</p>
          <h2 className="section-heading tech__heading">
            The technology behind every safe ride
          </h2>
          <p className="section-sub tech__sub">
            Aura Earth runs on a real-time data pipeline that connects GPS,
            AI route modelling and instant alerting into one system, so
            nothing has to wait.
          </p>

          <div className="tech__list">
            {STACK.map((item) => (
              <div className="tech__list-item" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

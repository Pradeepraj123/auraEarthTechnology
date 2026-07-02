import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './FAQ.css';

const FAQS = [
  {
    q: 'How fast does the safety alert actually trigger?',
    a: 'The moment AI detects the driver has left the expected route, an "Are you safe?" prompt reaches the rider\u2019s phone within one second.',
  },
  {
    q: 'What happens if I don\u2019t respond to the alert?',
    a: 'If you select "No" or don\u2019t respond in time, the system automatically shares your live location with your emergency contacts and triggers an SOS alert.',
  },
  {
    q: 'Can my family track my ride in real time?',
    a: 'Yes. Every trip generates a live-tracking link you can share with anyone, so they can follow your route from pickup to drop.',
  },
  {
    q: 'Are all drivers verified before onboarding?',
    a: 'Every driver goes through document verification and a background check before they can accept rides on the platform.',
  },
  {
    q: 'Which ride types are available on the app?',
    a: 'You can book auto, bike taxi or cab rides, all from the same app, with the same safety monitoring on every trip.',
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="container faq__inner" ref={ref}>
        <div className="section-head reveal">
          <p className="eyebrow">Questions, answered</p>
          <h2 className="section-heading">Frequently asked questions</h2>
          <p className="section-sub">
            Everything riders usually ask about safety, tracking and how the
            platform works.
          </p>
        </div>

        <div className="faq__list reveal">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`} key={item.q}>
                <button
                  className="faq__question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon">{isOpen ? '\u2212' : '+'}</span>
                </button>
                <div className="faq__answer" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

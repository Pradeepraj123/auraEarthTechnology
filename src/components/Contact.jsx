import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner reveal" ref={ref}>
        <div className="contact__text">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">Let&rsquo;s get you moving, safely</h2>
          <p className="section-sub">
            Have a question, a partnership idea, or want to bring Aura Earth
            to your city? Reach out and our team will get back to you
            shortly.
          </p>
        </div>

        <div className="contact__info">
          <div>
            <span className="contact__info-label">Email</span>
            <span className="contact__info-value">auraearthtech@gmail.com</span>
          </div>
          <div>
            <span className="contact__info-label">Phone</span>
            <span className="contact__info-value">+91 9976123417</span>
          </div>
          <div>
            <span className="contact__info-label">Headquarters</span>
            <span className="contact__info-value">Aundipatty, Theni, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

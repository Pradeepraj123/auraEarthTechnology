import './Footer.css';

const COLUMNS = [
  {
    heading: 'Services',
    links: ['Auto Booking', 'Bike Taxi Booking', 'Cab Booking', 'Live GPS Tracking'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Safety Standards'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <span className="footer__logo-mark">A</span>
              <span>
                Aura Earth <span>Technology</span>
              </span>
            </a>
            <p className="footer__tagline">
              Ride-hailing with AI-powered safety built in, from the first
              mile to the last.
            </p>
          </div>

          <div className="footer__columns">
            {COLUMNS.map((col) => (
              <div className="footer__column" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#top">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Aura Earth Technology. All rights reserved.</p>
          <div className="footer__social">
            <a href="#top" aria-label="Instagram">IG</a>
            <a href="#top" aria-label="LinkedIn">IN</a>
            <a href="#top" aria-label="Twitter">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

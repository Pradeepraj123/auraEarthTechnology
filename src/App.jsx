import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TownCoverage from './components/TownCoverage';
import WomensSafety from './components/WomensSafety';
import FamilyCircle from './components/FamilyCircle';
import HowItWorks from './components/HowItWorks';
import LocalTrust from './components/LocalTrust';
import WhyChooseUs from './components/WhyChooseUs';
import DriverPartner from './components/DriverPartner';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TownCoverage />
        <WomensSafety />
        <FamilyCircle />
        <HowItWorks />
        <LocalTrust />
        <WhyChooseUs />
        <DriverPartner />
        <Technology />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
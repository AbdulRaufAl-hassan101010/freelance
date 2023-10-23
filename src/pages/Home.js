import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
        <Testimonials />
        <About />
      </main>
      <footer>All rights are reserved by bonifytech &copy; 2023</footer>
    </>
  );
};

export default Home;

import React from 'react';

// import components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project2 from './components/Project2';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project2 />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;

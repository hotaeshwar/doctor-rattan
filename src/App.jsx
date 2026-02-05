import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/Aboutus';
import Service from './components/Service';
import Contactus from './components/Contactus';
import Footer from './components/Footer';  // ← Add this import

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <AboutUs />
        <Service />
        <Contactus />
      </main>
      <Footer />  {/* ← Add Footer at the bottom */}
    </div>
  );
}

export default App;
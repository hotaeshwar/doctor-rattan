import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const AboutUs = lazy(() => import('./components/Aboutus'));
const Service = lazy(() => import('./components/Service'));
const Contactus = lazy(() => import('./components/Contactus'));

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <AboutUs />
          </div>
          <div id="services">
            <Service />
          </div>
          <div id="contact">
            <Contactus />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
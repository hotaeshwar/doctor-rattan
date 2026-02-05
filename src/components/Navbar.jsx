import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scrolling function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
        
        // Smooth scroll to element
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust offset for navbar height
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-amber-50/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center h-full"
            >
              <img 
                src="/media/logo.png" 
                alt="Clinic Logo" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto transition-all duration-500 hover:scale-110 object-contain drop-shadow-lg transform"
                style={{
                  marginTop: '-0.5rem',
                  marginBottom: '-0.5rem'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300 group ${
                  isScrolled 
                    ? 'text-teal-900 hover:text-teal-600' 
                    : 'text-white hover:text-teal-200'
                }`}
              >
                {link.name}
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  isScrolled ? 'bg-teal-600' : 'bg-white'
                }`}></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                isScrolled 
                  ? 'text-teal-900 hover:bg-teal-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6 transition-transform duration-300" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-4 pt-2 pb-6 space-y-1 ${
          isScrolled ? 'bg-amber-50/95 backdrop-blur-md' : 'bg-teal-900/95 backdrop-blur-md'
        }`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                handleSmoothScroll(e, link.href);
                setIsMobileMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                isScrolled 
                  ? 'text-teal-900 hover:bg-teal-100 hover:text-teal-600' 
                  : 'text-white hover:bg-white/10 hover:text-teal-200'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
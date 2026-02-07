import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const linkRefs = useRef([]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update tab indicator position
  useEffect(() => {
    const currentTab = hoveredTab !== null ? hoveredTab : activeTab;
    
    if (currentTab !== null) {
      const activeLink = linkRefs.current[currentTab];
      
      if (activeLink) {
        setTabIndicator({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth
        });
      }
    }
  }, [activeTab, hoveredTab, isScrolled]);

  const handleSmoothScroll = (e, href, index) => {
    e.preventDefault();
    setActiveTab(index);
    
    if (href.startsWith('#')) {
      const id = href.substring(1);
      
      let element = document.getElementById(id);
      
      if (!element) {
        element = document.getElementById(id.toLowerCase()) || 
                  document.getElementById(id.toUpperCase());
      }
      
      if (element) {
        setIsMobileMenuOpen(false);
        
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL hash without reloading
        window.history.pushState(null, null, href);
      }
    }
  };

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
          
          <div className="flex-shrink-0 group">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home', 0)}
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

          {/* Desktop Navigation with Tab Animation */}
          <div className="hidden lg:flex items-center relative">
            <div 
              className="flex items-center space-x-1 relative"
              onMouseLeave={() => {
                setHoveredTab(null);
                setActiveTab(null);
              }}
            >
              {/* Animated background indicator - only show when there's an active or hovered tab */}
              {(activeTab !== null || hoveredTab !== null) && (
                <div
                  className={`absolute inset-y-0 rounded-lg transition-all duration-300 ease-out ${
                    isScrolled 
                      ? 'bg-teal-100/50' 
                      : 'bg-white/10'
                  }`}
                  style={{
                    left: `${tabIndicator.left}px`,
                    width: `${tabIndicator.width}px`,
                  }}
                />
              )}
              
              {/* Animated tab indicator - only show when there's an active or hovered tab */}
              {(activeTab !== null || hoveredTab !== null) && (
                <div
                  className={`absolute bottom-0 h-0.5 transition-all duration-300 ease-out ${
                    isScrolled ? 'bg-teal-600' : 'bg-teal-600'
                  }`}
                  style={{
                    left: `${tabIndicator.left}px`,
                    width: `${tabIndicator.width}px`,
                  }}
                />
              )}

              {navLinks.map((link, index) => (
                <a
                  key={index}
                  ref={(el) => (linkRefs.current[index] = el)}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, index)}
                  onMouseEnter={() => setHoveredTab(index)}
                  className={`relative z-10 px-4 py-2 text-sm xl:text-base font-medium transition-colors duration-300 ${
                    activeTab === index || hoveredTab === index
                      ? isScrolled 
                        ? 'text-teal-600' 
                        : 'text-teal-600'
                      : isScrolled 
                        ? 'text-teal-900 hover:text-teal-600' 
                        : 'text-teal-700 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                isScrolled 
                  ? 'text-teal-900 hover:bg-teal-100' 
                  : 'text-teal-700 hover:bg-white/10'
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
              onClick={(e) => handleSmoothScroll(e, link.href, index)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                activeTab === index
                  ? isScrolled
                    ? 'bg-teal-100 text-teal-600'
                    : 'bg-white/20 text-white'
                  : isScrolled 
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
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
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

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com',
      color: '#1877F2' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com',
      color: '#E4405F' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com',
      color: '#1DA1F2' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com',
      color: '#0A66C2' 
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Shop No-2, Sigma City Chowk, Lohgarh, Zirakpur, Punjab 140603',
      link: 'https://maps.app.goo.gl/7bowwEGLSp9Rp8mr7',
      color: '#0787a0'
    },
    {
      icon: Phone,
      text: '+91 99152 99805, +91 83601 56713',
      link: 'tel:+919915299805',
      color: '#80af40'
    },
    {
      icon: Mail,
      text: 'info@drrattanclinic.com',
      link: 'mailto:info@drrattanclinic.com',
      color: '#0787a0'
    },
    {
      icon: Clock,
      text: 'Mon - Sun: 09:00 AM - 09:00 PM',
      color: '#80af40'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-4">
              <img 
                src="/media/logo.png" 
                alt="Rattan Clinic Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#0787a0' }}>
                  Rattan Clinic
                </h3>
                <p className="text-sm sm:text-base" style={{ color: '#80af40', opacity: 0.9 }}>Your Health Partner</p>
              </div>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              Providing comprehensive healthcare services with compassion and excellence. Your trusted general physician in Zirakpur.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      style={{ background: social.color + '40' }}
                    />
                    
                    <Icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-colors duration-300"
                      style={{ color: 'white' }}
                    />
                    
                    {/* Hover background */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: social.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#80af40' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-center gap-2 text-sm sm:text-base transition-all duration-300 hover:translate-x-2 text-gray-200"
                  >
                    <ChevronRight 
                      className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: '#0787a0' }}
                    />
                    <span className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {link.name}
                    </span>
                    
                    {/* Animated underline */}
                    <span 
                      className="absolute bottom-0 left-6 h-0.5 w-0 transition-all duration-300 group-hover:w-24"
                      style={{ background: '#0787a0' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: '#80af40' }}>
              Contact Info
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isClickable = !!info.link;
                
                const content = (
                  <div className="group flex items-start gap-3 transition-all duration-300">
                    <div 
                      className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                        border: `2px solid ${info.color}40`
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 sm:w-6 sm:h-6" 
                        style={{ color: info.color }}
                      />
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed group-hover:opacity-100 transition-opacity duration-300 flex-1 text-gray-200" style={{ opacity: 0.9 }}>
                      {info.text}
                    </p>
                  </div>
                );

                return (
                  <li key={index}>
                    {isClickable ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="block hover:translate-x-1 transition-transform duration-300"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="relative z-10 border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6">
          <div className="flex items-center justify-center">
            <p className="text-xs sm:text-sm text-center text-gray-300">
              © {new Date().getFullYear()} Rattan Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
import React, { useEffect, useState, useRef } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation,
  Calendar
} from 'lucide-react';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    let ticking = false;

    // Smooth scroll animation function using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Check image visibility
          if (imageRef.current && !imageVisible) {
            const rect = imageRef.current.getBoundingClientRect();
            const elemTop = rect.top + scrollTop;
            const elemHeight = rect.height;
            const triggerPoint = scrollTop + windowHeight - (elemHeight * 0.15);

            if (elemTop < triggerPoint) {
              setImageVisible(true);
            }
          }

          // Check content visibility
          if (contentRef.current && !contentVisible) {
            const rect = contentRef.current.getBoundingClientRect();
            const elemTop = rect.top + scrollTop;
            const elemHeight = rect.height;
            const triggerPoint = scrollTop + windowHeight - (elemHeight * 0.15);

            if (elemTop < triggerPoint) {
              setContentVisible(true);
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial check
    const initialCheck = setTimeout(() => {
      handleScroll();
    }, 200);

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(initialCheck);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [imageVisible, contentVisible]);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Address",
      details: "Shop No-2, Sigma City Chowk, Lohgarh, Zirakpur, Punjab 140603, India",
      color: "#0787a0",
      action: "Get Directions",
      link: "https://maps.app.goo.gl/7bowwEGLSp9Rp8mr7"
    },
    {
      icon: Clock,
      title: "Clinic Timings",
      details: "Monday - Sunday",
      subDetails: "09:00 AM - 09:00 PM",
      color: "#80af40",
      action: "Book Appointment"
    },
    {
      icon: Phone,
      title: "Contact Number",
      details: "+91 99152 99805, +91 83601 56713",
      subDetails: "Available during clinic hours",
      color: "#0787a0",
      action: "Call Now",
      link: "tel:+919915299805"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@drrattanclinic.com",
      subDetails: "We'll respond within 24 hours",
      color: "#80af40",
      action: "Send Email",
      link: "mailto:info@drrattanclinic.com"
    }
  ];

  return (
    <section 
      className="w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-b from-gray-50 to-white"
      aria-label="Contact Rattan Clinic - General Physician in Zirakpur"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - SEO Optimized */}
        <div className={`text-center mb-6 sm:mb-7 md:mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 leading-tight" style={{ color: '#416267' }}>
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-4 leading-relaxed" style={{ color: '#416267', opacity: 0.9 }}>
            Visit Rattan Clinic in Zirakpur | Best General Physician | Open 7 Days a Week
          </p>
        </div>

        {/* Main Content Section - Image & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 items-center mb-6 sm:mb-7 md:mb-8">
          
          {/* Left Side - Image */}
          <div 
            ref={imageRef}
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group aspect-[16/10] w-full">
              {/* Glowing Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl transition-opacity duration-700 pointer-events-none z-10"
                style={{
                  boxShadow: '0 0 40px #0787a040, inset 0 0 30px #0787a015',
                  animation: 'border-pulse 4s ease-in-out infinite'
                }}
              />
              
              {/* Image */}
              <img 
                src="/media/contact.png" 
                alt="Rattan Clinic - General Physician in Zirakpur, Punjab - Best Medical Care"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div 
            ref={contentRef}
            className={`order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-700 ease-out ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="mb-3 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#416267' }}>
                About Rattan Clinic
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#416267', opacity: 0.85 }}>
                Rattan Clinic is a trusted general physician clinic located at Sigma City Chowk, Lohgarh, Zirakpur, Punjab. We provide comprehensive healthcare services with state-of-the-art facilities and compassionate care for all age groups.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-500"
                  style={{
                    border: `2px solid ${info.color}20`,
                    boxShadow: `0 4px 20px ${info.color}15`
                  }}
                >
                  {/* Glowing Background */}
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${info.color}10, transparent 70%)`
                    }}
                  />

                  <div className="flex items-start gap-3 sm:gap-4 relative z-10">
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                        border: `2px solid ${info.color}40`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" 
                        style={{ color: info.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2" style={{ color: '#416267' }}>
                        {info.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg mb-1" style={{ color: '#416267', opacity: 0.9 }}>
                        {info.details}
                      </p>
                      {info.subDetails && (
                        <p className="text-xs sm:text-sm md:text-base" style={{ color: '#416267', opacity: 0.7 }}>
                          {info.subDetails}
                        </p>
                      )}
                      
                      {/* Action Button */}
                      {info.action && (
                        <a
                          href={info.link || '#'}
                          target={info.link ? '_blank' : '_self'}
                          rel={info.link ? 'noopener noreferrer' : ''}
                          className="inline-block mt-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg text-white text-xs sm:text-sm md:text-base font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: info.color }}
                        >
                          {info.action}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className={`text-center bg-gradient-to-r from-white to-gray-50 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-7 shadow-lg transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ 
          transitionDelay: '400ms',
          border: '2px solid #0787a020'
        }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
            <Calendar className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: '#0787a0' }} />
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: '#416267' }}>
                Open 7 Days a Week
              </h3>
              <p className="text-sm sm:text-base md:text-lg" style={{ color: '#416267', opacity: 0.8 }}>
                Walk-ins Welcome | Same-Day Appointments Available
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: '#416267', opacity: 0.7 }}>
            Located at Sigma City Chowk in Lohgarh, Zirakpur, our clinic is easily accessible and equipped with modern medical facilities to serve you better.
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes border-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
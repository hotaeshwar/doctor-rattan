import React, { useEffect, useState, useRef } from 'react';
import { 
  Stethoscope, 
  Droplet, 
  Heart, 
  Activity, 
  Users, 
  Clock,
  Shield,
  Pill
} from 'lucide-react';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    let ticking = false;

    // Smooth scroll animation function using pure JavaScript with requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Check each card's visibility
          cardRefs.current.forEach((card, index) => {
            if (card && !visibleCards.has(index)) {
              const rect = card.getBoundingClientRect();
              const elemTop = rect.top + scrollTop;
              const elemHeight = rect.height;
              const triggerPoint = scrollTop + windowHeight - (elemHeight * 0.15);

              if (elemTop < triggerPoint) {
                setVisibleCards(prev => new Set([...prev, index]));
              }
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial check on mount
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
  }, [visibleCards]);

  const services = [
    {
      icon: Stethoscope,
      title: "General Physician Consultation",
      description: "Expert general physician services offering comprehensive health check-ups, medical consultations, and personalized treatment plans for all age groups and common health concerns.",
      color: "#0787a0",
      keywords: "General Physician, Family Doctor"
    },
    {
      icon: Droplet,
      title: "Blood Testing Services",
      description: "Complete diagnostic blood tests including CBC, blood sugar, lipid profile, liver function, kidney function, thyroid tests, and vitamin deficiency screening with accurate results.",
      color: "#80af40",
      keywords: "Blood Test, Diagnostic Lab"
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      description: "Expert management and regular monitoring of diabetes, hypertension, thyroid disorders, and other chronic conditions with personalized care and lifestyle guidance.",
      color: "#0787a0",
      keywords: "Diabetes Care, Hypertension Treatment"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Professional guidance on prescription medications, proper dosages, drug interactions, and comprehensive treatment plans tailored to your specific health needs.",
      color: "#80af40",
      keywords: "Prescription Medicine, Treatment Plans"
    },
    {
      icon: Users,
      title: "Family Healthcare",
      description: "Complete family health solutions from pediatric to geriatric care. One-stop general medicine services for your entire family's healthcare needs under one roof.",
      color: "#0787a0",
      keywords: "Family Doctor, Primary Care"
    },
    {
      icon: Shield,
      title: "Preventive Care & Vaccination",
      description: "Comprehensive vaccination programs for all age groups, routine health screenings, annual wellness checkups, and preventive health measures to keep you disease-free.",
      color: "#80af40",
      keywords: "Vaccination, Health Screening"
    },
    {
      icon: Heart,
      title: "Common Illness Treatment",
      description: "Treatment for fever, cough, cold, infections, allergies, digestive issues, headaches, body pain, and other common medical conditions with prompt care.",
      color: "#0787a0",
      keywords: "Fever Treatment, Cold & Cough"
    },
    {
      icon: Clock,
      title: "Flexible Appointments",
      description: "Convenient scheduling with same-day appointments available, minimal waiting time, walk-in consultations, and prompt medical attention when you need it most.",
      color: "#80af40",
      keywords: "Walk-in Clinic, Same Day Appointment"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-b from-white to-gray-50"
      aria-label="Medical Services offered by Rattan Clinic"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - SEO Optimized */}
        <div className={`text-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 px-2 leading-tight" style={{ color: '#416267' }}>
            Our Medical Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-4 leading-relaxed" style={{ color: '#416267', opacity: 0.9 }}>
            Rattan Clinic - Best General Physician | Comprehensive Healthcare Services with State-of-the-Art Diagnostics and Compassionate Care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isCardVisible = visibleCards.has(index);
            
            return (
              <article
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative flex flex-row items-start gap-4 sm:gap-5 md:gap-6 p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50/50 hover:shadow-2xl transition-all duration-700 ease-out overflow-hidden ${
                  isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  border: `2px solid ${service.color}25`,
                  boxShadow: `0 8px 32px ${service.color}20, 0 0 60px ${service.color}15, inset 0 0 20px ${service.color}08`
                }}
              >
                {/* Constant Animated Glowing Background */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 30%, ${service.color}18, transparent 50%), radial-gradient(circle at 80% 70%, ${service.color}12, transparent 60%)`,
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
                
                {/* Pulsing Glow Effect */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.color}15, transparent 65%)`,
                    animation: 'pulse-glow 3s ease-in-out infinite'
                  }}
                />
                
                {/* Enhanced Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.color}35, transparent 70%)`
                  }}
                />

                {/* Animated Border Glow - Always Visible */}
                <div 
                  className="absolute inset-0 rounded-xl md:rounded-2xl transition-opacity duration-700 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${service.color}40, inset 0 0 25px ${service.color}15`,
                    animation: 'border-pulse 4s ease-in-out infinite'
                  }}
                />

                {/* Icon Container - Left Side */}
                <div 
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl relative group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                    border: `2px solid ${service.color}30`
                  }}
                >
                  {/* Icon Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `0 0 25px ${service.color}60, inset 0 0 15px ${service.color}20`
                    }}
                  />
                  
                  <Icon 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative z-10 group-hover:rotate-6 transition-transform duration-500" 
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 text-left relative z-10">
                  <h2 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: '#416267' }}
                  >
                    {service.title}
                  </h2>
                  <p 
                    className="text-sm sm:text-base md:text-lg leading-relaxed mb-3"
                    style={{ color: '#416267', opacity: 0.85 }}
                  >
                    {service.description}
                  </p>
                  
                  {/* SEO Keywords Badge */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.keywords.split(', ').map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: `${service.color}10`,
                          color: service.color,
                          border: `1px solid ${service.color}30`
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Info Section - SEO Enhanced */}
        <div className={`mt-8 sm:mt-10 md:mt-12 text-center transition-all duration-700 ease-out px-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: '#416267' }}>
            Quality Healthcare Services
          </h3>
          <p className="text-sm sm:text-base md:text-lg mt-2 max-w-3xl mx-auto leading-relaxed" style={{ color: '#416267', opacity: 0.8 }}>
            Rattan Clinic is your trusted healthcare partner, offering expert medical consultations, advanced diagnostic services, and personalized treatment plans for individuals and families.
          </p>
        </div>
      </div>

      {/* CSS Animations for Glowing Card Effects */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(10px, -10px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.98);
          }
        }
        
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

export default Service;
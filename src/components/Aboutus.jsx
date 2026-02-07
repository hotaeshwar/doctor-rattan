import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Calendar, Clock } from 'lucide-react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load dotlottie player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js';
    script.type = 'module';
    document.body.appendChild(script);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      document.body.removeChild(script);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 overflow-hidden bg-gradient-to-br from-[#14899d]/10 via-[#499a3f]/5 to-white"
      aria-labelledby="about-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-[#14899d]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#499a3f]/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#416267] mb-2 sm:mb-3 md:mb-4 tracking-tight"
          >
            <span className="text-[#416267]">About</span> <strong className="text-[#14899d] font-extrabold">Dr. Rattan</strong>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#14899d] to-[#499a3f] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column - Transparent Lottie Animation */}
          <div className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Removed card container and decorative elements */}
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="w-full aspect-square flex items-center justify-center">
                <dotlottie-wc 
                  src="https://lottie.host/bec762be-92b9-4a07-a7a0-dfad08f5e262/KbIBLW9qiR.lottie"
                  autoplay
                  loop
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    maxWidth: '550px', 
                    maxHeight: '550px',
                    backgroundColor: 'transparent'
                  }}
                ></dotlottie-wc>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`order-1 lg:order-2 space-y-4 sm:space-y-5 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Main Introduction */}
            <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#416267] mb-2 sm:mb-3 leading-tight">
                Your Trusted General Physician
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-[#416267] leading-relaxed mb-3 sm:mb-4">
                Welcome to <strong className="text-[#14899d]">Dr. Rattan Clinic</strong>, where compassionate care meets medical excellence. With over <span className="font-semibold text-[#499a3f]">15+ years of experience</span> in family medicine and general practice, Dr. Rattan is dedicated to providing comprehensive healthcare services to patients of all ages.
              </p>

              <p className="text-sm sm:text-base text-[#416267]/80 leading-relaxed">
                Dr. Rattan believes in a holistic approach to healthcare, focusing not just on treating illnesses but on preventing them through <strong className="text-[#499a3f]">patient education</strong>, <strong className="text-[#14899d]">lifestyle counseling</strong>, and <strong className="text-[#499a3f]">personalized care plans</strong>.
              </p>
            </article>

            {/* Key Highlights - All cards with same design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              
              {/* Card 1: MBBS, MD Certified - Now with Award/Certificate Icon */}
              <div className={`group bg-gradient-to-br from-white to-white backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-2xl border-2 border-[#499a3f]/30 transition-all duration-500 hover:scale-105 hover:border-[#499a3f]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#499a3f] to-[#5aad50] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#416267] mb-1">MBBS, MD Certified</h4>
                    <p className="text-xs sm:text-sm text-[#416267]/70 leading-snug">Board-certified with extensive training in internal medicine</p>
                  </div>
                </div>
              </div>

              {/* Card 2: 15,000+ Patients */}
              <div className={`group bg-gradient-to-br from-white to-white backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-2xl border-2 border-[#499a3f]/30 transition-all duration-500 hover:scale-105 hover:border-[#499a3f]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '500ms' }}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#499a3f] to-[#5aad50] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#416267] mb-1">15,000+ Patients</h4>
                    <p className="text-xs sm:text-sm text-[#416267]/70 leading-snug">Successfully treated and continuing to care for families</p>
                  </div>
                </div>
              </div>

              {/* Card 3: 15+ Years Experience - Now with Calendar Icon */}
              <div className={`group bg-gradient-to-br from-white to-white backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-2xl border-2 border-[#499a3f]/30 transition-all duration-500 hover:scale-105 hover:border-[#499a3f]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#499a3f] to-[#5aad50] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#416267] mb-1">15+ Years Experience</h4>
                    <p className="text-xs sm:text-sm text-[#416267]/70 leading-snug">Dedicated to family medicine and preventive care</p>
                  </div>
                </div>
              </div>

              {/* Card 4: 24/7 Emergency Care - Now with Clock Icon */}
              <div className={`group bg-gradient-to-br from-white to-white backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-2xl border-2 border-[#499a3f]/30 transition-all duration-500 hover:scale-105 hover:border-[#499a3f]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '700ms' }}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#499a3f] to-[#5aad50] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-[#416267] mb-1">24/7 Emergency Care</h4>
                    <p className="text-xs sm:text-sm text-[#416267]/70 leading-snug">Available for urgent medical consultations</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Additional Info Quote */}
            <div className={`mt-4 sm:mt-6 p-3 sm:p-4 lg:p-5 bg-gradient-to-r from-[#14899d]/10 to-[#499a3f]/10 rounded-xl border-2 border-[#416267]/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '800ms' }}>
              <p className="text-xs sm:text-sm lg:text-base text-[#416267] leading-relaxed italic">
                <strong className="text-[#14899d] not-italic">"Your health is my priority."</strong> Dr. Rattan is committed to building long-lasting relationships with patients, understanding their unique health needs, and providing personalized medical care in a warm and welcoming environment.
              </p>
            </div>
          </div>

        </div>

        {/* SEO-focused content (hidden but crawlable) */}
        <div className="sr-only">
          <h3>Dr. Rattan - General Physician in Ludhiana, Punjab</h3>
          <p>
            Dr. Rattan is a highly qualified general physician with MBBS and MD certifications, 
            serving the community of Ludhiana, Punjab for over 15 years. Specializing in family medicine, 
            preventive care, chronic disease management, and emergency medical services.
          </p>
          <p>
            Services include: General health checkups, fever and infection treatment, diabetes management, 
            hypertension care, respiratory issues, digestive problems, skin conditions, vaccination, 
            health counseling, and lifestyle disease prevention.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
        
        dotlottie-wc {
          background-color: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
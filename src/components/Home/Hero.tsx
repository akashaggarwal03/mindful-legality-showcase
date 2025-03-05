
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 700, 0);
        const translateY = scrollPosition * 0.3;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-b from-law-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYTQ0NTciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTM0IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTMyIDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTMwIDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTI4IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTI2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTI0IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTIyIDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6TTIwIDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptMC0xM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgN2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6bTAgM2gxdi0yaC0xdjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="absolute inset-0 flex items-center justify-center" ref={heroRef}>
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto md:mx-0">
            <div className="flex flex-col space-y-6">
              <AnimatedText as="h4" className="uppercase tracking-wider text-law-600 font-medium text-sm" delay={200}>
                Exceptional Legal Representation
              </AnimatedText>
              
              <AnimatedText as="h1" className="text-4xl md:text-6xl font-serif font-semibold text-law-900 leading-tight" delay={400}>
                Justice and Excellence <br /> in Legal Practice
              </AnimatedText>
              
              <AnimatedText as="p" className="text-law-600 text-lg md:text-xl max-w-xl" delay={600}>
                We provide comprehensive legal solutions with a focus on achieving the best possible outcomes for our clients.
              </AnimatedText>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4" style={{ opacity: 0, animation: 'fade-in 0.7s ease-out 0.8s forwards' }}>
                <a href="#contact" className="px-6 py-3 rounded-md bg-law-800 text-white font-medium transition-all duration-300 hover:bg-law-700 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center sm:justify-start">
                  Schedule a Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#practice-areas" className="px-6 py-3 rounded-md bg-white text-law-800 font-medium border border-law-200 transition-all duration-300 hover:bg-law-50 flex items-center justify-center sm:justify-start">
                  Explore Practice Areas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;

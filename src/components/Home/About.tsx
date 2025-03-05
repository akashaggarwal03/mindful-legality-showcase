
import React, { useRef, useEffect } from 'react';
import { Shield, Scale, BookOpen } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-law-700" />,
    title: 'Protection',
    description: 'We safeguard your rights and interests throughout the legal process with unwavering dedication.'
  },
  {
    icon: <Scale className="h-8 w-8 text-law-700" />,
    title: 'Balance',
    description: 'Our approach combines legal expertise with a focus on achieving fair and equitable outcomes.'
  },
  {
    icon: <BookOpen className="h-8 w-8 text-law-700" />,
    title: 'Knowledge',
    description: 'We leverage our deep legal understanding to provide you with clear guidance and representation.'
  }
];

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className="relative rounded-lg overflow-hidden opacity-0"
            style={{ minHeight: '480px' }}
          >
            <div className="absolute inset-0 bg-law-800 rounded-lg -translate-x-4 translate-y-4"></div>
            <img
              src="image.jpeg"
              alt="Law firm team"
              className="relative w-full h-full object-cover object-center rounded-lg shadow-lg"
              style={{ minHeight: '480px' }}
            />
          </div>
          
          <div className="flex flex-col space-y-8">
            <AnimatedText as="h2" className="text-3xl md:text-4xl font-serif text-law-900">
              About Our Firm
            </AnimatedText>
            
            <AnimatedText delay={200} className="text-law-700 leading-relaxed">
              With over 5 years of experience, Choudhary & Co. has established itself as a leading law firm committed to excellence and client satisfaction. Our team of seasoned attorneys brings extensive expertise across various practice areas, allowing us to provide comprehensive legal solutions tailored to your specific needs.
            </AnimatedText>
            
            <AnimatedText delay={300} className="text-law-700 leading-relaxed">
              We believe in building lasting relationships with our clients through personalized attention, clear communication, and unwavering dedication to achieving favorable outcomes. Whether you're facing a complex legal challenge or seeking preventative counsel, our firm provides the guidance and representation you deserve.
            </AnimatedText>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-lg glass-panel transition-all duration-300 hover:shadow-md"
                  style={{ 
                    opacity: 0, 
                    animation: `fade-in 0.7s ease-out ${0.4 + index * 0.1}s forwards` 
                  }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium mb-2 text-law-800">{feature.title}</h3>
                  <p className="text-law-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

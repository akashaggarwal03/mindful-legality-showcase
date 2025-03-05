
import React from 'react';
import { Building2, Users, Scale, Home, FileText, Gavel } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const practiceAreas = [
  {
    icon: <Building2 className="h-10 w-10 text-law-700" />,
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes, from startups to established corporations.',
    link: '#'
  },
  {
    icon: <Users className="h-10 w-10 text-law-700" />,
    title: 'Family Law',
    description: 'Compassionate representation in divorce, child custody, and other family-related legal matters.',
    link: '#'
  },
  {
    icon: <Gavel className="h-10 w-10 text-law-700" />,
    title: 'Criminal Defense',
    description: 'Vigorous defense against criminal charges, protecting your rights throughout the legal process.',
    link: '#'
  },
  {
    icon: <Home className="h-10 w-10 text-law-700" />,
    title: 'Real Estate',
    description: 'Expert guidance in property transactions, landlord-tenant disputes, and real estate litigation.',
    link: '#'
  },
  {
    icon: <FileText className="h-10 w-10 text-law-700" />,
    title: 'Tax Law',
    description: 'Strategic tax planning and representation in tax disputes with government authorities.',
    link: '#'
  },
  {
    icon: <Scale className="h-10 w-10 text-law-700" />,
    title: 'Litigation',
    description: 'Skilled advocacy in civil litigation matters, representing clients in court with precision and determination.',
    link: '#'
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 bg-law-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-serif text-law-900 mb-4">
            Our Practice Areas
          </AnimatedText>
          <AnimatedText delay={200} className="text-law-600">
            We offer comprehensive legal services across a wide range of practice areas,
            providing expert guidance and representation tailored to your specific needs.
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className="bg-white rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ 
                opacity: 0, 
                animation: `fade-in 0.7s ease-out ${0.3 + index * 0.1}s forwards` 
              }}
            >
              <div className="mb-6">{area.icon}</div>
              <h3 className="text-xl font-medium mb-3 text-law-800">{area.title}</h3>
              <p className="text-law-600 mb-6">{area.description}</p>
              <a href={area.link} className="text-law-700 font-medium law-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;

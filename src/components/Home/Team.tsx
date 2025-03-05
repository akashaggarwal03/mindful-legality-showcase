
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const teamMembers = [
  {
    name: 'Sachin Choudhary',
    role: 'Managing Partner',
    image: 'src/assets/sachin.jpeg',
    specialty: 'Corporate Law',
    bio: 'With over 2 years of experience, Sachin leads our corporate practice with a focus on mergers and acquisitions.',
    linkdinUrl: 'https://www.linkedin.com/in/sachin-chaudhary-719287212/'
  },
  {
    name: 'Babar',
    role: 'Senior Partner',
    image: 'src/assets/babar.jpeg',
    specialty: 'Family Law',
    bio: 'Babar specializes in complex family law matters, bringing compassion and strategic thinking to sensitive cases.'
  },
  {
    name: 'Akash Aggarwal',
    role: 'Partner',
    image: 'src/assets/Akash.jpeg',
    specialty: 'Criminal Defense',
    bio: 'Akash is a former prosecutor who now uses his insider knowledge to build strong defenses for his clients.'
  },
  {
    name: 'Saurabh',
    role: 'Associate',
    image: '',
    specialty: 'Real Estate',
    bio: 'Saurabh specializes in commercial real estate transactions and development projects across multiple jurisdictions.'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-serif text-law-900 mb-4">
            Meet Our Team
          </AnimatedText>
          <AnimatedText delay={200} className="text-law-600">
            Our attorneys bring decades of combined experience and a passionate commitment
            to delivering exceptional legal representation.
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{ 
                opacity: 0, 
                animation: `fade-in 0.7s ease-out ${0.3 + index * 0.1}s forwards` 
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-950 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex space-x-3">
                    <a href={member.linkdinUrl} className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-law-800 hover:bg-law-100 transition-colors duration-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-law-800 hover:bg-law-100 transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-law-800">{member.name}</h3>
              <p className="text-law-600 mb-1">{member.role}</p>
              <p className="text-law-500 text-sm mb-3">Specializes in {member.specialty}</p>
              <p className="text-law-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

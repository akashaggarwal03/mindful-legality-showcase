
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-law-700" />,
    title: 'Our Location',
    details: '123 Legal Avenue, Courtroom District, NY 10001',
  },
  {
    icon: <Phone className="h-6 w-6 text-law-700" />,
    title: 'Phone Number',
    details: '(123) 456-7890',
  },
  {
    icon: <Mail className="h-6 w-6 text-law-700" />,
    title: 'Email Address',
    details: 'contact@virtuelaw.com',
  },
  {
    icon: <Clock className="h-6 w-6 text-law-700" />,
    title: 'Working Hours',
    details: 'Monday - Friday: 9:00 AM - 6:00 PM',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-law-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <AnimatedText as="h2" className="text-3xl md:text-4xl font-serif text-law-900 mb-4">
              Get In Touch
            </AnimatedText>
            <AnimatedText delay={200} className="text-law-600 mb-10 max-w-xl">
              We're here to help with your legal needs. Reach out to schedule a consultation
              with one of our experienced attorneys.
            </AnimatedText>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start p-6 bg-white rounded-lg shadow-sm"
                  style={{ 
                    opacity: 0, 
                    animation: `fade-in 0.7s ease-out ${0.3 + index * 0.1}s forwards` 
                  }}
                >
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-law-800 mb-1">{item.title}</h3>
                    <p className="text-law-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div
              className="relative rounded-lg overflow-hidden h-80 md:h-96"
              style={{ 
                opacity: 0, 
                animation: 'fade-in 0.7s ease-out 0.7s forwards' 
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1645564916606!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
          
          <div 
            className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-sm"
            style={{ 
              opacity: 0, 
              animation: 'fade-in 0.7s ease-out 0.3s forwards' 
            }}
          >
            <h3 className="text-2xl font-serif text-law-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-law-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-law-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-law-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-law-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-law-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-md border border-law-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-law-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-law-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent"
                >
                  <option value="" disabled selected>Select a service</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="tax">Tax Law</option>
                  <option value="litigation">Litigation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-law-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-law-200 focus:outline-none focus:ring-2 focus:ring-law-500 focus:border-transparent"
                  placeholder="Please describe your legal matter..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-law-800 text-white font-medium transition-all duration-300 hover:bg-law-700 law-btn-hover"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

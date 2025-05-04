
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-law-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-medium">
              Chaudhary & Co.<span className="text-law-300"></span>
            </h2>
            <p className="text-law-100 text-sm leading-relaxed">
              We provide comprehensive legal solutions with a focus on excellence and client satisfaction. Our team of dedicated attorneys is committed to achieving the best possible outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-law-800 hover:bg-law-600 transition-colors duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-law-800 hover:bg-law-600 transition-colors duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-law-800 hover:bg-law-600 transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-law-800 hover:bg-law-600 transition-colors duration-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Practice Areas', 'Our Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-law-200 hover:text-white text-sm flex items-center group transition-colors duration-300">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-medium mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {['Corporate Law', 'Family Law', 'Criminal Defense', 'Real Estate', 'Tax Law', 'Litigation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-law-200 hover:text-white text-sm flex items-center group transition-colors duration-300">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-law-300 mt-0.5" />
                <span className="text-sm text-law-200">101, P9, Mayur Vihar-1, Near Shitla Mata Mandir, New Delhi- 110091</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-law-300" />
                <span className="text-sm text-law-200">9311738762</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-law-300" />
                <span className="text-sm text-law-200">sachinchoudhary.co.in@gmail.com

</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-law-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-law-300 text-sm">
            &copy; {new Date().getFullYear()} Chaudhary & Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-law-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-law-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

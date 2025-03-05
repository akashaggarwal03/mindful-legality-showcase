
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'Our Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
    {
      'py-6': !isScrolled,
      'py-3 bg-white/80 backdrop-blur-lg shadow-sm': isScrolled,
    }
  );

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-semibold text-law-800">
          Virtue<span className="text-law-600">Law</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-law-700 hover:text-law-900 law-link text-sm font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-law-800 text-white text-sm font-medium transition-all duration-300 hover:bg-law-700 law-btn-hover"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-law-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white pt-20 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-between py-3 text-law-700 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-base font-medium">{link.name}</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#contact"
            className="mt-6 px-5 py-3 rounded-md bg-law-800 text-white text-base font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

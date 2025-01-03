import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { NavigationItem } from './NavigationItem';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="px-10 py-4 flex items-center justify-between gap-12 w-[90%] max-w-[1200px] mx-auto">
        <div className="flex items-center space-x-4">
          <Rocket className="w-6 h-6 text-[#6D5DFB]" />
          <span className="text-white font-bold text-lg tracking-tight">VentureX</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 flex-grow justify-center">
          {navItems.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              isActive={activeSection === item.href.substring(1)}
            >
              {item.label}
            </NavigationItem>
          ))}
        </div>
    
        <button className="bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(109,93,251,0.5)] transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </nav>
    </header>

  );
}
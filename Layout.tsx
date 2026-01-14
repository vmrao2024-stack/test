
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Globe, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, COMPANY_EMAIL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* Using a stylized text logo since actual PNG path isn't dynamically known but requested to use PNG. Placeholder for logo image. */}
          <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center text-white font-bold text-xl">A</div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            ADITYA <span className="text-amber-600">CONSULTING</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                location.pathname === link.path ? 'text-amber-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-600 transition-all flex items-center group"
          >
            Work With Us
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-medium text-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-amber-600 text-white text-center py-3 rounded-lg font-bold"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center text-white font-bold">A</div>
                <span className="text-xl font-bold text-white">ADITYA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Precision hiring. Visionary leadership. Global reach. We eliminate bottlenecks so your team can build exceptional products.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-600 transition-colors" aria-label="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Executive Search</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Tech Recruitment</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Staff Augmentation</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">GTM Expertise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Get the latest recruitment insights directly in your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Work email" 
                className="bg-slate-800 border-none rounded-l-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-amber-600 outline-none"
              />
              <button className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 transition-colors">
                Join
              </button>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center space-x-2 text-xs">
              <Mail size={14} className="text-amber-600" />
              <span>{COMPANY_EMAIL}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

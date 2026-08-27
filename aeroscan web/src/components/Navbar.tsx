import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Technology', path: '/technology' },
  { name: 'Partners', path: '/partners' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-600/30 shadow-2xl' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 shrink-0">
                {/* Tech pulse ring on hover */}
                <div className="absolute inset-0 rounded-full border border-cyan-600/0 group-hover:border-cyan-600/50 group-hover:scale-110 transition-all duration-500"></div>
                <img src={config.company.logo} alt={config.company.name} className="w-full h-full object-contain relative z-10" referrerPolicy="no-referrer" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide leading-none">
                  {config.company.shortName}
                </span>
                <span className="text-[10px] text-cyan-500 tracking-widest uppercase mt-1 opacity-80">
                  Digital Future
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Geometric Edge Design */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative h-full flex items-center group"
                >
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Sliding Bottom Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-edge-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {/* Glow effect on the line */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[10px] bg-cyan-600/50 blur-md pointer-events-none"></div>
                    </motion.div>
                  )}
                  {/* Hover indicator for non-active */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/login" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors"></span>
              Login
            </Link>
            <div className="h-4 w-px bg-white/20"></div>
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden border border-cyan-500/50 bg-gradient-to-r from-cyan-400 to-emerald-400 text-sm font-bold font-mono text-slate-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                [ EXPLORE ]
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-600/30 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div 
                    key="close" 
                    initial={{ opacity: 0, rotate: 90 }} 
                    animate={{ opacity: 1, rotate: 0 }} 
                    exit={{ opacity: 0, rotate: -90 }} 
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="menu" 
                    initial={{ opacity: 0, rotate: -90 }} 
                    animate={{ opacity: 1, rotate: 0 }} 
                    exit={{ opacity: 0, rotate: 90 }} 
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Full-width seamless dropdown for mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-600/30"
          >
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            <div className="px-4 py-8 space-y-1 relative z-10 max-w-7xl mx-auto">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`group flex items-center justify-between px-4 py-4 rounded-lg text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-600/10 to-transparent text-white border-l-2 border-cyan-600'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 "></span>}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1 }}
                className="pt-6 mt-4 border-t border-cyan-600/30 flex flex-col gap-4"
              >
                <Link
                  to="/login"
                  className="flex justify-center items-center gap-2 w-full px-4 py-3 bg-slate-900 border border-cyan-600/30 rounded-lg text-base font-medium text-white hover:bg-slate-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Client Login
                </Link>
                <Link
                  to="/products"
                  className="flex justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-emerald-400 border border-cyan-500/50 text-slate-950 font-mono rounded-none text-base font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  [ EXPLORE ]
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-600/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={config.company.logo} alt={config.company.name} className="h-16 w-auto object-contain max-w-[280px]" referrerPolicy="no-referrer" />
              <span className="text-2xl font-bold text-white tracking-tight">
                {config.company.shortName}
              </span>
            </Link>
            <p className="text-slate-400 text-lg mb-8 max-w-sm">
              {config.company.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={config.socials.twitter} className="text-slate-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href={config.socials.linkedin} className="text-slate-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Products</h3>
            <ul className="space-y-3">
              {config.products.map(product => (
                <li key={product.slug}>
                  <Link to={product.url} className="text-base text-slate-400 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions#automotive" className="text-base text-slate-400 hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/solutions#education" className="text-base text-slate-400 hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/solutions#business" className="text-base text-slate-400 hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/solutions#infrastructure" className="text-base text-slate-400 hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-base text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/technology" className="text-base text-slate-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/partners" className="text-base text-slate-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-base text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-600/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-slate-500">
            &copy; {new Date().getFullYear()} {config.company.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-slate-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

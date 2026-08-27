import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from center (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-cyan-500/30 font-sans relative overflow-hidden">
      {/* Circuit background base with scroll parallax */}
      <div 
        className="fixed inset-0 bg-circuit pointer-events-none z-0 transition-transform duration-700 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10 - scrollY * 0.1}px) scale(1.05)`,
          opacity: 0.5
        }}
      ></div>
      
      {/* Interactive cursor glow layer for circuits */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-transform duration-200 ease-out bg-circuit mix-blend-screen"
        style={{ 
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10 - scrollY * 0.1}px) scale(1.05)`,
          WebkitMaskImage: `radial-gradient(circle 300px at calc(50% + ${mousePos.x * 50}vw) calc(50% + ${mousePos.y * 50}vh), rgba(0,0,0,1), rgba(0,0,0,0))`,
          maskImage: `radial-gradient(circle 300px at calc(50% + ${mousePos.x * 50}vw) calc(50% + ${mousePos.y * 50}vh), rgba(0,0,0,1), rgba(0,0,0,0))`,
          opacity: 0.8
        }}
      ></div>

      {/* Animated Traces (Responsive to scroll) */}
      <div className="circuit-trace-x top-[20%] left-0 w-full z-0 opacity-50" style={{ animationDelay: '0s', animationDuration: '7s', transform: `translateY(${scrollY * -0.05}px)` }}></div>
      <div className="circuit-trace-x top-[70%] left-0 w-full z-0 opacity-30" style={{ animationDelay: '3s', animationDuration: '8s', transform: `translateY(${scrollY * -0.05}px)` }}></div>
      <div className="circuit-trace-y left-[15%] top-0 h-full z-0 opacity-40" style={{ animationDelay: '1s', animationDuration: '6s', transform: `translateX(${scrollY * -0.05}px)` }}></div>
      <div className="circuit-trace-y right-[25%] top-0 h-full z-0 opacity-60" style={{ animationDelay: '4s', animationDuration: '9s', transform: `translateX(${scrollY * 0.05}px)` }}></div>

      {/* Interactive cursor tracking glow blob */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(16,185,129,0.05) 40%, rgba(0,0,0,0) 70%)',
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${mousePos.x * 50}vw), calc(-50% + ${mousePos.y * 50}vh))`,
        }}
      ></div>

      {/* Static Decorative background glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col flex-grow min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Simulate login and redirect based on role
    setTimeout(() => {
      setIsLoggingIn(false);
      alert('Login flow would execute here. User would be routed to their specific application based on Role-Based Access Control (RBAC).');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-32 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
          
          <div className="text-center mb-8">
            <img src={config.company.logo} alt="Logo" className="h-20 w-auto object-contain mx-auto mb-6 max-w-[280px]" referrerPolicy="no-referrer" />
            <h1 className="text-2xl font-bold text-white mb-2">Welcome to {config.company.shortName}</h1>
            <p className="text-slate-400 text-sm">Sign in to access your digital workspace.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" 
                  placeholder="you@example.com" 
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-400">Password</label>
                <a href="#" className="text-sm font-medium text-cyan-500 hover:text-blue-300 transition-colors">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" 
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all disabled:opacity-70"
            >
              {isLoggingIn ? 'Signing In...' : 'Sign In'}
              {!isLoggingIn && <LogIn className="w-4 h-4" />}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-400">Or continue with</span>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              <Chrome className="w-4 h-4 text-cyan-400" />
              Google
            </button>
            
            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account? <a href="#" className="text-cyan-500 hover:text-blue-300 font-medium transition-colors">Create Account</a>
            </p>
          </form>
          
        </motion.div>
        
        <div className="mt-8 text-center text-xs text-slate-500">
           Protected by Firebase Authentication.
        </div>
      </div>
    </div>
  );
}

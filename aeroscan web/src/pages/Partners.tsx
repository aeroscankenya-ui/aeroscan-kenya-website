import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, GraduationCap, Shield, Settings, Truck, Code, Landmark, Signal, Users, TrendingUp } from 'lucide-react';

export function Partners() {
  const categories = [
    { icon: Settings, title: 'Garages' },
    { icon: GraduationCap, title: 'Schools' },
    { icon: Shield, title: 'Insurance Companies' },
    { icon: Building2, title: 'Spare Parts Businesses' },
    { icon: Truck, title: 'Fleet Operators' },
    { icon: Code, title: 'Technology Companies' },
    { icon: Landmark, title: 'Financial Institutions' },
    { icon: Signal, title: 'Telecommunications' },
    { icon: Users, title: 'Institutions' },
    { icon: TrendingUp, title: 'Investors' },
  ];

  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('organization') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      partnershipType: (form.elements.namedItem('partnershipType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      subject: 'Partnership Inquiry',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('idle');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormState('idle');
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Build With Aero Scan Kenya</h1>
          <p className="text-xl text-slate-400">
            Partner with us to deploy scalable digital infrastructure and integrated technology solutions.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, i) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-6 rounded-lg text-center hover:bg-slate-800 transition-colors"
              >
                <category.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="text-white font-medium text-sm">{category.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900 border border-cyan-600/20 p-8 lg:p-12 rounded-xl relative overflow-hidden">
          {formState === 'success' ? (
             <div className="absolute inset-0 bg-slate-900 z-10 flex flex-col items-center justify-center text-center p-8">
               <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mb-6">
                 <Building2 className="w-8 h-8 text-cyan-500" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Inquiry Received</h3>
               <p className="text-slate-400 mb-8 max-w-sm">Thank you for your interest in partnering with Aero Scan Kenya. Our team will review your inquiry and contact you soon.</p>
               <button 
                 onClick={() => setFormState('idle')}
                 className="px-6 py-2 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-colors"
               >
                 Submit Another Inquiry
               </button>
             </div>
           ) : null}

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Become a Partner</h2>
            <p className="text-slate-400">Fill out the form below to start the conversation.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input required id="name" name="name" type="text" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Organization</label>
                <input required id="organization" name="organization" type="text" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" placeholder="Company Name" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input required id="email" name="email" type="email" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                <input required id="phone" name="phone" type="tel" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors" placeholder="+254..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Partnership Type</label>
              <select id="partnershipType" name="partnershipType" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors appearance-none">
                {categories.map(c => <option key={c.title}>{c.title}</option>)}
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea required id="message" name="message" rows={4} className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 transition-colors resize-none" placeholder="Tell us about your organization and how we can work together..."></textarea>
            </div>
            <div className="flex justify-center">
              <button 
                disabled={formState === 'submitting'}
                type="submit" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors disabled:opacity-70"
              >
                {formState === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

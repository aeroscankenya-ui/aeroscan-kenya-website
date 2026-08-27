import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { config } from '../config';

export function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      company: (form.elements.namedItem('organization') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
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
        alert('Failed to send message. Please try again or use the email link directly.');
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's Build the Future</h1>
          <p className="text-xl text-slate-400">
            Get in touch with us to discuss partnerships, product inquiries, or general support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 border border-cyan-600/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-white font-medium block">Email</span>
                    <a href={`mailto:${config.contact.email}`} className="text-slate-400 hover:text-white transition-colors">{config.contact.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-white font-medium block">Phone</span>
                    <a href={`tel:${config.contact.phone.replace(/\s+/g, '')}`} className="text-slate-400 hover:text-white transition-colors">{config.contact.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <span className="text-white font-medium block">Location</span>
                    <span className="text-slate-400">{config.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-slate-900 border border-cyan-600/20 p-8 lg:p-12 rounded-xl relative overflow-hidden">
             {formState === 'success' ? (
               <div className="absolute inset-0 bg-slate-900 z-10 flex flex-col items-center justify-center text-center p-8">
                 <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mb-6">
                   <Send className="w-8 h-8 text-cyan-500" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">Message Sent</h3>
                 <p className="text-slate-400 mb-8 max-w-sm">Thank you for reaching out to Aero Scan Kenya. We will get back to you shortly.</p>
                 <button 
                   onClick={() => setFormState('idle')}
                   className="px-6 py-2 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                 >
                   Send Another Message
                 </button>
               </div>
             ) : null}
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input required type="text" id="name" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-400 mb-2">Organization</label>
                    <input type="text" id="organization" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" placeholder="Company Name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input required type="email" id="email" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                    <input type="tel" id="phone" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" placeholder="+254..." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-400 mb-2">Country</label>
                    <input type="text" id="country" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" placeholder="Kenya" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                    <select id="subject" className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors appearance-none">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>AutoCare</option>
                      <option>Garage Pro</option>
                      <option>SchoolConnect</option>
                      <option>Digital DocuFolio</option>
                      <option>Technology Partnership</option>
                      <option>Investor Inquiry</option>
                      <option>Support</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea required id="message" rows={5} className="w-full bg-slate-950 border border-cyan-600/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
             </form>
          </div>
        </div>

      </div>
    </div>
  );
}

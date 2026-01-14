
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Let's Talk Talent</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to scale your team or looking for your next career move? We're here to help you navigate the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Us</p>
                      <p className="text-lg font-bold text-slate-900">{COMPANY_EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Consultation</p>
                      <p className="text-lg font-bold text-slate-900">Book a 15-min discovery call</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-lg font-bold text-slate-900">India | Global Presence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber-600 p-8 rounded-2xl text-white">
                <h4 className="text-2xl font-bold mb-4">Quick Chat?</h4>
                <p className="mb-6 opacity-90">Our team typically responds within 2 business hours during IST working periods.</p>
                <a 
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="email@company.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Interested In</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all appearance-none">
                    <option>Executive Search</option>
                    <option>Staff Augmentation</option>
                    <option>Tech Recruitment</option>
                    <option>Career Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your requirements..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all flex items-center justify-center group">
                  Send Inquiry
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

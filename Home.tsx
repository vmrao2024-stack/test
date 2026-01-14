
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, TrendingUp, Award, Zap } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-50 rounded-bl-[200px] -z-10 hidden lg:block" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-xs font-bold mb-6 tracking-wider uppercase">
                <Star size={14} fill="currentColor" />
                <span>India's Premium Executive Search Firm</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                Unlocking <span className="text-amber-600">Extraordinary</span> Leadership Talent.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We bridge the gap between world-class companies and the top 1% of leadership talent across Tech, Product, GTM, and Finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-all text-center flex items-center justify-center group shadow-xl hover:shadow-amber-200">
                  Hire Elite Talent
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center">
                  Explore Solutions
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Placements</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">22+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Years Exp</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Retention</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Boardroom Meeting" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px] border-l-4 border-amber-600 animate-bounce-subtle">
                <div className="flex items-center space-x-2 text-amber-600 mb-2">
                  <TrendingUp size={20} />
                  <span className="font-bold text-lg">Growth</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Empowering startups to unicorns with strategic GTM hires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Focus Areas</h2>
            <p className="text-slate-600 text-lg">
              We specialize in end-to-end talent acquisition—partnering with clients across industries including Technology, BFSI, Digital Marketing, and Healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className="p-10 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-amber-600 font-bold flex items-center group/link">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
           <svg width="400" height="400" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
           </svg>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Strategic Hires Matter</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-2 rounded-lg text-amber-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Deep Domain Expertise</h4>
                    <p className="text-slate-400">Our deep domain knowledge, agile approach, and custom sourcing strategies allow us to consistently deliver high-impact candidates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-2 rounded-lg text-amber-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Leadership-First Philosophy</h4>
                    <p className="text-slate-400">From early-stage teams for venture-backed startups to leadership talent for Fortune 500 firms.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-2 rounded-lg text-amber-500">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Result Oriented</h4>
                    <p className="text-slate-400">We don't just fill roles; we build teams that drive enterprise-level transformation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl relative">
              <blockquote className="text-2xl font-serif italic text-slate-200 mb-8 leading-relaxed">
                "Aditya Consulting didn't just find us a candidate; they found us the leader who redefined our product roadmap. Their understanding of the Indian tech ecosystem is unparalleled."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img src="https://picsum.photos/seed/ceo/64/64" alt="Testimonial" className="w-12 h-12 rounded-full border-2 border-amber-600" />
                <div>
                  <p className="font-bold text-white">Sandeep Reddy</p>
                  <p className="text-amber-500 text-sm">CTO, Global FinTech Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Team?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Partner with us to build high-performing teams with precision and care. Let us take hiring off your plate.
          </p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
            Schedule a Consultation
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-amber-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Industries We Serve</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From Fortune 500 giants to high-growth unicorns, we provide industry-specific talent solutions that drive innovation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-96 rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed px-2">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-bold mb-8">Niche Technical Expertise</h2>
             <div className="grid grid-cols-2 gap-6">
               <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-lg mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-slate-400">AWS, Azure, Kubernetes, Infrastructure as Code specialists.</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-lg mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-slate-400">LLM experts, Data Scientists, and AI Engineering leaders.</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-lg mb-2">Cybersecurity</h4>
                  <p className="text-sm text-slate-400">GRC specialists, SecOps, and CISO level leadership.</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-amber-600">
                  <h4 className="font-bold text-lg mb-2">Product & GTM</h4>
                  <p className="text-sm text-slate-400">Head of Growth, VP Product, and Strategic Sales experts.</p>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="bg-amber-600 p-12 rounded-3xl relative z-10">
                <h3 className="text-3xl font-bold mb-6">Global Reach, Local Depth</h3>
                <p className="text-lg leading-relaxed mb-8 text-white/90">
                  While headquartered in India, our sourcing network spans North America, EMEA, and SEA. We understand the nuances of building distributed global teams.
                </p>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">
                  View Case Studies
                </button>
             </div>
             <div className="absolute top-10 -left-10 w-full h-full bg-slate-800 rounded-3xl -z-10" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

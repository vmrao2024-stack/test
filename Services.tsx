
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Strategic Talent Solutions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Customized hiring frameworks designed to solve complex personnel bottlenecks for global enterprises and startups alike.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex p-4 bg-amber-100 text-amber-600 rounded-2xl mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                        <CheckCircle className="text-amber-600 w-5 h-5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-600 transition-all">
                    Consult with our Experts
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="rounded-3xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
                    />
                    <div className="absolute -top-6 -right-6 w-full h-full border-2 border-amber-200 rounded-3xl -z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Methodology</h2>
            <p className="text-slate-600">How we deliver consistent, high-impact results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analyze", desc: "Deep diving into your team culture and project needs." },
              { step: "02", title: "Identify", desc: "Global sourcing via AI-driven and network-based channels." },
              { step: "03", title: "Screen", desc: "Rigorous behavioral and technical evaluation phases." },
              { step: "04", title: "Deliver", desc: "Seamless onboarding and post-placement support." }
            ].map((m, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
                <span className="text-amber-600 font-bold text-3xl mb-4 block">{m.step}</span>
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

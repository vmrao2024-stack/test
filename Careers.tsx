
import React from 'react';
import { Briefcase, Heart, Smile, Coffee, Zap } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Join the Elite Team</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are always looking for ambitious recruiters, domain experts, and relationship managers who want to build the future of work.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
             <div>
                <h2 className="text-4xl font-bold mb-8">Our Culture</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  At Aditya Consulting, we value autonomy, high performance, and continuous learning. You'll work with the brightest minds in the recruitment industry and partner with top-tier founders.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Heart className="text-amber-600" />
                    <span className="font-bold text-slate-800">Employee-First Approach</span>
                  </div>
                   <div className="flex items-center space-x-4">
                    <Zap className="text-amber-600" />
                    <span className="font-bold text-slate-800">Meritocratic Growth</span>
                  </div>
                   <div className="flex items-center space-x-4">
                    <Coffee className="text-amber-600" />
                    <span className="font-bold text-slate-800">Flexible Work Arrangements</span>
                  </div>
                </div>
             </div>
             <div>
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Workplace" className="rounded-3xl shadow-2xl" />
             </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-3xl">
             <div className="text-center mb-12">
                <h3 className="text-3xl font-bold">Open Roles</h3>
                <p className="text-slate-400">Come build with us.</p>
             </div>
             <div className="space-y-6">
               {[
                 { title: "Senior Executive Recruiter", type: "Full-Time", loc: "Remote / India" },
                 { title: "Technical Sourcing Lead", type: "Full-Time", loc: "Bangalore" },
                 { title: "GTM Relationship Manager", type: "Full-Time", loc: "Mumbai" },
                 { title: "Content Strategist (SEO)", type: "Contract", loc: "Remote" }
               ].map((job, i) => (
                 <div key={i} className="group flex flex-col md:flex-row justify-between items-center bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-all border border-slate-700 cursor-pointer">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold mb-1">{job.title}</h4>
                      <p className="text-sm text-slate-400">{job.type} • {job.loc}</p>
                    </div>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-all">
                      Apply Now
                    </button>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

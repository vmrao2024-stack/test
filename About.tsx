
import React from 'react';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">Our Story</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Aditya Consulting was founded on a simple yet powerful mission: Connect great companies with great people—quickly, effectively, and at scale.
          </p>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                    <Target size={28} />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To be the premier talent partner for product-led, high-growth venture-backed startups and global enterprises. We eliminate hiring friction to allow leadership teams to focus on what they do best: building products.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                    <Eye size={28} />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To redefine recruitment by blending technology-driven insights with human empathy, creating a seamless hiring ecosystem that benefits both candidates and companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-slate-400">The principles that guide every placement we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Excellence", 
                desc: "We pursue the highest standards in every search, ensuring only the top 1% of talent reaches our clients.",
                icon: <Target className="w-8 h-8" />
              },
              { 
                title: "Transparency", 
                desc: "Open communication is our bedrock. We provide real-time updates and honest feedback at every stage.",
                icon: <Heart className="w-8 h-8" />
              },
              { 
                title: "Integrity", 
                desc: "We value the trust placed in us and maintain strict confidentiality and ethics in all our dealings.",
                icon: <Shield className="w-8 h-8" />
              }
            ].map((v, i) => (
              <div key={i} className="bg-slate-800 p-10 rounded-2xl hover:border-amber-600 border border-transparent transition-all">
                <div className="text-amber-500 mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The State of Tech Hiring in India: 2025 Outlook",
      excerpt: "Analyzing the shift toward deep-tech expertise and the impact of AI on the recruitment landscape.",
      category: "Market Insights",
      date: "Jan 12, 2025",
      image: "https://picsum.photos/seed/blog1/800/600"
    },
    {
      title: "How to Secure Your First Unicorn CXO Role",
      excerpt: "Strategic advice for senior leaders transition from corporate giants to high-growth startups.",
      category: "Leadership",
      date: "Dec 28, 2024",
      image: "https://picsum.photos/seed/blog2/800/600"
    },
    {
      title: "Why Staff Augmentation is the Future of Agility",
      excerpt: "Reducing overhead and accelerating time-to-market through elastic engineering teams.",
      category: "Recruitment Strategy",
      date: "Dec 15, 2024",
      image: "https://picsum.photos/seed/blog3/800/600"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Insights & Intelligence</h1>
              <p className="text-xl text-slate-600">Thought leadership for modern HR heads and founders.</p>
            </div>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-amber-600 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg h-64">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex items-center space-x-4 mb-3">
                   <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{post.category}</span>
                   <div className="w-1 h-1 bg-slate-300 rounded-full" />
                   <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link to="/blog" className="flex items-center text-sm font-bold text-slate-900 group/link">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


import React from 'react';
import { Briefcase, Users, Zap, Globe, Shield, Target } from 'lucide-react';

export const COMPANY_NAME = "Aditya Consulting";
export const COMPANY_EMAIL = "vikas@adityaconsulting.net";
export const COMPANY_LOCATION = "India | Global";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: "executive-search",
    title: "Executive Search",
    description: "Finding visionary leaders to steer your organization toward long-term success through a meticulous, research-driven approach.",
    icon: <Users className="w-8 h-8 text-amber-600" />,
    outcomes: ["CxO Level Appointments", "Strategic Leadership Pipeline", "Board-Level Advisory"],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    description: "Flexible talent solutions that scale with your project needs, providing niche expertise exactly when it matters most.",
    icon: <Zap className="w-8 h-8 text-amber-600" />,
    outcomes: ["Rapid Team Scaling", "Specialized Tech Expertise", "Cost-Efficient Resourcing"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "tech-recruitment",
    title: "Technology Recruitment",
    description: "Specialized hiring for high-growth tech firms across software development, cloud infrastructure, and cybersecurity.",
    icon: <Briefcase className="w-8 h-8 text-amber-600" />,
    outcomes: ["Qualified Engineering Talent", "Reduced Time-to-Hire", "Domain-Specific Matching"],
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const INDUSTRIES = [
  {
    name: "Information Technology",
    description: "From SaaS giants to deep-tech startups, we fuel the digital revolution.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "FinTech & Banking",
    description: "Navigating the complexities of digital finance and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "E-commerce & Retail",
    description: "Building the logistics and platforms that drive modern global trade.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  }
];

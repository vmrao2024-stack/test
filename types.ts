
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string | React.ReactNode;
  outcomes: string[];
  imageUrl: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
}

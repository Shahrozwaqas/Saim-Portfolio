
export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface ServiceDeepDiveItem {
  label: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  shortDescription: string;
  image: string;
  tags: string[];
  year: number;
  featured: boolean;
  behanceUrl?: string;
  videoUrl?: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  bio: string[];
  approach: string;
  heroImage: string;
  aboutImage: string;
  socialLinks: {
    linkedin?: string;
    behance?: string;
    instagram?: string;
  };
}

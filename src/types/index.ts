export interface Skill {
  id: string;
  name: string;
  icon: string;
  description: string;
  proficiency: number;
  category: 'programming' | 'web' | 'tools' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  project: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  university: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
}

export type Theme = 'dark' | 'light';

export interface AppState {
  theme: Theme;
  activeSection: string;
  isLoading: boolean;
  isMobileMenuOpen: boolean;
}
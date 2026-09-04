export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  videoUrl?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'frontend' | 'fullstack' | 'ml-ai' | '3d-webgl';
  categoryLabel?: string;
  role?: string;
  primaryRuntime?: string;
  databaseCloud?: string;
  highlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | '3d-creative' | 'ml-ai';
  level: number; // 0 to 100
  icon?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

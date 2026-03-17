export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number; // 0-100
  category: string;
}

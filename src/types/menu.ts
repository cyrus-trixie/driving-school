
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  items: MenuItem[];
}

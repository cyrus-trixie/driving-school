
import React from 'react';
import { MenuCategory } from '../types/menu';

interface CategoryNavigationProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNavigation = ({ categories, activeCategory, onCategoryChange }: CategoryNavigationProps) => {
  return (
    <nav className="bg-gray-50 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(({ id, title, icon: IconComponent }) => (
            <button
              key={id}
              onClick={() => onCategoryChange(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === id
                  ? "bg-red-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-500 shadow-sm"
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{title}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavigation;

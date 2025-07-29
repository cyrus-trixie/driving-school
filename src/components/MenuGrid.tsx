
import React from 'react';
import MenuItem from './MenuItem';
import { MenuCategory } from '../types/menu';

interface MenuGridProps {
  category: MenuCategory;
  favorites: Set<string>;
  onToggleFavorite: (itemName: string) => void;
}

const MenuGrid = ({ category, favorites, onToggleFavorite }: MenuGridProps) => {
  return (
    <main className="container mx-auto px-6 py-12">
      {/* Category Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <category.icon className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {category.title}
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            categoryGradient={category.gradient}
            categoryIcon={category.icon}
            index={index}
            isFavorite={favorites.has(item.name)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </main>
  );
};

export default MenuGrid;

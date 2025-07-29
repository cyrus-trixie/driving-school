
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
  categoryGradient: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (itemName: string) => void;
}

const MenuItem = ({ 
  item, 
  categoryIcon: CategoryIcon, 
  index, 
  isFavorite, 
  onToggleFavorite 
}: MenuItemProps) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeIn 0.6s ease-out forwards'
      }}
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>FEATURED</span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(item.name)}
          className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite
                ? 'text-red-500 fill-current'
                : 'text-gray-400 hover:text-red-500'
            }`}
          />
        </button>

        {/* Image or Icon */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `/placeholder-food.jpg`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CategoryIcon className="w-16 h-16 text-red-300" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-red-500">
            {item.price}
          </div>
          
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-colors flex items-center space-x-2 shadow-md hover:shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

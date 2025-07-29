
import React from 'react';
import { ChefHat } from 'lucide-react';

const MenuHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-red-500 p-3 rounded-full">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              BigBites Pork
            </h1>
            <p className="text-red-500 font-medium">Premium Pork Specialties</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;

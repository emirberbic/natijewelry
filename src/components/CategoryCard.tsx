import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/shop/${category.slug}`} 
      className="block group relative overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-40">
        <h3 className="text-white text-2xl font-serif font-medium tracking-wide">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
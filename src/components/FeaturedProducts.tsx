import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-3">
              Featured Collection
            </h2>
            <p className="text-secondary-light max-w-xl">
              Explore our carefully selected pieces, each crafted with precision and passion.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="flex items-center mt-6 md:mt-0 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
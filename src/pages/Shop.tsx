import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Shop: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gray-100 py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-medium">All Products</h1>
          <p className="text-secondary-light mt-2">Discover our handcrafted jewelry collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">Showing all {featuredProducts.length} results</p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="flex items-center text-secondary hover:text-primary transition-colors">
              <Filter size={18} className="mr-2" />
              <span>Filter</span>
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-gray-500">Sort by:</span>
              <select className="border border-gray-300 py-2 px-3 focus:outline-none focus:border-primary">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex">
            <a href="#" className="bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="bg-primary text-white border border-primary px-4 py-2 text-sm font-medium">
              1
            </a>
            <a href="#" className="bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              2
            </a>
            <a href="#" className="bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              3
            </a>
            <a href="#" className="bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
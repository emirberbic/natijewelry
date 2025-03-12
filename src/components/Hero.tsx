import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-43dbd9c0d04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Elegant jewelry pieces" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-white leading-tight mb-6">
              Elegant Jewelry for Every Occasion
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              Discover handcrafted pieces that tell your unique story.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Collection
              </Link>
              <Link to="/about" className="btn-secondary text-white border-white hover:bg-white/10">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import Spline from '@splinetool/react-spline';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen">
        <Spline 
          className="absolute inset-0 w-full h-full object-cover"
          scene="https://prod.spline.design/s7tYGvdY8YdC1E6y/scene.splinecode" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
                <a href="/shop" className="btn-primary">
                  Shop Collection
                </a>
                <a href="/about" className="btn-secondary text-white border-white hover:bg-white/10">
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <Categories />
      <About />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
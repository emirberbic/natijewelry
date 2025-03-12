import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1616707906746-e7e5ea08c5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Jewelry crafting" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Crafting Stories Through Jewelry
            </h2>
            <p className="text-secondary-light mb-6 leading-relaxed">
              At Nati Jewelry, we believe that every piece of jewelry tells a story. Our passion for craftsmanship and attention to detail is evident in each handcrafted creation. We source only the finest materials, ensuring that our jewelry not only looks beautiful but stands the test of time.
            </p>
            <p className="text-secondary-light mb-8 leading-relaxed">
              Founded in 2022, our mission is to create timeless pieces that celebrate life's special moments and become cherished heirlooms. Each design is thoughtfully created to enhance your natural beauty and reflect your unique story.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
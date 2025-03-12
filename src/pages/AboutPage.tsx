import React from 'react';
import Newsletter from '../components/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gray-100 py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Our Story</h1>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Discover the passion and craftsmanship behind Nati Jewelry.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Our founder" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-medium mb-6">
              Where Passion Meets Craftsmanship
            </h2>
            <p className="text-secondary-light mb-4 leading-relaxed">
              Nati Jewelry was born from a lifelong passion for art and design. Our founder, Natalia, began creating jewelry in her small studio apartment, crafting pieces that reflected her unique aesthetic and attention to detail.
            </p>
            <p className="text-secondary-light mb-4 leading-relaxed">
              What started as a creative outlet quickly blossomed into a thriving business as friends, family, and then customers fell in love with her handcrafted creations. Today, Nati Jewelry continues to grow while maintaining the same dedication to quality and artistry that inspired its beginning.
            </p>
            <p className="text-secondary-light leading-relaxed">
              Each piece is still designed with intention and made with care, ensuring that when you wear Nati Jewelry, you're wearing something truly special.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-medium mb-6">
            Our Mission
          </h2>
          <p className="text-secondary-light mb-8 leading-relaxed text-lg">
            At Nati Jewelry, we believe that jewelry is more than just an accessory—it's a form of self-expression and a keeper of memories. Our mission is to create timeless, high-quality pieces that become part of your story and can be cherished for generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-serif font-medium mb-3">Quality</h3>
              <p className="text-secondary-light">
                We use only the finest materials and maintain rigorous standards in our craftsmanship.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-serif font-medium mb-3">Sustainability</h3>
              <p className="text-secondary-light">
                We are committed to ethical sourcing and environmentally responsible practices.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-serif font-medium mb-3">Artistry</h3>
              <p className="text-secondary-light">
                Each piece is thoughtfully designed to be both beautiful and meaningful.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 md:p-12 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4">
                Our Craft
              </h2>
              <p className="text-secondary-light mb-4 leading-relaxed">
                From initial sketches to final polish, each Nati Jewelry piece goes through a meticulous process to ensure exceptional quality. Our team of skilled artisans combines traditional techniques with modern innovation, resulting in jewelry that is as durable as it is beautiful.
              </p>
              <p className="text-secondary-light leading-relaxed">
                We take pride in creating pieces that are not mass-produced but carefully crafted with attention to every detail. This commitment to craftsmanship means that when you purchase from Nati Jewelry, you're getting something truly special.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Jewelry crafting" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default AboutPage;
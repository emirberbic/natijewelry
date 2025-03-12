import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // For header background change
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For logo rotation
      if (requestIdRef.current) return;
      
      requestIdRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - lastScrollY.current;
        
        // Adjust rotation speed based on scroll speed
        const rotationSpeed = scrollDifference * 0.3;
        
        // Update rotation
        setRotation(prev => (prev + rotationSpeed) % 360);
        
        lastScrollY.current = currentScrollY;
        requestIdRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with rotation */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold text-primary logo-rotation"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s ease-out',
              display: 'inline-block'
            }}
          >
            Nati Jewelry
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-secondary hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-secondary hover:text-primary transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-secondary hover:text-primary transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-secondary" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 text-center">
              <Link to="/" className="nav-link text-xl" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/shop" className="nav-link text-xl" onClick={() => setIsOpen(false)}>
                Shop
              </Link>
              <Link to="/collections" className="nav-link text-xl" onClick={() => setIsOpen(false)}>
                Collections
              </Link>
              <Link to="/about" className="nav-link text-xl" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="nav-link text-xl" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
            <div className="flex justify-center space-x-8 mt-8">
              <button className="text-secondary hover:text-primary transition-colors">
                <Search size={24} />
              </button>
              <Link to="/account" className="text-secondary hover:text-primary transition-colors">
                <User size={24} />
              </Link>
              <Link to="/cart" className="text-secondary hover:text-primary transition-colors relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import React, { useEffect, useRef, useState } from 'react';

const RotatingLogo: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const requestIdRef = useRef<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
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
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className="fixed top-4 left-4 z-50 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
        <span className="text-primary text-xs md:text-sm font-serif font-bold tracking-tight leading-none text-center">
          Nati<br />Jewelry
        </span>
      </div>
    </div>
  );
};

export default RotatingLogo;
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img"
        />
      </div>
      {product.new && (
        <span className="inline-block bg-primary text-white text-xs uppercase px-2 py-1 mb-2">
          New
        </span>
      )}
      <h3 className="text-lg font-medium text-secondary mb-1">{product.name}</h3>
      <p className="text-primary font-medium">${product.price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;
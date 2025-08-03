import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;

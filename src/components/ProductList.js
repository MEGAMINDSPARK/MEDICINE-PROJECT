import React from 'react';
import { useInventory } from '../context/InventoryContext';

const ProductList = () => {
  const { products, addToCart } = useInventory();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => (
        <div key={index}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

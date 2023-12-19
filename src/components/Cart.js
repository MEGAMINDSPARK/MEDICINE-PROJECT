import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import '../styles/styles.css'; // Import CSS file

const Cart = () => {
  const { cart, clearCart, generateBill } = useInventory();
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleGenerateBill = () => {
    generateBill();
  };

  return (
    <div>
      <button className="cart-btn" onClick={handleToggleOptions}>Cart</button>
      {showOptions && (
        <div>
          {cart.length > 0 ? (
            <div>
              {cart.map((product, index) => (
                <div key={index}>
                  <p>Name: {product.name}</p>
                  <p>Description: {product.description}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: {product.price}</p>
                </div>
              ))}
              <button className="cart-btn" onClick={handleClearCart}>Clear Cart</button>
              <button className="cart-btn" onClick={handleGenerateBill}>Generate Bill</button>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const generateBill = () => {
    // Logic to generate bill
    console.log('Generating Bill...');
  };

  return (
    <InventoryContext.Provider
      value={{
        products,
        cart,
        addProduct,
        addToCart,
        clearCart,
        generateBill,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

const useInventory = () => {
  return useContext(InventoryContext);
};

export { InventoryProvider, useInventory };

import React from 'react';
import { InventoryProvider } from './context/InventoryContext';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/styles.css'; // Import CSS file

const App = () => {
  return (
    <InventoryProvider>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Cart />
      </div>
      <div>
        <h1>DRUG POINT</h1>
        <h4>KANKARBAGH PATNA </h4>

        <AddProductForm />
        <ProductList />
      </div>
    </InventoryProvider>
  );
};

export default App;

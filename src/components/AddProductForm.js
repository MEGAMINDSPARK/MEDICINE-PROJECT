import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';
import '../styles/styles.css'; // Import CSS file

const AddProductForm = () => {
  const { addProduct } = useInventory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    const newProduct = {
      name,
      description,
      quantity,
      price,
    };
    addProduct(newProduct);
    setName('');
    setDescription('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <div className="add-product-form">
      <h2>ADD MEDICINE</h2>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="quantity">Quantity:</label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProductForm;

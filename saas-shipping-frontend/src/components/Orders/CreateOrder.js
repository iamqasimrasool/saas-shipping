import React, { useState } from 'react';
import { createOrder } from '../../services/api';

const CreateOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [status, setStatus] = useState('pending');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    createOrder({
      orderNumber,
      status,
      UserId: 1, // Example user ID, replace with actual user ID
      ClientId: 1 // Example client ID, replace with actual client ID
    })
      .then(data => {
        setMessage('Order created successfully');
      })
      .catch(error => {
        setMessage('Error creating order');
      });
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Order Number:</label>
          <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} required />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
        <button type="submit">Create Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateOrder;

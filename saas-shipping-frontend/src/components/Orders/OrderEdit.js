import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById, updateOrder } from '../../services/api';

const OrderEdit = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const data = await fetchOrderById(orderId);
        setOrder(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order:', error);
        setLoading(false);
      }
    };

    getOrder();
  }, [orderId]);

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateOrder(orderId, order);
      // Redirect to order list or show success message
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  if (loading) {
    return <p>Loading order...</p>;
  }

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="orderNumber" className="form-label">Order Number</label>
          <input
            type="text"
            className="form-control"
            id="orderNumber"
            name="orderNumber"
            value={order.orderNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={order.status}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Order</button>
      </form>
    </div>
  );
};

export default OrderEdit;

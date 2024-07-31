import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../../services/api';

const OrderView = () => {
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

  if (loading) {
    return <p>Loading order...</p>;
  }

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Order Number: {order.orderNumber}</p>
      <p>Status: {order.status}</p>
      {/* Add more order details as needed */}
    </div>
  );
};

export default OrderView;

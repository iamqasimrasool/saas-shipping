import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../services/api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>{order.orderNumber}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;

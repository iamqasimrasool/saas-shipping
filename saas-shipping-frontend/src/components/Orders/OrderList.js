import React, { useEffect, useState } from 'react';
import { fetchOrders, deleteOrder } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleView = (orderId) => {
    // Navigate to the view order page with orderId
    navigate(`/orders/${orderId}`);
  };

  const handleEdit = (orderId) => {
    // Navigate to the edit order page with orderId
    navigate(`/orders/edit/${orderId}`);
  };

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (!orders.length) {
    return <p>No orders found</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Order List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderNumber}</td>
              <td>{order.status}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleView(order.id)}>View</button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(order.id)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import CreateOrder from './components/Orders/CreateOrder';
import OrderList from './components/Orders/OrderList';
import ClientList from './components/Clients/ClientList';
import UserList from './components/Users/UserList';
import OrderView from './components/Orders/OrderView';  // Add this import
import OrderEdit from './components/Orders/OrderEdit';  // Add this import
import Navbar from './components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onSignIn={handleSignIn} />} />
        <Route path="/create-order" element={isAuthenticated ? <CreateOrder /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <OrderList /> : <Navigate to="/login" />} />
        <Route path="/clients" element={isAuthenticated ? <ClientList /> : <Navigate to="/login" />} />
        <Route path="/users" element={isAuthenticated ? <UserList /> : <Navigate to="/login" />} />
        <Route path="/orders/:orderId" element={<OrderView />} />
        <Route path="/orders/edit/:orderId" element={<OrderEdit />} />		
      </Routes>
    </Router>
  );
};

export default App;

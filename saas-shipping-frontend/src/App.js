import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import CreateOrder from './components/Orders/CreateOrder';
import OrderList from './components/Orders/OrderList';
import ClientList from './components/Clients/ClientList';
import UserList from './components/Users/UserList';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {!isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/signup">Signup</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                        )}
                        {isAuthenticated && (
                            <>
                                <li>
                                    <Link to="/create-order">Create Order</Link>
                                </li>
                                <li>
                                    <Link to="/order-list">Order List</Link>
                                </li>
                                <li>
                                    <Link to="/client-list">Client List</Link>
                                </li>
                                <li>
                                    <Link to="/user-list">User List</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route
                        path="/create-order"
                        element={isAuthenticated ? <CreateOrder /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/order-list"
                        element={isAuthenticated ? <OrderList /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/client-list"
                        element={isAuthenticated ? <ClientList /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/user-list"
                        element={isAuthenticated ? <UserList /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/"
                        element={<Navigate to={isAuthenticated ? "/order-list" : "/login"} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

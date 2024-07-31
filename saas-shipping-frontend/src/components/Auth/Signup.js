import React, { useState } from 'react';
import { signup } from '../../services/api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clientId, setClientId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, clientId);
      setMessage('Signup successful');
    } catch (error) {
      setMessage('Signup failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Client ID</label>
          <input
            type="text"
            className="form-control"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        {message && <p className="mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;

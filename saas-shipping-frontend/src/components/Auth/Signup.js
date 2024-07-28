import React, { useState } from 'react';
import { signup } from '../../services/api';

function Signup({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clientId, setClientId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password, clientId);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} placeholder="Client ID" required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;

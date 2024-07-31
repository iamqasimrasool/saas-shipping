import React, { useState } from 'react';
import { createOrder } from '../../services/api';

const CreateOrder = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [status, setStatus] = useState('pending');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createOrder({ orderNumber, status });
            setMessage('Order created successfully');
            setOrderNumber('');
            setStatus('pending');
        } catch (err) {
            setError('Error creating order');
        }
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={orderNumber} 
                    onChange={(e) => setOrderNumber(e.target.value)} 
                    placeholder="Order Number" 
                    required 
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                <button type="submit">Create Order</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateOrder;

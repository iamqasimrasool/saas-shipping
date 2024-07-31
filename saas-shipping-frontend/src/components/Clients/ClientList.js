import React, { useState, useEffect } from 'react';
import { fetchClients } from '../../services/api';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getClients = async () => {
            try {
                const data = await fetchClients();
                setClients(data);
            } catch (err) {
                setError('Error fetching clients');
            }
        };
        getClients();
    }, []);

    return (
        <div>
            <h2>Client List</h2>
            {error && <p>{error}</p>}
            {clients.length > 0 ? (
                <ul>
                    {clients.map((client) => (
                        <li key={client.id}>{client.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No clients found</p>
            )}
        </div>
    );
};

export default ClientList;

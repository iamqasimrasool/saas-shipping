import React, { useEffect, useState } from 'react';
import { fetchClients } from '../../services/api';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients()
      .then(data => {
        setClients(data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  return (
    <div>
      <h2>Client List</h2>
      {clients.length > 0 ? (
        <ul>
          {clients.map(client => (
            <li key={client.id}>
              {client.clientName} - {client.clientEmail}
            </li>
          ))}
        </ul>
      ) : (
        <p>No clients found</p>
      )}
    </div>
  );
};

export default ClientList;

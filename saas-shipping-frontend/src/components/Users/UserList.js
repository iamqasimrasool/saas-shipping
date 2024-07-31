import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError('Error fetching users');
            }
        };
        getUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {error && <p>{error}</p>}
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.email}</li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default UserList;

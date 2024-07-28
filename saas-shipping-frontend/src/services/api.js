import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const signup = async (email, password, clientId) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
    email,
    password,
    ClientId: clientId,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const fetchOrders = async () => {
  const response = await axios.get(`${API_BASE_URL}/orders`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const fetchClients = async () => {
  const response = await axios.get(`${API_BASE_URL}/clients`);
  return response.data;
};

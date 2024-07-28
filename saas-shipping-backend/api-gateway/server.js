const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors'); // Import cors

const app = express();

app.use(cors()); // Use cors middleware

// Auth service
app.use('/auth', createProxyMiddleware({ 
    target: 'http://localhost:3001', 
    changeOrigin: true 
}));

// User service
app.use('/users', createProxyMiddleware({ 
    target: 'http://localhost:3002', 
    changeOrigin: true 
}));

// Order service
app.use('/orders', createProxyMiddleware({ 
    target: 'http://localhost:3003', 
    changeOrigin: true 
}));

// Client service
app.use('/clients', createProxyMiddleware({ 
    target: 'http://localhost:3004', 
    changeOrigin: true 
}));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

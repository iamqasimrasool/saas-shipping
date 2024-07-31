const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use(cors());

app.use('/api/auth', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true, logLevel: 'debug' }));
app.use('/api/users', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true, logLevel: 'debug' }));
app.use('/api/orders', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true, logLevel: 'debug' }));
app.use('/api/clients', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true, logLevel: 'debug' }));

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});

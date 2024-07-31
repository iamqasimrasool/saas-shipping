const express = require('express');
const router = express.Router();
const { getOrderById, getAllOrders, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

router.get('/:Id', getOrderById);
router.get('/', getAllOrders);
router.post('/', createOrder);
router.put('/:Id', updateOrder);
router.delete('/:Id', deleteOrder);

module.exports = router;

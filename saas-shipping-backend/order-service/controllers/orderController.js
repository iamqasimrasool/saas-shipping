const Order = require('../models/order');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      orderNumber: req.body.orderNumber,
      status: req.body.status,
      UserId: req.body.UserId,
      ClientId: req.body.ClientId
    });
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

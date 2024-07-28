// client-service/controllers/clientController.js
const Client = require('../models/client');

exports.createClient = async (req, res) => {
    const { name } = req.body;

    try {
        const newClient = await Client.create({ name });
        res.status(201).json(newClient);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(500).json({ message: 'Error creating client', error });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        console.error('Error fetching clients:', error);
        res.status(500).json({ message: 'Error fetching clients', error });
    }
};

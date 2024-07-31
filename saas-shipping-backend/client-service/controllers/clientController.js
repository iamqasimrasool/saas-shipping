const Client = require('../models/client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clients', error });
    }
};

exports.createClient = async (req, res) => {
    try {
        const { name } = req.body;
        const newClient = await Client.create({ name });
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ message: 'Error creating client', error });
    }
};

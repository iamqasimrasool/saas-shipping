// user-service/controllers/userController.js
const User = require('../models/user');

exports.createUser = async (req, res) => {
    const { email, password, ClientId } = req.body;

    try {
        const newUser = await User.create({ email, password, ClientId });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

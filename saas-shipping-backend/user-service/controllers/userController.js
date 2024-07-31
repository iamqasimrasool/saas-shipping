const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Get Users Error:', error);
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

exports.createUser = async (req, res) => {
    const { email, password, ClientId } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ email, password: hashedPassword, ClientId });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Create User Error:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

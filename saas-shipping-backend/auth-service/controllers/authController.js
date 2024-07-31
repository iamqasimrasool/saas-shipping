const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const axios = require('axios');

exports.signup = async (req, res) => {
    const { email, password, ClientId } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ email, password: hashedPassword });

        await axios.post('http://localhost:3002/api/users', {
            email,
            password: hashedPassword,
            ClientId
        });

        const token = jwt.sign({ id: newUser.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.error('Login Error: User not found');
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};

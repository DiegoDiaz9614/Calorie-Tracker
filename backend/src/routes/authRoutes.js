import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

//register
router.post('/register', async (req, res) => {
    try{
        const { email, password } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User ({email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: 'User created successfully'});
    } catch(error) {
        res.status(500).json({message: 'Internal  error'});
    }
})

//Login
router.post('/login', async (req, res) => {
  try {
    const { email,password } = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message: 'Email or password is incorrect'});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: 'Email or password is incorrect'});

    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debug secret

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '7D'});
    res.json({ token });
  } catch(err) {
    console.error('Login error:', err);  // Log full error to console
    res.status(500).json({message: 'server error'});
  }
});

export default router;
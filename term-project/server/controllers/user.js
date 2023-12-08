import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: 'User does not exist', status: false })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid credentials', status: false })
        }
        req.session.user = user;
        res.status(200).json({ message: 'Login successful', status: true })
    } catch (error) {
        res.status(500).json({ message: error.message, status: false })
    }
})

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ message: 'User already exists', status: false })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully', status: true })
    } catch (error) {
        res.status(500).json({ message: error.message, status: false })
    }
})

export const updateProfile = asyncHandler(async (req, res) => {
    const { name, email, id } = req.body;

    try {
        const user = await User.findById(id)
        if (!user) {
            res.status(400).json({ message: 'User does not exist', status: false })
        }

        user.name = name || user.name;
        user.email = email || user.email;

        await user.save()
        res.status(201).json({ message: 'User updated successfully', status: true })
    } catch (error) {
        res.status(500).json({ message: error.message, status: false })
    }
})

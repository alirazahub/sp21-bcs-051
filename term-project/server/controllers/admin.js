import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs'

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Admin.findOne({ email })
        if (!user) {
            res.status(400).json({ message: 'Admin does not exist', status: false })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid credentials', status: false })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
        res.cookie('x-auth-admin', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
        res.status(200).json({ message: 'Login successful', token, status: true })
    } catch (error) {
        res.status(500).json({ message: error.message, status: false })
    }
})
export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await Admin.findOne({ email })
        if (user) {
            res.status(400).json({ message: 'Admin already exists', status: false })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await Admin.create({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: 'Admin created successfully', status: true })
    } catch (error) {
        res.status(500).json({ message: error.message, status: false })
    }
})

export const verify = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.admin.id)
    if (admin) {
        res.status(200).json({ admin, success: true })
    }
    else {
        res.status(401).json({ message: "Invalid Admin Data!" })
    }
})
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        
    } catch (error) {
        
    }
})
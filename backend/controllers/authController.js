import User from '../models/User.js';
import Otp from '../models/Otp.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import sendEmail from '../utils/sendEmail.js';

// Generate JWT
const generateToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin, status: user.status },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

export const signup = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });
    await User.create({ name, email, password, isAdmin });
    res.status(201).json("User created successfully");
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    if (user.status === "inactive") {
      const userStatus = await User.updateOne({ _id: user._id }, { status: 'active' });
      if (!userStatus) {
        return res.status(400).json({ message: 'Failed to activate user' });
      }
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
    });

    await sendEmail(email, 'Your OTP Code', `Your OTP is: ${otp}`);
    res.json({ message: 'OTP sent to your email' });
  } catch (err) {
    res.status(500).json({ message: 'OTP send failed', error: err.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const record = await Otp.findOne({ email, otp });

    if (!record || record.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Update user password with .updateOne() without using pre('save') middleware:
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.updateOne({ password: user.password });

    //  if you want to update the password with .save() then you will need to use the pre('save') middleware:
    // const user = await User.findOne({ email });
    // if (!user) return res.status(404).json({ message: 'User not found' });
    // user.password = newPassword; // plain password
    // await user.save(); // ✅ middleware will hash automatically

    await Otp.deleteMany({ email }); // Clean up OTPs
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'OTP verification failed', error: err.message });
  }
};

// Logout function for update status to inactive and invalidate the token
export const logout = async (req, res) => {
  const { userId } = req.body;
  try {
    // Update user status to inactive
    if (!userId) {
      return res.status(400).json({ message: 'User not authenticated' });
    }
    await User.updateOne({ _id: userId },{ status: 'inactive' });
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Logout failed', error: err.message });
  }
}


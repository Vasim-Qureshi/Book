import express from 'express';
import {
  signup,
  login,
  forgotPassword,
  verifyOtp,
  logout
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOtp);
router.put("/logout", logout);
export default router;

// src/services/authService.ts

// Define the API base URL
const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const signup = (formData: { name: string; email: string; password: string }) => {
  return fetch(`${URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const login = (formData: { email: string; password: string; status: string }) => {
  return fetch(`${URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const sendOtp = (data: { email: string }) => {
  return fetch(`${URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const verifyOtp = (data: { email: string; otp: string; newPassword: string }) => {
  return fetch(`${URL}/api/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const logout = (data: { userId: string }) => {
  return fetch(`${URL}/api/auth/logout`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: data.userId })
  });
};


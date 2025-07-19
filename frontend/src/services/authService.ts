// src/services/authService.ts
const AUTH_API = import.meta.env.VITE_API || 'http://localhost:5000/api';

export const signup = (formData: { name: string; email: string; password: string }) => {
  return fetch(`${AUTH_API}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const login = (formData: { email: string; password: string; status: string }) => {
  return fetch(`${AUTH_API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const sendOtp = (data: { email: string }) => {
  return fetch(`${AUTH_API}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const verifyOtp = (data: { email: string; otp: string; newPassword: string }) => {
  return fetch(`${AUTH_API}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const logout = (data: { userId: string }) => {
  return fetch(`${AUTH_API}/auth/logout`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: data.userId })
  });
};


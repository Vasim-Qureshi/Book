// src/services/orderService.ts
const API = import.meta.env.VITE_API || 'http://localhost:5000/api';

const token = localStorage.getItem('token');

export const placeOrderWithAddress = async (cartItems: any, total: any, delivery: any, payment: any) =>
  await fetch(`${API}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cartItems, total, delivery, payment }),
  });

export const getOrderById = async (orderId: string) =>
  await fetch(`${API}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMyOrders = async () =>
  await fetch(`${API}/orders/my-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// src/services/orderService.ts

// Define the base URL
const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

// Uncomment the following line if you want to use Vite's environment variables
// const URL = import.meta.env.VITE_URL || 'http://localhost:5000/URL';

const token = localStorage.getItem('token');

export const placeOrderWithAddress = async (cartItems: any, total: any, delivery: any, payment: any) =>
  await fetch(`${URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cartItems, total, delivery, payment }),
  });

export const getOrderById = async (orderId: string) =>
  await fetch(`${URL}/api/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMyOrders = async () =>
  await fetch(`${URL}/api/orders/my-orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });

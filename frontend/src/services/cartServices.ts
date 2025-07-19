// src/services/cartService.ts
const API = import.meta.env.VITE_API || 'http://localhost:5000/api';

const token = localStorage.getItem('token');

export const getCartItemsAPI = async () =>
  await fetch(`${API}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToCartAPI = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) =>
  await fetch(`${API}/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });

export const updateCartQuantityAPI = async (itemId: string, delta: number) =>
  await fetch(`${API}/cart/update/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ delta }),
  });

export const removeCartItemAPI = async (itemId: string) =>
  await fetch(`${API}/cart/${itemId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const clearCartAPI = async () =>
  await fetch(`${API}/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

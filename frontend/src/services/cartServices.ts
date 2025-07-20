// src/services/cartService.ts

const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const token = localStorage.getItem('token');

export const getCartItemsAPI = async () =>
  await fetch(`${URL}/api/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getCartItemByIdAPI = async (itemId: string) =>
  await fetch(`${URL}/api/cart/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  
export const addToCartAPI = async ({
  productId,
  quantity,
  userId, // Assuming you need userId for the backend
}: {
  productId: string;
  quantity: number;
  userId: string;
}) =>
  await fetch(`${URL}/api/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity, userId }),
  });

export const updateCartQuantityAPI = async (itemId: string, delta: number) =>
  await fetch(`${URL}/api/cart/update/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ delta }),
  });

export const removeCartItemAPI = async (itemId: string) =>
  await fetch(`${URL}/api/cart/${itemId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const clearCartAPI = async () =>
  await fetch(`${URL}/api/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCartItemByIdAPI } from '../services/cartServices';

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  userId: string; // Assuming you need userId for the backend
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // 👇 Fetch cart items by user ID
  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem('userId'); // Adjust key as per your app
      if (!userId) return;

      try {
        const res = await getCartItemByIdAPI(userId);
        if (!res) throw new Error('Failed to fetch cart items');
        const data = await res.json();
        setCartItems(data.cartItems || []);
        localStorage.setItem('cart', JSON.stringify(data.cartItems || []));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
    console.log('Cart items fetched:', cartItems); // Debugging line to check fetched items 
  }, []);


  return (
    <CartContext.Provider value={{ cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

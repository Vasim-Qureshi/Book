// src/context/OrderContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface OrderItem {
  title: string;
  price: number;
}

interface Order {
  _id: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  createdAt: string;
}

interface OrderContextType {
  latestOrder: Order | null;
  setLatestOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [latestOrder, setLatestOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ latestOrder, setLatestOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within an OrderProvider');
  return context;
};

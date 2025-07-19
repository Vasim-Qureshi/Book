// src/pages/ReceiptPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../services/orderServices';

const ReceiptPage: React.FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await getOrderById(id!);
      const data = await res.json();
      console.log('Fetched order data:', data);

      if (data.ok) {
        setOrder(data);
        console.log('Order data:', data);
      }
    };
    fetchOrder();
  }, [id]);
  console.log('Order state:', order);

  if (!order) return <div className="text-center mt-10">Loading receipt...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-bold text-center">Order Receipt</h2>

      <div>
        <h3 className="font-semibold">User Details</h3>
        <p>Name: {order.delivery.name}</p>
        <p>Phone: {order.delivery.phone}</p>
      </div>

      <div>
        <h3 className="font-semibold">Delivery Address</h3>
        <p>{order.delivery.street}, {order.delivery.city}, {order.delivery.state}, {order.delivery.zip}</p>
      </div>

      <div>
        <h3 className="font-semibold">Payment Details</h3>
        <p>Card ending in: ****{order.payment.cardNumber.slice(-4)}</p>
        <p>Status: Paid</p>
        <p>Amount: ₹{order.total}</p>
      </div>

      <div>
        <h3 className="font-semibold">Books Ordered</h3>
        {order.products.map((item: any, i: number) => (
          <div key={i}>
            <p>{item.productId.title} × {item.quantity} = ₹{item.productId.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptPage;

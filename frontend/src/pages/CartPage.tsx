// src/pages/CartPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { OrderProvider } from '../context/OrderContext';
import {
    getCartItemsAPI,
    updateCartQuantityAPI,
    removeCartItemAPI,
} from '../services/cartServices';


interface CartItem {
    _id: string;
    userId: {
        _id: string;
        name: string;
    };
    productId: {
        _id: string;
        title: string;
        price: number;
        imageUrl?: string;
    };
    quantity: number;
}

// console.log('Product from params:', product);

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        // setLoading(true);
        const res = await getCartItemsAPI();
        const data = await res.json();
        console.log('Fetched cart items:', data);
        
        if (res.ok) {
            setCartItems(data);
        } else {
            alert('Failed to fetch cart items.');
            setLoading(true);
        }
        setLoading(false);
    };
    
    const handleIncrease = async (itemId: string) => {
        await updateCartQuantityAPI(itemId, 1);
        fetchCart();
    };

    const handleDecrease = async (itemId: string) => {
        const item = cartItems.find((i) => i._id === itemId);
        if (item && item.quantity > 1) {
            await updateCartQuantityAPI(itemId, -1);
            fetchCart();
        } else {
            handleRemove(itemId); // remove if quantity = 1 and decrease clicked
        }
    };

    const handleRemove = async (itemId: string) => {
        await removeCartItemAPI(itemId);
        fetchCart();
    };

    // Replace handleOrderNow with handleCheckout
    const handleCheckout = () => {
        console.log('Proceeding to checkout with items:', cartItems.map(item => ({
            productId: item.productId._id,
            Id: item._id,
            user: item.userId,
            // title: item.productId.title,
            price: item.productId.price,    
            quantity: item.quantity
        })));
        navigate("/checkout", { state: { cartItems, total } }); // Pass cart items and total to checkout
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.quantity * item.productId.price,
        0
    );

    if (loading) return <div className="text-center mt-10">Loading cart...</div>;

    if (cartItems.length === 0)
        return <div className="text-center mt-10 text-gray-600">Your cart is empty.</div>;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

            {cartItems.map((item) => (
                <div
                    key={item._id}
                    className="flex justify-between items-center border-b py-4"
                >
                    <div>
                        <h3 className="font-semibold">{item.productId.title}</h3>
                        <p className="text-sm text-gray-600">
                            ₹{item.productId.price} × {item.quantity}
                        </p>

                        <div className="mt-2 flex gap-2 items-center">
                            <button
                                onClick={() => handleDecrease(item._id)}
                                className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-700"
                            >
                                –
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                                onClick={() => handleIncrease(item._id)}
                                className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-700"
                            >
                                +
                            </button>

                            <button
                                onClick={() => handleRemove(item._id)}
                                className="ml-4 text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                    <p className="font-bold text-green-700">
                        ₹{item.quantity * item.productId.price}
                    </p>
                </div>
            ))}

            <div className="mt-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">Total: ₹{total}</h3>
                <button
                    onClick={() => handleCheckout()}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;


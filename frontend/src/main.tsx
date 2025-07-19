
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
  <AuthProvider>
    <CartProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </CartProvider>
  </AuthProvider>
</BrowserRouter>
);


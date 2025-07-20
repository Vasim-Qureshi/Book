import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerifyOtpPage from './pages/VerifyOtpPage';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBooksPage from './pages/AddBooksPage';
import UpdateBookPage from './pages/UpdateBookPage';
import DeleteBookPage from './pages/DeleteBookPage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import CategoryBooksPage from './pages/CategoryBooksPage';
import SearchPage from './pages/SearchPage';
import CheckOut from './pages/CheckOut';
import ReceiptPage from './pages/ReceiptPage';
import OrdersHistory from './pages/OrderHistory';
import CartPage from './pages/CartPage';


const App = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryBooksPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />

        {/* User Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute role="user">
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute role="user">
              <CheckOut />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receipt"
          element={
            <ProtectedRoute role="user">
              <ReceiptPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute role="user">
              <OrdersHistory />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-book"
          element={
            <ProtectedRoute role="admin">
              <AddBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-books"
          element={
            <ProtectedRoute role="admin">
              <AddBooksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-book"
          element={
            <ProtectedRoute role="admin">
              <UpdateBookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delete-book"
          element={
            <ProtectedRoute role="admin">
              <DeleteBookPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

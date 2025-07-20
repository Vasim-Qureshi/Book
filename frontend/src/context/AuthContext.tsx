import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Define the shape of the decoded JWT token
interface DecodedToken {
  id: string;
  email: string;
  isAdmin: boolean;
  exp: number;
}

// Define the shape of the authentication context
interface AuthContextType {
  user: DecodedToken | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to provide authentication context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state for token and user
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<DecodedToken | null>({ id: '', email: '', isAdmin: false, exp: 0 });

  // Decode the token and set the user state when the component mounts or when the token changes
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUser(decoded);
        // console.log("Decoded JWT:", decoded); // Log the decoded token for debugging
        // console.log("User state:", user);

      } catch (err) {
        setToken(null);
      }
    }
  }, [token]);

  // Login function to set the token and user
  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    const decoded = jwtDecode<DecodedToken>(newToken);
    setUser(decoded);
  };

  // Logout function to clear the token and user
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); // <== This is important
  };

  // Check if the user is authenticated based on the presence of a token
  const isAuthenticated = !!token; // Check if the user is authenticated

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for convenience
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

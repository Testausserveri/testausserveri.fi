"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import api from '../utils/api'
import { Me } from '@/utils/types';

interface AuthContextType {
  authenticated: Me | null | undefined; // null=logged out, undefined=loading
  isLoading: boolean;
  error: string | null;
  refetch: () => void; // Function to manually trigger refetch
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<Me | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setIsLoading(true);
    setError(null);
    setAuthenticated(undefined); // Set to loading state
    try {
      const data = await api.membersArea.me();
      if (data && data.status !== 'error') {
        setAuthenticated(data); 
      } else {
         setAuthenticated(null); // Treat API error or non-success as logged out
         if(data && data.status == 'error') {
            // Optionally clear the cookie client-side if API confirms it's invalid
            // document.cookie = "connect.sid=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            console.error("Auth fetch error");
         } else {
            setAuthenticated(null);
         }
      }
    } catch (err: any) {
      console.error("Failed to fetch auth status:", err);
      setError(err.message || 'Failed to fetch authentication status.');
      setAuthenticated(null);
      // Maybe clear cookie here too if fetch fails completely network-wise?
      // document.cookie = "connect.sid=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // Runs once on mount

  const refetch = () => {
      fetchUser();
  }

  return (
    <AuthContext.Provider value={{ authenticated, isLoading, error, refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { UserService } from '@utils/api/user';

// Định nghĩa kiểu dữ liệu user
interface User {
  id: string;
  username: string;
  email: string;
  isAdmin?: boolean;
}

// Định nghĩa kiểu dữ liệu cho AuthContext
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const userData = await UserService.getMe(); // Gọi API getMe
        setUser(userData?.data); // Lưu thông tin user
      } catch {
        // router.push('/login'); // Chuyển hướng nếu không đăng nhập
      }
    };

    void fetchUser();
  }, []);

  const logout = () => {
    // Xóa token và user info
    localStorage.removeItem('accessToken');
    setUser(null);
    router.push('/login'); // Chuyển hướng về trang đăng nhập
  };

  return <AuthContext.Provider value={{ user, isLoading, logout }}>{children}</AuthContext.Provider>;
};

// Hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

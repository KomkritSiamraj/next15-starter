"use client"
import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/authApi';
import { LoginCredentials } from '../types/auth.types';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      // จัดการเมื่อ login สำเร็จ
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    },
    onError: (error: Error) => {
      // จัดการเมื่อเกิด error
      console.error('Login failed:', error.message);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      localStorage.removeItem('token');
      router.push('/login');
    },
    onError: (error: Error) => {
      console.error('Logout failed:', error.message);
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: loginMutation.isPending || logoutMutation.isPending,
    error: loginMutation.error || logoutMutation.error,
  };
}; 
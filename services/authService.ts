import api from '@/lib/axios';
import { User, ApiResponse } from '@/types';

export const authService = {
  async login(email: string, password: string): Promise<User> {
    const response = await api.post<ApiResponse<{ user: User; token: string }>>(
      '/api/auth/login',
      { email, password }
    );
    const { user, token } = response.data.data;
    localStorage.setItem('token', token);
    return user;
  },

  async register(userData: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const response = await api.post<ApiResponse<{ user: User; token: string }>>(
      '/api/auth/register',
      userData
    );
    const { user, token } = response.data.data;
    localStorage.setItem('token', token);
    return user;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('token');
    await api.post('/api/auth/logout');
  },

  async refreshToken(): Promise<string> {
    const response = await api.post<ApiResponse<{ token: string }>>(
      '/api/auth/refresh'
    );
    const { token } = response.data.data;
    localStorage.setItem('token', token);
    return token;
  },
};
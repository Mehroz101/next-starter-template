// src/lib/axios.ts
import Axios from 'axios'
import { getSession } from 'next-auth/react'

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

const axios = Axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
axios.interceptors.request.use(
  async (config) => {
    const session:any = await getSession()
    
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/auth/login'
    }
    
    return Promise.reject(error)
  }
)

export default axios
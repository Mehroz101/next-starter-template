export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  BLOG: '/blog',
  ABOUT: '/about-us',
  CONTACT: '/contact-us',
  DASHBOARD: {
    USER: '/dashboard/user',
    ADMIN: '/dashboard/admin',
    SUPER_ADMIN: '/dashboard/super-admin',
  },
  API: {
    AUTH: '/api/auth',
    USERS: '/api/users',
    ADMIN: '/api/admin',
  },
} as const;
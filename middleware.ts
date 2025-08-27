// src/middleware/auth.ts
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { ROLES } from '@/utils/roles'

export default withAuth(
  function middleware(req) {
    // Role-based routing logic
    const token = req.nextauth.token
    const isAdmin = token?.role === ROLES.ADMIN || token?.role === ROLES.SUPER_ADMIN
    const isSuperAdmin = token?.role === ROLES.SUPER_ADMIN
    const isUser = token?.role === ROLES.USER
    
    // Admin routes protection
    if (req.nextUrl.pathname.startsWith('/dashboard/admin') && !isAdmin) {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    // Super admin routes protection
    if (req.nextUrl.pathname.startsWith('/dashboard/super-admin') && !isSuperAdmin) {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    // User dashboard protection
    if (req.nextUrl.pathname.startsWith('/dashboard/user') && !isUser) {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect all dashboard routes
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/admin/:path*',
  ],
}
# Folder Structure Explanation

## /src/app
Next.js App Router pages and API routes organized with route groups:
- `(auth)`: Authentication pages (login, register)
- `(main)`: Public pages (home, blog, about, contact)
- `(dashboard)`: Protected dashboard pages

## /src/components
Reusable UI components organized by category:
- `ui`: Basic UI components (Button, Input, Modal)
- `layout`: Layout components (Navbar, Footer)
- `sections`: Page section components
- `dashboard`: Dashboard-specific components

## /src/services
API calls and business logic:
- `api.ts`: Base API configuration
- `authService.ts`: Authentication-related API calls
- `userService.ts`: User management API calls
- `adminService.ts`: Admin-specific API calls

## /src/store
Redux state management:
- `slices`: Redux slices for different state domains
- `store.ts`: Redux store configuration

## /src/types
TypeScript type definitions for the application

## /src/utils
Helper functions and utilities:
- `errorHandler.ts`: Global error handling
- `validation.ts`: Validation utilities
- `logger.ts`: Logging utilities

## /src/middleware
Next.js middleware for authentication and authorization

## /src/providers
React context providers for state management
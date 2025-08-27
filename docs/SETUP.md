# Project Setup Guide

## Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Redis (for caching)
- Database (PostgreSQL recommended)

## Installation
1. Clone the repository
2. Copy `.env.example` to `.env.local`
3. Configure environment variables
4. Run `npm install`
5. Run `npm run dev`

## Environment Variables
- `NEXTAUTH_SECRET`: Required for authentication (generate a strong secret)
- `NEXTAUTH_URL`: Your application URL (e.g., http://localhost:3000)
- `DATABASE_URL`: Database connection string
- `REDIS_URL`: Redis connection string
- `API_BASE_URL`: Base URL for external APIs

## Development
- Run `npm run dev` for development server
- Run `npm run build` for production build
- Run `npm run start` for production server
- Run `npm run lint` for code linting
- Run `npm run format` for code formatting

## Testing
- Add your test scripts here
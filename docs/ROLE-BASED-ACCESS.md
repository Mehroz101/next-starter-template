# Role-Based Access Control

## Available Roles
- `user`: Basic authenticated user with access to personal dashboard
- `admin`: Administrative privileges with access to admin dashboard
- `super-admin`: Full system access with super admin dashboard

## Role Hierarchy
Roles are hierarchical with the following precedence:
1. user (lowest)
2. admin
3. super-admin (highest)

## Adding New Roles
1. Update `src/constants/roles.ts`:
   ```typescript
   export const ROLES = {
     USER: 'user',
     ADMIN: 'admin',
     SUPER_ADMIN: 'super-admin',
     YOUR_NEW_ROLE: 'new-role',
   };
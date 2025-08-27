Here’s an **easy-to-understand guide** on how this folder structure works and where to put your code when you want to build features:

---

# 📂 Project Folder Structure Guide

## 1. `app/` → **Pages & Routes (Frontend + API)**

* This is the **core folder in Next.js (App Router)**.
* Each folder = a route, each `page.tsx` = a screen.

### Examples:

* `app/(auth)/login/page.tsx` → Login page
* `app/(auth)/register/page.tsx` → Register page
* `app/(dashboard)/layout.tsx` → Dashboard layout wrapper (sidebar, navbar, etc.)
* `app/(public)/about-us/page.tsx` → Public About Us page
* `app/(public)/blog/[slug]/page.tsx` → Dynamic blog page (e.g., `/blog/hello-world`)

### API Routes (Server)

* `app/api/auth/[...nextauth]/route.ts` → Authentication backend (NextAuth)
* `app/api/users/route.ts` → User CRUD API
* `app/api/admin/route.ts` → Admin-only API

👉 **Rule:** If it’s a **page or backend route**, it lives inside `app/`.

---

## 2. `components/` → **Reusable UI**

* Use this for UI building blocks.

### Subfolders:

* `components/ui/` → Buttons, Inputs, Modals, Loaders
* `components/layout/` → Navbar, Footer, Page layout
* `components/sections/` → Homepage sections like Hero, Testimonials, Blog cards
* `components/dashboard/` → Dashboard-only components (sidebars, navbars)

👉 **Rule:** If you will **reuse a piece of UI**, it goes in `components/`.

---

## 3. `redux/` → **Global State Management**

* `redux/store.ts` → Root Redux store setup
* `redux/slices/` → Individual state slices:

  * `authSlice.ts` → Auth state
  * `userSlice.ts` → User profile state
  * `uiSlice.ts` → UI preferences (dark mode, modals)

👉 **Rule:** If it’s **global state** shared across pages, put it in `redux/`.

---

## 4. `services/` → **API Call Helpers**

* Example: `services/authService.ts` → Login, Register, Logout functions
* You’ll add more like `userService.ts`, `adminService.ts` etc.

👉 **Rule:** If the frontend needs to **call an API**, put the function in `services/`.

---

## 5. `lib/` → **Core Utilities (Server + Client)**

* `lib/db.ts` → Database connection (Prisma, MongoDB, etc.)
* `lib/axios.ts` → Pre-configured Axios instance
* `lib/auth.ts` → Auth utilities (JWT, NextAuth helpers)
* `lib/seo.ts` → SEO metadata utilities

👉 **Rule:** If it’s a **shared utility across app & backend**, put it in `lib/`.

---

## 6. `hooks/` → **Custom React Hooks**

* `useAuth.ts` → Check if user is logged in
* `useApi.ts` → Custom API fetch hook
* `useRole.ts` → Role-based access control hook

👉 **Rule:** If you need **logic reusable in components**, create a hook.

---

## 7. `utils/` → **Helper Functions**

* `errorHandler.ts` → Centralized error handling
* `logger.ts` → Logging helper
* `roles.ts` → Role constants & validation
* `routes.ts` → Route constants (e.g., `/login`, `/dashboard`)
* `validation.ts` → Zod/Regex validations

👉 **Rule:** If it’s **pure function helpers (no React)**, put it in `utils/`.

---

## 8. `types/` → **TypeScript Types**

* `types/index.ts` → Global type definitions (User, Post, etc.)

👉 **Rule:** If it’s a **TS interface/type**, it goes in `types/`.

---

## 9. `styles/` → **Styling**

* `globals.css` → Global CSS
* `tailwind.config.ts` → Tailwind configuration

👉 **Rule:** If it’s **styling-related**, put it here.

---

## 10. `docs/` → **Documentation**

* `SETUP.md` → How to run the project
* `DEPLOYMENT.md` → How to deploy
* `ROLE-BASED-ACCESS.md` → Roles explained
* `FOLDER-STRUCTURE.md` → Folder guide
* `CONTRIBUTING.md` → For other developers

👉 **Rule:** If it’s **project knowledge**, keep it in `docs/`.

---

## 11. `middleware.ts` → **Edge Middleware**

* Runs before any request.
* Example: Auth checks, redirects, security headers.

👉 **Rule:** If you want to **protect routes or handle requests globally**, do it in `middleware.ts`.

---

## 12. `public/` → **Static Assets**

* `robots.txt`, `favicon.ico`, images, icons.

👉 **Rule:** If it’s **publicly accessible file (no import required)**, put it here.

---

# 🚀 How to Decide Where to Write Code

* **New Page?** → `app/`
* **New API route?** → `app/api/`
* **Reusable Button or Navbar?** → `components/`
* **Database Connection?** → `lib/db.ts`
* **Call API from frontend?** → `services/`
* **Global state (auth, UI)?** → `redux/`
* **Custom React Hook?** → `hooks/`
* **Helper Function (pure logic)?** → `utils/`
* **New Data Type?** → `types/`

---

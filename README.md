# 🛍️ Full-Stack E-commerce with Dashboard

A modern **E-commerce Web Application** built with **Next.js (Frontend)**, **NestJS (Backend)**, and **MongoDB (Database)**.  
Includes a full **Admin Dashboard** for managing products, orders, users, and more.

---

## 🚀 Tech Stack

### Frontend

- **Next.js 14 (App Router)**
- **React 18**
- **TailwindCSS**
- **TypeScript**
- **NextAuth.js** (Authentication)
- **Axios / React Query** (API Calls & State Management)

### Backend

- **NestJS** (with Express)
- **TypeORM / Mongoose** (MongoDB ODM)
- **JWT Authentication**
- **Class Validator & Class Transformer**
- **Stripe / PayPal** (Payment Integration)

### Database

- **MongoDB Atlas / Local MongoDB**

---

## 📂 Project Structure

### Frontend (`/client`)

`ecom/
├─ src/
│  ├─ app/
│  │  ├─ (site)/
│  │  │  ├─ page.tsx                 # Home (featured products)
│  │  │  ├─ products/
│  │  │  │  ├─ page.tsx              # Product list + filters
│  │  │  │  ├─ [slug]/page.tsx       # Product detail
│  │  │  ├─ cart/page.tsx
│  │  │  ├─ checkout/page.tsx
│  │  ├─ (dashboard)/
│  │  │  ├─ dashboard/layout.tsx     # Admin shell
│  │  │  ├─ dashboard/page.tsx       # Admin overview
│  │  │  ├─ dashboard/products/page.tsx
│  │  │  ├─ dashboard/orders/page.tsx
│  │  │  ├─ dashboard/categories/page.tsx
│  │  ├─ api/
│  │  │  ├─ auth/[...nextauth]/route.ts
│  │  │  ├─ products/route.ts        # GET (list), POST (create)
│  │  │  ├─ products/[id]/route.ts   # GET, PATCH, DELETE
│  │  │  ├─ orders/route.ts          # POST create order
│  │  │  ├─ orders/[id]/route.ts     # GET, PATCH status
│  │  │  ├─ categories/route.ts
│  │  ├─ layout.tsx
│  │  ├─ globals.css
│  ├─ components/
│  │  ├─ ui/                         # Buttons, inputs, modal, table
│  │  ├─ layout/                     # Navbar, Footer
│  │  ├─ product/                    # ProductCard, Price, Gallery
│  │  ├─ dashboard/                  # Sidebar, StatCards, DataGrid
│  ├─ context/
│  │  ├─ CartContext.tsx
│  ├─ lib/
│  │  ├─ db.ts                       # Mongo connection
│  │  ├─ auth.ts                     # NextAuth config helpers
│  │  ├─ roles.ts                    # RBAC helpers
│  │  ├─ pagination.ts
│  ├─ models/
│  │  ├─ product.model.ts
│  │  ├─ category.model.ts
│  │  ├─ order.model.ts
│  │  ├─ user.model.ts
│  ├─ schemas/                       # Zod DTOs
│  │  ├─ product.schema.ts
│  │  ├─ category.schema.ts
│  │  ├─ order.schema.ts
│  ├─ types/
│  │  ├─ index.ts
│  ├─ utils/
│  │  ├─ slugify.ts
│  │  ├─ api-helpers.ts
│  ├─ middleware.ts                  # Protect /dashboard
├─ public/
├─ .env.local.example
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.mjs
├─ package.json
├─ tsconfig.json
`

# 🛍️ Full-Stack E-commerce with Dashboard

<details>
<summary>Project Structure</summary>

```
ecom/
├─ src/
│  ├─ app/
│  │  ├─ (site)/
│  │  │  ├─ page.tsx                 # Home (featured products)
│  │  │  ├─ products/
│  │  │  │  ├─ page.tsx              # Product list & filters
│  │  │  │  ├─ [slug]/page.tsx       # Product details
│  │  │  ├─ cart/page.tsx
│  │  │  ├─ checkout/page.tsx
│  │  ├─ (dashboard)/
│  │  │  ├─ dashboard/layout.tsx     # Admin layout
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
│  │  ├─ ui/                         # UI elements (buttons, inputs, modal, table)
│  │  ├─ layout/                     # Navbar, Footer
│  │  ├─ product/                    # ProductCard, Price, Gallery
│  │  ├─ dashboard/                  # Sidebar, StatCards, DataGrid
│  ├─ context/
│  │  ├─ CartContext.tsx
│  ├─ lib/
│  │  ├─ db.ts                       # MongoDB connection
│  │  ├─ auth.ts                     # NextAuth helpers
│  │  ├─ roles.ts                    # RBAC utilities
│  │  ├─ pagination.ts
│  ├─ models/
│  │  ├─ product.model.ts
│  │  ├─ category.model.ts
│  │  ├─ order.model.ts
│  │  ├─ user.model.ts
│  ├─ schemas/                       # Zod schemas (DTOs)
│  │  ├─ product.schema.ts
│  │  ├─ category.schema.ts
│  │  ├─ order.schema.ts
│  ├─ types/
│  │  ├─ index.ts
│  ├─ utils/
│  │  ├─ slugify.ts
│  │  ├─ api-helpers.ts
│  ├─ middleware.ts                  # Dashboard protection
├─ public/
├─ .env.local.example
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.mjs
├─ package.json
├─ tsconfig.json
```

</details>

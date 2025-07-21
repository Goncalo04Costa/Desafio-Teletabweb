# Front‑End Coding Challenge – Pricing Page

Welcome 👋  
Your mission is to implement the **Pricing** screen of our product exactly like the Figma we provided.  
You must use **React 18 + TypeScript**, **Vite**, **pnpm**, **@tanstack/react‑query**, and **Material UI v5**.  
A .NET 8 backend with Swagger is included in `/backend` (separate zip). It exposes:

| Verb | Route                      | Description                               |
|------|--------------------------- |-------------------------------------------|
| GET  | /api/subscriptions         | Returns the list of subscriptions & tiers |
| POST | /api/subscription/checkout | Receives `{ userInfo, subscriptionId }`   |

> **Contract:** The exact DTOs are defined in the Swagger page (`/swagger/index.html`).  
> Feel free to auto‑generate types with `openapi-typescript` or call manually.

## ✨  Required user journey

1. Display all subscriptions in a responsive grid (desktop ≥ 3 columns; mobile = 1).
2. Each card has **Plan name, Price, Short description** and a **“Choose”** button.
3. Clicking “Choose” opens a **modal** asking for:
   - Full name (required)  
   - Email (required, validate)  
   - Company (optional)
4. On **Continue**, call `POST /api/subscription/checkout`.
   - Show a spinner while waiting.
   - On success, display a friendly confirmation toast.
   - On error, surface a Material UI `Alert`.
5. Use React Query for data‑fetching & mutation, including caching and optimistic UI where appropriate.
6. Pixel‑perfect styling per the design.

### Nice‑to‑have (extra credit)

* Unit tests with Vitest & React Testing Library.  
* Split components by responsibility, use React Hook Form or MUI `TextField` validation props.  
* Accessibility: focus trap in modal, aria‑labels, keyboard nav.  
* CI workflow: pnpm install, type‑check, build, test.

## 🔧  Getting started

```bash
# 1. Fork this repo
git clone <your‑fork‑url>
cd frontend-pricing-test

# 2. Install dependencies
pnpm install

# 3. Copy env template and set backend base URL
cp .env.example .env.local
# edit VITE_API_BASE_URL if your backend isn’t on http://localhost:5000

# 4. Run the backend (separate folder)
dotnet run --project ../backend

# 5. Start the frontend
pnpm dev
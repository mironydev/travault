# ✈️ Travault

A full-stack travel booking platform built with Next.js 16. Browse destinations, book trips, manage your bookings, and authenticate with email or social login.

🔗 **Live Site:** [Travault](https://travaault.vercel.app)

## 🌟 Features

- **Destination browsing** — Explore featured travel destinations with detailed info pages
- **Booking system** — Book destinations and manage all your bookings in one place
- **Add destinations** — Any logged-in user can submit new travel destinations
- **Edit & delete bookings** — Update or remove bookings via modals
- **User profile** — View and edit your profile information
- **Authentication** — Email/password, Google login via Better Auth
- **Protected routes** — Middleware-based protection for profile and authenticated pages
- **Error handling** — Custom error page for destination routes and a global 404 page
- **Animated UI** — Smooth page and component animations using Framer Motion
- **Responsive design** — Optimized layout for all screen sizes

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- [Better Auth](https://better-auth.com/) — authentication (email, Google)
- [MongoDB](https://www.mongodb.com/) — database for destinations, bookings, and user auth
- [HeroUI v3](https://heroui.com/) — UI component library
- [Framer Motion](https://www.framer.motion.com/) — animations
- [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/)
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- [Gravity UI Icons](https://gravity-ui.com/) + [React Icons](https://react-icons.github.io/react-icons/)

## 📁 Folder Structure

```
src/
├── app/
│   ├── add-destination/      # Add a new destination (auth required)
│   ├── api/auth/             # Better Auth API route handler
│   ├── destinations/[id]/    # Dynamic destination detail & error pages
│   ├── lib/                  # Auth config, auth client, fetch, server actions
│   ├── login/
│   ├── signup/
│   ├── my-bookings/          # User's booking management page
│   ├── profile/              # User profile page
│   ├── not-found.jsx         # Global 404 page
│   ├── layout.js             # Root layout
│   └── page.js               # Homepage
├── components/
│   ├── shared/               # Navbar, footer
│   └── ...                   # Feature components (booking, destination, auth, modals)
└── proxy.js                  # Middleware for profile route protection
```

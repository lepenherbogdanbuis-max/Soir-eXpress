# SoiréeXpress - Late Night Delivery Service

## Overview

SoiréeXpress is a late-night delivery service web application for Lorient, France and surrounding areas. The service delivers alcohol, beverages, snacks, and party accessories between 1:30 AM and 5:00 AM. This is a showcase/catalog website where users browse products and place orders via WhatsApp - no direct online ordering system is implemented.

The application features a single-page design with a vibrant orange and beige color scheme, targeting late-night party-goers with a fun yet professional aesthetic. The site includes product catalogs, service area maps, ordering instructions, and SEO optimization for local search visibility.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (single page app with minimal routes)
- Tailwind CSS with custom configuration for the brand's orange/beige color palette

**UI Component System:**
- Radix UI primitives for accessible, headless components (dialogs, dropdowns, tabs, etc.)
- shadcn/ui design system with "new-york" style variant
- Custom theme variables defined in CSS for consistent brand colors (primary orange #E84C3D, secondary beige #FBEEDC)
- Responsive design with mobile-first approach

**State Management:**
- React Context API for cart management (CartContext)
- TanStack Query (React Query) for server state management (minimal API usage)
- Local storage persistence for shopping cart data

**Key Design Decisions:**
- Single-page application architecture to provide smooth scrolling experience between sections
- Cart functionality built with Context API to avoid prop drilling and enable global cart access
- WhatsApp integration for order placement (generates pre-filled message with cart contents)
- Google Maps integration for delivery zone visualization

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the Node.js backend
- ESM module system throughout the codebase
- Vite middleware integration in development for HMR (Hot Module Replacement)

**API Design:**
- Minimal REST endpoints (currently placeholder structure in routes.ts)
- No authentication system (public showcase site)
- Storage interface pattern with in-memory implementation (MemStorage class)
- Designed for potential PostgreSQL integration via Drizzle ORM

**Key Architectural Choices:**
- Separation of storage logic through IStorage interface for future database swapping
- Session-based architecture prepared (connect-pg-simple dependency present)
- Server-side rendering not implemented (SPA only)

### Data Layer

**Schema Design (Drizzle ORM):**
- User schema defined but not actively used (placeholder for future features)
- Client-side validation schemas using Zod for cart items, orders, addresses, payment methods
- Type safety achieved through Drizzle's type inference and zod schema validation

**Data Models:**
- CartItem: Product with quantity, price, variant, image
- Order: Collection of cart items with total, payment method, delivery address
- DeliveryAddress: Address string with optional lat/lng coordinates and verification status
- PaymentMethod: Enum for "card" or "cash" payment options

**Storage Strategy:**
- Client-side: LocalStorage for cart persistence
- Server-side: In-memory storage (MemStorage) with interface for future PostgreSQL migration
- No current database connection despite Drizzle/Postgres configuration being present

### External Dependencies

**Third-Party Services:**
- **Google Maps JavaScript API**: Used for displaying delivery zone coverage with circular radius overlay centered on Lorient
- **Google Tag Manager**: Analytics and tracking implementation (GTM-52SR2PJ4)
- **WhatsApp Business API**: Order placement via pre-formatted message links (not a direct integration, uses URL scheme)

**Key External Libraries:**
- **Neon Serverless**: PostgreSQL driver configured but not actively used
- **Drizzle ORM**: Database ORM configured for PostgreSQL (schema defined, migrations ready)
- **React Hook Form**: Form handling with Zod resolver for validation
- **Embla Carousel**: Touch-friendly carousels for product galleries
- **date-fns**: Date manipulation utilities
- **Lucide React**: Icon library for consistent iconography

**Development Tools:**
- **Replit-specific plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **esbuild**: Production server bundling
- **PostCSS with Autoprefixer**: CSS processing

**SEO & Performance:**
- Meta tags extensively configured for local SEO (Lorient, Morbihan, surrounding cities)
- Sitemap configured (referenced in attached assets)
- Google Fonts (Poppins, Montserrat) loaded via CDN
- Static asset optimization through Vite

**Design System Dependencies:**
- Complete Radix UI component suite (20+ primitives)
- class-variance-authority for variant-based component styling
- tailwind-merge with clsx for className composition
- Custom CSS variables for theme consistency across light/dark modes
# SoiréeXpress - Late Night Delivery Service

## Overview

SoiréeXpress is a late-night delivery service web application for Lorient, France and surrounding areas. The service delivers alcohol, beverages, snacks, and party accessories between 1:30 AM and 5:00 AM. This is a showcase/catalog website where users browse products and place orders via WhatsApp - no direct online ordering system is implemented.

The application features a single-page design with a vibrant orange and beige color scheme, targeting late-night party-goers with a fun yet professional aesthetic. The site includes product catalogs, service area maps, ordering instructions, and SEO optimization for local search visibility.

## Recent Changes (October 2025)

### Latest Updates (October 17, 2025)
- **Variable delivery hours implemented**: Service now operates Mon-Tue: 22h-5h, Wed-Sun: 1h-5h (updated across all components)
- **Site title updated**: Changed to "SoiréeXpress" with proper accent in HTML title and all references
- **Product catalog restructured**: Implemented nested category system with Spiritueux/Vin/Bière for alcohol, Salé/Sucré for snacks
- **New product images**: Integrated 16+ new product images with updated product lineup
- **Cocktail recipes updated**: Replaced Virgin Mojito with Citrus Fizz Maison recipe in About page
- **Legal pages added**: Created CGU (Conditions Générales d'Utilisation) and Privacy Policy pages with proper legal content
- **Footer enhanced**: Added links to legal pages, safety messaging with AlertTriangle icon about alcohol consumption and breathalyzers
- **Emoji cleanup**: Removed all new emojis from UI, using lucide-react icons instead per design guidelines

### Previous Updates
- **WhatsApp number updated**: Changed from 33757911933 to 0766458205 (international: 33766458205)
- **Google Maps removed**: Address verification feature removed, simplified to direct text input
- **Delivery zone redesigned**: Replaced Google Maps visual with static display showing 25km radius, served cities list, and service info cards
- **Cart overlay improved**: Replaced solid black background with blurred overlay effect (backdrop-blur-sm bg-black/20)
- **Desktop user guidance**: Added alert in checkout for PC users with alternative ordering instructions
- **Hero section decorated**: Added subtle floating icons (sparkles, wine, coffee, pizza) with pulse animations
- **Color palette refined**: Beige background adjusted to 30 70% 96% for better harmony
- **Toast notifications enhanced**: Added "Voir le panier" action button to open cart drawer
- **Custom animation delays**: Added delay-75, delay-150, delay-300, delay-500, delay-700 utilities for staggered animations
- **Minimum order validation**: Added 30€ minimum order requirement with alert and disabled send button when below threshold
- **Order instructions updated**: Removed mention of automatic address verification from "Comment commander" section
- **Free delivery banner**: Added prominent "0 frais de livraison" promotional banner at top of catalog and in checkout recap

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
- Cart functionality built with Context API (CartContext) with isCartOpen state for drawer control
- WhatsApp integration for order placement at 07 66 45 82 05 (international: 33766458205)
- Simplified checkout: direct address input without Google Maps verification
- Cart drawer with blurred overlay effect (backdrop-blur-sm) instead of solid background
- Desktop-specific alert for PC users with alternative ordering instructions
- Decorative floating icons on hero section with pulse animations

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
- **Google Tag Manager**: Analytics and tracking implementation (GTM-52SR2PJ4)
- **WhatsApp Business**: Order placement via pre-formatted message links to 07 66 45 82 05 (uses wa.me URL scheme with international format 33766458205)

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
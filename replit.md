# Md. Nazmul Haque - Full Stack MERN Developer Portfolio

## Overview

This is a modern, professional portfolio website for Md. Nazmul Haque, a Full Stack MERN Developer. The application showcases skills, experience, education, projects, and provides a contact form for potential clients or employers. The design follows a dark tech aesthetic with smooth animations, gradient accents, and a focus on modern web technologies.

The portfolio is built as a single-page application with smooth scrolling between sections, featuring:
- Hero section with animated background
- About section with professional introduction
- Skills showcase organized by category
- Professional experience timeline
- Educational background
- Project portfolio with visual cards
- Contact form with validation
- Responsive design with dark/light theme toggle

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, bundled using Vite for optimal development experience and production builds.

**Routing**: Utilizes `wouter` for lightweight client-side routing. Currently implements a simple two-route structure (home and 404 pages), designed for potential expansion.

**UI Component Library**: Built on shadcn/ui components, which are based on Radix UI primitives. This provides accessible, customizable components with consistent styling. The component library includes form controls, dialogs, navigation, cards, and data display components.

**Styling Strategy**: 
- Tailwind CSS for utility-first styling with custom configuration
- CSS variables for theme customization (light/dark mode support)
- Custom color system with primary, secondary, muted, and accent variants
- Gradient treatments using chart colors (chart-1, chart-2, chart-3) for modern visual effects
- Elevation system using `--elevate-1` and `--elevate-2` variables for hover/active states

**Animation**: Framer Motion for sophisticated animations including:
- Scroll-triggered section reveals using `useInView` hook
- Staggered entrance animations
- Gradient orb animations in the hero section
- Hover and interaction animations on cards and buttons

**State Management**: 
- React Query (TanStack Query) for server state management
- React Hook Form with Zod resolver for form validation
- Context API for theme management (ThemeProvider)

**Form Handling**: Contact form uses React Hook Form integrated with Zod schemas from the shared schema definitions, ensuring type-safe validation on both client and server.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript support via tsx in development.

**API Design**: RESTful API endpoints:
- `POST /api/contact` - Handles contact form submissions with validation
- `GET /api/contacts` - Retrieves all contact submissions (admin endpoint)

**Validation**: Zod schemas shared between frontend and backend via the `/shared` directory, ensuring consistent validation rules across the stack.

**Development Server**: Custom Vite middleware integration for hot module replacement during development, with production builds serving static assets from Express.

**Error Handling**: Centralized error handling with appropriate HTTP status codes and JSON error responses.

### Data Storage

**Current Implementation**: In-memory storage using Map-based storage class (`MemStorage`) for development/demonstration purposes.

**Storage Interface**: Well-defined `IStorage` interface that abstracts storage operations (CRUD for users and contacts), making it straightforward to swap implementations.

**Schema Design**: 
- Users table: Basic authentication structure with username/password
- Contacts table: Stores contact form submissions with name, email, message, and timestamp
- UUID-based primary keys using PostgreSQL's `gen_random_uuid()`

**ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definitions in `/shared/schema.ts`
- Drizzle-Zod integration for automatic validation schema generation
- Migration support via Drizzle Kit

**Database Preparation**: Configuration expects a PostgreSQL database via `DATABASE_URL` environment variable. The application is structured to easily transition from in-memory storage to PostgreSQL by implementing the `IStorage` interface with Drizzle queries.

### External Dependencies

**UI Component Dependencies**:
- Radix UI primitives (accordion, dialog, dropdown-menu, popover, tabs, toast, tooltip, etc.)
- class-variance-authority for component variant management
- cmdk for command palette functionality
- embla-carousel-react for carousel components

**Animation & Motion**:
- Framer Motion for declarative animations and gestures

**Form Management**:
- React Hook Form for performant form handling
- @hookform/resolvers for Zod schema integration

**Icons**:
- Lucide React for consistent icon system
- react-icons (specifically simple-icons) for technology logos

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for serverless PostgreSQL connection (Neon database provider)
- Drizzle-Zod for schema-to-validation integration

**Development Tools**:
- @replit/vite-plugin-runtime-error-modal for better error visibility
- @replit/vite-plugin-cartographer for code navigation (development only)
- @replit/vite-plugin-dev-banner for development environment indicator

**Date Handling**: date-fns for date formatting and manipulation

**Build Tools**:
- Vite for frontend bundling
- esbuild for backend bundling
- TypeScript for type checking across the entire stack

**Session Management**: connect-pg-simple for PostgreSQL-backed session storage (configured but not actively used in current implementation)

**Font Loading**: Google Fonts (Poppins and JetBrains Mono) loaded via CDN in the HTML template
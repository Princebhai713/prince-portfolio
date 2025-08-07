# Overview

This is a personal portfolio website for a full-stack developer named Alex Johnson. The application showcases professional work, skills, and provides contact functionality. It features a modern, responsive design with a complete content management system for administrators to manage projects, blog posts, and messages. The site includes sections for home, about, skills, projects, blog, resume, and contact, with an admin dashboard for content management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Client-side routing with Wouter for lightweight navigation
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and logging middleware
- **Session Management**: Express sessions with memory store for admin authentication
- **Development**: Vite middleware integration for hot module replacement in development

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema**: Strongly typed schema definitions shared between frontend and backend
- **Migrations**: Drizzle Kit for database migrations and schema management

## Authentication & Authorization
- **Admin Authentication**: Session-based authentication with hardcoded credentials (development setup)
- **Route Protection**: Middleware-based route protection for admin endpoints
- **Client-side Auth**: React Query integration for authentication state management

## Data Models
- **Projects**: Portfolio projects with metadata, technologies, and links
- **Blog Posts**: Content management with markdown support, tags, and publishing status
- **Messages**: Contact form submissions with read/unread status
- **Admin Users**: Basic user management for administrative access

## External Dependencies
- **Database Hosting**: Neon Database (PostgreSQL-compatible serverless database)
- **Font Services**: Google Fonts (Inter font family)
- **Icon Library**: Font Awesome for social media and UI icons
- **Image Hosting**: Unsplash for placeholder images (development)
- **Development Tools**: Replit-specific plugins for development environment integration
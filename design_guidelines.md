# Design Guidelines: Md. Nazmul Haque - Full Stack MERN Developer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios with dark tech aesthetics, combining elements from Linear's clean interfaces, Vercel's gradient treatments, and contemporary developer showcase sites.

## Core Visual Identity

### Color System
- **Primary Background**: `#0f172a` (navy slate dark)
- **Text Colors**: 
  - Primary: `#e2e8f0` (light gray)
  - Secondary: `#94a3b8` (muted gray)
- **Accent Gradient**: `from-[#6366F1] via-[#3B82F6] to-[#0EA5E9]` (Indigo → Blue → Cyan)
- **Light/Dark Mode**: Dark mode as default with toggle option

### Typography
- **Font Families**: Inter, Poppins, or Satoshi (geometric sans-serif)
- **Hierarchy**:
  - Hero Title: Large, bold with gradient text effect
  - Section Headings: Medium-large with optional gradient reveals
  - Body Text: Regular weight in light gray
  - Labels/Tags: Small, uppercase for tech stack badges

### Layout System
- **Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 for consistent rhythm
- **Container**: Max-width of 1280px (max-w-7xl) for main content
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Responsive Grid**: 1 column mobile, 2-3 columns tablet/desktop where appropriate

## Component Library

### Hero Section
- Full viewport height with animated background (gradient mesh, particle field, or subtle waves)
- Centered content with animated introduction text
- Headline: "Hi, I'm Md. Nazmul Haque"
- Subtitle: "Full Stack MERN Developer | Building Scalable & Modern Web Applications"
- Two gradient CTAs: "View Projects" and "Contact Me" with rounded corners and hover glow
- Staggered fade-in animations for text and buttons
- **Hero Image**: No large hero image - use animated background elements instead

### About Me Section
- Two-column layout (desktop): Professional photo on left, content on right
- Photo treatment: Soft border glow with subtle animation
- Floating/animated tech stack icons surrounding the content
- Brief professional introduction emphasizing modern web technologies

### Skills Section
- Grouped grid layout: Frontend | Backend | Tools
- Technology cards with icons for: React, Next.js, Node.js, Express, MongoDB, Tailwind, TypeScript
- Hover animations: scale + glow effect on each skill card
- Optional: Progress bars or skill radar chart for visual interest

### Experience Section
- Vertical timeline layout with connecting lines
- Cards showing: Company name, position, duration, key achievements
- Scroll-triggered fade-in or slide animations per timeline item
- Gradient accent line connecting timeline points

### Education Section
- Card-based layout with clean, minimal design
- Display: Institution name, degree, years
- Subtle hover animations (lift effect)
- Education icon or gradient border accent

### Projects Section
- Grid layout: 1 column mobile, 2-3 columns desktop
- Project cards with:
  - Preview image/screenshot
  - Project title and short description
  - Tech stack tags (small, rounded badges)
  - Action buttons: "View Live" and "GitHub" links
- Hover effect: Gradient overlay with smooth transition
- Cards use glassmorphism effect with subtle backdrop blur

### Contact Section
- Centered layout with animated contact form
- Form fields with floating labels animation
- Input fields: Name, Email, Message
- Gradient "Send Message" button with hover glow
- Social links row: GitHub, LinkedIn, Email icons
- Icon hover: scale + glow effect

### Footer
- Minimal single-row layout
- Center-aligned text: "© 2025 Md. Nazmul Haque — Built with ❤️ using Next.js & Tailwind CSS"
- Social links with animated underline on hover
- Dark background matching overall theme

## Visual Enhancements

### Glassmorphism
- Apply to project cards and select UI elements
- Use `backdrop-blur-md` with semi-transparent backgrounds
- Subtle border with gradient or light opacity

### Buttons
- Rounded corners (rounded-lg to rounded-full)
- Gradient fill using accent colors
- Hover state: Increased glow/shadow effect
- No special interactions for buttons on backgrounds - standard hover states work universally

### Animations
- **Framer Motion** for all transitions and reveals
- Fade-in animations for sections on scroll
- Staggered reveals for grouped elements (skills, projects)
- Slide-up animations for cards entering viewport
- Smooth page transitions
- Subtle hover animations throughout
- **Scroll Behavior**: Smooth scrolling with Lenis or GSAP for enhanced experience

### Interactive Elements
- Small glow effects on hover for buttons and icons
- Gradient text reveals on scroll for section headings
- Animated tech stack icons with floating motion
- Skill cards with interactive hover states

## Images
No large hero background image required. Use animated background elements (gradient mesh, particles, or waves) for the hero section. Project section will include project preview screenshots/thumbnails within cards.

## Accessibility
- Maintain WCAG contrast ratios despite dark theme
- Ensure all interactive elements have clear hover/focus states
- Smooth animations should respect `prefers-reduced-motion`
- Form labels remain visible and accessible

## Responsive Behavior
- Mobile-first approach
- Stack all multi-column layouts to single column on mobile
- Reduce animation complexity on smaller viewports
- Optimize touch targets for mobile interactions
- Hero section adjusts height appropriately on mobile (80vh)
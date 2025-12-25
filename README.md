# 🚀 Modern Portfolio Website

A stunning, performant portfolio website built with Next.js 16, featuring smooth animations, interactive components, and SEO optimization. This portfolio showcases projects, skills, and professional experience with a modern, engaging user interface.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🎨 **Visual Design**

- **Smooth Animations**: Powered by GSAP and Framer Motion for fluid, professional animations
- **Interactive Terminal**: Live terminal component showcasing coding skills
- **Orbiting Skills Visualization**: Dynamic skill display with orbiting circles
- **Magic Cards**: Eye-catching card components with hover effects
- **Responsive Design**: Fully responsive across all devices and screen sizes

### ⚡ **Performance**

- **Next.js 16 App Router**: Latest App Router for optimal performance
- **Server-Side Rendering (SSR)**: Fast initial page loads
- **Static Site Generation (SSG)**: Pre-rendered pages for lightning-fast loading
- **Optimized Images**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for faster page loads

### 🔍 **SEO Optimized**

- **Structured Data**: JSON-LD schema markup for Person, WebSite, and ProfilePage
- **Dynamic Sitemap**: Automatically generated sitemap.xml
- **Manifest File**: PWA-ready with web app manifest
- **Robots.txt**: Proper search engine crawling configuration
- **Meta Tags**: Comprehensive meta tags for social media sharing

### 🛠️ **Developer Experience**

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency
- **Modular Architecture**: Well-organized component structure
- **shadcn/ui Integration**: Beautiful, accessible UI components
- **Custom Hooks**: Reusable React hooks for common functionality

## 📁 Project Structure

```
portfolio-2/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── manifest.ts              # PWA manifest
│   └── sitemap.ts               # Dynamic sitemap generator
├── components/
│   ├── app/                     # Application-specific components
│   │   ├── About/              # About section with OrbitingSkills
│   │   ├── Fixed/              # Fixed elements (Logo)
│   │   ├── Footer/             # Footer component
│   │   ├── Hero/               # Hero section with Terminal
│   │   ├── Projects/           # Project showcase components
│   │   └── Utils/              # Utility components (Loader)
│   └── ui/                     # Reusable UI components (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── hyper-text.tsx
│       ├── magic-card.tsx
│       ├── orbiting-circles.tsx
│       ├── terminal.tsx
│       └── text-animate.tsx
├── lib/
│   ├── schema.ts               # JSON-LD schema generators
│   └── utils.ts                # Utility functions
├── public/
│   ├── robots.txt              # Search engine instructions
│   ├── site.webmanifest        # PWA manifest
│   └── assets/                 # Static assets (images, icons)
├── types/
│   ├── index.ts                # Shared type definitions
│   └── project.ts              # Project-specific types
├── data.ts                     # Portfolio data (projects, etc.)
├── components.json             # shadcn/ui configuration
└── next.config.ts              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Atul-ThakreLO/portfolio-2.git
   cd portfolio-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

### Development

The page auto-updates as you edit files. Start by modifying:

- `app/page.tsx` - Main page layout
- `data.ts` - Portfolio content (projects, skills, etc.)
- `components/app/*` - Individual section components

## 🎨 Customization

### 1. **Update Portfolio Content**

Edit `data.ts` to customize your projects:

```typescript
export const projects: Project[] = [
  {
    name: "Your Project Name",
    description: "Project description here",
    github: "https://github.com/username/repo",
    url: "https://your-project-url.com", // Optional
  },
  // Add more projects...
];
```

### 2. **Modify SEO Settings**

Update `lib/schema.ts` to customize structured data for SEO:

```typescript
export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Your Name",
  // Add your details...
});
```

### 3. **Customize Styling**

- **Global Styles**: Edit `app/globals.css`
- **Tailwind Config**: Modify theme in `tailwind.config.ts`
- **Component Styles**: Update individual component files

### 4. **Add New Sections**

Create new components in `components/app/` and import them in `app/page.tsx`:

```tsx
import NewSection from "@/components/app/NewSection/NewSection";

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
    </>
  );
}
```

## 📦 Tech Stack

### **Core Technologies**

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### **Styling & UI**

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide React](https://lucide.dev/) - Icon library

### **Animation**

- [GSAP](https://greensock.com/gsap/) - Professional-grade animations
- [Framer Motion](https://www.framer.com/motion/) - React animation library

### **Utilities**

- [class-variance-authority](https://cva.style/) - Component variant management
- [clsx](https://github.com/lukeed/clsx) - Conditional class names
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm run start
```

Starts the production server on port 3000.

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Atul-ThakreLO/portfolio-2)

### Other Deployment Options

- **Netlify**: Follow [Next.js on Netlify guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Docker**: Create a Dockerfile for containerized deployment
- **VPS**: Deploy on any Node.js-compatible server

## 🔧 Scripts

| Script          | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start development server    |
| `npm run build` | Build production bundle     |
| `npm run start` | Start production server     |
| `npm run lint`  | Run ESLint for code quality |

## 📱 Features in Detail

### Hero Section

- Animated introduction with GSAP timeline
- Interactive terminal component
- Smooth scroll animations
- Responsive typography

### About Section

- Orbiting skills visualization
- Dynamic skill cards
- Bio and experience timeline

### Projects Section

- GitHub repository cards
- Project timeline view
- Solution animations
- Live demo and GitHub links
- Filterable project grid

### Footer

- Social media links
- Contact information
- Copyright and credits

## 🎯 Performance Optimizations

- ✅ Automatic code splitting
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with `next/font`
- ✅ Dynamic imports for heavy components
- ✅ Server-side rendering for SEO
- ✅ Static generation where possible
- ✅ Optimized bundle size

## 📈 SEO Features

- ✅ Semantic HTML structure
- ✅ JSON-LD structured data (Person, WebSite, ProfilePage)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Web manifest for PWA
- ✅ Meta tags for social sharing (Open Graph, Twitter Cards)
- ✅ Optimized for Core Web Vitals

For detailed SEO setup, see [SEO_SETUP.md](SEO_SETUP.md).

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Atul Thakre**

- GitHub: [@Atul-ThakreLO](https://github.com/Atul-ThakreLO)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [GSAP](https://greensock.com/) - Animation library
- [Vercel](https://vercel.com/) - Hosting platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)

---

<p align="center">Made with ❤️ using Next.js</p>

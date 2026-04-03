# 🚀 Ajnish Kumar Sahu - Modern React TypeScript Portfolio

A production-ready portfolio website built with React 18, TypeScript, and Tailwind CSS. Features modern animations, responsive design, and accessibility best practices.

## ✨ Highlights

- **Modern Tech Stack**: React 18 • TypeScript • Tailwind CSS • Framer Motion • Vite
- **Responsive Design**: Mobile-first approach with fluid animations and smooth transitions
- **Dark/Light Mode**: System preference detection with seamless manual toggle
- **Performance Optimized**: Code splitting, lazy loading, and Core Web Vitals optimized
- **Accessibility First**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Ready**: Meta tags, structured data, and React Helmet integration
- **PWA Ready**: Service worker and manifest for offline functionality
- **Fully Tested**: Comprehensive unit and integration tests with Vitest

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Build Tool** | Vite |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Testing** | Vitest, React Testing Library |
| **Code Quality** | ESLint, Prettier, TypeScript strict mode |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/              # Header, Footer, Navigation components
│   ├── sections/            # Hero, About, Skills, Projects, Contact sections
│   └── ui/                  # Reusable UI components (Button, Card, etc.)
├── contexts/                # React Context providers for global state
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── utils/                   # Utility functions and helpers
├── styles/                  # Global CSS and Tailwind overrides
└── test/                    # Test utilities and setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/ajnish-kumar-sahu/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run test             # Run all tests
npm run test:ui          # Run tests with interactive UI
npm run test:coverage    # Generate coverage report
```

## 🎨 Personalization Guide

### 1. Update Your Information

**Hero Section** (`src/components/sections/Hero.tsx`)
```typescript
const heroData = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "I build beautiful and functional web experiences...",
  cta: "View My Work"
};
```

**About Section** (`src/components/sections/About.tsx`)
```typescript
const about = {
  bio: "Your biography here...",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" }
  ]
};
```

**Contact** (`src/components/sections/Contact.tsx`)
- Email, Phone, Social Links
- Contact form configuration

### 2. Add Your Projects

Edit `src/components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Brief project description... ',
    longDescription: 'Detailed description of what you built...',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://project-demo.com',
    imageUrl: 'https://your-image-url.com',
    featured: true,
    category: 'fullstack'
  },
  // Add more projects...
];
```

### 3. Customize Your Skills

Edit `src/components/sections/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'blue',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  },
  // Add more skill categories...
];
```

### 4. Customize Colors & Styling

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          600: '#0284c7',
          900: '#0c2d6b'
        }
      }
    }
  }
};
```

## 🧪 Testing

Comprehensive test suite included:

```bash
# Run all tests
npm run test

# Watch mode
npm run test -- --watch

# With coverage report
npm run test:coverage

# Interactive UI
npm run test:ui
```

## 📱 PWA Features

Your portfolio is PWA-ready:
- ✅ Installable on mobile and desktop
- ✅ Offline functionality via Service Worker
- ✅ Web App Manifest for app-like experience
- ✅ Responsive design for all devices
- ✅ Fast loading with optimized assets

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Vercel CLI
npm i -g vercel
vercel
```

Or connect your GitHub repo directly to Vercel for automatic deployments.

### Deploy to Netlify

```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Deploy to Any Host

```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

## ⚡ Performance Optimization

- **Code Splitting**: Automatic route-based splitting with React.lazy
- **Image Optimization**: Lazy loading and responsive image handling
- **Bundle Analysis**: Run `npm run build` to analyze bundle size
- **Core Web Vitals**: Monitoring with performance metrics
- **Caching Strategy**: Optimized for production caching

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast support
- ✅ Reduced motion preferences respected

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

## 📊 Project Stats

- **Language Composition**: HTML (59.2%), TypeScript (37%), JavaScript (3.6%), CSS (0.2%)
- **Bundle Size**: ~50KB gzipped
- **Lighthouse Score**: 95+
- **Type Coverage**: 95%+

## 🔒 Security

- Content Security Policy enabled
- No hardcoded secrets in repository
- Regular dependency updates
- TypeScript strict mode

## 🤝 Contributing

Want to improve this template? Contributions welcome!

```bash
# Create feature branch
git checkout -b feature/AmazingFeature

# Commit changes
git commit -m 'Add AmazingFeature'

# Push to branch
git push origin feature/AmazingFeature

# Open Pull Request
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 📞 Get in Touch

Have questions or want to collaborate?
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐙 GitHub: [@ajnish-kumar-sahu](https://github.com/ajnish-kumar-sahu)
- 💼 LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- 🌐 Website: [your-portfolio.com](https://your-portfolio.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

*Last updated: 2026-04-03 16:26:36*
# Modern React TypeScript Portfolio

A production-ready portfolio website built with React 18, TypeScript, and Tailwind CSS. Features modern animations, responsive design, and accessibility best practices.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Mode**: System preference detection with manual toggle
- **Performance Optimized**: Code splitting, lazy loading, and Web Vitals optimization
- **Accessibility First**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **SEO Ready**: Meta tags, structured data, and React Helmet integration
- **PWA Capable**: Service worker and manifest for offline functionality

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint, Prettier
- **Code Quality**: TypeScript strict mode, comprehensive type coverage

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   ├── sections/        # Hero, About, Skills, Projects, etc.
│   └── ui/             # Reusable UI components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── test/               # Test utilities and setup
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/modern-portfolio.git
cd modern-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🎨 Customization

### Personal Information

Update personal details in the following components:
- `src/components/sections/Hero.tsx` - Name, title, description
- `src/components/sections/About.tsx` - Bio and stats
- `src/components/sections/Contact.tsx` - Contact information

### Projects

Add your projects in `src/components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://project-demo.com',
    imageUrl: 'https://your-image-url.com',
    featured: true,
    category: 'fullstack',
  },
  // Add more projects...
];
```

### Skills

Update skills in `src/components/sections/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'blue',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      // Add your skills...
    ],
  },
  // Add more categories...
];
```

### Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
},
```

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User interaction testing
- **Coverage**: Code coverage reporting with c8

Run tests:
```bash
npm run test          # Run all tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage
```

## 📱 PWA Features

The portfolio is PWA-ready with:
- Service worker for offline functionality
- Web app manifest for install prompts
- Responsive design for all devices
- Fast loading and smooth animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🔧 Performance Optimization

- **Code Splitting**: Automatic route-based splitting with React.lazy
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Web Vitals**: Monitoring with Core Web Vitals metrics

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Reduced motion preferences

## 🐛 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me directly through the portfolio contact form

---

Built with ❤️ and modern web technologies
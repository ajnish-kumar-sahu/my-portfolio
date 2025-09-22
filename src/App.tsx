import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Context Providers
import { AppProvider } from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Core Components
import Header from './components/layout/Header';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorFallback from './components/ui/ErrorFallback';
import ScrollToTop from './components/ui/ScrollToTop';
import PWAPrompt from './components/ui/PWAPrompt';

// Lazy-loaded sections for performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Education = lazy(() => import('./components/sections/Education'));
const Experience = lazy(() => import('./components/sections/Experience'));
const ResumeSection = lazy(() => import('./components/sections/ResumeSection'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

/**
 * Main App component with error boundaries, lazy loading, and context providers
 * Implements progressive loading and optimal performance patterns
 */
function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <Router>
          <ThemeProvider>
            <AppProvider>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <Header />
                
                <main role="main" className="relative">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Hero />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <About />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <Skills />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <Projects />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <Education />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <Experience />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <ResumeSection />
                  </Suspense>
                  
                  <Suspense fallback={<div className="h-96" />}>
                    <Contact />
                  </Suspense>
                </main>
                
                <Suspense fallback={<div className="h-32" />}>
                  <Footer />
                </Suspense>
                
                <ScrollToTop />
                <PWAPrompt />
              </div>
            </AppProvider>
          </ThemeProvider>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
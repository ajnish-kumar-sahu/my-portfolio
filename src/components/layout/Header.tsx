import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAppContext } from '../../contexts/AppContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

/**
 * Main header component with responsive navigation and theme toggle
 * Features smooth scroll behavior and active section highlighting
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { dispatch } = useAppContext();
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'education', 'experience', 'resume', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_ACTIVE_SECTION', payload: activeSection });
  }, [activeSection, dispatch]);

  const handleDownloadResume = () => {
    // Create download link for resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Go to homepage"
            >
              Ajnish Kumar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation activeSection={activeSection} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Download Resume */}
            <button
              onClick={handleDownloadResume}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Download resume"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
};

export default Header;
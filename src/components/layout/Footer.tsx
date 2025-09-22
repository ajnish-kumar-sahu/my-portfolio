import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

/**
 * Footer component with social links and navigation
 * Features responsive design and accessibility considerations
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <span>&copy; {currentYear} Ajnish Kumar.</span>
              <span className="flex items-center">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and code
              </span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
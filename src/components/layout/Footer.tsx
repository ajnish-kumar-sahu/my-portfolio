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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-gray-300 mb-2">
                &copy; {currentYear} Ajnish Kumar. All rights reserved.
              </p>
              <p className="flex items-center justify-center sm:justify-start text-sm text-gray-400">
                Built with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> using React & TypeScript
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <span className="text-sm text-gray-300 group-hover:text-white">Back to top</span>
              <ArrowUp className="h-4 w-4 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
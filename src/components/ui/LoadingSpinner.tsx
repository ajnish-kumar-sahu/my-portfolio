import React from 'react';

/**
 * Loading spinner component for Suspense fallbacks
 * Features accessible loading indicator with animation
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900"
      role="status"
      aria-label="Loading content"
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

/**
 * Error fallback component for React Error Boundary
 * Provides user-friendly error messages and recovery options
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4">
              <summary className="cursor-pointer text-red-800 dark:text-red-200 font-medium">
                Error Details
              </summary>
              <pre className="mt-2 text-sm text-red-700 dark:text-red-300 overflow-x-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
        
        <div className="space-y-4">
          <button
            onClick={resetErrorBoundary}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try again
          </button>
          
          <div>
            <button
              onClick={() => window.location.reload()}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Reload page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;
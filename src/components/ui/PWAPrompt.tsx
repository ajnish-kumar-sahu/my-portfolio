import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

/**
 * PWA installation prompt component
 * Shows when the app can be installed as a PWA
 */
const PWAPrompt: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install prompt
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember user dismissed the prompt
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  if (!showPrompt || localStorage.getItem('pwa-prompt-dismissed')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
            <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Install App
          </h3>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Install this app on your device for a better experience.
      </p>
      
      <div className="flex space-x-3">
        <button
          onClick={handleInstallClick}
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          className="px-3 py-2 text-gray-600 dark:text-gray-300 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWAPrompt;
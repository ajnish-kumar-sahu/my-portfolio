import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, ExternalLink } from 'lucide-react';
import Resume from '../ui/Resume';

/**
 * Resume section with preview and download functionality
 * Features modal preview and ATS-optimized resume format
 */
const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadPDF = () => {
    // In a real application, this would trigger a PDF download
    // For now, we'll open the print dialog
    window.print();
  };

  const handleViewOnline = () => {
    // Open resume in new tab for better viewing
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Ajnish Kumar - Resume</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
              .resume-container { max-width: 800px; margin: 0 auto; }
            </style>
          </head>
          <body>
            <div class="resume-container">
              <!-- Resume content would be rendered here -->
              <p>Resume content loading...</p>
            </div>
          </body>
        </html>
      `);
    }
  };

  return (
    <section 
      id="resume" 
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="resume-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="resume-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Resume
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my comprehensive resume or view it online. Optimized for ATS systems 
            and formatted for professional presentation.
          </p>
        </motion.div>

        {/* Resume Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
          
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="h-5 w-5" />
            <span>{showPreview ? 'Hide Preview' : 'Preview Resume'}</span>
          </button>
          
          <button
            onClick={handleViewOnline}
            className="flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <ExternalLink className="h-5 w-5" />
            <span>View Online</span>
          </button>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ATS Optimized
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Formatted for Applicant Tracking Systems with proper keywords and structure
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Multiple Formats
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Available in PDF format for easy sharing and professional presentation
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Live Preview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Preview the complete resume before downloading or sharing
            </p>
          </div>
        </motion.div>

        {/* Resume Preview */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-inner"
          >
            <div className="max-h-96 overflow-y-auto">
              <Resume />
            </div>
          </motion.div>
        )}

        {/* Resume Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Resume Highlights
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Study</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">8.5</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Current GPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
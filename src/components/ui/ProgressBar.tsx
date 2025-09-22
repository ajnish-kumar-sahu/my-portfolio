import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
  className?: string;
}

/**
 * Animated progress bar component with customizable colors
 * Features smooth fill animation and percentage display
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  color = 'blue', 
  className = '' 
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  const colorClasses = {
    blue: 'bg-blue-600 dark:bg-blue-400',
    green: 'bg-green-600 dark:bg-green-400',
    purple: 'bg-purple-600 dark:bg-purple-400',
    orange: 'bg-orange-600 dark:bg-orange-400',
  };

  return (
    <div className={className}>
      {/* Label and Percentage */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {value}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedValue}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
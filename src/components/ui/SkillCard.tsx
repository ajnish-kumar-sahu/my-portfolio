import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

/**
 * Reusable skill card component with animated progress bars
 * Features hover effects and smooth animations for skill levels
 */
const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, color, skills }) => {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900',
    green: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900',
    teal: 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900',
    orange: 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} mr-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProgressBar
              label={skill.name}
              value={skill.level}
              color={color}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
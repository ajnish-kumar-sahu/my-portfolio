import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Zap,
  GitBranch,
  Settings
} from 'lucide-react';
import SkillCard from '../ui/SkillCard';
import ProgressBar from '../ui/ProgressBar';
import { Skill } from '../../types';

/**
 * Skills section showcasing technical expertise with animated progress bars
 * Features categorized skills with proficiency levels and interactive cards
 */
const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'C', level: 70 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'green',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'React.js', level: 75 },
        { name: 'JavaScript ES6+', level: 80 },
      ],
    },
    {
      title: 'Development Tools',
      icon: Settings,
      color: 'purple',
      skills: [
        { name: 'Vite-React-TS', level: 75 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Chrome DevTools', level: 70 },
      ],
    },
    {
      title: 'Core Concepts',
      icon: Zap,
      color: 'orange',
      skills: [
        { name: 'Data Structures', level: 75 },
        { name: 'Algorithms', level: 70 },
        { name: 'Problem Solving', level: 80 },
        { name: 'Software Design', level: 65 },
      ],
    },
  ];

  const tools = [
    'VS Code', 'Git/GitHub', 'Vite', 'React.js', 'HTML5', 'CSS3', 
    'JavaScript', 'Java', 'C++', 'Chrome DevTools', 'npm', 'GitHub Pages'
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="skills-heading"
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
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical skills across the full development stack, 
            with deep expertise in modern frameworks and cloud technologies.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                color={category.color}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </div>

        {/* Technical Proficiency Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { skill: 'Frontend Development', level: 92 },
              { skill: 'Backend Development', level: 88 },
              { skill: 'System Architecture', level: 85 },
              { skill: 'Database Design', level: 87 },
              { skill: 'Cloud Technologies', level: 82 },
              { skill: 'DevOps & CI/CD', level: 80 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressBar
                  label={item.skill}
                  value={item.level}
                  className="mb-4"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
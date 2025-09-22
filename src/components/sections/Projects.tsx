import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import { Project } from '../../types';

/**
 * Projects section with filtering and animated project cards
 * Features technology-based filtering and responsive grid layout
 */
const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Assignment Cover Generator',
      description: 'A web-based tool that generates professional assignment covers with customizable templates. Built with vanilla JavaScript, HTML, and CSS for easy use by students and professionals.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/assignment-cover-generator',
      liveUrl: 'https://ajnish-kumar-sahu.github.io/assignment-cover-generator/',
      imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      featured: true,
      category: 'frontend',
    },
    {
      id: '2',
      title: 'Monthly Item List Management System',
      description: 'A console-based C++ application for managing monthly item lists with features for adding, updating, deleting, and viewing items. Demonstrates object-oriented programming concepts.',
      technologies: ['C++', 'OOP', 'File Handling', 'Data Structures'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/Monthly-Item-List-Management-System',
      liveUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      featured: true,
      category: 'backend',
    },
    {
      id: '3',
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance and accessibility.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/portfolio',
      liveUrl: 'https://ajnish-kumar-portfolio.netlify.app',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      featured: false,
      category: 'frontend',
    },
    {
      id: '4',
      title: 'Student Grade Calculator',
      description: 'A Java application for calculating student grades with features for multiple subjects, GPA calculation, and grade analysis. Demonstrates core programming concepts.',
      technologies: ['Java', 'OOP', 'Collections', 'Exception Handling'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/grade-calculator',
      liveUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      featured: false,
      category: 'backend',
    },
    {
      id: '5',
      title: 'Weather App',
      description: 'A responsive weather application that displays current weather conditions and forecasts. Built with vanilla JavaScript and integrates with weather APIs.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/weather-app',
      liveUrl: 'https://ajnish-weather-app.netlify.app',
      imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      featured: false,
      category: 'frontend',
    },
    {
      id: '6',
      title: 'Library Management System',
      description: 'A C++ console application for managing library operations including book inventory, member management, and borrowing system with file-based data storage.',
      technologies: ['C++', 'File I/O', 'Data Structures', 'OOP'],
      githubUrl: 'https://github.com/ajnish-kumar-sahu/library-management',
      liveUrl: null,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      featured: false,
      category: 'backend',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'academic', label: 'Academic' },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="projects-heading"
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
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies 
            and problem domains. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-lg p-1 shadow-lg">
            <Filter className="h-4 w-4 text-gray-500 ml-2" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-pressed={selectedFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected filter.
            </p>
          </motion.div>
        )}

        {/* View More Projects CTA */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span>View More on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

/**
 * Experience section with timeline of work history
 * Features animated timeline and downloadable resume
 */
const Experience: React.FC = () => {
  const experiences = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Freelance Projects',
      location: 'Hazaribagh, Jharkhand, India',
      period: '2023 - 2024',
      description: 'Developed responsive web applications and user interfaces using modern web technologies. Created interactive websites with focus on user experience and performance optimization.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    },
    {
      id: '2',
      title: 'Computer Science Student',
      company: 'Vinoba Bhave University',
      location: 'Hazaribagh, Jharkhand, India',
      period: '2023 - Present',
      description: 'Pursuing Bachelor of Computer Applications with specialization in Computer Science. Focus on programming fundamentals, data structures, algorithms, and web development technologies.',
      technologies: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Web Development'],
    },
    {
      id: '3',
      title: 'Academic Projects & Learning',
      company: 'Self-Directed Learning',
      location: 'Hazaribagh, Jharkhand, India',
      period: '2022 - 2023',
      description: 'Completed various programming projects and coursework in preparation for university studies. Built foundational knowledge in programming languages and web technologies.',
      technologies: ['C', 'HTML', 'CSS', 'JavaScript', 'Problem Solving'],
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-white dark:bg-gray-900"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Work Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional career, showcasing the experiences 
            and growth that have shaped me as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
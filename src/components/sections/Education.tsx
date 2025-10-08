import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

/**
 * Education section showcasing academic background and achievements
 * Features timeline layout with detailed information about each qualification
 */
const Education: React.FC = () => {
  const education = [
    {
      id: '1',
      degree: 'Bachelor of Computer Application',
      institution: 'Vinoba Bhave University, Hazaribagh',
      location: 'Hazaribagh, Jharkhand, India',
      period: '2023 - 2026 (Expected)',
      status: 'In Progress',
      specialization: 'Web Development and User Interface Design',
      description: 'Comprehensive program focusing on modern web technologies and software development principles. Core curriculum includes programming fundamentals, data structures, algorithms, and web development.',
      subjects: ['Programming (Java, C++)', 'Web Development', 'Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Computer Networks'],
      gpa: 'Current GPA: 8.5/10',
    },
    {
      id: '2',
      degree: 'Higher Secondary Education',
      institution: 'Hindu +2 High School',
      location: 'Hazaribagh, Jharkhand, India',
      period: '2020 - 2022',
      status: 'Completed',
      specialization: 'Science Stream',
      description: 'Completed higher secondary education with focus on Computer Science, Mathematics, and Physics. Achieved excellent academic performance with strong foundation in logical thinking.',
      subjects: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'English'],
      gpa: 'Percentage: 85%',
    },
    {
      id: '3',
      degree: 'Secondary Education',
      institution: 'Kishan High School',
      location: 'Dari-Chatra, Jharkhand, India',
      period: '2017 - 2020',
      status: 'Completed with Distinction',
      specialization: 'General Studies',
      description: 'Completed secondary education with distinction, building strong foundation in Science, Mathematics, and English. Developed logical thinking and problem-solving skills.',
      subjects: ['Science', 'Mathematics', 'English', 'Social Studies', 'Hindi'],
      gpa: 'Percentage: 88%',
    },
  ];

  return (
    <section 
      id="education" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="education-heading"
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
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in Computer Science and technology, building a strong 
            foundation for a successful career in software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        {edu.specialization && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                            <strong>Specialization:</strong> {edu.specialization}
                          </p>
                        )}
                      </div>
                      <div className="mt-2 sm:mt-0 sm:ml-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          <span className="text-green-600 dark:text-green-400 font-medium">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    {/* GPA/Performance */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        {edu.gpa}
                      </span>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Academic Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Consistent Performance
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Maintained excellent academic performance throughout educational journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Specialized Focus
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Specialized in Computer Science with emphasis on programming and web development
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Currently pursuing BCA with expected graduation in 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
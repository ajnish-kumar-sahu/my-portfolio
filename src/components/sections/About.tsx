import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Heart } from 'lucide-react';

/**
 * About section with personal story and achievements
 * Features animated counters and timeline of experience
 */
const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years of Study', value: '3+' },
    { icon: Users, label: 'Projects Built', value: '10+' },
    { icon: Coffee, label: 'Technologies', value: '8+' },
    { icon: Heart, label: 'Lines of Code', value: '50k+' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About Me
            </h2>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently pursuing a Bachelor of Computer Applications at Vinoba Bhave University,
                Hazaribagh College, with a specialization in Computer Science. My academic journey
                focuses on mastering programming languages, particularly Java and C++, while building
                strong foundations in core computer science principles.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I specialize in developing clean, efficient solutions through data structures and
                algorithms. With hands-on experience in modern web technologies including HTML5, CSS3,
                JavaScript, and React, I transform complex problems into intuitive, user-friendly applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Actively seeking internship opportunities and collaborative projects to apply my skills
                in real-world scenarios. I'm eager to contribute to innovative development teams and
                continue growing as a software developer.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
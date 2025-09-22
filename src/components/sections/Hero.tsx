import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import TypewriterEffect from '../ui/TypewriterEffect';
import ParticleBackground from '../ui/ParticleBackground';

/**
 * Hero section with animated introduction and call-to-action
 * Features typewriter effect, particle background, and smooth scroll navigation
 */
const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/ajnish-kumar-sahu', 
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/ajnish-kumar-20ag', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:ajnishkumar7070@gmail.com', 
      label: 'Email',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      role="banner"
    >
      <Helmet>
        <title>Ajnish Kumar - Computer Science Student & Frontend Developer</title>
        <meta name="description" content="Computer Science Student and Frontend Developer specializing in Java, C++, JavaScript, and modern web technologies. Building innovative solutions." />
        <meta property="og:title" content="Ajnish Kumar - Computer Science Student & Frontend Developer" />
        <meta property="og:description" content="Computer Science Student and Frontend Developer specializing in Java, C++, JavaScript, and modern web technologies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ajnish-kumar-portfolio.netlify.app" />
      </Helmet>

      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 flex items-center justify-center"
          >
            <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Ajnish Kumar
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 dark:text-blue-400 mb-8 min-h-[3rem] flex items-center justify-center"
          >
            <Code className="h-8 w-8 mr-3 text-blue-500" />
            <TypewriterEffect
              strings={[
                'Computer Science Student',
                'Frontend Developer',
                'Web Development Enthusiast',
                'Problem Solver & Innovator',
                'Java & C++ Programmer',
              ]}
              autoStart={true}
              loop={true}
              typeSpeed={80}
              backSpeed={50}
              backDelay={2000}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I am pursuing Bachelor of Computer Applications with specialization in Computer Science. 
            Passionate about programming, web development, and building innovative solutions with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              aria-label="View my projects"
            >
              <span>View My Work</span>
              <ExternalLink className="h-4 w-4" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
              aria-label="Get in touch"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center space-x-8 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-700 dark:text-gray-300 ${color}`}
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:animate-pulse" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-3 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.button>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="h-16 w-16 text-blue-500" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-20 right-10 opacity-20 dark:opacity-10">
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Sparkles className="h-12 w-12 text-yellow-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
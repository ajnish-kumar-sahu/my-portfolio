import React from 'react';
import { Download, Mail, Github, Linkedin, MapPin, Phone, Calendar, Award } from 'lucide-react';

/**
 * ATS-friendly resume component with proper formatting and keywords
 * Optimized for both screen reading and ATS parsing
 */
const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Download Button - Hidden in print */}
      <div className="print:hidden p-4 bg-gray-50 border-b">
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Resume Content */}
      <div className="p-8 print:p-6">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AJNISH KUMAR</h1>
          <p className="text-lg text-gray-600 mb-4">Computer Science Student | Frontend Developer</p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>ajnishkumar7070@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Hazaribagh, Jharkhand, India</span>
            </div>
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1" />
              <span>github.com/ajnish-kumar-sahu</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              <span>linkedin.com/in/ajnish-kumar-20ag</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dedicated Computer Science student pursuing Bachelor of Computer Applications at Vinoba Bhave University 
            with specialization in Computer Science. Proficient in Java, C++, JavaScript, HTML, and CSS with hands-on 
            experience in web development and frontend technologies. Strong foundation in data structures, algorithms, 
            and problem-solving. Seeking internships and collaborative opportunities to apply technical skills and 
            contribute to innovative software development projects.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Programming Languages:</h3>
              <p className="text-gray-700">Java, C++, C, JavaScript, HTML5, CSS3</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Frameworks & Tools:</h3>
              <p className="text-gray-700">React.js, Vite-React-TS, Git, GitHub, VS Code</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Core Concepts:</h3>
              <p className="text-gray-700">Data Structures, Algorithms, OOP, Problem Solving</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Areas of Focus:</h3>
              <p className="text-gray-700">Web Development, Frontend Development, UI Design</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            EDUCATION
          </h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">Bachelor of Computer Application</h3>
                <span className="text-gray-600 text-sm">2023 - 2026 (Expected)</span>
              </div>
              <p className="text-gray-700 mb-1">Vinoba Bhave University, Hazaribagh College</p>
              <p className="text-gray-600 text-sm mb-2">Specialization: Web Development and User Interface Design</p>
              <p className="text-gray-600 text-sm">Current GPA: 8.5/10 | Focus: Programming, Web Development, DSA</p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">Higher Secondary Education</h3>
                <span className="text-gray-600 text-sm">2020 - 2022</span>
              </div>
              <p className="text-gray-700 mb-1">Hindu +2 High School, Hazaribagh</p>
              <p className="text-gray-600 text-sm">Stream: Science (Computer Science, Mathematics, Physics) | Percentage: 85%</p>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">Secondary Education</h3>
                <span className="text-gray-600 text-sm">2017 - 2020</span>
              </div>
              <p className="text-gray-700 mb-1">Kishan High School, Dari-Chatra</p>
              <p className="text-gray-600 text-sm">Completed with Distinction | Percentage: 88%</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            EXPERIENCE
          </h2>
          
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">Frontend Developer</h3>
              <span className="text-gray-600 text-sm">2023 - 2024</span>
            </div>
            <p className="text-gray-700 mb-2">Freelance Projects | Hazaribagh, Jharkhand, India</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Developed responsive web applications using HTML5, CSS3, JavaScript, and React.js</li>
              <li>Created interactive user interfaces with focus on user experience and performance optimization</li>
              <li>Implemented modern web development practices and responsive design principles</li>
              <li>Collaborated on multiple projects demonstrating proficiency in frontend technologies</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            KEY PROJECTS
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Assignment Cover Generator</h3>
              <p className="text-gray-600 text-sm mb-2">
                GitHub: github.com/ajnish-kumar-sahu/assignment-cover-generator | 
                Live: ajnish-kumar-sahu.github.io/assignment-cover-generator/
              </p>
              <p className="text-gray-700 mb-2">
                Web-based tool for generating professional assignment covers with customizable templates
              </p>
              <p className="text-gray-600 text-sm">Technologies: HTML5, CSS3, JavaScript, Responsive Design</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Monthly Item List Management System</h3>
              <p className="text-gray-600 text-sm mb-2">
                GitHub: github.com/ajnish-kumar-sahu/Monthly-Item-List-Management-System
              </p>
              <p className="text-gray-700 mb-2">
                Console-based C++ application for managing monthly item lists with CRUD operations
              </p>
              <p className="text-gray-600 text-sm">Technologies: C++, Object-Oriented Programming, File Handling, Data Structures</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Personal Portfolio Website</h3>
              <p className="text-gray-600 text-sm mb-2">
                GitHub: github.com/ajnish-kumar-sahu/portfolio | Live: ajnish-kumar-portfolio.netlify.app
              </p>
              <p className="text-gray-700 mb-2">
                Responsive portfolio website showcasing projects, skills, and experience
              </p>
              <p className="text-gray-600 text-sm">Technologies: React, TypeScript, Tailwind CSS, Framer Motion</p>
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            ACHIEVEMENTS & HIGHLIGHTS
          </h2>
          
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Maintained consistent academic excellence with 8.5/10 GPA in current program</li>
            <li>Completed multiple programming projects demonstrating proficiency in various technologies</li>
            <li>Active GitHub contributor with multiple repositories showcasing technical skills</li>
            <li>Strong foundation in data structures, algorithms, and problem-solving methodologies</li>
            <li>Experience in both frontend development and backend programming languages</li>
            <li>Self-motivated learner with passion for emerging technologies and best practices</li>
          </ul>
        </section>

        {/* Additional Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            ADDITIONAL INFORMATION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Career Objectives:</h3>
              <p className="text-gray-700 text-sm">
                Seeking internships and entry-level positions in software development, 
                web development, or frontend development roles
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Interests:</h3>
              <p className="text-gray-700 text-sm">
                Web Development, Mobile App Development, Open Source Contribution, 
                Algorithm Design, UI/UX Design
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
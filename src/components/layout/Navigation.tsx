import React from 'react';

interface NavigationProps {
  activeSection: string;
}

/**
 * Desktop navigation component with active section highlighting
 */
const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
import { useState, useEffect } from 'react';

/**
 * Custom hook for scroll spy functionality
 * Tracks which section is currently in the viewport
 */
export function useScrollSpy(sectionIds: string[] = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'resume', 'contact']): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and has the largest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current;
          });
          
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        rootMargin: '-50px 0px -50px 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
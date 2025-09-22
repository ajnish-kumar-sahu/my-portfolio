import React from 'react';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

interface TypewriterEffectProps {
  strings: string[];
  autoStart?: boolean;
  loop?: boolean;
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  className?: string;
}

/**
 * Typewriter effect component with customizable timing and looping
 * Creates realistic typing animation with cursor blink
 */
const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  strings,
  autoStart = true,
  loop = true,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  startDelay = 0,
  className = '',
}) => {
  const { text, showCursor } = useTypingAnimation({
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    startDelay,
    loop,
  });

  if (!autoStart) {
    return null;
  }

  return (
    <span className={`inline-block ${className}`}>
      {text}
      <span 
        className={`inline-block w-0.5 h-8 bg-current ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
    </span>
  );
};

export default TypewriterEffect;
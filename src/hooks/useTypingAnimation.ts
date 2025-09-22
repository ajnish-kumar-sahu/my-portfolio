import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
}

/**
 * Custom hook for typewriter animation effect
 * Provides realistic typing animation with customizable timing
 */
export function useTypingAnimation({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  startDelay = 0,
  loop = true,
}: UseTypingAnimationProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let delta = typeSpeed;

      if (isDeleting) {
        delta = backSpeed;
      }

      if (!isDeleting && text === fullText) {
        delta = backDelay;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      if (loop || loopNum < strings.length) {
        timeout = setTimeout(tick, delta);
      }
    };

    timeout = setTimeout(tick, startDelay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum, strings, typeSpeed, backSpeed, backDelay, startDelay, loop]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return { text, showCursor };
}
import { useState, useEffect } from 'react';

/**
 * Animates typing of `text` character by character.
 * Returns the currently-typed string.
 */
export default function useTypewriter(text, speed = 65) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const t = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(i => i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [index, text, speed]);

  return displayed;
}

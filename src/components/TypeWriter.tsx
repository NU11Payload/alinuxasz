import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
}

const TypeWriter = ({ text, speed = 50 }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let currentIndex = 0;
    
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => {
      clearInterval(timer);
      setDisplayText('');
    };
  }, [text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeWriter;

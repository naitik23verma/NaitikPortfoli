import React, { useEffect, useRef } from 'react';
import './CircularText.css';

const CircularText = ({ text = "Loading your awesome portfolio...", radius = 120 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      const angle = i * (360 / text.length);
      span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
      container.appendChild(span);
    }
  }, [text, radius]);

  return <div className="circular-text" ref={containerRef}></div>;
};

export default CircularText;

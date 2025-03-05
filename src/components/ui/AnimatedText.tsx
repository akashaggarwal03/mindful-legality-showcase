
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  as: Component = "div" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('text-reveal-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay]);

  return (
    <Component className={`text-reveal-container ${className}`} ref={containerRef}>
      <div className="text-reveal-content">
        {children}
      </div>
    </Component>
  );
};

export default AnimatedText;

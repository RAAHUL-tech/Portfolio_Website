import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'bounce-in' | 'rotate-in' | 'flip-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  animationType = 'fade-in',
  delay = 0,
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClass = isIntersecting ? `${animationType} visible` : animationType;
  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`scroll-animate scroll-fade-up ${
        isVisible ? "animate-in" : ""
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

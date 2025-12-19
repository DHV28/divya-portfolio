import React, { useEffect, useRef } from "react";

const ConstellationBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Particle configuration
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
    const maxDistance = 150;
    const mouseRadius = 180;

    // Theme-specific colors
    const getColors = (currentTheme) => {
      if (currentTheme === "dark") {
        return {
          particle: "rgba(255, 255, 255, 0.8)",
          line: "rgba(129, 140, 248, 0.3)", // indigo accent
          lineHover: "rgba(129, 140, 248, 0.6)",
          glow: "rgba(129, 140, 248, 0.4)",
        };
      } else {
        return {
          particle: "rgba(99, 102, 241, 0.6)",
          line: "rgba(99, 102, 241, 0.12)", // subtle indigo
          lineHover: "rgba(99, 102, 241, 0.3)",
          glow: "rgba(99, 102, 241, 0.15)",
        };
      }
    };

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(colors) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.particle;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    particlesRef.current = Array.from(
      { length: particleCount },
      () => new Particle()
    );

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Adjust particle count
      const newCount = Math.min(Math.floor((width * height) / 15000), 100);
      const currentCount = particlesRef.current.length;

      if (newCount > currentCount) {
        particlesRef.current.push(
          ...Array.from({ length: newCount - currentCount }, () => new Particle())
        );
      } else if (newCount < currentCount) {
        particlesRef.current = particlesRef.current.slice(0, newCount);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const colors = getColors(theme);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw(colors);
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Check if near mouse
            const mouseDistI = Math.sqrt(
              Math.pow(particlesRef.current[i].x - mouseRef.current.x, 2) +
                Math.pow(particlesRef.current[i].y - mouseRef.current.y, 2)
            );
            const mouseDistJ = Math.sqrt(
              Math.pow(particlesRef.current[j].x - mouseRef.current.x, 2) +
                Math.pow(particlesRef.current[j].y - mouseRef.current.y, 2)
            );

            const isNearMouse =
              mouseDistI < mouseRadius || mouseDistJ < mouseRadius;
            const opacity = (1 - distance / maxDistance) * 0.5;

            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = isNearMouse ? colors.lineHover : colors.line;
            ctx.globalAlpha = isNearMouse ? opacity * 2 : opacity;
            ctx.lineWidth = isNearMouse ? 1.5 : 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw mouse glow effect
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRadius
        );
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default ConstellationBackground;

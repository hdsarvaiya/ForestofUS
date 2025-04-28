import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FlyingLeaves = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leaves = Array.from({ length: 15 });

  useEffect(() => {
    const createLeaf = () => {
      if (!containerRef.current) return;
      
      const leaf = document.createElement("div");
      const size = Math.random() * 20 + 10;
      const translateX = Math.random() * 100 - 50;
      const translateY = Math.random() * 100 - 50;
      const rotationDeg = Math.random() * 360;
      const duration = Math.random() * 10 + 5;
      
      leaf.style.width = `${size}px`;
      leaf.style.height = `${size}px`;
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${Math.random() * 100}%`;
      leaf.style.setProperty('--translate-x', `${translateX}vw`);
      leaf.style.setProperty('--translate-y', `${translateY}vh`);
      leaf.style.setProperty('--rotate', `${rotationDeg}deg`);
      
      leaf.classList.add('leaf');
      leaf.style.backgroundColor = `rgba(${Math.random() * 100 + 50}, ${Math.random() * 100 + 100}, ${Math.random() * 50}, 0.7)`;
      leaf.style.borderRadius = '50% 50% 50% 0';
      leaf.style.animation = `float ${duration}s linear forwards`;
      
      containerRef.current.appendChild(leaf);
      
      setTimeout(() => {
        leaf.remove();
      }, duration * 1000);
    };
    
    // Continue creating leaves periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        createLeaf();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
    >
      {leaves.map((_, index) => (
        <motion.div
          key={index}
          initial={{ 
            x: 0, 
            y: 0, 
            opacity: 0, 
            rotate: 0,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ 
            x: Math.random() * 200 - 100, 
            y: Math.random() * 200 - 100, 
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360 
          }}
          transition={{ 
            duration: Math.random() * 10 + 5,
            delay: index * 0.3,
            ease: "linear" 
          }}
          style={{
            position: "absolute",
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            backgroundColor: `rgba(${Math.random() * 100 + 50}, ${Math.random() * 100 + 100}, ${Math.random() * 50}, 0.7)`,
            borderRadius: '50% 50% 50% 0',
          }}
        />
      ))}
    </div>
  );
};

export default FlyingLeaves;

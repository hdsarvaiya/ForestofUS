import { motion } from "framer-motion";

const TreeLogo = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Tree Trunk */}
      <path 
        d="M100 180 C90 140 85 120 75 100 C70 90 60 85 70 80 C75 78 85 80 90 85 L100 95 L110 85 C115 80 125 78 130 80 C140 85 130 90 125 100 C115 120 110 140 100 180 Z" 
        fill="#8B6C42"
      />
      
      {/* Tree Leaves */}
      <g>
        {/* Many leaves in various green shades */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i * 9) % 360;
          const radius = 30 + (i % 20);
          const x = 100 + radius * Math.cos(angle * Math.PI / 180);
          const y = 60 + radius * Math.sin(angle * Math.PI / 180) * 0.7;
          const size = 8 + (i % 10);
          // Alternate between light and dark green shades
          const fill = i % 3 === 0 ? "#76B947" : (i % 3 === 1 ? "#4A8D3D" : "#A7D054");
          const rotation = i * 20;
          
          return (
            <path 
              key={i}
              d={`M${x},${y} Q${x+size/2},${y-size} ${x+size},${y} Q${x+size/2},${y+size/2} ${x},${y}`}
              fill={fill}
              opacity={0.8 + (i % 3) * 0.1}
              transform={`rotate(${rotation} ${x} ${y})`}
            />
          );
        })}
      </g>
      
      {/* Hanging circular pendant element */}
      <motion.g
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{ transformOrigin: "80px 95px" }}
      >
        <circle cx="80" cy="115" r="12" fill="none" stroke="#8B6C42" strokeWidth="2" />
        <circle cx="80" cy="115" r="8" fill="#F0E9C9" />
        <circle cx="80" cy="115" r="3" fill="#8B6C42" />
      </motion.g>
    </svg>
  );
};

export default TreeLogo;

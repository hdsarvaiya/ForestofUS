import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TreeAnimation = () => {
  const [branchesVisible, setBranchesVisible] = useState(false);
  const [leavesVisible, setLeavesVisible] = useState(false);
  
  useEffect(() => {
    // Sequence the animations
    const branchTimer = setTimeout(() => setBranchesVisible(true), 1200);
    const leavesTimer = setTimeout(() => setLeavesVisible(true), 1800);
    
    return () => {
      clearTimeout(branchTimer);
      clearTimeout(leavesTimer);
    };
  }, []);
  
  const leafVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.8 + (i * 0.02),
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    })
  };
  
  const branchVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 1.2 + (i * 0.1),
          duration: 1,
          ease: "easeInOut"
        },
        opacity: {
          delay: 1.2 + (i * 0.1),
          duration: 0.4
        }
      }
    })
  };
  
  // Generate realistic leaf shapes
  const getLeafPath = (x: number, y: number, size: number, rotation: number) => {
    // Create leaf shape with a stem and veins
    return `
      M ${x},${y}
      c ${size*0.05},${-size*0.2} ${size*0.4},${-size*0.6} ${size*0.5},${-size*0.7}
      c ${size*0.3},${-size*0.2} ${size*0.5},${-size*0.05} ${size*0.7},${size*0.2}
      c ${size*0.2},${size*0.25} ${size*0.15},${size*0.6} ${-size*0.1},${size*0.7}
      c ${-size*0.2},${size*0.1} ${-size*0.6},${size*0.05} ${-size*0.8},${-size*0.05}
      c ${-size*0.2},${-size*0.1} ${-size*0.35},${-size*0.3} ${-size*0.3},${-size*0.15}
      z
    `;
  };
  
  return (
    <motion.svg
      viewBox="0 0 300 350"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Trunk */}
      <motion.path
        d="M150 320 L140 270 C140 270, 135 230, 135 210 C135 190, 140 170, 150 150 C160 170, 165 190, 165 210 C165 230, 160 270, 160 270 L150 320 Z"
        fill="#7D5A4F"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "bottom center" }}
      />
      
      {/* Trunk details/texture */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Bark texture lines */}
        <path d="M145 300 C147 280, 147 260, 145 240" stroke="#6A4A3F" strokeWidth={1.5} fill="none" />
        <path d="M155 300 C153 280, 153 260, 156 240" stroke="#6A4A3F" strokeWidth={1.5} fill="none" />
        <path d="M145 235 C147 225, 150 215, 153 205" stroke="#6A4A3F" strokeWidth={1.5} fill="none" />
        <path d="M155 235 C153 225, 150 215, 147 205" stroke="#6A4A3F" strokeWidth={1.5} fill="none" />
        
        {/* Trunk base shadows */}
        <path d="M145 310 C140 305, 138 300, 140 290 L145 290 Z" fill="#5D4037" opacity={0.6} />
        <path d="M155 310 C160 305, 162 300, 160 290 L155 290 Z" fill="#5D4037" opacity={0.6} />
      </motion.g>
      
      {/* Tree Branches */}
      {branchesVisible && (
        <motion.g>
          {/* Main branches */}
          <motion.path
            d="M150 150 C120 140, 100 130, 80 100"
            stroke="#7D5A4F"
            strokeWidth={8}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M150 150 C180 140, 200 130, 220 100"
            stroke="#7D5A4F"
            strokeWidth={8}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.1}
            initial="hidden"
            animate="visible"
          />
          
          {/* Secondary branches - left */}
          <motion.path
            d="M80 100 C70 80, 60 70, 50 65"
            stroke="#7D5A4F"
            strokeWidth={6}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.2}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M80 100 C100 90, 110 60, 105 40"
            stroke="#7D5A4F"
            strokeWidth={6}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.3}
            initial="hidden"
            animate="visible"
          />
          
          {/* Secondary branches - right */}
          <motion.path
            d="M220 100 C230 80, 240 70, 250 65"
            stroke="#7D5A4F"
            strokeWidth={6}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.2}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M220 100 C200 90, 190 60, 195 40"
            stroke="#7D5A4F"
            strokeWidth={6}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.3}
            initial="hidden"
            animate="visible"
          />
          
          {/* Tertiary branches */}
          <motion.path
            d="M50 65 C40 55, 30 50, 20 48"
            stroke="#7D5A4F"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.4}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M105 40 C100 20, 90 10, 75 5"
            stroke="#7D5A4F"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.5}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M250 65 C260 55, 270 50, 280 48"
            stroke="#7D5A4F"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.4}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M195 40 C200 20, 210 10, 225 5"
            stroke="#7D5A4F"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.5}
            initial="hidden"
            animate="visible"
          />
          
          {/* Upper branch */}
          <motion.path
            d="M150 150 C150 130, 150 110, 150 80"
            stroke="#7D5A4F"
            strokeWidth={7}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.15}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M150 80 C140 60, 130 50, 120 40"
            stroke="#7D5A4F"
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.35}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M150 80 C160 60, 170 50, 180 40"
            stroke="#7D5A4F"
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
            variants={branchVariants}
            custom={0.35}
            initial="hidden"
            animate="visible"
          />
        </motion.g>
      )}
      
      {/* Tree Leaves */}
      {leavesVisible && (
        <motion.g>
          {/* Generate realistic and varied leaves */}
          {[
            // Left main branch leaves
            { x: 50, y: 65, size: 20, rotation: -30, hue: 130, delay: 0 },
            { x: 40, y: 55, size: 18, rotation: -45, hue: 125, delay: 0.1 },
            { x: 25, y: 50, size: 16, rotation: -60, hue: 132, delay: 0.2 },
            
            // Left secondary branch leaves
            { x: 100, y: 70, size: 22, rotation: -15, hue: 128, delay: 0.15 },
            { x: 105, y: 50, size: 20, rotation: -25, hue: 135, delay: 0.25 },
            { x: 95, y: 30, size: 18, rotation: -35, hue: 130, delay: 0.35 },
            { x: 80, y: 15, size: 16, rotation: -40, hue: 127, delay: 0.45 },
            
            // Right main branch leaves
            { x: 250, y: 65, size: 20, rotation: 30, hue: 132, delay: 0 },
            { x: 260, y: 55, size: 18, rotation: 45, hue: 126, delay: 0.1 },
            { x: 275, y: 50, size: 16, rotation: 60, hue: 133, delay: 0.2 },
            
            // Right secondary branch leaves
            { x: 200, y: 70, size: 22, rotation: 15, hue: 129, delay: 0.15 },
            { x: 195, y: 50, size: 20, rotation: 25, hue: 134, delay: 0.25 },
            { x: 205, y: 30, size: 18, rotation: 35, hue: 131, delay: 0.35 },
            { x: 220, y: 15, size: 16, rotation: 40, hue: 128, delay: 0.45 },
            
            // Top leaves
            { x: 150, y: 70, size: 24, rotation: 0, hue: 130, delay: 0.1 },
            { x: 135, y: 50, size: 22, rotation: -20, hue: 127, delay: 0.2 },
            { x: 120, y: 35, size: 20, rotation: -40, hue: 132, delay: 0.3 },
            { x: 165, y: 50, size: 22, rotation: 20, hue: 128, delay: 0.2 },
            { x: 180, y: 35, size: 20, rotation: 40, hue: 133, delay: 0.3 },
            
            // Fill in more leaves for density
            { x: 70, y: 90, size: 19, rotation: -25, hue: 128, delay: 0.22 },
            { x: 60, y: 75, size: 17, rotation: -35, hue: 133, delay: 0.33 },
            { x: 85, y: 60, size: 21, rotation: -15, hue: 130, delay: 0.18 },
            { x: 230, y: 90, size: 19, rotation: 25, hue: 129, delay: 0.22 },
            { x: 240, y: 75, size: 17, rotation: 35, hue: 134, delay: 0.33 },
            { x: 215, y: 60, size: 21, rotation: 15, hue: 131, delay: 0.18 },
            
            // More top foliage
            { x: 140, y: 85, size: 20, rotation: -10, hue: 131, delay: 0.15 },
            { x: 160, y: 85, size: 20, rotation: 10, hue: 129, delay: 0.15 },
            { x: 145, y: 60, size: 18, rotation: -5, hue: 132, delay: 0.25 },
            { x: 155, y: 60, size: 18, rotation: 5, hue: 127, delay: 0.25 },
          ].map((leaf, i) => {
            // Create a variety of natural green shades
            const lightness = 35 + (i % 4) * 5;
            const saturation = 75 + (i % 3) * 8;
            const baseColor = `hsl(${leaf.hue}, ${saturation}%, ${lightness}%)`;
            const darkShade = `hsl(${leaf.hue}, ${saturation}%, ${lightness - 15}%)`;
            
            return (
              <motion.g key={i} custom={i} variants={leafVariants} initial="hidden" animate="visible">
                <path 
                  d={getLeafPath(leaf.x, leaf.y, leaf.size, leaf.rotation)}
                  fill={baseColor}
                  transform={`rotate(${leaf.rotation} ${leaf.x} ${leaf.y})`}
                  style={{ transformOrigin: `${leaf.x}px ${leaf.y}px` }}
                />
                {/* Leaf vein */}
                <path 
                  d={`M ${leaf.x},${leaf.y} l ${leaf.size*0.3*Math.cos(leaf.rotation*Math.PI/180)},${-leaf.size*0.3*Math.sin(leaf.rotation*Math.PI/180)}`}
                  stroke={darkShade}
                  strokeWidth={1}
                  fill="none"
                  opacity={0.7}
                />
              </motion.g>
            );
          })}
        </motion.g>
      )}
      
      {/* Tree shadow at bottom */}
      <motion.ellipse
        cx="150"
        cy="328"
        rx="35"
        ry="8"
        fill="#00000030"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      
      {/* Company Name */}
      <motion.text
        x="150"
        y="345"
        textAnchor="middle"
        className="font-playfair font-bold"
        fill="#2A5D33"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        fontSize="18"
      >
        Forrest of Us
      </motion.text>
    </motion.svg>
  );
};

export default TreeAnimation;

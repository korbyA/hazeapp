import { useState, useEffect, useRef } from 'react';

const InteractiveCharacter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (characterRef.current && isHovering) {
        const rect = characterRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        setMousePosition({
          x: deltaX * 0.03,
          y: deltaY * 0.03
        });
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={characterRef}
      className="relative w-80 h-64 mx-auto group cursor-pointer perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/lovable-uploads/737f258b-2d23-4ad8-a1a0-ef7de704641d.png"
        alt="Haze Interface Preview"
        className="w-full h-full object-contain transition-all duration-500 ease-out drop-shadow-2xl"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) 
                     rotateX(${mousePosition.y * 0.15}deg) 
                     rotateY(${mousePosition.x * 0.15}deg) 
                     scale(${isHovering ? 1.05 : 1})`,
          transformStyle: 'preserve-3d'
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, -10px)`,
          filter: 'blur(20px)'
        }}
      />
    </div>
  );
};

export default InteractiveCharacter;
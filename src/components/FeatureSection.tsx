
import { Zap, Shield, Rocket, Puzzle, Monitor, CheckCircle } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 12; // Reduced for smoother parallax
    const y = (e.clientY - centerY) / 12;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="group p-6 rounded-xl backdrop-blur-md bg-glass/20 border border-glass-border animate-fade-in-up cursor-pointer relative hover:!z-50 h-full flex flex-col transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.275)] duration-[2500ms] will-change-transform hover:!scale-[1.04] hover:!-translate-y-2"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateX(${mousePosition.x}px) translateZ(0)`,
        transition: 'transform 2500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 2500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow-lg transition-all duration-[2500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] relative z-10 group-hover:ring-4 group-hover:ring-primary/70 group-hover:drop-shadow-[0_0_28px_hsl(var(--primary)/0.9)]">
          {icon}
        </div>
        <div className="absolute inset-0 w-12 h-12 bg-primary/60 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-[2500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
        <div className="absolute inset-0 w-12 h-12 bg-primary/80 rounded-lg blur-3xl opacity-0 group-hover:opacity-95 transition-all duration-[2500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] scale-150" />
        <div className="absolute inset-0 w-12 h-12 bg-primary/70 rounded-lg blur-[40px] opacity-0 group-hover:opacity-90 transition-all duration-[2500ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] scale-[2]" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Stability",
      description: "Rock-solid performance with 99.9% uptime. Built to handle intensive workloads without crashes.",
      delay: 0.1
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Trustworthy",
      description: "The API we use is battle-tested and trusted by thousands of users daily, ensuring stability and reliability you can count on.",
      delay: 0.2
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Fast Execution",
      description: "Optimized runtime engine delivers lightning-fast script execution with minimal resource usage.",
      delay: 0.3
    },
    {
      icon: <Puzzle className="w-6 h-6 text-white" />,
      title: "Script Compatibility",
      description: "Supports a wide range of scripts due to the API having a 99% UNC rate.",
      delay: 0.4
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: "Sleek UI",
      description: "Modern, intuitive interface designed for efficiency.",
      delay: 0.5
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Constant Updates",
      description: "Regular feature releases and UI updates.",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Why Choose Haze?
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover the features that make Haze the preferred choice for roblox execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

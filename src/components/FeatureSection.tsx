import { Zap, Shield, Rocket, Lock, Monitor, CheckCircle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => (
  <div 
    className="group glass-card p-6 rounded-xl hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="relative mb-4">
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
        {icon}
      </div>
      <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
  </div>
);

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
      description: "Verified and tested by thousands of users. Open-source transparency with security audits.",
      delay: 0.2
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Fast Execution",
      description: "Optimized runtime engine delivers lightning-fast script execution with minimal resource usage.",
      delay: 0.3
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Secure & Safe",
      description: "Advanced sandboxing and encryption protect your system. Enterprise-grade security protocols.",
      delay: 0.4
    },
    {
      icon: <Monitor className="w-6 h-6 text-white" />,
      title: "Sleek UI",
      description: "Modern, intuitive interface designed for efficiency. Dark mode and customizable themes included.",
      delay: 0.5
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Constant Updates",
      description: "Regular feature releases and security patches. Active development with community feedback.",
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
          Discover the features that make Haze the preferred choice for developers and power users worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
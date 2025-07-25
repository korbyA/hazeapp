import { Button } from "@/components/ui/button";
import { Download, Code, Puzzle, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo/Title */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <Code className="w-12 h-12 text-primary" />
              <div className="absolute inset-0 w-12 h-12 bg-primary/20 rounded-full blur-xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text font-mono">
              Haze
            </h1>
          </div>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Lightning-fast. Compatible. Reliable.
          </p>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Advanced and trustworthy executor for running scripts with unmatched performance and compatibility.
          </p>
        </div>

        {/* Quick Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Puzzle className="w-4 h-4 text-primary" />
            <span className="text-sm">Compatibility</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm">Advanced</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="animate-fade-in-up">
          <Button 
            variant="hero" 
            size="xl" 
            className="group relative overflow-hidden"
            onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
          >
            <Download className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Download Haze
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>

        {/* Version Info */}
        <p className="text-xs text-muted-foreground mt-4 animate-fade-in-up">
          Version 0.1.7 • Windows • Free
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

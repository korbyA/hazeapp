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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        {/* Logo/Title */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="relative">
              <Code className="w-14 h-14 text-primary" />
              <div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-full blur-xl" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text font-mono">
              Haze
            </h1>
          </div>
          
          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
            Lightning-fast. Compatible. Reliable.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Advanced and trustworthy executor for running scripts with unmatched performance and compatibility.
          </p>
        </div>

        {/* Quick Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <Puzzle className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Compatibility</span>
          </div>
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <Code className="w-5 h-5 text-primary" />
            <span className="text-base font-medium">Advanced</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="animate-fade-in-up mb-6">
          <Button 
            variant="hero" 
            size="xl" 
            className="group relative overflow-hidden text-lg px-12 py-4"
            onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
          >
            <Download className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Download Haze
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>

        {/* Version Info */}
        <p className="text-sm text-muted-foreground animate-fade-in-up">
          Version 0.1.7 • Windows • Free
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

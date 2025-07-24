import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Moon, Sun } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text font-mono">Haze</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#download" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Download
            </a>
            <a href="#docs" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Docs
            </a>
            <a href="#support" className="text-text-secondary hover:text-primary transition-colors duration-200">
              Support
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:text-primary"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="glass" 
              size="sm"
              onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:text-primary"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-glass-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#download"
                className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#docs"
                className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="#support"
                className="block px-3 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
              <div className="px-3 py-2">
                <Button 
                  variant="glass" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold gradient-text">Haze</span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs">
              Advanced script executor built for performance, compatibility, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="http://hazelogs.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Changelog
              </a>
              <a 
                href="https://discord.gg/67zpNPHED6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-primary transition-colors duration-200"
              >
                Support
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 space-y-4">
          <div className="text-xs text-muted-foreground bg-muted/50 p-4 rounded-lg">
            <p className="font-medium mb-2">⚠️ Important Disclaimer:</p>
            <p>
              Haze is intended for educational and legitimate automation purposes only. 
              Users are responsible for ensuring compliance with applicable terms of service, 
              laws, and regulations. The developers assume no responsibility for misuse of this software.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

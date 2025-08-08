
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
                aria-label="Join our Discord"
                title="Join our Discord"
                onClick={() => window.open('https://discord.gg/67zpNPHED6', '_blank')}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20.317 4.369A19.791 19.791 0 0016.557 3c-.2.359-.438.846-.6 1.23a18.27 18.27 0 00-5.914 0 12.3 12.3 0 00-.617-1.23 19.736 19.736 0 00-3.76 1.369C2.83 9.293 2.074 14.08 2.425 18.807A19.9 19.9 0 007.06 20.5c.42-.57.795-1.176 1.119-1.807a12.72 12.72 0 01-1.77-.846c.149-.11.294-.224.433-.338 3.417 1.59 7.11 1.59 10.485 0 .141.117.285.231.433.338-.57.33-1.166.62-1.77.846.324.633.7 1.239 1.119 1.807a19.9 19.9 0 004.636-1.693c.38-4.991-.648-9.74-3.328-14.438zM9.862 15.31c-1.018 0-1.846-.924-1.846-2.06 0-1.137.813-2.061 1.846-2.061 1.042 0 1.87.924 1.846 2.06 0 1.137-.804 2.061-1.846 2.061zm4.299 0c-1.018 0-1.846-.924-1.846-2.06 0-1.137.813-2.061 1.846-2.061 1.042 0 1.87.924 1.846 2.06 0 1.137-.804 2.061-1.846 2.061z" />
                </svg>
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

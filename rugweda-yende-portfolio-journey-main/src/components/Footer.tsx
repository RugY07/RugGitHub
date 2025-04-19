
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold gradient-text">Rugweda Yende</h3>
            <p className="text-sm text-foreground/70">
              Computer Engineering Student at MITAOE, passionate about solving complex problems through code.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-foreground/70 hover:text-purple transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-foreground/70 hover:text-purple transition-colors">
                About
              </Link>
              <Link to="/skills" className="text-sm text-foreground/70 hover:text-purple transition-colors">
                Skills
              </Link>
              <Link to="/projects" className="text-sm text-foreground/70 hover:text-purple transition-colors">
                Projects
              </Link>
              <Link to="/certificates" className="text-sm text-foreground/70 hover:text-purple transition-colors">
                Certificates
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:rugweda.yende@example.com" 
                className="text-foreground/70 hover:text-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Rugweda Yende. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

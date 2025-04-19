
import { ArrowDownCircle } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

interface HeroProps {
  scrollToId: string;
}

const Hero = ({ scrollToId }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      </div>
      
      <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
          Hello, I'm{" "}
          <span className="gradient-text">Rugweda Yende</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          First-year Computer Engineering Student at MITAOE. 
          Passionate about solving complex problems through code.
        </p>
        
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/about" className="btn-primary">
            Learn About Me
          </Link>
          <Link to="/projects" className="btn-outline">
            View My Projects
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ScrollLink
          to={scrollToId}
          spy={true}
          smooth={true}
          duration={800}
          className="cursor-pointer text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowDownCircle size={36} className="animate-bounce" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;

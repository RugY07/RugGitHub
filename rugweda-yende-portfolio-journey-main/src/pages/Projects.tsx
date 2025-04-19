import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink, Code, CalendarDays, Terminal, Users } from "lucide-react";
import { useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              (el as HTMLElement).style.setProperty('--animation-delay', index.toString());
              el.classList.add('animate-fade-in');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Smart Attendance System",
      description: "A comprehensive attendance management system with face recognition, QR code generation, and engagement tracking for both students and teachers.",
      image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "March 2024",
      technologies: ["Python", "OpenCV", "Flask", "React", "API Integration", "Machine Learning"],
      githubUrl: "#"
    },
    {
      title: "Linux Terminal Tic-Tac-Toe",
      description: "A command-line implementation of the classic Tic-Tac-Toe game built for Linux terminals using C++.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      date: "February 2024",
      technologies: ["C++", "Linux", "Terminal", "Game Development"],
      githubUrl: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website (this site!) built using modern web technologies to showcase my journey, skills, and projects.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
      date: "April 2024",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Calculator App",
      description: "A basic calculator application with a graphical user interface built using Java Swing.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      date: "December 2023",
      technologies: ["Java", "Swing", "GUI Development"],
      githubUrl: "#"
    }
  ];

  return (
    <div className="pt-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-purple/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-purple-light/20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="section-container relative z-10" ref={projectsRef}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text">
              My Projects
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A collection of coding projects that demonstrate my skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover animate-on-scroll backdrop-blur-sm bg-card/80 border border-purple/10">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <div className="flex items-center text-sm text-foreground/60">
                      <CalendarDays size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-purple/10 text-purple hover:bg-purple/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground/70">{project.description}</p>
                </CardContent>
                
                <CardFooter className="flex justify-end gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-full text-foreground/70 hover:text-purple hover:bg-purple/10 transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-full text-foreground/70 hover:text-purple hover:bg-purple/10 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-accent/30 p-8 rounded-2xl mt-16 animate-on-scroll backdrop-blur-sm border border-purple/10">
            <div className="flex items-center gap-3 mb-4">
              <Code size={24} className="text-purple" />
              <h3 className="text-2xl font-serif font-bold">Future Project Plans</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-purple/10">
                <h4 className="font-medium mb-1">Full-Stack Web Development</h4>
                <p className="text-sm text-foreground/70">
                  Building a complete web application with authentication, database, and real-time features.
                </p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-purple/10">
                <h4 className="font-medium mb-1">Mobile App Development</h4>
                <p className="text-sm text-foreground/70">
                  Learning React Native for cross-platform mobile app development.
                </p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-purple/10">
                <h4 className="font-medium mb-1">Machine Learning Project</h4>
                <p className="text-sm text-foreground/70">
                  Simple classification project to understand ML fundamentals.
                </p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-purple/10">
                <h4 className="font-medium mb-1">IoT-based Home Automation</h4>
                <p className="text-sm text-foreground/70">
                  Basic home automation system using Arduino or Raspberry Pi.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 animate-on-scroll">
            <p className="text-foreground/70 mb-4">
              Interested in collaborating or want to see more of my work?
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Github size={18} className="mr-2" /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

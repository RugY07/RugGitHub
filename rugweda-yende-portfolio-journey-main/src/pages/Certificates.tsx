import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { Award, Calendar, ExternalLink, FileText, Terminal } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
  category: "competition" | "course" | "achievement";
}

const Certificates = () => {
  const certificatesRef = useRef<HTMLDivElement>(null);

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

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current);
    }

    return () => {
      if (certificatesRef.current) {
        observer.unobserve(certificatesRef.current);
      }
    };
  }, []);

  const certificates: Certificate[] = [
    {
      title: "IYMC Bronze Medal",
      issuer: "International Youth Math Challenge",
      date: "2023",
      description: "Awarded bronze medal in the prestigious International Youth Math Challenge competition.",
      image: "https://images.unsplash.com/photo-1569245424586-0a37dac17b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "competition",
      credentialUrl: "#"
    },
    {
      title: "Datathon Participant",
      issuer: "GirlScript Club",
      date: "Currently Ongoing",
      description: "Active participant in the ongoing datathon competition organized by GirlScript Club.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "competition"
    },
    {
      title: "Codesprint: Pair Programming",
      issuer: "CodeChef Club",
      date: "February 2024",
      description: "Participated in Codesprint pair programming competition organized by CodeChef Club.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "competition"
    },
    {
      title: "Linux File Management",
      issuer: "Linux Professional Institute",
      date: "January 2024",
      description: "Completed comprehensive course on Linux file system management and command-line operations.",
      image: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "course",
      credentialUrl: "#"
    },
    {
      title: "Python Essentials 1",
      issuer: "Python Institute",
      date: "November 2023",
      description: "Mastered fundamental Python programming concepts and syntax.",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      category: "course",
      credentialUrl: "#"
    },
    {
      title: "Python Essentials 2",
      issuer: "Python Institute",
      date: "December 2023",
      description: "Advanced Python programming including object-oriented concepts and data structures.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "course",
      credentialUrl: "#"
    },
    {
      title: "Mathematics for Computer Science",
      issuer: "edX",
      date: "February 2024",
      description: "Studied discrete mathematics concepts essential for computer science and programming.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "course",
      credentialUrl: "#"
    },
  ];

  return (
    <div className="pt-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple/30 to-purple-light/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-purple/20 to-purple-light/20 blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="section-container relative z-10" ref={certificatesRef}>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text">
              Certificates & Achievements
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A collection of my educational achievements and certifications
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                <Award className="mr-2 text-purple" size={24} /> 
                <span>Competitions & Achievements</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates
                  .filter(cert => cert.category === "competition" || cert.category === "achievement")
                  .map((certificate, index) => (
                    <Card key={index} className="overflow-hidden card-hover animate-on-scroll backdrop-blur-sm bg-card/80 border border-purple/10">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{certificate.title}</CardTitle>
                          <Award size={20} className="text-purple" />
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <Calendar size={14} /> {certificate.date}
                        </CardDescription>
                        <div className="text-sm font-medium">{certificate.issuer}</div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-foreground/70 text-sm">{certificate.description}</p>
                        
                        {certificate.credentialUrl && (
                          <a 
                            href={certificate.credentialUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-purple hover:underline"
                          >
                            View Credential <ExternalLink size={14} className="ml-1" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
                <FileText className="mr-2 text-purple" size={24} /> 
                <span>Course Certifications</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates
                  .filter(cert => cert.category === "course")
                  .map((certificate, index) => (
                    <Card key={index} className="overflow-hidden card-hover animate-on-scroll backdrop-blur-sm bg-card/80 border border-purple/10">
                      <div className="aspect-video w-full overflow-hidden bg-muted">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{certificate.title}</CardTitle>
                          <FileText size={20} className="text-purple" />
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <Calendar size={14} /> {certificate.date}
                        </CardDescription>
                        <div className="text-sm font-medium">{certificate.issuer}</div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-foreground/70 text-sm">{certificate.description}</p>
                        
                        {certificate.credentialUrl && (
                          <a 
                            href={certificate.credentialUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-purple hover:underline"
                          >
                            View Credential <ExternalLink size={14} className="ml-1" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-accent/30 p-8 rounded-2xl mt-12 animate-on-scroll backdrop-blur-sm border border-purple/10">
            <h3 className="text-2xl font-serif font-bold mb-6">Currently Working On</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 flex items-start gap-4 border border-purple/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple/10 text-purple shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Full Stack Web Development</h4>
                  <p className="text-sm text-foreground/70 mt-1">
                    Currently learning modern web development stack with React, Node.js, and databases.
                  </p>
                </div>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 flex items-start gap-4 border border-purple/10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple/10 text-purple shrink-0">
                  <Terminal size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Data Structures and Algorithms</h4>
                  <p className="text-sm text-foreground/70 mt-1">
                    Mastering fundamental DSA concepts to build efficient programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 animate-on-scroll">
            <p className="text-foreground/70">
              Continuously working to expand my skills and knowledge through additional certifications and courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

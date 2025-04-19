
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, FileText, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const timelineItems = [
    {
      year: "Birth - 2005",
      title: "Early Interest in Nature",
      description: "Developed a deep fascination with the natural world and biological systems."
    },
    {
      year: "2005 - 2016",
      title: "Mathematical Discovery",
      description: "Found joy in mathematical problem solving, which became a driving passion."
    },
    {
      year: "2016 - 2023",
      title: "Academic Excellence",
      description: "Focused on academics, achieving 99 percentile in JEE examinations."
    },
    {
      year: "2023 - Present",
      title: "Computer Engineering at MITAOE",
      description: "Began my journey into computer engineering, discovering the world of coding."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero scrollToId="timeline" />

      {/* Brief Introduction */}
      <section className="section-container" id="timeline">
        <div className="max-w-4xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-accent/30" ref={featuresRef}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text">
              Explore My Portfolio
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover my skills, projects, and academic achievements that showcase my journey into computer engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover animate-on-scroll">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-xl font-medium">Skills</h3>
                <p className="text-foreground/70 text-sm">
                  Explore my technical skills and competencies in various programming languages and tools.
                </p>
                <Link to="/skills">
                  <Button variant="outline" size="sm" className="mt-2">
                    View Skills <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover animate-on-scroll">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple/10 text-purple">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-medium">Projects</h3>
                <p className="text-foreground/70 text-sm">
                  Check out the coding projects I've worked on as part of my learning journey.
                </p>
                <Link to="/projects">
                  <Button variant="outline" size="sm" className="mt-2">
                    View Projects <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover animate-on-scroll">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple/10 text-purple">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-medium">Certificates</h3>
                <p className="text-foreground/70 text-sm">
                  Browse through my educational achievements and professional certifications.
                </p>
                <Link to="/certificates">
                  <Button variant="outline" size="sm" className="mt-2">
                    View Certificates <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Link to="/about">
              <Button size="lg">
                Learn More About Me <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

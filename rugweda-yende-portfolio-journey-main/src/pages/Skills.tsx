
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Lightbulb, Puzzle } from "lucide-react";

interface Skill {
  name: string;
  progress: number;
  category: string;
}

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const technicalSkills: Skill[] = [
    { name: "C", progress: 95, category: "programming" },
    { name: "C++", progress: 80, category: "programming" },
    { name: "Python", progress: 65, category: "programming" },
    { name: "Java", progress: 50, category: "programming" },
    { name: "HTML/CSS", progress: 60, category: "programming" },
    { name: "JavaScript", progress: 60, category: "programming" },
    { name: "Data Structures", progress: 70, category: "cs-fundamentals" },
    { name: "Algorithms", progress: 75, category: "cs-fundamentals" },
    { name: "Database Fundamentals", progress: 50, category: "cs-fundamentals" },
    { name: "Git", progress: 65, category: "tools" },
    { name: "VS Code", progress: 80, category: "tools" },
    { name: "Linux", progress: 55, category: "tools" }
  ];

  const mathematicalSkills: Skill[] = [
    { name: "Calculus", progress: 90, category: "mathematics" },
    { name: "Linear Algebra", progress: 85, category: "mathematics" },
    { name: "Probability", progress: 75, category: "mathematics" },
    { name: "Geometry", progress: 95, category: "mathematics" },
    { name: "Discrete Mathematics", progress: 80, category: "mathematics" },
    { name: "Statistical Analysis", progress: 70, category: "mathematics" },
    { name: "AI Fundamentals", progress: 60, category: "mathematics" }
  ];

  const softSkills: Skill[] = [
    { name: "Problem Solving", progress: 90, category: "soft-skills" },
    { name: "Analytical Thinking", progress: 85, category: "soft-skills" },
    { name: "Communication", progress: 75, category: "soft-skills" },
    { name: "Team Collaboration", progress: 80, category: "soft-skills" },
    { name: "Time Management", progress: 70, category: "soft-skills" }
  ];

  const renderSkillBars = (skills: Skill[]) => {
    return (
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-foreground/70">{skill.progress}%</span>
            </div>
            <Progress value={mounted ? skill.progress : 0} className="h-2" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-24">
      <div className="section-container" ref={skillsRef}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text">
              My Skills
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The competencies I've developed through studies and projects
            </p>
          </div>

          <Tabs defaultValue="technical" className="w-full animate-on-scroll">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Code size={18} /> Technical
              </TabsTrigger>
              <TabsTrigger value="mathematical" className="flex items-center gap-2">
                <Puzzle size={18} /> Mathematical
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex items-center gap-2">
                <Lightbulb size={18} /> Soft Skills
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Code size={20} className="text-purple" /> Programming Languages
                  </h3>
                  {renderSkillBars(technicalSkills.filter(s => s.category === "programming"))}
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                      <Database size={20} className="text-purple" /> CS Fundamentals
                    </h3>
                    {renderSkillBars(technicalSkills.filter(s => s.category === "cs-fundamentals"))}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                      <Puzzle size={20} className="text-purple" /> Tools & Technologies
                    </h3>
                    {renderSkillBars(technicalSkills.filter(s => s.category === "tools"))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mathematical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Puzzle size={20} className="text-purple" /> Mathematical Proficiency
                  </h3>
                  {renderSkillBars(mathematicalSkills)}
                </div>
                
                <div className="bg-purple/5 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-4">Mathematical Background</h3>
                  <p className="text-foreground/80">
                    My strong foundation in mathematics has been instrumental in my academic success, 
                    particularly in achieving a 99 percentile in JEE. These mathematical skills continue 
                    to benefit me in computer engineering, especially in areas like:
                  </p>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-foreground/80">
                    <li>Algorithm analysis and optimization</li>
                    <li>Computational problem solving</li>
                    <li>Logical reasoning and pattern recognition</li>
                    <li>Data analysis and interpretation</li>
                    <li>Geometry applications in computer graphics</li>
                    <li>AI and machine learning foundations</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                    <Lightbulb size={20} className="text-purple" /> Professional Skills
                  </h3>
                  {renderSkillBars(softSkills)}
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Problem-Solving Approach</h4>
                      <p className="text-foreground/80">
                        I approach problems methodically, breaking complex challenges into manageable parts
                        and developing systematic solutions—a skill refined through years of mathematical
                        problem solving.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Continuous Learning</h4>
                      <p className="text-foreground/80">
                        I embrace the constantly evolving nature of technology by maintaining a curious mindset
                        and dedicating time to learning new concepts, languages, and frameworks.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-medium mb-2">Attention to Detail</h4>
                      <p className="text-foreground/80">
                        My mathematical background has instilled in me a rigorous attention to detail,
                        which proves valuable in writing clean code and debugging complex issues.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-accent/30 p-8 rounded-2xl mt-12 animate-on-scroll">
            <h3 className="text-2xl font-serif font-bold mb-4">Current Learning Focus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="font-medium">Web Development</div>
                <p className="text-sm text-foreground/70 mt-1">React, Node.js</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="font-medium">Data Structures</div>
                <p className="text-sm text-foreground/70 mt-1">Advanced algorithms</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="font-medium">Machine Learning</div>
                <p className="text-sm text-foreground/70 mt-1">Fundamentals</p>
              </div>
              <div className="bg-background rounded-lg p-4 text-center">
                <div className="font-medium">Generative AI</div>
                <p className="text-sm text-foreground/70 mt-1">Core concepts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

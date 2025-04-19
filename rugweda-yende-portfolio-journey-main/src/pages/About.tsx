
import { useEffect, useRef } from "react";
import { Circle } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-24 relative">
      {/* Background texture and floating elements */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none subtle-texture"></div>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple/30 to-purple-light/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-60 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-light/20 to-purple/20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-gradient-to-tl from-purple/15 to-purple-light/15 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="section-container relative z-10" ref={aboutRef}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-serif font-bold gradient-text">
              About Me
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              My journey from nature enthusiast to computer engineering student
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 animate-on-scroll">
              <div className="aspect-square rounded-2xl overflow-hidden bg-purple/10 border border-purple/20 shadow-lg glow">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Rugweda Yende"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 animate-on-scroll">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold">Rugweda Yende</h2>
                <p className="badge">Computer Engineering Student @ MITAOE</p>
              </div>

              <div className="space-y-4 text-foreground/80">
                <p>
                  Hi! I am a first-year Computer Engineering student passionate about design, coding, and innovation. I'm someone who loves solving mathematical problems and exploring the beauty of numbers. Mathematics has always been my strong suit, and I enjoy applying logical thinking to real-world challenges.
                </p>
                
                <p>
                  Alongside my passion for math, I love learning multiple programming languages. Coding gives me the power to turn ideas into reality, and I'm always excited to explore new technologies. Whether it's a complex equation or an intricate algorithm, I enjoy the thrill of problem-solving.
                </p>
                
                <p>
                  From a young age, I was captivated by the wonders of nature and biological systems. This early fascination laid the foundation for my analytical thinking and problem-solving approach. As I grew older, my interests evolved towards mathematics, eventually leading me to excel academically and achieve a 99 percentile in the JEE examinations.
                </p>
                
                <p>
                  Looking forward to expanding my knowledge and building amazing things! 🚀
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-serif font-bold">Education</h3>
            
            <div className="rounded-xl border p-6 bg-card/80 backdrop-blur-sm relative overflow-hidden border-purple/10 silk-bg">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple/5 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple/5 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium">B.Tech in Computer Engineering</h4>
                    <p className="text-foreground/70">MIT Academy of Engineering (MITAOE)</p>
                  </div>
                  <div className="text-sm text-foreground/60">2023 - Present</div>
                </div>
                <div className="mt-4 text-foreground/80">
                  <p>Currently pursuing my bachelor's degree in Computer Engineering, focusing on building a strong foundation in programming, data structures, algorithms, and software development.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border p-6 bg-card/80 backdrop-blur-sm relative overflow-hidden border-purple/10 silk-bg">
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-purple/5 rounded-full"></div>
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-purple/5 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-medium">Higher Secondary Education</h4>
                    <p className="text-foreground/70">Excellence in Mathematics and Sciences</p>
                  </div>
                  <div className="text-sm text-foreground/60">Completed 2023</div>
                </div>
                <div className="mt-4 text-foreground/80">
                  <p>Achieved 99 percentile in JEE examinations, demonstrating exceptional aptitude in mathematics and analytical problem-solving.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-serif font-bold">My Journey Timeline</h3>
            
            <div className="space-y-0 ml-4">
              {/* Timeline */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-lg font-medium mb-2">Early Curiosity (Birth - 2005)</h4>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 border-purple/30 shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
                        alt="Nature"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-foreground/80">
                      Developed a deep fascination with the natural world and biological systems. This early curiosity laid the foundation for my analytical thinking and problem-solving approach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-lg font-medium mb-2">Mathematical Discovery (2005 - 2016)</h4>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 border-purple/30 shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Mathematics"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-foreground/80">
                      Found joy in mathematical problem-solving, which became a driving passion. Discovered geometry as one of my strongest areas and began exploring mathematical concepts beyond my grade level.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-lg font-medium mb-2">Academic Excellence (2016 - 2023)</h4>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 border-purple/30 shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Academic"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-foreground/80">
                      Focused on academics, achieving 99 percentile in JEE examinations. Developed disciplined study habits and a methodical approach to solving complex problems in physics, chemistry, and mathematics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="text-lg font-medium mb-2">Computer Engineering at MITAOE (2023 - Present)</h4>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden border-2 border-purple/30 shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Coding"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-foreground/80">
                      Began my journey into computer engineering, discovering the world of coding. Currently focusing on building strong foundations in programming languages and learning data structures and algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-serif font-bold">Personal Philosophy</h3>
            <div className="bg-purple/5 border-l-4 border-purple p-6 rounded-r-lg backdrop-blur-sm silk-bg">
              <p className="italic text-foreground/80">
                "I believe that the intersection of mathematics and computer science offers boundless opportunities to solve real-world problems. My goal is to combine analytical thinking with creative problem-solving to develop innovative solutions that make a positive impact."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

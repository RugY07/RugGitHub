
import { useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.timeline-content');
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

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div ref={timelineRef} className="timeline">
      <div className="space-y-2 mb-10">
        <h2 className="text-3xl font-serif font-bold gradient-text">My Journey</h2>
        <p className="text-foreground/70">From early curiosities to engineering path</p>
      </div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="timeline-item flex">
            <div className="timeline-dot w-4 h-4 rounded-full bg-purple mt-2 shrink-0"></div>
            <div className="timeline-content ml-4 pb-6 border-l-2 border-purple/20 pl-6">
              <div className="badge bg-purple/10 text-purple px-3 py-1 rounded-full text-sm font-medium">
                {item.year}
              </div>
              <h3 className="text-xl font-medium mt-2 mb-1">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

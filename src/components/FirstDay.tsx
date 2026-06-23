import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FirstDay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current!.children,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/3] bg-[var(--color-sage)] p-3 shadow-lg rounded-sm transform rotate-1 group">
             <div className="w-full h-full bg-[#fdfdfd] flex items-center justify-center relative overflow-hidden border border-black/5">
               <img 
                 src="https://drive.google.com/thumbnail?id=1z8UB8nK2ypkNX3E1WqomlYaflItrTYfn&sz=w2000" 
                 alt="First Day Classroom" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
             </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)]/20 rounded-full blur-2xl -z-10" />
        </div>

        <div className="w-full md:w-1/2" ref={textRef}>
          <h2 className="text-sm tracking-widest uppercase text-[var(--color-accent)] font-semibold mb-4 invisible">Chapter 1</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[var(--color-ink)] invisible">Our First Day</h3>
          
          <div className="space-y-6 text-lg text-[var(--color-ink-light)] font-light leading-relaxed invisible">
            <p>
              We walked into the classroom expecting to dive straight into complex formulas, theorems, and endless calculations. Instead, we were met with a question that changed everything:
            </p>
            <p className="text-2xl font-serif italic text-[var(--color-ink)] py-2 border-l-2 border-[var(--color-accent)] pl-6">
              "What is Mathematics?"
            </p>
            <p>
              You taught us that it wasn't just about solving equations. It was about logic, about a way of life, about seeing the patterns in the chaos. We entered the classroom expecting a Mathematics teacher, but slowly we found a mentor.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

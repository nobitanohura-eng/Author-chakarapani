import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorCorner() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    gsap.fromTo(
      container.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-sage)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'%23000000\' fill-opacity=\'0.05\'/%3E%3C/svg%3E')] opacity-50" />
      
      <div ref={container} className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        <div className="w-full md:w-1/2">
          <div className="aspect-[3/4] max-w-sm mx-auto bg-[var(--color-paper)] p-4 shadow-xl transform -rotate-2 relative">
             <div className="w-full h-full bg-[#e5e5e5] flex flex-col items-center justify-center border border-black/10 overflow-hidden group">
               <img 
                 src="https://drive.google.com/thumbnail?id=11GTVo1CSZdVj4KRDDX-2PLJiCLCBBpBL&sz=w1000" 
                 alt="Rang-E-Tasavvur Book Cover" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
             </div>
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 shadow-sm rotate-2" />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-ink)] mb-6">The Author & Poet</h2>
          <p className="text-lg text-[var(--color-ink-light)] font-light leading-relaxed mb-6">
            Himanshu Sir's brilliance isn't limited to numbers. Through his published collection of Hindi and Urdu poetry, <span className="italic font-medium">Rang-E-Tasavvur</span>, he has touched many hearts and received wide appreciation and awards.
          </p>
          <p className="font-hand text-2xl text-[var(--color-accent)]">
            A beautiful mind, weaving logic and emotion.
          </p>
        </div>

      </div>
    </section>
  );
}

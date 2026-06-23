import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StudentWishes() {
  const container = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
        },
      }
    );
  }, []);

  const wishes = [
    { name: "Ayush", wish: "Happy birthday to the mentor who showed me my true potential." },
    { name: "Kislay", wish: "May your day be as wonderful as your teaching." },
    { name: "Priyanshu", wish: "Thank you for the patience and the countless lessons." },
    { name: "Shaksham", wish: "Wishing you health, happiness, and more poetic moments." },
    { name: "Raunak", wish: "Your classes were the highlight of my JEE prep. Happy Birthday!" },
    { name: "Utkarsh", wish: "To the coolest teacher ever, have a fantastic birthday." },
    { name: "Himanshu", wish: "Honored to share your name! Happy birthday Sir." },
    { name: "Shreya", wish: "Thank you for making math our favorite subject." },
    { name: "Rupa", wish: "May you keep inspiring students like you inspired me." },
    { name: "Ritika", wish: "Your guidance has been my biggest strength." },
    { name: "Kashish", wish: "Wishing the happiest of birthdays to our favorite mentor." },
    { name: "Prachi", wish: "Thank you for always believing in us." },
    { name: "Anshu Priya", wish: "Your dedication to teaching is truly unmatched." },
    { name: "Ayush Rajput", wish: "Happy birthday to the maestro of mathematics!" },
    { name: "Shakshi", wish: "May you get all the happiness in the world." },
    { name: "Yuvraj", wish: "Thank you for every 'Baatein mat karo!' and every life lesson." }
  ];

  return (
    <section ref={container} className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-ink)] mb-4 text-center">Birthday Wishes</h2>
        <p className="font-hand text-2xl text-[var(--color-ink-light)] text-center mb-16">From the students whose lives you touched</p>
        
        <div ref={gridRef} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {wishes.map((w, i) => (
            <div 
              key={i} 
              className="break-inside-avoid bg-[var(--color-paper)] p-6 shadow-sm border border-black/5 rounded-sm relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <p className="font-light text-[var(--color-ink)] italic mb-6 leading-relaxed relative z-10 text-sm md:text-base">
                "{w.wish}"
              </p>
              <p className="font-hand text-2xl text-[var(--color-accent)] text-right relative z-10">
                - {w.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

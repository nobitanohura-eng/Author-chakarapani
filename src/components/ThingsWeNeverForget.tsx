import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThingsWeNeverForget() {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 30, rotation: () => Math.random() * 10 - 5 },
      {
        opacity: 1,
        y: 0,
        rotation: () => Math.random() * 4 - 2,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  const memories = [
    { title: "LALACH Theorem", desc: "A theorem we'll never find in any standard textbook." },
    { title: "MAGGIE Theorem", desc: "Because some concepts take exactly 2 minutes to cook." },
    { title: "BACHA Graph", desc: "The simplest way to understand the complex curves." },
    { title: "Bhala Method", desc: "Piercing through the toughest of problems." },
    { title: "Ghoda Method", desc: "The unique leaps in logic." },
    { title: "PM = P + M", desc: "Practice + Memory. The ultimate equation for success." },
    { title: "The 4 Subjects", desc: "Physics, Chemistry, Mathematics, and managing all three." },
    { title: "The Marker Incident", desc: "When everyone accidentally spilled the ink trying to refill the marker." },
    { title: "The Golden Rule", desc: "“Baatein mat karo!”", isHighlight: true }
  ];

  return (
    <section ref={container} className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-beige)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-sage)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-ink)] mb-4">Things We'll Never Forget</h2>
          <p className="text-lg text-[var(--color-ink-light)] font-hand text-2xl">The little things that made learning memorable...</p>
        </div>
        
        <div ref={cardsRef} className="flex flex-wrap justify-center gap-6">
          {memories.map((m, i) => (
            <div 
              key={i} 
              className={`p-6 shadow-md rounded-sm border border-black/5 flex flex-col justify-center items-center text-center transition-transform hover:z-10 hover:scale-105 cursor-pointer max-w-xs w-full sm:w-auto
                ${m.isHighlight ? 'bg-[var(--color-accent)] text-white' : 'bg-[var(--color-paper)] text-[var(--color-ink)]'}
              `}
              style={{
                transform: `rotate(${Math.random() * 4 - 2}deg)`
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 backdrop-blur-sm shadow-sm rotate-2 z-10" />
              
              <h4 className={`text-xl font-serif mb-3 ${m.isHighlight ? 'text-white' : 'text-[var(--color-ink)]'}`}>
                {m.title}
              </h4>
              <p className={`font-light text-sm ${m.isHighlight ? 'text-white/90' : 'text-[var(--color-ink-light)]'}`}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

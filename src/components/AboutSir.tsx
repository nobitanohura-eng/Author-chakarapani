import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSir() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !textContainerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(textContainerRef.current!.children,
        { autoAlpha: 0, y: 30 },
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 75%' 
          } 
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-beige)]">
      <div ref={textContainerRef} className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[var(--color-ink)] invisible">More Than A Teacher</h2>
        <p className="text-lg md:text-xl text-[var(--color-ink-light)] font-light leading-relaxed invisible">
          We know him as an exceptional Mathematics teacher and mentor who guided us through our toughest preparations. But beyond the formulas and equations, he is a man of deep thought—a published poet and author. His words, both in the classroom and on paper, have shaped how we see the world.
        </p>
      </div>
    </section>
  );
}

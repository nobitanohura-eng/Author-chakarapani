import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Letter() {
  const container = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !letterRef.current) return;

    gsap.fromTo(
      letterRef.current,
      { y: 50, opacity: 0, rotateZ: -1 },
      {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section ref={container} className="py-32 px-6 md:px-12 lg:px-24 flex justify-center items-center bg-[var(--color-beige)]">
      <div 
        ref={letterRef}
        className="max-w-3xl w-full bg-[var(--color-paper)] p-10 md:p-16 shadow-xl relative"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, #e5e5e5 95%)',
          backgroundSize: '100% 2.5rem',
          lineHeight: '2.5rem'
        }}
      >
        <div className="absolute top-0 left-8 w-[2px] h-full bg-red-400/30" />
        
        <div className="relative z-10 pl-6 md:pl-10">
          <div className="font-hand text-2xl md:text-4xl text-[var(--color-ink)] leading-[2.5rem] tracking-wide">
            <p className="mb-4">Dear Sir,</p>
            <p>
              We may forget some of the formulas, the complex integrals, or the tricky graphs you drew on the board. But we will never forget the person who taught us how to think.
            </p>
            <p>
              You pushed us, scolded us when we were distracted, and guided us when we felt lost. You didn't just prepare us for an exam; you prepared us for the challenges ahead.
            </p>
            <p>
              Thank you for the dedication, the poetry, and the memories.
            </p>
            <p className="pt-4">Happy Birthday Himanshu Sir ❤️</p>
            <p className="text-right pt-8 text-[var(--color-ink-light)] block">
              With love,<br/>
              JEE Batch 2026-27
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

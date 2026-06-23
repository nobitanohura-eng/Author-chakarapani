import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Credits() {
  const container = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current!.children,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.3,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
          },
        }
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-6 bg-[#252525] text-center relative overflow-hidden text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-white/10 text-4xl font-serif rotate-12">✧</div>
      <div className="absolute bottom-10 right-10 text-white/10 text-5xl font-serif -rotate-12">✦</div>
      <div className="absolute top-1/2 left-1/4 text-white/5 text-2xl font-serif rotate-45">✨</div>
      <div className="absolute top-1/3 right-1/4 text-white/5 text-xl font-serif -rotate-45">✧</div>
      
      <div ref={container} className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <div ref={heartRef} className="text-red-500 text-3xl mb-8 invisible animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">❤️</div>
        
        <p className="text-xs md:text-sm text-white/60 font-light tracking-[0.3em] uppercase mb-6 invisible">
          Concept & Designed by <span className="font-medium text-white tracking-[0.4em] ml-1">Avinash</span>
        </p>
        
        <div className="invisible flex flex-col items-center">
          <p className="text-3xl md:text-5xl font-hand mb-2 tracking-wide text-white/90">
            Dedicated with love
          </p>
          <p className="text-lg md:text-xl font-serif italic text-white/50 mt-2">
            by JEE Batch 2026–27
          </p>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Ending() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    gsap.fromTo(
      container.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
        },
      }
    );

    const createConfetti = () => {
      const colors = ['#D2B48C', '#E2E5DE', '#F5F0E6'];
      for(let i=0; i<30; i++) {
        const conf = document.createElement('div');
        conf.className = 'absolute rounded-sm opacity-60 pointer-events-none';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.width = Math.random() * 10 + 5 + 'px';
        conf.style.height = Math.random() * 10 + 5 + 'px';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.top = -20 + 'px';
        
        container.current?.appendChild(conf);

        gsap.to(conf, {
          y: window.innerHeight,
          x: `+=${Math.random() * 100 - 50}`,
          rotation: Math.random() * 360,
          duration: Math.random() * 3 + 2,
          ease: 'power1.inOut',
          onComplete: () => {
             if (conf.parentNode) conf.parentNode.removeChild(conf);
          }
        });
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: 'top 40%',
      onEnter: createConfetti,
      once: true
    });

    return () => { trigger.kill(); };
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-bg)] overflow-hidden relative">
      <div ref={container} className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        <div className="w-full aspect-[21/9] bg-[var(--color-paper)] p-3 shadow-xl rounded-sm mb-16 transform rotate-1 relative max-w-4xl mx-auto">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 shadow-sm rotate-[-2deg] z-10" />
          <div className="w-full h-full bg-[#e8e8e8] flex items-center justify-center border border-black/5 overflow-hidden">
             <img 
               src="https://drive.google.com/thumbnail?id=1l2O96OcTXh5UfGnoi51PW-ag9MgbQw7u&sz=w2500" 
               alt="Best Group Photo" 
               className="w-full h-full object-cover object-[center_30%]"
             />
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)]">Thank you, Sir.</h2>
          <p className="text-xl md:text-2xl font-light text-[var(--color-ink-light)] italic">
            We are because you believed in us.
          </p>
        </div>

      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !imageRef.current || !textRef.current) return;

    // A smoother ease prevents the "rapid/snappy" start of the animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'power2.out' } });

      tl.fromTo(imageRef.current, 
        { autoAlpha: 0, y: 30, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 2.5 }
      )
      .fromTo(textRef.current!.children,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1.5, stagger: 0.3 },
        "-=1.5" // smooth cascade overlap
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        <div ref={imageRef} className="relative mb-12 group invisible">
          <div className="bg-white p-4 pb-12 shadow-xl shadow-[#3e362e]/5 rounded-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[280px] md:max-w-[360px]">
            <div className="aspect-[3/4] bg-[#f0f0f0] overflow-hidden relative border border-black/5">
              <img 
                src="https://drive.google.com/thumbnail?id=1OzokYmMUWekcQc38qLpHFmMMu311Q1OH&sz=w1000" 
                alt="Himanshu Sir" 
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="font-hand text-2xl text-[var(--color-ink-light)] mt-4 text-center absolute bottom-4 w-full left-0">Our Mentor</p>
          </div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-1 z-10" />
        </div>

        <div ref={textRef} className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] invisible">
            Happy Birthday <br className="md:hidden"/> <span className="italic text-[var(--color-accent)] font-medium">Himanshu Sir <span className="font-sans text-3xl md:text-5xl ml-2">❤️</span></span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-ink-light)] max-w-2xl mx-auto font-light leading-relaxed invisible">
            Thank you for making Mathematics easier, classrooms happier and memories unforgettable.
          </p>
          
          <button 
            onClick={scrollToNext}
            className="mt-8 px-8 py-3 bg-[var(--color-ink)] text-white rounded-full font-medium hover:bg-[var(--color-accent)] transition-colors duration-300 shadow-md invisible"
          >
            Begin Journey
          </button>
        </div>
      </div>
    </section>
  );
}

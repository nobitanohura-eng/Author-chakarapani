import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playPop } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

export default function ClassroomMemories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-[var(--color-bg)]">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-ink)] mb-4">Classroom Memories</h2>
        <p className="font-hand text-2xl text-[var(--color-ink-light)]">Moments captured in time</p>
      </div>
      
      <div ref={gridRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        
        {/* Frame 1: Polaroid */}
        <div 
          onMouseEnter={playPop}
          className="bg-[var(--color-paper)] p-4 md:p-6 md:pb-16 pb-12 shadow-xl shadow-[#3e362e]/5 rounded-sm transform rotate-2 hover:rotate-0 transition-all duration-300 w-full max-w-3xl"
        >
          <div className="aspect-[16/9] bg-[#f5f5f5] flex items-center justify-center border border-black/5 overflow-hidden">
            <img 
              src="https://drive.google.com/thumbnail?id=15-DBkXW_B8BM2WifPKVOIwDVx2cRSelv&sz=w2500" 
              alt="Classroom Memory" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className="font-hand text-2xl text-[var(--color-ink-light)] mt-6 text-center">Those intense problem-solving sessions</p>
        </div>

        {/* Frame 2: Paper with tape */}
        <div 
          onMouseEnter={playPop}
          className="bg-[var(--color-paper)] p-2 shadow-md rounded-sm transform -rotate-2 hover:rotate-0 transition-all duration-300 w-full max-w-2xl relative"
        >
          <div className="absolute -top-4 -left-4 w-16 h-6 bg-white/60 backdrop-blur-sm shadow-sm -rotate-12 z-10" />
          <div className="absolute -bottom-4 -right-4 w-16 h-6 bg-white/60 backdrop-blur-sm shadow-sm -rotate-12 z-10" />
          <div className="aspect-[16/9] bg-[#eaeaeb] flex items-center justify-center border border-black/5 overflow-hidden group">
            <img 
              src="https://drive.google.com/thumbnail?id=1l2O96OcTXh5UfGnoi51PW-ag9MgbQw7u&sz=w2500" 
              alt="Group Photo" 
              className="w-full h-full object-cover object-[80%_center] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Frame 2.5: Additional Memory */}
        <div 
          onMouseEnter={playPop}
          className="bg-[var(--color-paper)] p-3 md:p-4 shadow-lg shadow-[#3e362e]/5 rounded-sm transform rotate-2 hover:rotate-0 transition-all duration-300 w-full max-w-3xl"
        >
          <div className="aspect-[16/9] bg-[#f0f0f0] flex items-center justify-center border border-black/5 overflow-hidden group">
             <img 
              src="https://drive.google.com/thumbnail?id=1mLeTqHoD8FC_uqt2tr_4Jum6ta0vw0xB&sz=w2500" 
              alt="Classroom Memory" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Frame 3: Polaroid */}
        <div 
          onMouseEnter={playPop}
          className="bg-[var(--color-paper)] p-4 md:p-6 md:pb-16 pb-12 shadow-xl shadow-[#3e362e]/5 rounded-sm transform -rotate-3 hover:rotate-0 transition-all duration-300 w-full max-w-4xl"
        >
          <div className="aspect-[16/9] bg-[#f0f0f0] flex items-center justify-center border border-black/5 overflow-hidden group">
             <img 
              src="https://drive.google.com/thumbnail?id=12nT_jq0gDYUW0ct586SLunvV0kpsmzSG&sz=w2500" 
              alt="Selfie" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <p className="font-hand text-2xl text-[var(--color-ink-light)] mt-6 text-center">Smiling after a tough test</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl items-center justify-center">
          {/* Frame 4: Simple border */}
          <div 
            onMouseEnter={playPop}
            className="bg-[var(--color-paper)] p-2 shadow-lg rounded-sm transform rotate-1 hover:rotate-0 transition-all duration-300 w-full max-w-lg"
          >
            <div className="aspect-video bg-[#eae8e3] flex items-center justify-center border border-black/5 overflow-hidden group">
               <img 
                src="https://drive.google.com/thumbnail?id=1qk01HHV4Dua3EnmC5WTnGgzMHHvVkbB-&sz=w1500" 
                alt="Award Achievement" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="font-hand text-xl text-[var(--color-ink-light)] mt-2 text-center">Proud moments</p>
          </div>

          {/* Frame 5: Additional Proud Moment */}
          <div 
            onMouseEnter={playPop}
            className="bg-[var(--color-paper)] p-2 shadow-lg rounded-sm transform -rotate-2 hover:rotate-0 transition-all duration-300 w-full max-w-lg"
          >
            <div className="aspect-video bg-[#eae8e3] flex items-center justify-center border border-black/5 overflow-hidden group">
               <img 
                src="https://drive.google.com/thumbnail?id=1LbjwjY8duC_EV0GiBoALnjOavcVYgdpd&sz=w1500" 
                alt="Another Proud Moment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="font-hand text-xl text-[var(--color-ink-light)] mt-2 text-center">Cherished memories</p>
          </div>
        </div>

      </div>
    </section>
  );
}

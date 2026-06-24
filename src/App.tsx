import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import AboutSir from './components/AboutSir';
import FirstDay from './components/FirstDay';
import ThingsWeNeverForget from './components/ThingsWeNeverForget';
import ClassroomMemories from './components/ClassroomMemories';
import AuthorCorner from './components/AuthorCorner';
import StudentWishes from './components/StudentWishes';
import Letter from './components/Letter';
import Ending from './components/Ending';
import Credits from './components/Credits';
import { playChime } from './utils/audio';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    playChime();
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Low volume for background ambiance
      audioRef.current.play().catch((e) => console.log('Audio playback prevented', e));
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Gymnopedie_No_1.ogg" 
        loop 
      />
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg)] cursor-pointer"
            onClick={handleEnter}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-6xl drop-shadow-md">🎁</div>
              <p className="font-serif text-xl text-[var(--color-ink)] font-medium tracking-wide">Tap to Open</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`bg-[var(--color-bg)] text-[var(--color-ink)] min-h-screen font-sans overflow-x-hidden ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}>
        {hasEntered && (
          <>
            <Hero />
            <AboutSir />
            <FirstDay />
            <ThingsWeNeverForget />
            <ClassroomMemories />
            <AuthorCorner />
            <StudentWishes />
            <Letter />
            <Ending />
            <Credits />
          </>
        )}
      </div>
    </>
  );
}

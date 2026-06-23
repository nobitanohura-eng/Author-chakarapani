import { useEffect } from 'react';
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

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-ink)] min-h-screen font-sans overflow-x-hidden">
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
    </div>
  );
}

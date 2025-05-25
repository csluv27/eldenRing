import './App.css';
import { useState, useEffect } from 'react';
export default function App() {
  const [showTop, setShowTop] = useState(true);
  useEffect(() => {
    const handleWheel = (e: { deltaY: number; }) => {
      if (e.deltaY > 0) {
        setShowTop(false);
      } else if (e.deltaY < 0) {
        setShowTop(true);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="section-container w-full h-[72vh] overflow-hidden">
  
        <video
          src="./mainPage/videoChude.mp4"
          autoPlay
          muted
          loop
          className={`w-screen fixed mt-36 h-auto object-cover pointer-events-none transition-transform duration-400 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-19'}`}
        />


    </section >
  );
}

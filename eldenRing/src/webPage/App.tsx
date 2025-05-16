
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
    <section className="section-container relative w-full h-[200vh] overflow-x-hidden">
      <div className='video-fixed relative'>

        <video
          src="./videoChude.mp4"
          autoPlay
          muted
          loop
          className={`w-screen fixed mt-36 h-auto object-cover pointer-events-none transition-transform duration-400 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-19'}`}
        />
      </div>

      <div
        className="z-2 h-full flex relative mt-201 w-screen items-end justify-center relative-content"
        style={{
          backgroundImage: "url('/erbackground2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >


        <img
          src="./eldenring_new.png"
          alt="Elden Ring"
          className="w-full max-w-3xl z-2 object-contain pointer-events-none absolute top-[-120px] eldenring-background"
        />
        <div className="text-white  absolute top-40 text-center z-2 flex flex-col">
          <h2 className='font-bold text-5xl mb-6'>ELDEN RING</h2>
          <div className='flex flex-row gap-8 text-[13px]'>
            <span><span className='text-[#c19d53]'>Release Date:</span> 25/02/2022</span>
            <span><span className='text-[#c19d53]'>Genres:</span> RPG</span>
            <span><span className='text-[#c19d53]'>Developer:</span> FromSoftware, Inc</span>

          </div>
        </div>

      </div>
    </section>
  );
}

import './App.css';
import { useState, useEffect } from 'react';

export default function App() {

  const [showTop, setShowTop] = useState(true);
  useEffect(() => {
    const handleWheel = (e: { deltaY: number; }) => {
      if (e.deltaY > 0) {
        setShowTop(false); // Cuộn xuống => Ẩn header
      } else if (e.deltaY < 0) {
        setShowTop(true); // Cuộn lên => Hiện header
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="relative w-full h-[200vh] overflow-x-hidden">
      {/* VIDEO NỀN FIXED */}
      <div className={`transition-transform duration-200 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-3'}`}>

        <video
          src="./videoChude.mp4"
          autoPlay
          muted
          loop
          className="fixed mt-32 w-screen h-fit overflow-clip  object-cover z-0 pointer-events-none"
        />
      </div>


      
      <div
        className="z-[-1]  h-full  flex w-screen items-end justify-center"
        style={{
          backgroundImage: "url('/erbackground2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
       
        }}
      >
      <img
        src="./eldenring_new.png"
        alt="Elden Ring"
        className="w-full max-w-4xl object-contain z-11 pointer-events-none absolute top-170"
      />
      </div>



    </section >
  );
}


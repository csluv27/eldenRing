import React, { useEffect, useRef, useState } from 'react';

function DetailP() {
  const [showBackground, setShowBackground] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0;
      const triggerPoint = window.innerHeight * 1;

      // Khi phần detail tiến vào 80% chiều cao màn hình → bắt đầu hiện nền
      if (sectionTop < triggerPoint) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[150vh] w-13/15 overflow-hidden">
      {/* Nền parallax cố định nhưng chỉ hiện khi tới phần Detail */}
      <img
        src="./godfrey.jpg"
        alt=""
        className={`fixed top-0 left-0 w-full h-full object-cover transition-opacity  ease-in-out z-1 ${showBackground ? 'opacity-100' : 'opacity-0'
          }`}
      />

      <div className="relative z-10 text-white flex top-0 left-50 p-25 flex-col">

        <div className=''>
          <div className='flex flex-row gap-12'>
            <video src="./feature/1.webm" autoPlay loop muted className='w-[45%]'></video>
            <div className='flex flex-col gap-10 w-[45%]'>
                <h2 className='relative'>
    <span className='block bg-[#c19d53] text-[25px] font-bold py-[10px] pl-[80px] pr-[20px] ml-[-80px] w-fit'>
      A NEW FANTASY WORLD
    </span>
  </h2>
              <span className='text-[16px] break-words'>
                Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of the New York Times best-selling fantasy series, A Song of Ice and Fire.
              </span>
              <span className='text-[16px] break-words'>
                Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DetailP;

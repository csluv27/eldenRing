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
    <section ref={sectionRef} className="relative h-[150vh]">
      {/* Nền parallax cố định nhưng chỉ hiện khi tới phần Detail */}
      <img
        src="./godfrey.jpg"
        alt=""
        className={`fixed top-0 left-0 w-full h-full object-cover transition-opacity  ease-in-out z-1 ${
          showBackground ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Nội dung có parallax cuộn lên */}
      <div className="relative z-10 text-white text-6xl font-bold flex items-center justify-center h-screen">
        Hello World
      </div>
    </section>
  );
}

export default DetailP;

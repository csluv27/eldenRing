import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Header() {
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
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null); // 'universe' | 'news' | null
  return (
    <header className="fixed top-0 left-0 w-full z-50">


      <div className={`transition-transform duration-400 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Top bar */}
        <div className="bg-black h-18 w-full flex items-center justify-end px-10 space-x-9 z-10 ">
          <FontAwesomeIcon icon={faUser} className="text-white text-xl cursor-pointer" />
          <img src="./header/vietnam.png" alt="Vietnam" className="max-h-6 object-contain cursor-pointer" />
          <svg className='max-h-12 object-contain w-auto cursor-pointer'
            id="be453618-7c74-4c2c-8cd1-f86f1901c5ba"
            width="73"
            height="44"
            viewBox="0 0 548.3461 321.364"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style type="text/css">
                {`.fb7ac6eb-7c8d-4eba-9864-f6986c420ed2 { fill: #e9001a; }
              .a2b266a9-7361-4f5c-9e6c-557429b16934 {
                fill: none;
                stroke: #e9001a;
                stroke-miterlimit: 10;
                stroke-width: 15px;
              }`}
              </style>
            </defs>
            <title>Bandai Namco Holdings stacked logo (2022)</title>
            <desc>Japanese media conglomerate formed from the merger of Bandai and Namco in 2005</desc>
            <path className="fb7ac6eb-7c8d-4eba-9864-f6986c420ed2" d="m548.346 24.68v235.874c0.0221 13.64601-11.03397 24.72002-24.68 24.72h-441.796v-24.63h441.886v-236.054h-499.166v204.294l57.28 57.61v34.87l-71.82-72.23c-6.438848-6.46788-10.05258-15.22354-10.05-24.35v-195.334c-0.005524166-16.26317 13.17683-29.45 29.44-29.45h494.226c13.63039 0 24.68 11.04961 24.68 24.68z" fill="#e9001a" />
            <path className="a2b266a9-7361-4f5c-9e6c-557429b16934" fill="#ffffff" d="m654.78 160.9478" />
            <path className="a2b266a9-7361-4f5c-9e6c-557429b16934" fill="#ffffff" d="m716.08 160.9478" />
            <g transform="translate(0 -3.598508)">
              <rect x="466.52" y="55.74" width="17.32" height="79.65" fill="#ffffff" />
              <path fill="#ffffff" d="m191.08 61.77a12.35 12.35 0 0 0-22.81 0l-30.44 73h18.76l7.27-17.46h31.63l7.27 17.46h18.76zm-21.57 42 10.16-24.38 10.16 24.38z" />
              <path fill="#ffffff" d="m189.3819 158.4621a12.20491 12.35 0 0 0-22.54202 0l-30.08239 73h18.52972l7.19448-17.46h31.26829l7.18459 17.46h18.50995zm-21.32647 42.02 10.04064-24.38 10.04064 24.38z" stroke-width=".994109" />
              <path fill="#ffffff" d="m431.18 61.77a12.35 12.35 0 0 0-22.81 0l-30.44 73h18.76l7.31-17.41h31.63l7.27 17.46h18.76zm-21.56 42 10.15-24.38 10.16 24.38z" />
              <path fill="#ffffff" d="m132.8144 152.4321v69.46c0 10.89-13.83553 15.29-20.0121 6.35l-31.62406-46.07v49.91h-17.14617v-68.74c0-11.18 14.23083-15.69 20.54576-6.52l31.12994 45.3v-49.69z" stroke-width=".994109" />
              <path fill="#ffffff" d="m295.45 55.74v69.46c0 10.89-14 15.29-20.25 6.35l-32-46.07v49.91h-17.35v-68.74c0-11.18 14.4-15.69 20.79-6.52l31.5 45.3v-49.69z" />
              <g stroke-width=".994109">
                <path fill="#ffffff" d="m442.7895 233.4721c-29.08425 0-43.90803-19.86-43.90803-40.63 0-24.25 20.2394-41.56 43.34472-41.56 25.1016 0 43.82897 15 43.82897 42.19-0.0297 21.31-16.48404 40-43.26566 40zm24.60747-40.58c0.0988-15.56-9.7837-26.11-23.48087-27-13.2821-0.85-25.98114 10.92-26.01078 26.6 0 15 10.87077 26.8 24.70629 26.87 14.25059 0.07 24.647-11.07 24.75571-26.47z" />
                <path fill="#ffffff" d="m365.3006 219.3621c-13.88494-0.08-24.78535-11.89-24.70629-26.87 0-15.68 12.7188-27.45 26.0009-26.6a24.12323 24.41 0 0 1 18.69773 10.28l10.64347-14.24c-7.79731-7-18.6582-10.65-31.06076-10.65-23.09544 0-43.34472 17.31-43.34472 41.56 0 20.77 14.82377 40.63 43.91791 40.63 12.46185 0 22.6705-4 30.04285-10.48l-10.40629-13.66a23.55004 23.83 0 0 1-19.7848 10.03z" />
                <path fill="#ffffff" d="m310.5317 232.0821h-17.11652v-50.3l-17.46241 26.24a10.78183 10.91 0 0 1-17.88736 0l-17.46241-26.24v50.3h-17.11652v-69c0-12.93 15.5452-14.64 22.25543-4.56l21.26718 31.94 21.26718-31.94c6.71023-10.08 22.25543-8.37 22.25543 4.56z" />
              </g>
              <path fill="#ffffff" d="m339.55 55.74h-21.43a6.86 6.86 0 0 0-6.85 6.86v65.93a6.86 6.86 0 0 0 6.85 6.86h23.74c25.39 0 39.24-19.62 39.24-40.4 0-23.09-16.16-39.25-41.55-39.25zm0 65.69h-11v-50.91h11c12.7 0 23.08 8.31 23.08 25.63 0 15-11.54 25.28-23.08 25.28z" />
              <path fill="#ffffff" d="m131.82 75.37c0-10.91-10.15-19.63-22.85-19.63h-37.58a6.86 6.86 0 0 0-6.86 6.86v65.93a6.86 6.86 0 0 0 6.86 6.86h44.51c13.17 0 20.44-10.51 20.44-21.3 0-12.17-8.75-17.4-17.29-19.6 9.72-4.09 12.77-9.59 12.77-19.12zm-28.12-4.84c6.8 0 10 3.27 10 8.47 0 4.47-2.73 9.73-10 9.73h-21.86v-18.21zm14.17 41.14c0 4.6-2.75 9.76-11.21 9.76h-24.82v-19.51h25.37c8.1 0 10.66 4.69 10.66 9.75z" />
            </g>
            <style type="text/css">
              {`
        .st0 { fill: #E9001A; }
        .st1 {
          fill: none;
          stroke: #E9001A;
          stroke-width: 15;
          stroke-miterlimit: 10;
        }
      `}
            </style>
          </svg>

        </div>

        {/* Line màu — chồng lên top bar */}
        <div className="absolute w-3/5 right-0 top-17 h-1 flex overflow-hidden z-20">
          <div className="flex-1 bg-[#c19d53] rounded-s-full" />
          <div className="flex-1 bg-blue-300" />
          <div className="flex-1 bg-green-800" />
          <div className="flex-1 bg-yellow-500" />
          <div className="flex-1 bg-red-400" />

        </div>
      </div>

      <div className={`transition-transform duration-400 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className={`flex flex-row justify-between z-50 w-full transition-all duration-300`}>
          <ul className="bg-black h-18 w-full flex items-center px-12 ">
            <img src="./header/eldenring_new.png" alt="" className="max-h-15 object-contain mr-15 transform hover:scale-110 transition-transform duration-500 cursor-pointer" />

            <ul className="hidden lg:flex space-x-8 w-2/3 text-white text-lg">
              <li className="relative group inline-block">
                <div className="flex items-center space-x-1 text-white cursor-pointer">
                  <span className='pt-6 pb-6  hover:text-[#c19d53] transition-all duration-500'>Universe</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-sm group-hover:rotate-180  transition-transform duration-400 text-[#c19d53]"
                  />
                </div>
                <div className="absolute top-full left-0 w-70 bg-black text-white 
                  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                  transition-all duration-200 z-50">
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Elden Ring</div>
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Shadow of the Erdtree (DLC)</div>
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Elden Ring Tarnished Edition</div>
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Elden Ring Nightreign</div>
                </div>
              </li>

              <li className="relative group inline-block">
                <div className="flex items-center space-x-1 text-white cursor-pointer">
                  <span className='pt-6 pb-6  hover:text-[#c19d53] transition-all duration-500'>News</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-sm group-hover:rotate-180 text-[#c19d53] transition-transform duration-400"
                  />
                </div>

                <div className="absolute top-full left-0 w-60 bg-black text-white 
                  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                  transition-all duration-200 z-50">
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Elden Ring Wiki</div>
                  <div className="px-4 py-2 hover:text-[#c19d53] cursor-pointer ">Nightreign Wiki</div>
                </div>
              </li>

              <li className="flex items-center space-x-1 cursor-pointer ">
                <span className=' hover:text-[#c19d53] transition-all duration-500'>Character</span>
              </li>

              <li className="flex items-center space-x-1 cursor-pointer ">
                <span className=' hover:text-[#c19d53] transition-all duration-500'>About</span>
              </li>

            </ul>
            <ul className="hidden lg:flex bg-black text-white w-1/3 h-18 items-center  ml-auto justify-end gap-6">
              <button className="text-white text-2xl cursor-pointer hover:text-[#c19d53]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button className=" text-white border bg-[#c19d53] border-solid border-[#c19d53] font-semibold  text-[15px] px-7 py-2 rounded cursor-pointer hover:bg-black hover:text-[#c19d53] transition">
                BUY NOW
              </button>
            </ul>

            <div className="flex lg:hidden ml-auto items-center  gap-7 pr-6">
               <button className="text-white text-xl hover:text-[#c19d53]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}>
                <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
              </button>
            </div>
          </ul>


        </div>
          {isMobileMenuOpen && (
        <div className={`transition-transform absolute flex flex-col top-15 left-0 w-full text-[16px] bg-black text-white z-[999] pl-13 pr-18 py-6 duration-400 ease-in-out ${showTop ? 'translate-y-0' : '-translate-y-3'}`}>
        
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl">
              ✕
            </button>
          </div>

          <div className="space-y-4 mt-4">
            {/* Universe menu */}
            <div>
              <div
                className="hover:text-[#c19d53] cursor-pointer flex justify-between items-center"
                onClick={() => setOpenSubMenu(openSubMenu === 'universe' ? null : 'universe')}
              >
                Universe
                <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${openSubMenu === 'universe' ? 'rotate-180' : ''}`} />
              </div>
              {openSubMenu === 'universe' && (
                <div className="pl-4 space-y-2 mt-2">
                  <div className="hover:text-[#c19d53] cursor-pointer">Elden Ring</div>
                  <div className="hover:text-[#c19d53] cursor-pointer">Shadow of the Erdtree</div>
                  <div className="hover:text-[#c19d53] cursor-pointer">Tarnished Edition</div>
                  <div className="hover:text-[#c19d53] cursor-pointer">Nightreign</div>
                </div>
              )}
            </div>

            {/* News menu */}
            <div>
              <div
                className="hover:text-[#c19d53] cursor-pointer flex justify-between items-center"
                onClick={() => setOpenSubMenu(openSubMenu === 'news' ? null : 'news')}
              >
                News
                <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${openSubMenu === 'news' ? 'rotate-180' : ''}`} />
              </div>
              {openSubMenu === 'news' && (
                <div className="pl-4 space-y-2 mt-2">
                  <div className="hover:text-[#c19d53] cursor-pointer">Elden Ring Wiki</div>
                  <div className="hover:text-[#c19d53] cursor-pointer">Nightreign Wiki</div>
                </div>
              )}
            </div>

            <div className="hover:text-[#c19d53] cursor-pointer">Character</div>
            <div className="hover:text-[#c19d53] cursor-pointer">About</div>

            {/* Buttons section aligned right */}
            <div className="pt-4 mt-4 flex justify-center space-x-4">
             
              <button className="text-white border bg-[#c19d53] border-solid border-[#c19d53] font-semibold text-[15px] px-5 py-2 rounded hover:bg-black hover:text-[#c19d53] transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}
      </div>


    </header>

  );
}

export default Header;

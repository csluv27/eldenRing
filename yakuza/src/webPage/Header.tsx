import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="relative w-full z-50">

      <div className="bg-black h-16 w-full flex items-center justify-end px-20 space-x-9">
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
        <img src="./vietnam.png" alt="Vietnam" className="max-h-6 object-contain" />
        <img src="./logo_sega.png" alt="Sega" className="max-h-9 object-contain" />
      </div>

      <div className="absolute left-0 right-0 top-16 flex justify-end">
        <div className="h-1 w-5/8 flex rounded-4xl overflow-hidden">
          <div className="flex-1 bg-red-500" />
          <div className="flex-1 bg-orange-300" />
          <div className="flex-1 bg-red-700" />
          <div className="flex-1 bg-green-700" />
          <div className="flex-1 bg-yellow-300" />
          <div className="flex-1 bg-gray-400" />
        </div>
      </div>

      <div className='flex row justify-between'>
        <ul className="bg-black h-20 w-full flex items-center px-30 space-x-9">
          <img src="./logo.webp" alt="Vietnam" className="max-h-16 object-contain mr-15" />
          <ul className="flex space-x-8 text-white text-lg">

            <li className="relative group inline-block">
              {/* Phần hiển thị "Yakuza" + icon */}
              <div className="flex items-center space-x-1 text-white cursor-pointer">
                <span className='pt-6 pb-6  hover:text-gray-400 transition-all duration-500'>Yakuza</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-sm group-hover:rotate-180 text-red-300 transition-transform duration-400"
                />
              </div>
              {/* Menu con xuất hiện khi hover vào group */}
              <div className="absolute top-full left-0 w-54 bg-black text-white 
                  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                  transition-all duration-200 z-50">
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Yakuza 0</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Yakuza Kiwami</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Yakuza Kiwami 2</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Yakuza 6 </div>
              </div>
            </li>

            <li className="relative group inline-block">
              {/* Phần hiển thị "Yakuza" + icon */}
              <div className="flex items-center space-x-1 text-white cursor-pointer">
                <span className='pt-6 pb-6  hover:text-gray-400 transition-all duration-500'>Like A Dragon</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-sm group-hover:rotate-180 text-red-300 transition-transform duration-400"
                />
              </div>
              {/* Menu con xuất hiện khi hover vào group */}
              <div className="absolute top-full left-0 w-70 bg-black text-white 
                  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
                  transition-all duration-200 z-50">
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Like A Dragon: Ishin!</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Like A Dragon Gaiden: The man who erased his name</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Yakuza Like A Dragon</div>
                <div className="px-4 py-2 hover:text-red-300 cursor-pointer ">Like A Dragon: Infinite Wealth </div>
              </div>
            </li>

            <li className="flex items-center space-x-1 cursor-pointer ">
              <span className=' hover:text-gray-400 transition-all duration-500'>Character</span>
            </li>

            <li className="flex items-center space-x-1 cursor-pointer ">
              <span className=' hover:text-gray-400 transition-all duration-500'>About</span>
            </li>

          </ul>
        </ul>


        <ul className="bg-black text-white w-full h-20 flex items-center justify-end px-30 space-x-9">
          <button className="text-white text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className=" text-white border bg-[#c19d53] border-solid border-[#c19d53] font-semibold border- text-lg px-8 py-2 rounded cursor-pointer hover:bg-black hover:text-[#c19d53] transition">
            BUY NOW
          </button>
        </ul>

      </div>


    </header>
  );
}

export default Header;

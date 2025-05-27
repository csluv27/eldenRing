import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react';

const newsList = [
  {
    date: '26 May 2025',
    title: 'Live-Action Film Adaptation Of ELDEN RING Announced',
    desc: '',
    image: '/info/new1.webp'
  },
  {
    date: '11 November 2024',
    title: 'ELDEN RING Shadow of the Erdtree soundtrack available now on Bandai Namco Game Music channels',
    desc: '',
    image: '/info/new2.webp'
  },
  {
    date: '17 October 2024',
    title: 'Elden Ring – Patch Notes Version 1.16',
    desc: '',
    image: '/info/new3.webp'
  },
  {
    date: '02 May 2025',
    title: 'Elden Ring – Patch Notes Version 1.15',
    desc: '',
    image: '/info/new4.webp'
  },
];

function ContentBelow() {
  const [selectedNews, setSelectedNews] = useState(newsList[0]); // tin mặc định bên trái
  return (
    <section className="z-2  flex flex-col relative-content relative h-[475vh] w-13/15 overflow-hidden"
      style={{
        backgroundImage: "url('/background/erbackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >

      <div id="shopNow" className="relative flex flex-col h-[76vh] w-full text-white text-[18px] mb-20">

        <div className="flex absolute flex-row items-center gap-4 top-19 left-22">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[73px] h-[100px]" viewBox="0 0 44.669 60.293" fill="#fff">
            <path d="M44.218,18.8a5.6,5.6,0,0,0-5.6-5.52H33.3V10.961a10.961,10.961,0,0,0-21.923,0v2.322H6.047A5.6,5.6,0,0,0,.444,18.8L0,49.012A5.6,5.6,0,0,0,5.6,54.7H16.738l5.6,5.6,5.6-5.6H39.066a5.6,5.6,0,0,0,5.6-5.687Zm-30.443-7.84a8.559,8.559,0,0,1,17.118,0v2.321H13.775ZM41.346,51.34a3.175,3.175,0,0,1-2.28.954H26.936l-.7.7-3.9,3.9-3.9-3.9-.7-.7H5.6a3.2,3.2,0,0,1-3.2-3.247l.444-30.209a3.214,3.214,0,0,1,3.2-3.153h5.326V20.9h2.4V15.685H30.893V20.9h2.4V15.685h5.321a3.215,3.215,0,0,1,3.2,3.153l.449,30.209a3.175,3.175,0,0,1-.92,2.294" />
          </svg>
          <h2 className="text-white text-4xl font-bold">Shop now</h2>
        </div>

        <div className="flex absolute top-60 flex-row items-center justify-center w-full gap-8">
          {/* LEFT SIDE */}
          <div className="w-4/9 flex flex-col items-end justify-center gap-6">
            <div className="flex flex-row items-center gap-4 ">
              <span className="font-bold">Select your country</span>
              <select className="bg-transparent text-left text-white border border-white rounded pl-3 pr-17 py-4 w-[25rem] hover:border-[#c19d53] hover:text-[#c19d53] cursor-pointer">
                <option className="text-black" value="vn">Vietnam</option>
                <option className="text-black" value="us">United States</option>
                <option className="text-black" value="jp">Japan</option>
                <option className="text-black" value="kr">Korea</option>
                <option className="text-black" value="fr">France</option>
                <option className="text-black" value="de">Germany</option>
                <option className="text-black" value="uk">United Kingdom</option>
              </select>

            </div>

            <div className="flex flex-row items-center gap-4 ">
              <span className="font-bold">Choose edition</span>
              <select className="bg-transparent text-left text-white border border-white rounded  pl-3 pr-17 py-4 w-[25rem] hover:border-[#c19d53] hover:text-[#c19d53] cursor-pointer">
                <option className="text-black" value="ce">Collector's Edition</option>
                <option className="text-black" value="ed">Deluxe Edition</option>
                <option className="text-black" value="pbe">Premium Bundle Edition</option>
                <option className="text-black" value="sote">Shadow of the Erdtree Edition</option>
                <option className="text-black" value="se">Standard Edition</option>
              </select>
            </div>

            <div className="flex flex-row gap-4 mt-5 items-center">
              <span className="font-bold">Choose Platform</span>
              <div className="grid grid-cols-2 gap-4 w-[25rem]">
                <button className="group col-span-1 cursor-pointer text-white border bg-[#c19d53] border-[#c19d53] font-[600] text-[15px] px-12 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                  <img src="/detailPage/xbox.png" alt="Xbox" className="w-6 mr-2" />
                  XBOX
                </button>
                <button className="group col-span-1 cursor-pointer text-white border bg-[#c19d53] border-[#c19d53] font-[600] text-[15px] px-12 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                  PlayStaion 5
                </button>
                <button className="group col-span-1 cursor-pointer   text-white border bg-[#c19d53] border-[#c19d53] font-[600] text-[15px] px-12 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                  PC
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-5/9 flex flex-col items-start justify-center ml-20">
            <img src="/info/bundle.webp" className="w-auto max-w-[71%] h-auto" alt="bundle" />

            <div className="w-auto max-w-[71%] h-[200px] overflow-hidden">
              <img
                src="/info/bundlebg.webp"
                className="w-full object-cover object-top-left"
                alt="bundle background"
              />
            </div>

            <div className="absolute ml-52 mt-104 flex flex-col items-center justify-center gap-4 ">
              <h2 className="font-bold">Collector's Edition</h2>
              <h3 className="text-[14px]">Collector's Edition</h3>
              <button className="group text-white cursor-pointer border bg-[#c19d53] border-[#c19d53] font-[400] text-[20px] pl-4 pr-29 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCompactDisc}
                  className="text-xl mr-20 group-hover:text-[#c19d53] transition"
                />
                PHYSICAL
              </button>
            </div>
          </div>
        </div>

      </div>

      <div id="wishlist" className="relative bg-[#c19d53] text-white flex items-center justify-center h-[38vh] w-full overflow-hidden mb-10">
        <div className="absolute inset-[-150] flex flex-wrap rotate-[70deg] opacity-30 z-0" style={{ pointerEvents: 'none' }}>
          {Array.from({ length: 100 }).map((_, i) => (
            <img
              key={i}
              src="/info/shapes-pattern.svg"
              alt=""
              style={{
                width: '10vw',
                minWidth: '300px',

              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(circle at 50% -30%, rgba(255,255,255,0.3), transparent 70%)',
          pointerEvents: 'none',
        }}></div>

        <div className="z-20 text-center px-4">
          <h2 className="text-4xl font-bold">Wishlist on your favourite platform</h2>
          <p className="text-[16px] mt-[40px]">Wishlist now to stay tuned for the latest updates about this video game! </p>
          <div className="grid grid-cols-3 gap-x-12 items-center justify-center  mt-[40px] w-full max-w-[1200px] mx-auto">
            <button className="group grid-cols-1 cursor-pointer whitespace-nowrap min-w-max text-[#c19d53] border bg-white border-[#c19d53] font-[500] text-[16px] px-5 py-[15px] rounded hover:bg-transparent hover:border-white hover:text-white transition flex items-center justify-center">
              <img src="/info/ps.png" className="w-6 mr-20 group-hover:invert group-hover:brightness-0 transition" />
              PlayStaion
              <img src="/info/external.png" className="w-4 ml-20 group-hover:invert group-hover:brightness-0 transition" />
            </button>
            <button className="group grid-cols-1 cursor-pointer whitespace-nowrap min-w-max text-[#c19d53] border bg-white border-[#c19d53] font-[500] text-[16px] px-5 py-[15px] rounded hover:bg-transparent hover:border-white hover:text-white transition flex items-center justify-center">
              <img src="/info/xbox.png" className="w-6 mr-20 group-hover:invert group-hover:brightness-0 transition" />
              Xbox X/S
              <img src="/info/external.png" className="w-4 ml-20 group-hover:invert group-hover:brightness-0 transition" />
            </button>
            <button className="group grid-cols-1 cursor-pointer whitespace-nowrap min-w-max text-[#c19d53] border bg-white border-[#c19d53] font-[500] text-[16px] px-5 py-[15px] rounded hover:bg-transparent hover:border-white hover:text-white transition flex items-center justify-center">
              <img src="/info/steam.png" className="w-6 mr-20 group-hover:invert group-hover:brightness-0 transition" />
              Steam PC
              <img src="/info/external.png" className="w-4 ml-20 group-hover:invert group-hover:brightness-0 transition" />
            </button>
          </div>
        </div>
      </div>

      <div id="about" className="relative h-[160vh] items-center flex flex-col text-white">
        <div className="max-w-[105vh] px-4">
          <img src="/info/erborder.png" alt="" />
          <h2 className="font-bold text-4xl text-[#c19d53] text-center mt-15 mb-7">Tarnished of the Lands Between</h2>
          <div className="text-center text-[16px] flex flex-col items-center justify-center gap-4">
            <p>The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the Elden Ring squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.</p>
            <p>As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.</p>
            <p>This is the world of ELDEN RING. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.</p>
            <p>In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.</p>
            <p>Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the Elden Ring.</p>
          </div>
          <img src="/info/erborder.png" className="mt-23" alt="" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mt-10">
          <img src="/info/1.webp" className="w-[30%]" alt="" />
          <img src="/info/2.webp" className="w-[30%]" alt="" />
          <img src="/info/3.webp" className="w-[30%]" alt="" />
        </div>
        <div className="max-w-[105vh] px-4">
          <img src="/info/erborder.png" className="mt-10" alt="" />

          <div className="text-center mt-15 text-[16px] flex flex-col items-center justify-center gap-4">
            <p >The guidance of lost graces – should you find them - will put you on a road to re-take these lands from the Demigods through might and magic, but you need not follow their path.</p>
            <p>The choice is yours. Do you crave power, or do you seek understanding? Decide for yourself, then build your character as you see fit.</p>
            <p>Try dozens of skills and find one to best suit your style. Practice stealth to avoid danger or catch enemies unaware. Use the environment, the weather, and the time of day to gain an advantage. Learn the art of combat , where you must read your enemy’s intentions and a well-timed dodge or parry could be the difference between life and death. Ride your steed into battle against mounted mercenaries and cut them from their horses. Master arcane spells from the masters that still linger among the ruins of the war. Summon familiar spirits to even the odds against you or call on your fellow Tarnished to fight at your side and share the burden as you explore. Or, delve into the complex, bloody history of the Shattering and discover the lost secrets of the Demigods and their kin. All these paths are possible, and more.</p>
            <p>Ultimately, your journey will be defined by the strength of your own ambition. The greater your goals, the greater the challenge will be. Should you choose to claim the Lands Between as your birthright then yes, you must fight.</p>
            <p className="font-bold">And yes, you may die.</p>
            <p className="font-bold">But you will return to fight again.</p>
            <p className="font-bold">For that is how a champion – or a Lord – is born.</p>
            <img src="/info/ercoma.png" className="mt-23" alt="" />
          </div>
        </div>
      </div>

      <div id="news" className="relative h-[80vh] mx-22 flex flex-col text-white">
        <div id="news" className="relative h-[100vh] flex flex-col text-white">
          <div className="flex flex-row text-right">
            <h2 className="text-white text-4xl mb-10 font-bold">News</h2>
          </div>
          <div className="flex flex-row w-full gap-10">
            {/* Left section (hiển thị theo state) */}
            <div className="w-3/5 group overflow-hidden cursor-pointer h-auto hover:bg-black hover:text-white">
              <div className="h-auto w-full overflow-hidden object-cover">
                <img
                  src={selectedNews.image}
                  className="group-hover:scale-110 w-full h-auto transition-transform duration-500"
                  alt=""
                />
              </div>
              <div className="bg-white flex flex-col text-black w-full h-55 px-10 py-5 group-hover:bg-[#7f8b84] group-hover:text-white transition-colors duration-500">
                <span className="text-[10px] font-[400] mb-5">{selectedNews.date}</span>
                <h2 className="text-[24px] text-[#c19d53] font-bold">{selectedNews.title}</h2>
                <span className="text-[16px] text-[#f28430] mt-auto text-right">Learn more</span>
              </div>
            </div>

            {/* Right section (click để đổi state) */}
            <div className="w-2/5 flex flex-col gap-4">
              <div className="grid grid-rows-4 gap-4">
                {newsList.map((item, index) => {
                  const isActive = item.title === selectedNews.title; // hoặc item.id nếu có id

                  return (
                    <div
                      key={index}
                      className={`flex flex-row grid-rows-1 group w-full cursor-pointer ${isActive ? 'bg-[#c19d53] text-white' : ''
                        }`}
                      onClick={() => setSelectedNews(item)}
                    >
                      <img src={item.image} className="w-[40%]" alt="" />
                      <div
                        className={`w-full h-auto px-5 py-2 ${isActive
                          ? 'bg-[#c19d53] text-white'
                          : 'bg-white text-black group-hover:bg-[#999999]'
                          }`}
                      >
                        <span className="text-[12px] font-[400] mb-5">{item.date}</span>
                        <h2 className="text-[16px]">{item.title}</h2>
                      </div>
                    </div>
                  );
                })}

              </div>

              <div className="mt-auto">
                <button className="group cursor-pointer text-white border bg-[#c19d53] border-[#c19d53] font-[500] text-[15px] px-16 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                  SEE ALL NEWS!
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div id="subscribe" className="relative h-[56vh] flex flex-col gap-10 text-white">
        <div>
          <div className="relative w-full h-full">
            <img src="./detailPage/erBorder.png" className='z-1 absolute top-[-2.5rem] h-auto' alt="" />
            <img src="/info/missnews.jpg" className="object-cover w-full h-auto" alt="" />
            <img src="./detailPage/erBorder.png" className='z-1 absolute right-[-43rem] top-65 h-auto' alt="" />
            {/* left */}

            <div className="absolute top-0 left-0 w-full h-full flex flex-col px-22 pt-20 ">
              <span className="font-bold text-4xl">Don't miss any news</span>
              <span className="font-[500] text-[18px] mt-2">Get the latest updates from our products and services</span>

              <div className="flex flex-row gap-4 mt-5">
                <input
                  type="text"
                  placeholder="Your email"
                  className="border border-gray-300 text-gray-600 bg-white text-[14px] px-4 py-3 rounded w-150"
                />
                <button className="group cursor-pointer whitespace-nowrap min-w-max text-white border bg-[#c19d53] border-[#c19d53] font-[500] text-[14px] px-10 py-[10px] rounded hover:bg-transparent hover:border-[#c19d53] hover:text-[#c19d53] transition flex items-center justify-center">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* right */}
            <div className="absolute bg-[#c19d53] top-0 right-0 w-2/5 h-[300px] flex flex-col gap-5 px-22 pt-20">
              <span className="font-bold text-4xl">Follow us</span>
              <span className="font-[500] text-[18px]">Become part of the community</span>
              <div className="flex flex-row gap-7">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5.3125,1l-3.3125,8.8125v33.1875h11v6h7.40625l6,-6h9l12.59375,-12.5625v-29.4375zM11,6h32v22l-6,6h-12l-6,6v-6h-8zM20,13v14h6v-14zM30,13v14h6v-14z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37.72,33l-3.73,-0.01c0,0 -0.08,0.01 -0.21,0.01c-0.3,0 -0.92,-0.08 -1.65,-0.58c-1.31,-0.91 -2.56,-3.17 -3.55,-3.17c-0.07,0 -0.13,0.01 -0.19,0.03c-0.86,0.27 -1.12,1.13 -1.12,2.18c0,0.37 -0.26,0.54 -0.96,0.54h-1.93c-2.16,0 -4.25,-0.05 -6.6,-2.62c-3.46,-3.79 -6.7,-10.53 -6.7,-10.53c0,0 -0.18,-0.39 0.01,-0.62c0.18,-0.21 0.6,-0.23 0.76,-0.23c0.04,0 0.06,0 0.06,0h4c0,0 0.37,0.07 0.64,0.27c0.23,0.17 0.35,0.48 0.35,0.48c0,0 0.68,1.32 1.53,2.81c1.43,2.46 2.2,3.28 2.75,3.28c0.09,0 0.18,-0.02 0.27,-0.07c0.82,-0.45 0.58,-4.09 0.58,-4.09c0,0 0.01,-1.32 -0.42,-1.9c-0.33,-0.46 -0.96,-0.59 -1.24,-0.63c-0.22,-0.03 0.14,-0.55 0.62,-0.79c0.62,-0.3 1.65,-0.36 2.89,-0.36h0.6c1.17,0.02 1.2,0.14 1.66,0.25c1.38,0.33 0.91,1.62 0.91,4.71c0,0.99 -0.18,2.38 0.53,2.85c0.05,0.03 0.12,0.05 0.21,0.05c0.46,0 1.45,-0.59 3.03,-3.26c0.88,-1.52 1.56,-3.03 1.56,-3.03c0,0 0.15,-0.27 0.38,-0.41c0.22,-0.13 0.22,-0.13 0.51,-0.13h0.03c0.32,0 3.5,-0.03 4.2,-0.03h0.08c0.67,0 1.28,0.01 1.39,0.42c0.16,0.62 -0.49,1.73 -2.2,4.03c-2.82,3.77 -3.14,3.49 -0.8,5.67c2.24,2.08 2.7,3.09 2.78,3.22c0.93,1.54 -1.03,1.66 -1.03,1.66z"></path></g></g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M25.12,6.946c-2.424,-1.948 -6.257,-2.278 -6.419,-2.292c-0.256,-0.022 -0.499,0.123 -0.604,0.357c-0.004,0.008 -0.218,0.629 -0.425,1.228c2.817,0.493 4.731,1.587 4.833,1.647c0.478,0.278 0.638,0.891 0.359,1.368c-0.185,0.318 -0.52,0.496 -0.864,0.496c-0.171,0 -0.343,-0.043 -0.501,-0.135c-0.028,-0.017 -2.836,-1.615 -6.497,-1.615c-3.662,0 -6.471,1.599 -6.499,1.615c-0.477,0.277 -1.089,0.114 -1.366,-0.364c-0.277,-0.476 -0.116,-1.087 0.36,-1.365c0.102,-0.06 2.023,-1.158 4.848,-1.65c-0.218,-0.606 -0.438,-1.217 -0.442,-1.225c-0.105,-0.235 -0.348,-0.383 -0.604,-0.357c-0.162,0.013 -3.995,0.343 -6.451,2.318c-1.284,1.186 -3.848,8.12 -3.848,14.115c0,0.106 0.027,0.209 0.08,0.301c1.771,3.11 6.599,3.924 7.699,3.959c0.007,0.001 0.013,0.001 0.019,0.001c0.194,0 0.377,-0.093 0.492,-0.25l1.19,-1.612c-2.61,-0.629 -3.99,-1.618 -4.073,-1.679c-0.444,-0.327 -0.54,-0.953 -0.213,-1.398c0.326,-0.443 0.95,-0.541 1.394,-0.216c0.037,0.024 2.584,1.807 7.412,1.807c4.847,0 7.387,-1.79 7.412,-1.808c0.444,-0.322 1.07,-0.225 1.395,0.221c0.324,0.444 0.23,1.066 -0.212,1.392c-0.083,0.061 -1.456,1.048 -4.06,1.677l1.175,1.615c0.115,0.158 0.298,0.25 0.492,0.25c0.007,0 0.013,0 0.019,-0.001c1.101,-0.035 5.929,-0.849 7.699,-3.959c0.053,-0.092 0.08,-0.195 0.08,-0.301c0,-5.994 -2.564,-12.928 -3.88,-14.14zM11,19c-1.105,0 -2,-1.119 -2,-2.5c0,-1.381 0.895,-2.5 2,-2.5c1.105,0 2,1.119 2,2.5c0,1.381 -0.895,2.5 -2,2.5zM19,19c-1.105,0 -2,-1.119 -2,-2.5c0,-1.381 0.895,-2.5 2,-2.5c1.105,0 2,1.119 2,2.5c0,1.381 -0.895,2.5 -2,2.5z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative w-full h-full">
            <img src="./detailPage/erBorder.png" className='z-1 absolute top-[-2.5rem] h-auto' alt="" />
            <img src="/info/erdtree.jpg" alt="" />
            <img src="./detailPage/erBorder.png" className='z-1 absolute right-[-43rem] top-65 h-auto' alt="" />
            <div className="absolute top-0 left-0  flex flex-col gap-5 m-auto justify-center items-center w-full h-full ">
              <span className="font-bold text-4xl">Seek for help?</span>
              <span className="font-[500] text-[18px]">We may have a solution for you!</span>
              <button className="group cursor-pointer whitespace-nowrap min-w-max text-white border bg-[#c19d53] border-[#c19d53] font-[400] text-[14px] px-10 py-[15px] rounded hover:bg-transparent hover:border-[#c19d53] hover:text-[#c19d53] transition flex items-center justify-center">
                ASK THE SUPPORT TEAM
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="systemRequirements" className="relative h-[45vh] mx-22 mt-22 flex flex-col text-white">
        <h2 className="font-bold text-4xl">System requirements :</h2>

        <div className="flex flex-row items-center justify-between gap-10 mt-8">
          {/* Minimum */}
          <div className="w-1/2 flex flex-col items-start justify-center">
            <h2 className="font-[500] my-5 text-[18px]">Minimum</h2>
            <ul className="w-full border-1 border-white p-4 pb-20 space-y-1 text-[14px]">
              {[
                'OS: Windows 10',
                'Processor: Intel Core i5-8400 | AMD RYZEN 3 3300X',
                'Memory: 12 GB RAM',
                'Graphics: Nvidia GeForce GTX 1060, 3 GB | AMD Radeon RX 580, 4 GB',
                'DirectX: Version 12 (Feature Level 12.0)',
                'Storage: 60 GB available space',
                'Sound Card: Windows-Compatible Audio device',
                'Current specs are valid for launch day and may be updated in the future.',
              ].map((item, index) => (
                <li key={index} className="before:content-['●'] before:mr-2 before:text-white leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended */}
          <div className="w-1/2 flex flex-col items-start justify-center">
            <h2 className="font-[500] my-5 text-[18px]">Recommended</h2>
            <ul className="w-full border-1 border-white p-4 pb-20 space-y-1 text-[14px]">
              {[
                'OS: Windows 11/10',
                'Processor: Intel Core i7-8700K | AMD Ryzen 5 3600X',
                'Memory: 16 GB RAM',
                'Graphics: Nvidia GeForce GTX 1070, 8 GB | AMD Radeon RX VEGA 56, 8 GB',
                'DirectX: Version 12 (Feature Level 12.0)',
                'Storage: 60 GB available space',
                'Sound Card: Windows-Compatible Audio device',
                'Current specs are valid for launch day and may be updated in the future.',
              ].map((item, index) => (
                <li key={index} className="before:content-['●'] before:mr-2 before:text-white leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </section>
  )
}

export default ContentBelow

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContentBelow() {
  return (
    <section className="z-2  flex flex-col relative-content relative h-[600vh] w-13/15 overflow-hidden"
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

      <div id="news" className="relative h-[100vh] mx-22 flex flex-col text-white">
        <div className="flex flex-row text-right">
          <h2 className="text-white text-4xl mb-10 font-bold">News</h2>
        </div>
        <div className="flex flex-row w-full gap-10">
          {/* left */}
          <div className="w-3/5">
            <img src="/info/new1.webp" alt="" />
            <div className="bg-white text-black w-full h-51">

            </div>
          </div>
          {/* right */}
          <div className="w-2/5 flex flex-col gap-4">
            <div className="grid grid-rows-4 gap-4">

              <div className="flex flex-row grid-rows-1 group w-full">
                <img src="/info/new1.webp" className="w-[40%]" alt="" />
                <div className="bg-white text-black w-full h-auto">
                </div>
              </div>
              <div className="flex flex-row grid-rows-1 group w-full">
                <img src="/info/new2.webp" className="w-[40%]" alt="" />
                <div className="bg-white text-black w-full h-auto">
                </div>
              </div>
              <div className="flex flex-row grid-rows-1 group w-full">
                <img src="/info/new3.webp" className="w-[40%]" alt="" />
                <div className="bg-white text-black w-full h-auto">
                </div>
              </div>
              <div className="flex flex-row grid-rows-1 group w-full">
                <img src="/info/new4.webp" className="w-[40%]" alt="" />
                <div className="bg-white text-black w-full h-auto">
                </div>
              </div>
            </div>
            <div className="mt-auto">
            <button className="group cursor-pointer text-white border bg-[#c19d53] border-[#c19d53] font-[500] text-[15px] px-16 py-[15px] rounded hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
              SEE ALL NEWS!
            </button>
            </div>

          </div>
        </div>

      </div>
      <div id="subscribe">

      </div>
      <div id="systemRequirements">

      </div>

    </section>
  )
}

export default ContentBelow

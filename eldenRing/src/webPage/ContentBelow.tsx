import { faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContentBelow() {
  return (
    <section className="z-2  flex relative-content relative h-[136vh] w-13/15 justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/background/erbackground.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >

      <div id="shopNow" className="flex flex-col h-full w-full text-white text-[18px]">
        {/* Header with SVG and Title */}
        <div className="flex absolute flex-row items-center gap-4 top-19 left-36">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[73px] h-[100px]" viewBox="0 0 44.669 60.293" fill="#fff">
            <path d="M44.218,18.8a5.6,5.6,0,0,0-5.6-5.52H33.3V10.961a10.961,10.961,0,0,0-21.923,0v2.322H6.047A5.6,5.6,0,0,0,.444,18.8L0,49.012A5.6,5.6,0,0,0,5.6,54.7H16.738l5.6,5.6,5.6-5.6H39.066a5.6,5.6,0,0,0,5.6-5.687Zm-30.443-7.84a8.559,8.559,0,0,1,17.118,0v2.321H13.775ZM41.346,51.34a3.175,3.175,0,0,1-2.28.954H26.936l-.7.7-3.9,3.9-3.9-3.9-.7-.7H5.6a3.2,3.2,0,0,1-3.2-3.247l.444-30.209a3.214,3.214,0,0,1,3.2-3.153h5.326V20.9h2.4V15.685H30.893V20.9h2.4V15.685h5.321a3.215,3.215,0,0,1,3.2,3.153l.449,30.209a3.175,3.175,0,0,1-.92,2.294" />
          </svg>
          <h2 className="text-white text-4xl font-bold">Shop now</h2>
        </div>

        {/* Main content area split into two equal columns */}
        <div className="flex absolute top-[-18rem] flex-row items-center justify-center h-full w-full gap-8">
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

      <div id="wishlist">

      </div>
      <div id="about">

      </div>
      <div id="news">

      </div>
      <div id="subscribe">

      </div>
      <div id="systemRequirements">

      </div>

    </section>
  )
}

export default ContentBelow

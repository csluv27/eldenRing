import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MainContent() {
  return (
   
       <section className="z-2  flex relative h-[125vh] w-screen items-end justify-center relative-content"
        style={{
          backgroundImage: "url('/background/erbackground.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <img
          src="./mainPage/eldenring_new.png"
          alt="Elden Ring"
          className="w-full max-w-3xl z-2 object-contain pointer-events-none absolute top-[-110px] eldenring-background"
        />
        <div className="text-white  absolute top-40 text-center z-2 flex flex-col">
          <h2 className='font-bold text-[45px] mb-6'>ELDEN RING</h2>
          <div className='flex flex-row gap-8 text-[13px]'>
            <span><span className='text-[#c19d53]'>Release Date:</span> 25/02/2022</span>
            <span><span className='text-[#c19d53]'>Genres:</span> RPG</span>
            <span><span className='text-[#c19d53]'>Developer:</span> FromSoftware, Inc</span>

          </div>
        </div>
        <div className='w-13/15 top-90 absolute'>
          <div className="flex flex-row  gap-12">

            <div className="text-white flex flex-col w-4/10 gap-1.5">
              <h2 className='text-[30px] font-bold mb-15'>The Golden Order has been broken.</h2>

              <div className='text-[16px] flex flex-col'>
                <div className='flex flex-col gap-5 font-[500]'>
                  <span>
                    Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
                  </span>
                  <span>
                    In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.
                  </span>
                  <span>
                    Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.
                  </span>
                  <span>
                    And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.
                  </span>
                </div>
                <span className='font-bold mt-15'>And become the Elden Lord.</span>
              </div>
              <img src="./detailPage/erreward.png" alt="" className='w-3/5 m-auto pt-10' />
              <div className='flex flex-row gap-10 pt-12 m-auto'>
                <div className='border-white border-solid border-1 pt-1 pb-1 pr-4 pl-4'>
                  <img src="./detailPage/xbox.png" alt="" className='w-10' />
                </div>
                <div className='border-white border-solid border-1 pt-1 pb-1 pr-4 pl-4'>
                  <img src="./detailPage/ps5.png" alt="" className='w-10' />
                </div>
                <div className='border-white border-solid border-1 pt-1 pb-1 pr-4 pl-4'>
                  <img src="./detailPage/ps4.png" alt="" className='w-10' />
                </div>
                <div className='border-white border-solid border-1 pt-1 pb-1 pr-4 pl-4'>
                  <img src="./detailPage/pc.png" alt="" className='w-10' />
                </div>
              </div>
              <div className="m-auto mt-10 flex flex-row gap-10">
                <button className="group text-white border bg-[#c19d53] border-solid border-[#c19d53] font-[500] text-[15px] px-12 py-[15px] rounded cursor-pointer hover:bg-transparent hover:text-[#c19d53] transition flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className="text-xl mr-5 group-hover:text-[#c19d53] transition"
                  />
                  Shop now
                </button>

                <button className="group text-[#c19d53] border bg-transparent border-solid border-[#c19d53] font-[500] text-[15px] px-12 py-[15px] rounded cursor-pointer hover:bg-[#c19d53] hover:text-white transition flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl mr-5 group-hover:text-white transition"
                  />
                  Add to wishlist
                </button>
              </div>
            </div>
            <div className='w-6/10'>
               <img src="./detailPage/erBorder.png" className='z-1 absolute top-[-1.2rem] w-3/5 h-auto' alt="" />
              <video
                src="./detailPage/intro.webm"
                autoPlay
                muted
                loop
                className="w-full h-3/4 object-cover "
              ></video>
               <img src="./detailPage/erBorder.png" className='z-1 absolute top-153 w-3/5 right-[-23rem] h-auto' alt="" />
            </div>

          </div>

          <img
            src="./detailPage/erscore.jpg"
            alt=""
            className='m-auto w-3/5 absolute left-0 right-0 bottom-[-15rem]'
            style={{ zIndex: 3 }}
          />
        </div>

      </section>

  )
}

export default MainContent

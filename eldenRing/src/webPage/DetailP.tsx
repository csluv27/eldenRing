import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function DetailP() {
  return (
    <ParallaxProvider>
      <section className="relative h-[136vh] w-13/15 justify-center overflow-hidden"
          style={{ 
          backgroundImage: "url('./godfrey.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          objectFit: 'contain',
          width: '100%',
           }}
        >

        <div className="relative z-10 w-13/15 text-white flex top-0 left-50 px-25 flex-col ">
          <Parallax translateY={[30, -30]}>
            <h2 className='font-[700] text-4xl my-10'>Key features</h2>
          </Parallax>
          <div className='flex flex-col gap-20'>

            <div className=''>
              <div className='flex flex-row gap-12'>
                <video src="./feature/1.webm" autoPlay loop muted className='w-[45%]'></video>
                <div className='flex flex-col gap-5 w-[45%]'>
                  <Parallax translateY={[50, -50]} className='flex flex-col gap-5 mt-15'>

                    <h2 className='relative'>
                      <span className='block bg-[#c19d53] text-[25px] font-bold py-[10px] pl-[80px] pr-[20px] ml-[-80px] w-fit'>
                        A NEW FANTASY WORLD
                      </span>
                    </h2>

                    <span className='text-[16px] break-words mb-7'>
                      Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of the New York Times best-selling fantasy series, A Song of Ice and Fire.
                    </span>

                    <span className='text-[16px] break-words'>
                      Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures.
                    </span>
                  </Parallax>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='flex flex-row gap-12'>
                <div className='flex flex-col gap-10 w-[45%] text-right items-end'>
                  <Parallax translateY={[50, -60]} className='flex flex-col gap-5 mt-15 text-right items-end'>

                    <h2 className='relative'>
                      <span className='block bg-[#c19d53] text-[25px] font-bold py-[10px] pl-[20px] pr-[80px] mr-[-80px] w-fit'>
                        WORLD EXPLORATION IN THE LANDS BETWEEN
                      </span>
                    </h2>

                    <span className='text-[16px] break-words mb-7'>
                      ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.
                    </span>

                    <span className='text-[16px] break-words'>
                      Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.
                    </span>
                  </Parallax>
                </div>
                <video src="./feature/2.webm" autoPlay loop muted className='w-[45%]'></video>
              </div>
            </div>


            <div className=''>
              <div className='flex flex-row gap-12'>
                <video src="./feature/3.webm" autoPlay loop muted className='w-[45%]'></video>
                <div className='flex flex-col gap-10 w-[45%]'>
                  <Parallax translateY={[40, -40]} className='flex flex-col mt-15 gap-5'>

                    <h2 className='relative'>
                      <span className='block bg-[#c19d53] text-[25px] font-bold py-[10px] pl-[80px] pr-[20px] ml-[-80px] w-fit'>
                        GENRE-DEFINING GAMEPLAY
                      </span>
                    </h2>

                    <span className='text-[16px] break-words mb-7'>
                      Create your character in FromSoftware's refined action-RPG and define your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world.
                    </span>

                    <span className='text-[16px] break-words'>
                      Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat.
                    </span>
                  </Parallax>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </ParallaxProvider>
  );
}

export default DetailP;

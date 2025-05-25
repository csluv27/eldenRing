import CharacterSlider from "./CharacterSlider";

function Character() {
  return (
    <section className="relative z-10 h-[67vh] w-screen overflow-hidden"
       style={{
             backgroundImage: "url('/background/character.jpg')",
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundAttachment: 'fixed',
           }}
    >
      <img src="./detailPage/erBorder.png" className='z-10 absolute top-[-2.1rem] w-full h-auto' alt="" />
    
      <CharacterSlider />
    </section>
  );
}

export default Character;

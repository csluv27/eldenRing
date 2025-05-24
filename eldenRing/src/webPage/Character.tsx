import CharacterSlider from "./CharacterSlider";

function Character() {
  return (
    <section className="relative z-10 h-[67vh] w-full overflow-hidden">
      <img src="./detailPage/erBorder.png" className='z-10 absolute top-[-2.1rem] w-full h-auto' alt="" />
      <img
        src="./background/character.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <CharacterSlider />
    </section>
  );
}

export default Character;

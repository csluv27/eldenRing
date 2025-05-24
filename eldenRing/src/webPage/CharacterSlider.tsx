import { useState } from "react";

const characters = Array.from({ length: 10 }, (_, i) => i + 1); // [1..10]

const characterDescriptions: Record<number, { title: string; desc: string[] }> = {
  1: {
    title: "Samurai",
    desc: [
      "A capable fighter from the distant Land of Reeds.",
      "Handy with katana and longbows.",
    ],
  },
  2: {
    title: "Astrologer",
    desc: [
      "A scholar who reads fate in the stars.",
      "Heir to the school of glintstone sorcery.",
    ],
  },
  3: {
    title: "Bandit",
    desc: [
      "A dangerous bandit who strikes for weak points.",
      "Excels at ranged combat with bows.",
    ],
  },

  4: {
    title: "Confessor",
    desc: [
      "A church spy adept at covert operations.",
      "Equally adept with a sword as they are with their incantations.",
    ],
  },
  5: {
    title: "Hero",
    desc: [
      "A stalwart hero, at home with a battleaxe, descended from a badlands chieftain.",
    ],
  },
  6: {
    title: "Prisoner",
    desc: [
      "A prisoner bound in an iron mask.",
      "Studied in glinstone sorcery, having lived among the elite prior to sentencing.",
    ],
  },
  7: {
    title: "Prophet",
    desc: [
      "A seer ostracized for inauspicious prophecies.",
      "Well-versed in healing incantations.",
    ],
  },
  8: {
    title: "Vagabond",
    desc: [
      "A knight exiled from their homeland to wander.",
      "A solid, armor-clad origin.",
    ],
  },
  9: {
    title: "Warrior",
    desc: [
      "A nomad warrior who fights wielding two blades at once.",
      "An origin of exceptional technique.",
    ],
  },
  10: {
    title: "Wretch",
    desc: [
      "A poor, purposeless sod, naked as the day they were born.",
      "A nice club is all they have.",
    ],
  },
};


const CharacterSlider = () => {
  const [centerIndex, setCenterIndex] = useState(0); // index của nhân vật ở giữa

  // Lấy 5 nhân vật: 2 trái, center, 2 phải (vòng tròn)
  const getVisibleCharacters = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (centerIndex + i + characters.length) % characters.length;
      visible.push(characters[index]);
    }
    return visible;
  };

  const handleClick = (indexInVisible: number) => {
    if (indexInVisible === 2) return; // trung tâm

    const offset = indexInVisible - 2; // khoảng cách từ center
    const newIndex =
      (centerIndex + offset + characters.length) % characters.length;

    setCenterIndex(newIndex);
  };



  const visibleCharacters = getVisibleCharacters();

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="flex gap-66 transition-all duration-500" >
      
        {visibleCharacters.map((id, idx) => {
          const isCenter = idx === 2;
          return (
            <div
              key={id}
              onClick={() => handleClick(idx)}
              className={`relative cursor-pointer transition-transform duration-500 ${isCenter ? "scale-240 z-10" : "scale-100 opacity-70"
                }`}
            >
              <img
                src={`/character/${id}.webp`}
                alt={`Character ${id}`}
                className="w-32 h-54 object-cover rounded-xl shadow-lg"
              />
              {isCenter && (
                <div className="absolute w-2xs flex flex-col text-center bottom-2 left-1/2 -translate-x-1/2 bg-opacity-60 text-white text-sm px-3 py-1 rounded">
                  <p className="font-bold text-[20px] my-4">{characterDescriptions[id].title}</p>
                  {characterDescriptions[id].desc.map((line, index) => (
                    <p className="text-[7px]" key={index}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterSlider;

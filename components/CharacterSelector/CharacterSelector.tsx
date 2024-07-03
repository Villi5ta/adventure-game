import React from "react";
import styles from "./CharacterSelector.module.css";

// eslint-disable-next-line react/prop-types
const CharacterSelector = ({ setCharacter }) => {
  type CharacterClassSelectType = {
    name: string;
    health: number;
    money: number;
  };

  const characterClassSelect: CharacterClassSelectType[] = [
    {
      name: "Lana",
      health: 3,
      money: 10,
    },
    {
      name: "Emma",
      health: 4,
      money: 7,
    },
    {
      name: "Bill",
      health: 5,
      money: 6,
    },
  ];
  return (
    <div className={styles.characterBuilder}>
      <div>
        A beautiful woman, but a dangerous one. Especially in the dark.
        <button onClick={() => setCharacter(characterClassSelect[0])}>
          Lana
        </button>
      </div>

      <div>
        Quiet lady, but when push comes to shove, you better get out of her way.
        <button onClick={() => setCharacter(characterClassSelect[1])}>
          Emma
        </button>
      </div>

      <div>
        A true hulk of muscle known to demolish everything and everyone in his
        way.
        <button onClick={() => setCharacter(characterClassSelect[2])}>
          Bill
        </button>
      </div>
    </div>
  );
};

export default CharacterSelector;

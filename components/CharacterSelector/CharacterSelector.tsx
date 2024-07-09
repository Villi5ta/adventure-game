import React from "react";
import styles from "./CharacterSelector.module.css";

// eslint-disable-next-line react/prop-types
const CharacterSelector = ({ setCharacter }) => {
  type CharacterClassSelectType = {
    name: string;
    health: number;
    money: number;
    description: string;
  };

  const characterClassSelect: CharacterClassSelectType[] = [
    {
      name: "Lana",
      health: 3,
      money: 10,
      description:
        "Born and raised in the largest city this side of the Grogdon Mountains, Lana grew bored of her noble lifestyle. Seeking adventure, she decided to hit the road.",
    },
    {
      name: "Emma",
      health: 4,
      money: 7,
      description:
        "Emma's life can be described in one phrase: 'And then it got worse.' At age 12, she lost her parents in a house fire. At 13, she joined a thieves' guild, only to be captured by the authorities a few years later. Now an adult, Emma has decided to roll the dice again.",
    },
    {
      name: "Bill",
      health: 5,
      money: 6,
      description:
        "As a top-tier blacksmith, Bill was poised for success until one day his shop was robbed. Lacking the funds to start over, he sold his shop to a local merchant for what seemed like a generous sum. Eventually, Bill discovered that the robbers were hired by the very merchant who bought his shop. Disgusted by such shrewd dealings, Bill turned to a simpler life.",
    },
  ];
  return (
    <div className={styles.characterBuilder}>
      <p>Choose your character</p>

      {characterClassSelect.map((character, index) => (
        <div key={index}>
          <p>{character.description}</p>
          <div></div>
          <button onClick={() => setCharacter(character)}>
            {character.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharacterSelector;

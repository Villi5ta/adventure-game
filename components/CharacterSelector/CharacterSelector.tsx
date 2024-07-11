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
        "Born and raised in the largest city this side of the Grogdon Mountains, Lana since childhood had an adventurous spirit which lead to her growing bored of the noble lifestyle. Not wanting to be cadged to political dealings of the metropolis, she decided seek refuge in the open countryside.",
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
    <div className={styles.characterBuilderWrapper}>
      <p className={styles.headline}>Choose your character</p>

      <div className={styles.characterCardWrapper}>
        {characterClassSelect.map((character, index) => (
          <div key={index} className={styles.characterCard}>
            <p className={styles.charName}>{character.name}</p>
            <p className={styles.charDescription}>{character.description}</p>
            <p className={styles.charStats}>
              Character Stats: {character.health} Health | {character.money}{" "}
              Wealth
            </p>

            <div className={styles.charSelectBtnDv}>
              <button
                onClick={() => setCharacter(character)}
                className={styles.charSelectBtn}
              >
                Pick {character.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelector;

import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter6 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Ask Sabina for help",
      healthChange: 0,
      resultMessage:
        "'Of-bloody-course', - she says before drawing another dagger",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 8,
    },
    {
      text: "Fight alone",
      healthChange: 0,
      resultMessage:
        "Reluctantly Sabina agrees runs the same way you came through just minutes ago.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 9,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You explain that her husband sent you looking for her and he seem very
        worried. Especially in a place as dangerous as the Yuihkri Forest. She
        quickly relaxes and and introduces herself &lsquo;I am Sabina&lsquo;.
        However, before you manage to strike a conversation you hear the
        distinct growl of a Cwentur.
      </div>
      {options.map((option, index) => (
        <div key={index} className={styles.optionBtn}>
          <button
            onClick={() =>
              onOptionClick(
                option.healthChange,
                option.resultMessage,
                option.upgradePointsReward,
                option.moneyReward,
                option.nextEncounterId
              )
            }
          >
            {option.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Encounter6;

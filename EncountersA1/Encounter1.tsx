import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter1 = ({ onOptionClick }) => {
  const options = [
    {
      text: "You decide to freshen up your combat moves (+2HP)",
      healthChange: 2,
      resultMessage:
        "After winning a sparring match against a tree, you feel ready for what's ahead.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 2,
    },
    {
      text: "Quality equipment is key, no farmer can do his job with a broken plow (+2UP)",
      healthChange: 0,
      resultMessage:
        "After looking through your equipment, you discover some weak points. You fix them.",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 3,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You are at the beginning of your journey. Before setting off, you should
        decide if you would rather work on your skills or equipment.
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

export default Encounter1;

import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter6 = ({ onOptionClick }) => {
  const options = [
    {
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      healthChange: 0,
      resultMessage: "aaaaaaaaaaaaaaa ",
      upgradePointsReward: 1,
      moneyReward: 0,
      nextEncounterId: 7,
    },
    {
      text: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      healthChange: 0,
      resultMessage: "'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 8,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      {options.map((option, index) => (
        <div key={index} className={styles[`option${index + 1}`]}>
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

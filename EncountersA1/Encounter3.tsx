import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter3 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Leave them be. Why risk it?",
      healthChange: 0,
      resultMessage:
        "The bandits continue back and return to their hiding spot",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 4,
    },
    {
      text: "Attack them, the road will be safer without them.",
      healthChange: 0,
      resultMessage:
        "You draw your weapon and approach the group. After a vicious fight, the marauders are no more",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 4,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You spot a group of bandits approaching from a forest, but they quickly
        turn around after noticing that you are well equipped. Do you chase them
        down or leave them alone?
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

export default Encounter3;

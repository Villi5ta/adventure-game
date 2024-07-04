import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter4 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Sure, I'll help",
      healthChange: 0,
      resultMessage:
        "The man instantly starts thanking you and directs you to the last place he saw his darling wife.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 5,
    },
    {
      text: "Sorry, don't have time for this.",
      healthChange: 0,
      resultMessage:
        "The man puts his head down. -Typical, he says, can't trust a soul in this world.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 10,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        While stopping next to a tree to get your bearings, a man from a near by
        house comes asking for help. -You look like the type of person who knows
        their way around these lands and is prepared for the dangers that lay
        there, he mumbled. And I need some one to help find my wife. Please,
        kind stranger, I will reward you handsomely.
      </div>
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

export default Encounter4;

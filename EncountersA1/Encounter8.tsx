import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter6 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Try to subdue the beast. A pristine set of horns fetches quite the sum.",
      healthChange: 0,
      resultMessage:
        "You attack the monster, strategically avoiding his head, which coincidentally is his weak spot. You quickly realize why those horns are so sought after: they are rare, because people hunting for them are usually dead. The Cwentur manages to get a few more hits on you then it would've been necessary, but eventually and thanks in part to Sabina, it's dead.",
      upgradePointsReward: 1,
      moneyReward: 0,
      nextEncounterId: 10,
    },
    {
      text: "Go all out and aim for the Cwentur's weak spot. No need to risk ours lives for money.",
      healthChange: 0,
      resultMessage:
        "You throw everything you have the the beasts head. Soon it's nothing more than a red, slightly disfigured ball while the monster breaths it's final breath.",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 10,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        The wild beast approaches, carefully looking at you both, no doubt
        thinking of a way to end you.
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

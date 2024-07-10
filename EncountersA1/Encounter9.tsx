import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter9 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Try to subdue the beast. A pristine set of horns fetches quite the sum.",
      healthChange: +2,
      resultMessage:
        "You attack the monster, strategically avoiding his head, which coincidentally is his weak spot. You quickly realize why those horns are so sought after: they are rare, because people hunting for them are usually dead. The Cwentur puts up a fierce fight and comes close to ending you before making a small mistake which allows you bring him down. Barely.",
      upgradePointsReward: 1,
      moneyReward: 0,
      nextEncounterId: 11,
    },
    {
      text: "Go all out and aim for the Cwentur's weak spot. No need to risk ours lives for money.",
      healthChange: 0,
      resultMessage:
        "You throw everything you have the the beasts head. Soon it's nothing more than a red, slightly disfigured ball while the monster breaths it's final breath.",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 11,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You are left to fend for yourself as the monster approaches closer and
        closer. Its ugly features becoming more and more visible.
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

export default Encounter9;

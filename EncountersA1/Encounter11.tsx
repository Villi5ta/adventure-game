import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter11 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Wish them luck and move on your way",
      healthChange: +2,
      resultMessage:
        "You depart the farm and continue up the road until you come up to a local tavern. You decide to rest there.",
      upgradePointsReward: 12,
      moneyReward: 0,
      nextEncounterId: 12,
    },
    {
      text: "Demand a bigger reward because you had to fight a Cwentur alone",
      healthChange: 0,
      resultMessage:
        "The man agrees to give you a bonus, but instead of extra money he offers you a potent weapon sharpening oil. Not wanting to cause them trouble, you agree and proceed down the read to the nearest tavern where you decide to stay the night.",
      upgradePointsReward: 12,
      moneyReward: 0,
      nextEncounterId: 12,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You try to look for your missing companion, however to no avail so then
        you turn to head back to the husbands house, dreading of the moment you
        will need to tell the bad news. However, your fears do not metalized as
        you see both of them sharing an embrace. You try to not spoil the moment
        but eventually the man calls you over before giving you your reward.
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

export default Encounter11;

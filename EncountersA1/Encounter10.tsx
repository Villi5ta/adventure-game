import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter9 = ({ onOptionClick }) => {
  const options = [
    {
      text: "You wish the two of them the best of luck and decide to go your own ways.",
      healthChange: +2,
      resultMessage:
        "You depart the farm and continue up the road until you come up to a local farm. You decide to rest there.",
      upgradePointsReward: 12,
      moneyReward: 0,
      nextEncounterId: 12,
    },
    {
      text: "Agree with Sabina's offer",
      healthChange: +3,
      resultMessage:
        "You agree to stay with the family, just they forgot to mention one thing: they have six children, so getting a full time rest may prove to be a challenge, worthy to put it up there with the Cwentur's fight.",
      upgradePointsReward: 12,
      moneyReward: 0,
      nextEncounterId: 12,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        Sabina and you both look at each other, smiling of the accomplished
        deed. &quot;Now that is what I call a close encounter&quot;, - Sabina
        utters before sitting down for rest. Eventually you two return to her
        husband now all jubilant seeing his sweetheart safe and sound. As
        agreed, he gives you the promised reward. You decide to move on and find
        a place to rest. Sabina offers for you to stay at their place.
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

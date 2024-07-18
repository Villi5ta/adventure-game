import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter12 = ({ onOptionClick }) => {
  const options = [
    {
      text: "Head to the city, there are more opportunities there.",
      healthChange: 0,
      resultMessage:
        "After much deliberation, you decide to head towards the gleaming city of Dwardania. Many people make big there, perhaps it is your turn to do the same.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: -1,
    },
    {
      text: "Stick to the open country for the untapped potential.",
      healthChange: 0,
      resultMessage:
        "After much deliberation, you make the decision to stick to the countryside. With less order, there are bound to be more opportunities for some interesting encounters.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: -1,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        After a night rest you head further. After a while you approach a T
        junction where a sign points to Dwardania, a capital of the region. You
        look the oppose direction where there is more of the same: forest,
        forrest and more forrest.
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

export default Encounter12;

import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter2 = ({ onOptionClick }) => {
  const options = [
    {
      text: "FIGHT! Who do they think they are?",
      healthChange: -4,
      resultMessage:
        "A vicious fight ensues, but ultimately the bandits lay dead. You scour their bodies and find some money. Probably some other poor travelers.",
      upgradePointsReward: 1,
      moneyReward: +1,
      nextEncounterId: 4,
    },
    {
      text: "Pay them",
      healthChange: 0,
      resultMessage:
        "You give them a part of your hard-earned money. Grinning, they move on.",
      upgradePointsReward: 2,
      moneyReward: 0,
      nextEncounterId: 4,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        As is usual in Normandia, the second you begin traveling somewhere, a
        group of bandits come after you. Do you engage or pay them?
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

export default Encounter2;

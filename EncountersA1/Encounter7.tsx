import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter7 = ({ onOptionClick }) => {
  const options = [
    {
      text: "You ask the stranger for help",
      healthChange: 0,
      resultMessage:
        "'I may have wanted you dead a second age, but now I think I would rather you live', she replied all sassy before joining you in the fight",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 6,
    },
    {
      text: "Don't ask the woman for help",
      healthChange: 0,
      resultMessage:
        "'Going all lone ranger style, huh? Well good luck then.', - the woman said before leaving you to fight alone",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 7,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        Before the two of you get the chance to slit each others throats, you
        hear a sound of a beast, more specifically - a Cwentur. The woman
        quickly turns around towards the source of the sound. &lsquo;Looks like
        we have a bigger problem than each other&lsquo;, - she exclaimed.
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

export default Encounter7;

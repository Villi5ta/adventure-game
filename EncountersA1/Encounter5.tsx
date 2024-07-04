import React from "react";
import styles from "./EncounterA1.module.css";

// eslint-disable-next-line react/prop-types
const Encounter5 = ({ onOptionClick }) => {
  const options = [
    {
      text: "You try to calm the woman down -There's no need for violence. Let's talk.",
      healthChange: 0,
      resultMessage:
        "-Who are you? Are you stalking me?, - she asked still holding the dagger.",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 6,
    },
    {
      text: "You draw your weapon as well",
      healthChange: 0,
      resultMessage:
        "She swiftly got into a fighting stance -'You think I can't defend myself? My husband thought me well.'",
      upgradePointsReward: 0,
      moneyReward: 0,
      nextEncounterId: 7,
    },
  ];

  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>
        You come across a beautiful, secluded lake surrounded by a thick forest.
        A truly spectacular place for rest. Unfortunately, you have a job to do.
        While scouring the site you notice shoeprints which lead you to pair of
        lonely boots. However, the distinctly woman-sized footprints continue
        further, to a dark area densely covered by trees. Following the path
        made by broken tree branches you eventually come to an opening where you
        spot a woman. She draws her dagger at you.
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

export default Encounter5;

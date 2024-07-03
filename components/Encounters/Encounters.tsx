/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Encounters.module.css";

type OptionType = {
  text: string;
  healthChange: number;
  resultMessage: string;
  upgradePointsReward: number;
  moneyReward: number;
};

type EncounterType = {
  question: string;
  options: OptionType[];
};

const Encounters = ({
  characterHealth,
  setCharacterHealth,
  characterMoney,
  setCharacterMoney,
  upgradePoints,
  setUpgradePoints,
  setResultMessage,
}) => {
  const [currentEncounter, setCurrentEncounter] = useState(0);
  const [characterState, setCharacterState] = useState(true);

  const optionClick = (
    healthChange,
    resultMessage,
    upgradePointsReward,
    moneyReward
  ) => {
    setResultMessage(resultMessage);

    const updatedHealth = characterHealth + healthChange;
    setCharacterHealth(updatedHealth);

    console.log(healthChange);

    const updateCharacterMoney = characterMoney + moneyReward;
    setCharacterMoney(updateCharacterMoney);

    const updatedUpgradePoints = upgradePoints + upgradePointsReward;
    setUpgradePoints(updatedUpgradePoints);

    if (updatedHealth <= 0) {
      setCharacterState(false);
    } else {
      setCurrentEncounter((prev) => prev + 1);
    }
  };

  const encounters: EncounterType[] = [
    {
      question:
        "You're at the begin of your journey. Before setting off, you should decide if you'd rather work on your skills or equipment.",
      options: [
        {
          text: "You decide to freshen up your combat moves (+2HP)",
          healthChange: +2,
          resultMessage:
            "After wining a sparring match against a tree, you feel ready for whats ahead.",
          upgradePointsReward: 1,
          moneyReward: 0,
        },
        {
          text: "Quality equipment is key, no farmer can do his job with broken plow (+2UP)",
          healthChange: 0,
          resultMessage:
            "After looking through your equipment, you discover some weak points. You fix them.",
          upgradePointsReward: 2,
          moneyReward: 0,
        },
      ],
    },
    {
      question:
        "As is usual in Normandia, the second you begin traveling somewhere, a group of bandits come after you. Do you engage or bribe them?",
      options: [
        {
          text: "FIGHT! They who do they think they are?",
          healthChange: -4,
          resultMessage:
            "After a vicious fight, the bandits lay dead. You scour their bodies and find some money. Probably some other poor travelers.",
          upgradePointsReward: 2,
          moneyReward: 2,
        },
        {
          text: "Pay them",
          healthChange: 0,
          resultMessage:
            "You give them a part of hard earned money. They move on.",
          upgradePointsReward: -2,
          moneyReward: -2,
        },
      ],
    },
    {
      question: "3 Option one bad",
      options: [
        {
          text: "Option one",
          healthChange: -1,
          resultMessage: "eeeeeeeeeeee",
          upgradePointsReward: 1,
          moneyReward: 0,
        },
        {
          text: "Option two",
          healthChange: 0,
          resultMessage: "fffffffff",
          upgradePointsReward: 3,
          moneyReward: 0,
        },
      ],
    },
  ];

  const encounter = encounters[currentEncounter];

  if (!characterState) {
    setTimeout(() => {
      location.reload();
    }, 1500);
    return <div className={styles.body}>You are dead, restarting game...</div>;
  }

  if (!encounter) {
    location.reload();
  }

  return (
    <div>
      <div className={styles.storyScreen}>
        <div className={styles.roundOne}>{encounter.question}</div>

        <div className={styles.optionOne}>
          <button
            onClick={() =>
              optionClick(
                encounter.options[0].healthChange,
                encounter.options[0].resultMessage,
                encounter.options[0].upgradePointsReward,
                encounter.options[0].moneyReward
              )
            }
          >
            {encounter.options[0].text}
          </button>
        </div>

        <div className={styles.optionTwo}>
          <button
            onClick={() =>
              optionClick(
                encounter.options[1].healthChange,
                encounter.options[1].resultMessage,
                encounter.options[1].upgradePointsReward,
                encounter.options[1].moneyReward
              )
            }
          >
            {encounter.options[1].text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Encounters;

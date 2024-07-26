/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import EndScreen from "./../GameEnd/GameEnd";
import styles from "./Encounters.module.css";

const Encounters = ({
  characterHealth,
  setCharacterHealth,
  characterMoney,
  setCharacterMoney,
  characterArmor,
  upgradePoints,
  setUpgradePoints,
  setResultMessage,
}) => {
  const [id, setId] = useState("1");
  const [gameOver, setGameOver] = useState(false);
  const [gameScore, setGameScore] = useState(null);
  const [encounter, setEncounter] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchEncounter = async () => {
      try {
        const response = await axios.get(
          `${process.env.SERVER_URL}/encounter/${id}`
        );
        setEncounter(response.data.encounter[0]);
      } catch (error) {
        console.error("Error fetching encounter data:", error);
      }
    };

    if (!gameOver) {
      fetchEncounter();
    }
  }, [id, gameOver]);

  const optionClick = (
    healthChange,
    resultMessage,
    upgradePointsReward,
    moneyReward,
    nextEncounterId
  ) => {
    setResultMessage(resultMessage);

    if (healthChange <= -1) {
      healthChange += characterArmor;
      if (healthChange >= 1) {
        healthChange = 0;
      }
    }

    const updatedHealth = characterHealth + healthChange;
    setCharacterHealth(updatedHealth);

    const updatedCharacterMoney = characterMoney + moneyReward;
    setCharacterMoney(updatedCharacterMoney);

    const updatedUpgradePoints = upgradePoints + upgradePointsReward;
    setUpgradePoints(updatedUpgradePoints);

    const totalGameScore = updatedUpgradePoints + updatedCharacterMoney;
    setGameScore(totalGameScore);

    if (updatedHealth <= 0) {
      setGameOver(true);
      setResultMessage(
        "As is all too common in Normandia, not many adventurers live to tell the tale of their exploits. And neither did you."
      );
      setCharacterHealth("Dead");
    } else {
      if (nextEncounterId === -1) {
        setGameOver(true);
        setResultMessage(
          "After experiencing and surviving the horrors Normandia, you decide to settle back to a normal life."
        );
      } else if (nextEncounterId !== undefined) {
        setId(nextEncounterId);
      } else {
        setId((prev) => prev + 1);
      }
    }
  };

  if (gameOver) {
    return <EndScreen gameScore={gameScore} />;
  }

  if (!encounter) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.storyScreen}>
      <p className={styles.description}>{encounter.description}</p>
      {encounter.choices.map((choice, index) => (
        <div className={styles.optionBtn} key={index}>
          <button
            onClick={() =>
              optionClick(
                choice.healthChange,
                choice.resultMessage,
                choice.upgradePointsReward,
                choice.moneyReward,
                choice.nextEncounterId
              )
            }
          >
            {choice.optionDescription}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Encounters;

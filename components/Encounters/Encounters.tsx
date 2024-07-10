/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Encounter1 from "../../EncountersA1/Encounter1";
import Encounter2 from "../../EncountersA1/Encounter2";
import Encounter3 from "../../EncountersA1/Encounter3";
import Encounter4 from "../../EncountersA1/Encounter4";
import Encounter5 from "../../EncountersA1/Encounter5";
import Encounter6 from "../../EncountersA1/Encounter6";
import Encounter7 from "../../EncountersA1/Encounter7";
import Encounter8 from "../../EncountersA1/Encounter8";
import Encounter9 from "../../EncountersA1/Encounter9";
import Encounter10 from "../../EncountersA1/Encounter10";
import Encounter11 from "../../EncountersA1/Encounter11";
import Encounter12 from "../../EncountersA1/Encounter12";
import EndScreen from "./../GameEnd/GameEnd";

const Encounters = ({
  characterHealth,
  setCharacterHealth,
  characterMoney,
  setCharacterMoney,
  upgradePoints,
  setUpgradePoints,
  setResultMessage,
}) => {
  const [currentEncounterId, setCurrentEncounterId] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameScore, setGameScore] = useState(null);

  const optionClick = (
    healthChange,
    resultMessage,
    upgradePointsReward,
    moneyReward,
    nextEncounterId
  ) => {
    setResultMessage(resultMessage);

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
    } else {
      if (nextEncounterId !== undefined) {
        setCurrentEncounterId(nextEncounterId);
      } else {
        setCurrentEncounterId((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (gameOver) {
      const timer = setTimeout(() => {
        location.reload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [gameOver]);

  const renderEncounter = () => {
    switch (currentEncounterId) {
      case 1:
        return <Encounter1 onOptionClick={optionClick} />;
      case 2:
        return <Encounter2 onOptionClick={optionClick} />;
      case 3:
        return <Encounter3 onOptionClick={optionClick} />;
      case 4:
        return <Encounter4 onOptionClick={optionClick} />;
      case 5:
        return <Encounter5 onOptionClick={optionClick} />;
      case 6:
        return <Encounter6 onOptionClick={optionClick} />;
      case 7:
        return <Encounter7 onOptionClick={optionClick} />;
      case 8:
        return <Encounter8 onOptionClick={optionClick} />;
      case 9:
        return <Encounter9 onOptionClick={optionClick} />;
      case 10:
        return <Encounter10 onOptionClick={optionClick} />;
      case 11:
        return <Encounter11 onOptionClick={optionClick} />;
      case 12:
        return <Encounter12 onOptionClick={optionClick} />;
      case 13:
        return <EndScreen gameScore={gameScore} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {gameOver ? <EndScreen gameScore={gameScore} /> : renderEncounter()}
    </div>
  );
};

export default Encounters;

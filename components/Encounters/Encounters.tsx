import React, { useState, useEffect } from "react";
import axios from "axios";
import EndScreen from "./../GameEnd/GameEnd";
import styles from "./Encounters.module.css";

interface Choice {
  optionDescription: string;
  healthChange: number;
  resultMessage: string;
  upgradePointsReward: number;
  moneyReward: number;
  nextEncounterId: number;
}

interface Encounter {
  description: string;
  choices: Choice[];
}

interface Props {
  characterHealth: number;
  setCharacterHealth: React.Dispatch<React.SetStateAction<number>>;
  characterMoney: number;
  setCharacterMoney: React.Dispatch<React.SetStateAction<number>>;
  characterArmor: number;
  upgradePoints: number;
  setUpgradePoints: React.Dispatch<React.SetStateAction<number>>;
  setResultMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Encounters: React.FC<Props> = ({
  characterHealth,
  setCharacterHealth,
  characterMoney,
  setCharacterMoney,
  characterArmor,
  upgradePoints,
  setUpgradePoints,
  setResultMessage,
}) => {
  const [id, setId] = useState<number>(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameScore, setGameScore] = useState<number | null>(null);
  const [encounter, setEncounter] = useState<Encounter | null>(null);
  const [playerAliveCheck, setPlayerAliveCheck] = useState(true);

  const formatNumber = (num: number) => {
    const formattedNumber = num > 0 ? `+${num}` : num.toString();
    const className =
      num > 0 ? styles.positive : num < 0 ? styles.negative : "";
    return <span className={className}>{formattedNumber}</span>;
  };

  useEffect(() => {
    const fetchEncounter = async () => {
      try {
        const encounterId = id.toString();
        const response = await axios.get(
          `${process.env.SERVER_URL}/encounter/${encounterId}`
        );
        setEncounter(response.data.encounter);
      } catch (error) {
        console.error("Error fetching encounter data:", error);
      }
    };

    if (!gameOver) {
      fetchEncounter();
    }
  }, [id, gameOver]);

  const optionClick = (
    healthChange: number,
    resultMessage: string,
    upgradePointsReward: number,
    moneyReward: number,
    nextEncounterId: number
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

    if (updatedHealth <= 0) {
      setGameOver(true);
      setResultMessage("");
      setPlayerAliveCheck(false);
      setCharacterHealth(0);
      return;
    } else {
      if (nextEncounterId === -1) {
        setGameOver(true);
        setPlayerAliveCheck(true);
        setResultMessage("");
      } else if (nextEncounterId !== undefined) {
        setId(nextEncounterId);
      } else {
        setId((prevId) => {
          if (typeof prevId === "number") {
            return prevId + 1;
          } else {
            const parsedId = parseInt(prevId, 10);
            return isNaN(parsedId) ? prevId : parsedId + 1;
          }
        });
      }
    }

    const updatedCharacterMoney = characterMoney + moneyReward;
    setCharacterMoney(updatedCharacterMoney);

    const updatedUpgradePoints = upgradePoints + upgradePointsReward;
    setUpgradePoints(updatedUpgradePoints);

    const totalGameScore = updatedUpgradePoints + updatedCharacterMoney;
    setGameScore(totalGameScore);
  };

  if (gameOver) {
    return <EndScreen gameScore={gameScore} isPlayerAlive={playerAliveCheck} />;
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
            {choice.healthChange !== 0 && (
              <> {formatNumber(choice.healthChange)} HP; </>
            )}
            {choice.moneyReward !== 0 && (
              <> {formatNumber(choice.moneyReward)} GOLD; </>
            )}
            {choice.upgradePointsReward !== 0 && (
              <> {formatNumber(choice.upgradePointsReward)} UP; </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Encounters;

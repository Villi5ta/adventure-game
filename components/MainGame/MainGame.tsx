import React from "react";
// import styles from "./MainGame.module.css";
import Encounters from "../Encounters/Encounters";
import CharacterStats from "../CharacterStats/CharacterStats";
import UpgradeWrapper from "../UpgradeWrapper/UpgradeWrapper";
import ResultMessage from "../ResultMessage/ResultMessage";

interface Character {
  health: number;
  money: number;
  armor: number;
}

interface MainGameProps {
  character: Character | null;
  playerHealth: number | null;
  setPlayerHealth: React.Dispatch<React.SetStateAction<number | string | null>>;
  playerMoney: number | null;
  setPlayerMoney: React.Dispatch<React.SetStateAction<number | null>>;
  playerArmor: number | null;
  playerUpgradePoints: number;
  setPlayerUpgradePoints: React.Dispatch<React.SetStateAction<number>>;
  resultMessage: string;
  setResultMessage: React.Dispatch<React.SetStateAction<string>>;
  applyHealthUpgrade: (upgradeAmount: number) => void;
  applyArmorUpgrade: (upgradeAmount: number) => void;
  toggleMessage: boolean;
}

const MainGame: React.FC<MainGameProps> = ({
  playerHealth,
  setPlayerHealth,
  playerMoney,
  setPlayerMoney,
  playerArmor,
  playerUpgradePoints,
  setPlayerUpgradePoints,
  resultMessage,
  setResultMessage,
  applyHealthUpgrade,
  applyArmorUpgrade,
  toggleMessage,
}) => (
  <>
    <Encounters
      characterHealth={playerHealth as number}
      setCharacterHealth={
        setPlayerHealth as React.Dispatch<React.SetStateAction<number>>
      }
      characterMoney={playerMoney as number}
      setCharacterMoney={setPlayerMoney}
      characterArmor={playerArmor as number}
      upgradePoints={playerUpgradePoints}
      setUpgradePoints={setPlayerUpgradePoints}
      setResultMessage={setResultMessage}
    />
    {resultMessage && <ResultMessage resultMessage={resultMessage} />}
    <CharacterStats
      playerHealth={playerHealth}
      playerArmor={playerArmor}
      playerMoney={playerMoney}
    />
    <UpgradeWrapper
      playerUpgradePoints={playerUpgradePoints}
      applyHealthUpgrade={applyHealthUpgrade}
      applyArmorUpgrade={applyArmorUpgrade}
      toggleMessage={toggleMessage}
    />
  </>
);

export default MainGame;

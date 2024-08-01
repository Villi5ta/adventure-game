import React, { useEffect, useState } from "react";
import styles from "./game.module.css";
import CharacterSelector from "../../components/CharacterSelector/CharacterSelector";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import MainGame from "../../components/MainGame/MainGame";

interface Character {
  health: number;
  money: number;
  armor: number;
}

const Index: React.FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [playerHealth, setPlayerHealth] = useState<number | null>(null);
  const [playerMoney, setPlayerMoney] = useState<number | null>(null);
  const [playerArmor, setPlayerArmor] = useState<number | null>(null);
  const [playerUpgradePoints, setPlayerUpgradePoints] = useState<number>(0);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [toggleMessage, setToggleMessage] = useState<boolean>(false);

  useEffect(() => {
    if (character) {
      setPlayerHealth(character.health);
      setPlayerMoney(character.money);
      setPlayerArmor(character.armor);
      setPlayerUpgradePoints(0);
    }
  }, [character]);

  const applyHealthUpgrade = (upgradeAmount: number) => {
    if (upgradeAmount > playerUpgradePoints) {
      setToggleMessage(true);
      setTimeout(() => setToggleMessage(false), 3000);
      return;
    }
    setPlayerHealth((prevHealth) =>
      prevHealth !== null ? Number(prevHealth) + upgradeAmount : upgradeAmount
    );
    setPlayerUpgradePoints(
      (prevUpgradePoints) => prevUpgradePoints - upgradeAmount
    );
  };

  const applyArmorUpgrade = (upgradeAmount: number) => {
    if (upgradeAmount > playerUpgradePoints) {
      setToggleMessage(true);
      setTimeout(() => setToggleMessage(false), 3000);
      return;
    }
    setPlayerArmor((prevArmor) =>
      prevArmor !== null ? prevArmor + upgradeAmount : upgradeAmount
    );
    setPlayerUpgradePoints(
      (prevUpgradePoints) => prevUpgradePoints - upgradeAmount
    );
  };

  return (
    <div className={styles.body}>
      <PageTemplate>
        <div className={styles.wrapper}>
          {!character ? (
            <CharacterSelector setCharacter={setCharacter} />
          ) : (
            <MainGame
              character={character}
              playerHealth={playerHealth}
              setPlayerHealth={setPlayerHealth}
              playerMoney={playerMoney}
              setPlayerMoney={setPlayerMoney}
              playerArmor={playerArmor}
              playerUpgradePoints={playerUpgradePoints}
              setPlayerUpgradePoints={setPlayerUpgradePoints}
              resultMessage={resultMessage}
              setResultMessage={setResultMessage}
              applyHealthUpgrade={applyHealthUpgrade}
              applyArmorUpgrade={applyArmorUpgrade}
              toggleMessage={toggleMessage}
            />
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default Index;

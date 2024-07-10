import styles from "./game.module.css";
import React, { useEffect, useState } from "react";
import CharacterSelector from "../../components/CharacterSelector/CharacterSelector";
import Encounters from "../../components/Encounters/Encounters";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const Index = () => {
  const [character, setCharacter] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(null);
  const [playerMoney, setPlayerMoney] = useState(null);
  const [playerUpgradePoints, setPlayerUpgradePoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  useEffect(() => {
    if (character) {
      setPlayerHealth(character.health);
      setPlayerMoney(character.money);
      setPlayerUpgradePoints(0); // Assuming starting upgrade points are 0
    }
  }, [character]);

  return (
    <div className={styles.body}>
      <PageTemplate>
        {!character ? (
          <CharacterSelector setCharacter={setCharacter} />
        ) : (
          <div></div>
        )}

        {character && (
          <Encounters
            characterHealth={playerHealth}
            setCharacterHealth={setPlayerHealth}
            upgradePoints={playerUpgradePoints}
            setUpgradePoints={setPlayerUpgradePoints}
            characterMoney={playerMoney}
            setCharacterMoney={setPlayerMoney}
            setResultMessage={setResultMessage}
          />
        )}

        {resultMessage && (
          <div className={styles.resultMessage}>
            Choice outcome: {resultMessage}
          </div>
        )}

        <div className={styles.health}>
          {character && (
            <>
              Health: {playerHealth !== null ? playerHealth : character.health}
            </>
          )}
        </div>
        <div className={styles.money}>
          {character && (
            <>Money: {playerMoney !== null ? playerMoney : character.money}</>
          )}
        </div>
        <div className={styles.upgradePoints}>
          {character && <>Upgrade points: {playerUpgradePoints}</>}
        </div>
      </PageTemplate>
    </div>
  );
};

export default Index;

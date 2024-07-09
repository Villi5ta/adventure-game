import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import CharacterSelector from "../components/CharacterSelector/CharacterSelector";
import Encounters from "../components/Encounters/Encounters";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const Index = () => {
  const [character, setCharacter] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(null);
  const [playerMoney, setPlayerMoney] = useState(null);
  const [playerUpgradePoints, setPlayerUpgradePoints] = useState(null);
  const [resultMessage, setResultMessage] = useState(true);

  return (
    <div className={styles.body}>
      <PageTemplate>
        {!character ? (
          <CharacterSelector setCharacter={setCharacter} />
        ) : (
          <div></div>
        )}

        <div className={styles.resultMessage}>{resultMessage}</div>

        {character && (
          <Encounters
            characterHealth={character.health}
            setCharacterHealth={setPlayerHealth}
            upgradePoints={playerUpgradePoints}
            setUpgradePoints={setPlayerUpgradePoints}
            characterMoney={character.money}
            setCharacterMoney={setPlayerMoney}
            setResultMessage={setResultMessage}
          />
        )}

        <div className={styles.health}>
          {character && (
            <>Health: {!playerHealth ? character.health : playerHealth}</>
          )}
        </div>
        <div className={styles.money}>
          {character && (
            <>Money: {!playerMoney ? character.money : playerMoney}</>
          )}
        </div>
        <div className={styles.upgradePoints}>
          {playerUpgradePoints && <>Upgrade points: {playerUpgradePoints}</>}
        </div>
      </PageTemplate>
    </div>
  );
};

export default Index;

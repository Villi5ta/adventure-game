import styles from "./game.module.css";
import React, { useEffect, useState } from "react";
import CharacterSelector from "../../components/CharacterSelector/CharacterSelector";
import Encounters from "../../components/Encounters/Encounters";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import UpgradeMenu from "../../components/UpgradeMenu/UpgradeMenu";

const Index = () => {
  const [character, setCharacter] = useState(null);
  const [playerHealth, setPlayerHealth] = useState(null);
  const [playerMoney, setPlayerMoney] = useState(null);
  const [playerArmor, setPlayerArmor] = useState(null);
  const [playerUpgradePoints, setPlayerUpgradePoints] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [toggleMessage, setToggleMessage] = useState(false);

  useEffect(() => {
    if (character) {
      setPlayerHealth(character.health);
      setPlayerMoney(character.money);
      setPlayerArmor(character.armor);
      setPlayerUpgradePoints(0);
    }
  }, [character]);

  const applyHealthUpgrade = (upgradeAmount) => {
    if (upgradeAmount > playerUpgradePoints) {
      setToggleMessage(true);
      setTimeout(() => {
        setToggleMessage(false);
      }, 3000);

      return;
    } else {
      setPlayerHealth((prevHealth) => prevHealth + upgradeAmount);
      setPlayerUpgradePoints(
        (prevUpgradePoints) => prevUpgradePoints - upgradeAmount
      );
    }
  };

  const applyArmorUpgrade = (upgradeAmount) => {
    if (upgradeAmount > playerUpgradePoints) {
      setToggleMessage(true);
      setTimeout(() => {
        setToggleMessage(false);
      }, 3000);

      return;
    } else {
      setPlayerArmor((prevArmor) => prevArmor + upgradeAmount);
      setPlayerUpgradePoints(
        (prevUpgradePoints) => prevUpgradePoints - upgradeAmount
      );
    }
  };

  return (
    <div className={styles.body}>
      <PageTemplate>
        <div className={styles.wrapper}>
          {!character ? (
            <CharacterSelector setCharacter={setCharacter} />
          ) : (
            <div></div>
          )}

          {character && (
            <>
              <Encounters
                characterHealth={playerHealth}
                setCharacterHealth={setPlayerHealth}
                upgradePoints={playerUpgradePoints}
                setUpgradePoints={setPlayerUpgradePoints}
                characterMoney={playerMoney}
                setCharacterMoney={setPlayerMoney}
                characterArmor={playerArmor}
                setResultMessage={setResultMessage}
              />
            </>
          )}

          {resultMessage && (
            <div className={styles.resultMessage}>
              Choice outcome: {resultMessage}
            </div>
          )}

          <div className={styles.characterStats}>
            <div className={styles.health}>
              {character && (
                <>
                  Health:{" "}
                  {playerHealth !== null ? playerHealth : character.health}
                </>
              )}
            </div>
          </div>

          <div className={styles.characterStats}>
            <div className={styles.armor}>
              {character && (
                <>
                  Armor: {playerArmor !== null ? playerArmor : character.armor}
                </>
              )}
            </div>

            <div className={styles.money}>
              {character && (
                <>
                  Money: {playerMoney !== null ? playerMoney : character.money}
                </>
              )}
            </div>
          </div>

          {character && (
            <div className={styles.upgradeWrapper}>
              <>Upgrade points: {playerUpgradePoints}</>
              <UpgradeMenu
                applyHealthUpgrade={applyHealthUpgrade}
                applyArmorUpgrade={applyArmorUpgrade}
              />
              {toggleMessage && <div>Not enough upgrade points</div>}
            </div>
          )}
        </div>
      </PageTemplate>
    </div>
  );
};

export default Index;

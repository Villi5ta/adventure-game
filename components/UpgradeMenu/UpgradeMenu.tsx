import React, { useState } from "react";
import styles from "./UpgradeMenu.module.css";

type UpgradeMenuProps = {
  applyHealthUpgrade: (upgradeAmount: number) => void;
};

const UpgradeMenu = ({ applyHealthUpgrade }: UpgradeMenuProps) => {
  const [healthUpgradeSelect, setHealthUpgradeSelect] = useState(0);

  if (healthUpgradeSelect === -1) {
    setHealthUpgradeSelect(0);
  }

  const setCharacterUpgrades = () => {
    applyHealthUpgrade(healthUpgradeSelect);
    setHealthUpgradeSelect(0);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.healthUpgrade}>
        Health upgrade
        <p>{healthUpgradeSelect}</p>
        <button
          className={styles.upgradeBtn}
          onClick={() => setHealthUpgradeSelect(healthUpgradeSelect + 1)}
        >
          +
        </button>
        <button
          className={styles.upgradeBtn}
          onClick={() => setHealthUpgradeSelect(healthUpgradeSelect - 1)}
        >
          -
        </button>
        <button onClick={setCharacterUpgrades}>Set upgrade</button>
      </div>
    </div>
  );
};

export default UpgradeMenu;

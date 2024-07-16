import React, { useState } from "react";
import styles from "./UpgradeMenu.module.css";

type UpgradeMenuProps = {
  applyHealthUpgrade: (upgradeAmount: number) => void;
};

const UpgradeMenu = ({ applyHealthUpgrade }: UpgradeMenuProps) => {
  const [healthUpgradeSelect, setHealthUpgradeSelect] = useState(0);
  const [armourUpgradeSelect, setArmourUpgradeSelect] = useState(0);

  const [showUpgradeMenu, setShowUpgradeMenu] = useState(false);

  if (healthUpgradeSelect === -1) {
    setHealthUpgradeSelect(0);
  }

  if (armourUpgradeSelect === -1) {
    setArmourUpgradeSelect(0);
  }

  const setCharacterUpgrades = () => {
    applyHealthUpgrade(healthUpgradeSelect);
    setHealthUpgradeSelect(0);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.upgradeMenuToggleBtn}
        onClick={() => setShowUpgradeMenu(!showUpgradeMenu)}
      >
        Show upgrades
      </button>

      {showUpgradeMenu && (
        <div className={styles.upgradeMenuWrapper}>
          <div className={styles.healthUpgrade}>
            Health upgrade
            <p>{healthUpgradeSelect}</p>
            <div className={styles.upgradeBtns}>
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
            </div>
          </div>
          <div className={styles.armourUpgrade}>
            Armour upgrade (WIP)
            <p>{armourUpgradeSelect}</p>
            <div className={styles.upgradeBtns}>
              <button
                className={styles.upgradeBtn}
                onClick={() => setArmourUpgradeSelect(armourUpgradeSelect + 1)}
              >
                +
              </button>
              <button
                className={styles.upgradeBtn}
                onClick={() => setArmourUpgradeSelect(armourUpgradeSelect - 1)}
              >
                -
              </button>
            </div>
          </div>
          <button
            className={
              healthUpgradeSelect || armourUpgradeSelect > 0
                ? styles.upgradeBtnSetActive
                : styles.upgradeBtnSetIdle
            }
            onClick={setCharacterUpgrades}
          >
            Confirm upgrades
          </button>
        </div>
      )}
    </div>
  );
};

export default UpgradeMenu;

import React from "react";
import styles from "./UpgradeWrapper.module.css";
import UpgradeMenu from "../UpgradeMenu/UpgradeMenu";

interface UpgradeWrapperProps {
  playerUpgradePoints: number;
  applyHealthUpgrade: (upgradeAmount: number) => void;
  applyArmorUpgrade: (upgradeAmount: number) => void;
  toggleMessage: boolean;
}

const UpgradeWrapper: React.FC<UpgradeWrapperProps> = ({
  playerUpgradePoints,
  applyHealthUpgrade,
  applyArmorUpgrade,
  toggleMessage,
}) => (
  <div className={styles.upgradeWrapper}>
    <div>Upgrade points: {playerUpgradePoints}</div>
    <UpgradeMenu
      applyHealthUpgrade={applyHealthUpgrade}
      applyArmorUpgrade={applyArmorUpgrade}
    />
    {toggleMessage && <div>Not enough upgrade points</div>}
  </div>
);

export default UpgradeWrapper;

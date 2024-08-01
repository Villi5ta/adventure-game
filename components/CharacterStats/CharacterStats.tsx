import React from "react";
import styles from "./CharacterStats.module.css";

interface CharacterStatsProps {
  playerHealth: number | null;
  playerArmor: number | null;
  playerMoney: number | null;
}

const CharacterStats: React.FC<CharacterStatsProps> = ({
  playerHealth,
  playerArmor,
  playerMoney,
}) => (
  <div className={styles.characterStats}>
    <div className={styles.health}>Health: {playerHealth}</div>
    <div className={styles.armor}>Armor: {playerArmor}</div>
    <div className={styles.money}>Money: {playerMoney}</div>
  </div>
);

export default CharacterStats;

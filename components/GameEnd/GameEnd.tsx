import React from "react";
import styles from "./GameEnd.module.css";

// eslint-disable-next-line react/prop-types
const EndScreen = ({ gameScore }) => {
  return (
    <div className={styles.storyScreen}>
      <div className={styles.description}>Your game score is: {gameScore}</div>
    </div>
  );
};

export default EndScreen;

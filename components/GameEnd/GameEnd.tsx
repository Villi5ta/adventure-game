import React from "react";
import styles from "./GameEnd.module.css";

// eslint-disable-next-line react/prop-types
const EndScreen = ({ gameScore }) => {
  return (
    <div className={styles.storyScreen}>
      <p>Your game score is: {gameScore}</p>
      <button>
        <a href="/game">Try again?</a>
      </button>
    </div>
  );
};

export default EndScreen;

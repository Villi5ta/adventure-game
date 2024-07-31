import React, { useState } from "react";
import styles from "./GameEnd.module.css";
import { useRouter } from "next/router";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const EndScreen = ({ gameScore, isPlayerAlive }) => {
  const router = useRouter();
  const [alias, setAlias] = useState("");

  const postGameScore = async () => {
    const gameInfo = {
      score: gameScore,
      playerName: alias,
    };

    if (!gameInfo.playerName) {
      gameInfo.playerName = "Unnamed adventurer";
    }

    if (!gameInfo.score) {
      gameInfo.score = 0;
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/scores`,
        gameInfo
      );

      if (response.status === 200) {
        router.reload();
        console.log(response.data.score);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.storyScreen}>
      {isPlayerAlive === true ? (
        <p>Game completed. Game score is: {gameScore}</p>
      ) : (
        <p>You died. Game score is: {gameScore}</p>
      )}

      <p>
        Enter your alias to compare your results against other adventurers
        (optional)
      </p>
      <input
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        placeholder="Enter your alias"
        className={styles.aliasInput}
      />

      <button onClick={postGameScore}>Try again?</button>
    </div>
  );
};

export default EndScreen;

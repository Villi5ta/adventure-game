import React, { useState } from "react";
import styles from "./GameEnd.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "js-cookie";

// eslint-disable-next-line react/prop-types
const EndScreen = ({ gameScore, isPlayerAlive }) => {
  const router = useRouter();
  const [shareScore, setShareScore] = useState(false);

  const shareScoreToggle = () => {
    setShareScore(!shareScore);
  };

  const finishGame = async () => {
    if (shareScore === true) {
      const gameInfo = {
        score: gameScore,
      };

      if (!gameInfo.score) {
        gameInfo.score = 0;
      }

      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      try {
        const response = await axios.post(
          `${process.env.SERVER_URL}/scores`,
          gameInfo,
          { headers }
        );

        if (response.status === 200) {
          console.log(response.data.score);
          alert("score added");
        }
      } catch (err) {
        console.log(err);
      }
    }
    router.reload();
  };

  return (
    <div className={styles.storyScreen}>
      {isPlayerAlive === true ? (
        <p>Game completed. Game score is: {gameScore}</p>
      ) : (
        <p>You died. Game score is: {gameScore}</p>
      )}

      <div>
        Want to save your score? Check this box:
        <input type="checkbox" onClick={shareScoreToggle} />
      </div>

      <button onClick={finishGame}>Try again?</button>
    </div>
  );
};

export default EndScreen;

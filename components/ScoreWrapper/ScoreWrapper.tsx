import React from "react";
import { ScoreType } from "../../types/scores";
import styles from "./ScoreWrapper.module.css";

type ScoresType = {
  scores: ScoreType[];
};

const ScoreWrapper = ({ scores }: ScoresType) => {
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-CA");
  };

  return (
    <div className={styles.main}>
      <p className={styles.pageName}> Most successful adventurers</p>
      <div className={styles.scoreBoxWrapper}>
        {sortedScores.map((score) => (
          <div key={score.id} className={styles.scoreBox}>
            <div className={styles.scoreElement}>Score: {score.score}</div>
            <div className={styles.nameElement}>Player: {score.userName}</div>

            <div className={styles.dateElement}>
              Score date: {formatDate(score.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreWrapper;

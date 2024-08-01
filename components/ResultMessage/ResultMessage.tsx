import React from "react";
import styles from "./ResultMessage.module.css";

interface ResultMessageProps {
  resultMessage: string;
}

const ResultMessage: React.FC<ResultMessageProps> = ({ resultMessage }) => (
  <div className={styles.resultMessage}>Choice outcome: {resultMessage}</div>
);

export default ResultMessage;

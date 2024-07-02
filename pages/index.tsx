import styles from "../styles/Home.module.css";
import React, { useState } from "react";

const Index = () => {
  const [characterState, setCharacterState] = useState(true);
  const [characterHealth, setCharacterHealth] = useState(null);
  const [currentEncounter, setCurrentEncounter] = useState(0);
  const [resultMessage, setResultMessage] = useState(true);

  type CharacterClassSelectType = {
    name: string;
    health: number;
  };

  const characterClassSelect: CharacterClassSelectType[] = [
    {
      name: "Lana",
      health: 3,
    },
    {
      name: "Emma",
      health: 4,
    },
    {
      name: "Bill",
      health: 5,
    },
  ];

  const encounters = [
    {
      question: "1 Option two bad",
      options: [
        { text: "Option one", healthChange: 0, resultMessage: "aaaaaaaaaa" },
        { text: "Option two", healthChange: -1, resultMessage: "bbbbbbbbb" },
      ],
    },
    {
      question: "2 Option two bad",
      options: [
        { text: "Option one", healthChange: +1, resultMessage: "aaaaaaaaaa" },
        { text: "Option two", healthChange: -10, resultMessage: "bbbbbbbbb" },
      ],
    },
    {
      question: "3 Option one bad",
      options: [
        { text: "Option one", healthChange: -1, resultMessage: "aaaaaaaaaa" },
        { text: "Option two", healthChange: 0, resultMessage: "bbbbbbbbb" },
      ],
    },
  ];

  const optionClick = (healthChange, resultMessage) => {
    const optionMessage = resultMessage;
    setResultMessage(optionMessage);

    const updatedHealth = characterHealth + healthChange;
    setCharacterHealth(updatedHealth);

    if (updatedHealth <= 0) {
      setCharacterState(false);
    } else {
      setCurrentEncounter((prev) => prev + 1);
    }
  };

  if (!characterState) {
    setTimeout(() => {
      location.reload();
    }, 1500);
    return <div className={styles.body}>You are dead, restarting game...</div>;
  }

  const encounter = encounters[currentEncounter];

  if (!encounter) {
    location.reload();
  }

  return (
    <div className={styles.body}>
      <div className={styles.characterBuilder}>
        <button
          onClick={() => setCharacterHealth(characterClassSelect[0].health)}
        >
          {" "}
          Assassin (3 health)
        </button>
        <button
          onClick={() => setCharacterHealth(characterClassSelect[1].health)}
        >
          {" "}
          Archer (4 health)
        </button>
        <button
          onClick={() => setCharacterHealth(characterClassSelect[2].health)}
        >
          {" "}
          Paladin (5 health)
        </button>
      </div>

      <div className={styles.storyScreen}>
        <div className={styles.roundOne}>{encounter.question}</div>
      </div>

      <div className={styles.optionOne}>
        <button
          onClick={() =>
            optionClick(
              encounter.options[0].healthChange,
              encounter.options[0].resultMessage
            )
          }
        >
          {encounter.options[0].text}
        </button>
      </div>

      <div className={styles.optionTwo}>
        <button
          onClick={() =>
            optionClick(
              encounter.options[1].healthChange,
              encounter.options[1].resultMessage
            )
          }
        >
          {encounter.options[1].text}
        </button>
      </div>
      <div className={styles.health}>Health: {characterHealth}</div>
      <div className={styles.resultMessage}>message: {resultMessage}</div>
    </div>
  );
};

export default Index;

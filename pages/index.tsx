import styles from "../styles/Home.module.css";
import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import GameFeatures from "../components/GameHighlights/GameFeatures";

const Index = () => {
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <h1 className={styles.heroText}>
          Welcome to Normandia, your adventure starts{" "}
          <span className={styles.heroTextEndHighlight}>now</span>
        </h1>
        <GameFeatures />
        <p className={styles.ctaText}>
          Ready to begin your adventure? Click <a href="/game">here</a>
        </p>
      </div>
    </PageTemplate>
  );
};

export default Index;

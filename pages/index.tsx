import styles from "../styles/Home.module.css";
import React from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";

const Index = () => {
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        Welcome to game. Play game <a href="/game">here</a>
      </div>
    </PageTemplate>
  );
};

export default Index;

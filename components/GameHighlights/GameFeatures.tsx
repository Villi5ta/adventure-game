import React from "react";
import { features } from "../../constants/featureItems";
import styles from "./GameFeatures.module.css";
import sword from "../../assets/sword.svg";

const GameFeatures = () => {
  console.log(sword);

  return (
    <div className={styles.main}>
      <h2 className={styles.featureHeadline}>Game features</h2>
      <div className={styles.featureCardWrapper}>
        {features.map((feature) => {
          return (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.featureCardContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </div>
              <img src={sword.src} className={styles.swordImage} alt="Sword" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameFeatures;

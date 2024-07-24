import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ScoreWrapper from "../../components/ScoreWrapper/ScoreWrapper";
import axios from "axios";
import styles from "./scores.module.css";

const Index = () => {
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNoScoreMessage, setShowNoScoreMessage] = useState(false);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/scores`);
      setScores(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();

    const timer = setTimeout(() => {
      if (loading && !scores) {
        setShowNoScoreMessage(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading, scores]);

  useEffect(() => {
    if (!loading && scores) {
      setShowNoScoreMessage(false);
    }
  }, [loading, scores]);

  return (
    <div>
      <PageTemplate>
        {loading ? (
          <div className={styles.noDataMessage}>Loading...</div>
        ) : showNoScoreMessage ? (
          <div className={styles.noDataMessage}>No scores available yet</div>
        ) : (
          scores && <ScoreWrapper scores={scores.scores} />
        )}
      </PageTemplate>
    </div>
  );
};

export default Index;

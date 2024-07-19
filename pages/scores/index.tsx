import React, { useEffect, useState } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ScoreWrapper from "../../components/ScoreWrapper/ScoreWrapper";
import axios from "axios";

const index = () => {
  const [scores, setScores] = useState(null);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/scores`);

      setScores(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchScores();
  }, []);

  console.log(scores);

  return (
    <div>
      <PageTemplate>
        {scores && <ScoreWrapper scores={scores.scores} />}
      </PageTemplate>
    </div>
  );
};

export default index;

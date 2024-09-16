import { useState, useEffect } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCount, setFeedbackCount] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }
    return initialState;
  });

  const { good, neutral, bad } = feedbackCount;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackCount({
      ...feedbackCount,
      [feedbackType]: feedbackCount[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setFeedbackCount(initialState);
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  return (
    <div className="wrapper">
      <Description />

      <Options
        onFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCount={feedbackCount}
          totalFeedback={totalFeedback}
          positivePercentage={Math.round((good / totalFeedback) * 100)}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default App;

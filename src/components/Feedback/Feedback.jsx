import { PiSmileySadLight } from "react-icons/pi";
import { PiSmileyMeh } from "react-icons/pi";
import { PiSmiley } from "react-icons/pi";
import css from "./Feedback.module.css";

const Feedback = ({ feedbackCount, totalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = feedbackCount;

  return (
    <div className={css.container}>
      <p className={css["semi-bold"]}>
        <span>
          <PiSmiley className={css.smile} />
        </span>
        Good: <span>{good}</span>
      </p>
      <p className={css["semi-bold"]}>
        <span>
          <PiSmileyMeh className={css.smile} />
        </span>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css["semi-bold"]}>
        <span>
          <PiSmileySadLight className={css.smile} />
        </span>
        Bad: <span>{bad}</span>
      </p>
      <p className={css["bold"]}>
        Total: <span>{totalFeedback}</span>
      </p>
      <p className={css["bold"]}>
        Positive: <span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Feedback;

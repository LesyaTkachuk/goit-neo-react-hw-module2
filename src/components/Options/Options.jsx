import css from "./Options.module.css";
import clsx from "clsx";

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        name="good"
        onClick={({ target }) => onFeedback(target.name)}
      >
        Good
      </button>
      <button
        className={css.button}
        name="neutral"
        onClick={({ target }) => onFeedback(target.name)}
      >
        Neutral
      </button>
      <button
        className={css.button}
        name="bad"
        onClick={({ target }) => onFeedback(target.name)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(css.button, css.reset)} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

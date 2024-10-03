import styles from "./Options.module.css";
export default function Options({
  onUpdateFeedback,
  onResetFeedback,
  totalFeedback,
}) {
  function getTypeFeedback(evt) {
    let typeOfFeedback = evt.currentTarget.textContent.toLowerCase();
    onUpdateFeedback(typeOfFeedback);
  }
  return (
    <div>
      <button
        className={styles.option_btn}
        type="button"
        onClick={getTypeFeedback}
      >
        Good
      </button>
      <button
        className={styles.option_btn}
        type="button"
        onClick={getTypeFeedback}
      >
        Neutral
      </button>
      <button
        className={styles.option_btn}
        type="button"
        onClick={getTypeFeedback}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.option_btn}
          type="button"
          onClick={onResetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
}

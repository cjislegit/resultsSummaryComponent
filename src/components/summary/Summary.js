import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.title}>Summary</div>
      <div className={styles.scores}>
        <div className={`${styles.score} ${styles.red}`}>
          <div>Reaction</div>
          <div>80 / 100</div>
        </div>
        <div className={`${styles.score} ${styles.yellow}`}>
          <div>Memory</div>
          <div>92 / 100</div>
        </div>
        <div className={`${styles.score} ${styles.green}`}>
          <div>Verbal</div>
          <div>61 / 100</div>
        </div>
        <div className={`${styles.score} ${styles.blue}`}>
          <div>Visual</div>
          <div>71 / 100</div>
        </div>
      </div>
      <div className={styles.button}>
        <input type='button' value='Continue' />
      </div>
    </div>
  );
};

export default Summary;

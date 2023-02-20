import styles from './Score.module.css';

const Score = () => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.title}>Your Result</div>
      <div className={styles.score}>
        <div>76</div>
        <div>of 100</div>
      </div>
      <div className={styles.result}>Great</div>
      <div className={styles.summary}>
        You scored higher than 65% of the people who have taken this test.
      </div>
    </div>
  );
};

export default Score;

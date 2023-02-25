import styles from './Summary.module.css';
import data from '../../data.json';

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.title}>Summary</div>
      <div className={styles.scores}>
        {data.map((score) => {
          let icon = require(`../../${score.icon}`);
          let style = score.style;
          return (
            <div className={`${styles.score} ${styles[style]}`} key={style}>
              <div>
                <img src={icon} alt={score.alt} />
                {score.category}
              </div>
              <div>
                <span>{score.score}</span>
                <span>/ 100</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.button}>
        <input type='button' value='Continue' />
      </div>
    </div>
  );
};

export default Summary;

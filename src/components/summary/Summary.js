import styles from './Summary.module.css';
import reaction from '../../assets/images/icon-reaction.svg';
import memory from '../../assets/images/icon-memory.svg';
import verbal from '../../assets/images/icon-verbal.svg';
import visual from '../../assets/images/icon-visual.svg';

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.title}>Summary</div>
      <div className={styles.scores}>
        <div className={`${styles.score} ${styles.red}`}>
          <div>
            <img src={reaction} alt='Lightning bolt icon' />
            Reaction
          </div>
          <div>
            <span>80</span>
            <span>/ 100</span>
          </div>
        </div>
        <div className={`${styles.score} ${styles.yellow}`}>
          <div>
            <img src={memory} alt='Brain icon' />
            Memory
          </div>
          <div>
            <span>92</span>
            <span>/ 100</span>
          </div>
        </div>
        <div className={`${styles.score} ${styles.green}`}>
          <div>
            <img src={verbal} alt='Chat bubble icon' />
            Verbal
          </div>
          <div>
            <span>61</span>
            <span>/ 100</span>
          </div>
        </div>
        <div className={`${styles.score} ${styles.blue}`}>
          <div>
            <img src={visual} alt='Eye ball icon' />
            Visual
          </div>
          <div>
            <span>71</span>
            <span>/ 100</span>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <input type='button' value='Continue' />
      </div>
    </div>
  );
};

export default Summary;

import styles from "./TextStats.module.css";

function TextStats( { characterCount, wordCount, sentenceCount, characterLimit, limitExceeded }) {
  return (
    <section className={styles.statsWrapper}>
      <div className={styles.statBox}>
        <p className={styles.stat}>
          <span className={styles.value}>{characterCount}</span>
          <span className={styles.label}>Total Characters</span>
        </p>
      </div>
      <div className={styles.statBox}>
        <p className={styles.stat}>
          <span className={styles.value}>{wordCount}</span>
          <span className={styles.label}>Word Count</span>
        </p>
      </div>
      <div className={styles.statBox}>
        <p className={styles.stat}>
          <span className={styles.value}>{sentenceCount}</span>
          <span className={styles.label}>Sentence Count</span>
        </p>
      </div>
    </section>
  )
}

export default TextStats;
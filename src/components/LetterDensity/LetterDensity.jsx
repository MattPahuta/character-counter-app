import { useState } from "react";
import styles from "./LetterDensity.module.css";

function LetterDensity({ density }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (density.length === 0) {
    return (
      <section className={styles.wrapper}>
        <h2>Letter Density</h2>
        <p className={styles.emptyDefault}>
          No characters found. Start typing to see letter density.
        </p>
      </section>
    );
  }

  const visibleDensity = isExpanded ? density : density.slice(0, 5);
  const hasMoreCharacters = density.length > 5;

  return (
    <section className="wrapper">
      <h2>Letter Density</h2>
      <ul className={styles.list}>
        {visibleDensity.map(({ letter, count, percentage }) => (
          <li className={styles.row} key={letter}>
            <span className={styles.letter}>{letter}</span>

            <div className={styles.barTrack}>
              <div
                className={styles.bar}
                style={{ width: `${percentage}%` }}></div>
            </div>

            <span className={styles.value}>
              {count} ({percentage.toFixed(1)}%)
            </span>
          </li>
        ))}
      </ul>

      {hasMoreCharacters && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}>
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </section>
  );
}

export default LetterDensity;

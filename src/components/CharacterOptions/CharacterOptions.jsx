import styles from "./CharacterOptions.module.css";

function CharacterOptions({
  excludeSpaces,
  onExcludeSpacesChange,
  hasCharacterLimit,
  onCharacterLimitToggle,
  characterLimit,
  onCharacterLimitChange,
  readingTime
}) {

  console.log(`Reading time: ${readingTime}`)

  return (
    <div className={styles.controlBarWrapper}>
      <div className={styles.optionsWrapper}>
        <div className={styles.inputGroup}>
          <input
            id="excludeSpaces"
            type="checkbox"
            checked={excludeSpaces}
            onChange={onExcludeSpacesChange}
          />
          <label htmlFor="excludeSpaces">Exclude Spaces</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            id="charLimit"
            type="checkbox"
            checked={hasCharacterLimit}
            onChange={onCharacterLimitToggle}
          />
          <label htmlFor="charLimit">Set Character Limit</label>

          {hasCharacterLimit && (
            <input
              id="charLimitInput"
              className={styles.limitInput}
              aria-label="Character limit"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              min="1"
              value={characterLimit}
              onChange={onCharacterLimitChange}
            />
          )}
        </div>
      </div>
      <p className={styles.readingTime}>
        Approx. reading time: {readingTime}
      </p>
    </div>
  );
}

export default CharacterOptions;

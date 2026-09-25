import styles from "./CharacterOptions.module.css";

function CharacterOptions({
  excludeSpaces,
  onExcludeSpacesChange,
  hasCharacterLimit,
  onCharacterLimitToggle,
  characterLimit,
  onCharacterLimitChange
}) {
  return (
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
            type="number"
            min="1"
            value={characterLimit}
            onChange={onCharacterLimitChange}
          />
        )}
      </div>
    </div>
  );
}

export default CharacterOptions;

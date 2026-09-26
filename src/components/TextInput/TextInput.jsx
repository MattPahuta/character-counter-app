import styles from "./TextInput.module.css";

function TextInput({ value, onChange, hasError }) {

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="text-input">Enter your text</label>

      <textarea
        id="text-input"
        className={`${styles.textarea} ${hasError ? styles.error : ""}`}
        value={value}
        onChange={onChange}
        placeholder="Start typing here… (or paste your text)"></textarea>

      {/* OptionsInfoBar */}
    </div>
  );
}

export default TextInput;
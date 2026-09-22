import styles from "./TextInput.module.css";

function TextInput({ value, onChange }) {

  return (
    <div className={styles.wrapper}>
      <label htmlFor="text-input">Enter your text</label>

      <textarea
        id="text-input"
        className={styles.textarea}
        value={value}
        onChange={onChange}
        placeholder="Start typing here… (or paste your text)"></textarea>

      {/* OptionsInfoBar */}
    </div>
  );
}

export default TextInput;
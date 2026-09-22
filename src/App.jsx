import { useState } from "react";
import styles from "./App.module.css";

import TextInput from "./components/TextInput/TextInput";

function App() {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Analyze your text in real-time.
      </h1>
      <TextInput value={text} onChange={handleTextChange} />
    </div>
  );
}

export default App;

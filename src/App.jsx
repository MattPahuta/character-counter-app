import { useState } from "react";
import styles from "./App.module.css";
import "./styles/global.css";
import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import TextStats from "./components/TextStats/TextStats";

import {
  countCharacters,
  countWords,
  countSentences,
} from "./utils/textUtils";

function App() {
  const [text, setText] = useState(""); // primary state
  // state change handler
  function handleTextChange(event) {
    setText(event.target.value);
  }
  // derived values from state
  const characterCount = countCharacters(text);
  const wordCount = countWords(text);
  const sentenceCount = countSentences(text);

  return (
    <>
      <Header />
      <main className={`${styles.main} wrapper`}>
        <h1 className={styles.title}>
          Analyze your text in real-time.
        </h1>
        <TextInput value={text} onChange={handleTextChange} />
        <TextStats
          characterCount={characterCount}
          wordCount={wordCount}
          sentenceCount={sentenceCount}
        />
      </main>
    </>
  );
}

export default App;

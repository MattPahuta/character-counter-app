import { useState } from "react";
import styles from "./App.module.css";
import "./styles/global.css";
import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import CharacterOptions from "./components/CharacterOptions/CharacterOptions";
import TextStats from "./components/TextStats/TextStats";

import {
  countCharacters,
  countWords,
  countSentences,
} from "./utils/textUtils";

function App() {
  // state variables
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  const [characterLimit, setCharacterLimit] = useState("");

  // state change handler
  function handleTextChange(event) {
    setText(event.target.value);
  }
  // derived values from state
  const characterCount = countCharacters(text, excludeSpaces);
  const wordCount = countWords(text);
  const sentenceCount = countSentences(text);
  const limitExceeded =
    hasCharacterLimit &&
    characterLimit !== "" &&
    characterCount > Number(characterLimit);

  // handlers
  function handleExcludeSpacesChange(event) {
    setExcludeSpaces(event.target.checked);
  }

  function handleCharacterLimitToggle(event) {
    setHasCharacterLimit(event.target.checked);
  }

  function handleCharacterLimitChange(event) {
    setCharacterLimit(event.target.value);
  }

  return (
    <>
      <Header />
      <main className={`${styles.main} wrapper`}>
        <h1 className={styles.title}>
          Analyze your text in real-time.
        </h1>
        <TextInput value={text} onChange={handleTextChange} />
        <CharacterOptions
          excludeSpaces={excludeSpaces}
          onExcludeSpacesChange={handleExcludeSpacesChange}
          hasCharacterLimit={hasCharacterLimit}
          onCharacterLimitToggle={handleCharacterLimitToggle}
          characterLimit={characterLimit}
          onCharacterLimitChange={handleCharacterLimitChange}
        />
        <TextStats
          characterCount={characterCount}
          wordCount={wordCount}
          sentenceCount={sentenceCount}
          characterLimit={characterLimit}
          limitExceeded={limitExceeded}
        />
      </main>
    </>
  );
}

export default App;

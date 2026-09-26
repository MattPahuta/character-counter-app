import { useState } from "react";
import styles from "./App.module.css";
import "./styles/global.css";
import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import CharacterOptions from "./components/CharacterOptions/CharacterOptions";
import TextStats from "./components/TextStats/TextStats";
import LimitWarning from "./components/LimitWarning/LimitWarning";

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

  const charactersOverLimit = limitExceeded
    ? characterCount - Number(characterLimit)
    : 0;

  // handlers
  function handleExcludeSpacesChange(event) {
    setExcludeSpaces(event.target.checked);
  }

  function handleCharacterLimitToggle(event) {
    const enabled = event.target.checked;
    setHasCharacterLimit(enabled);

    if (!enabled) {
      setCharacterLimit("");
    }
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
        <TextInput value={text} onChange={handleTextChange} hasError={limitExceeded} />
        {limitExceeded && (
          <LimitWarning characterLimit={characterLimit} charactersOverLimit={charactersOverLimit} />
        )}
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
        />
      </main>
    </>
  );
}

export default App;

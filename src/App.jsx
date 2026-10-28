import { useState } from "react";
import "./styles/global.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import CharacterOptions from "./components/CharacterOptions/CharacterOptions";
import TextStats from "./components/TextStats/TextStats";
import LetterDensity from "./components/LetterDensity/LetterDensity";
import LimitWarning from "./components/LimitWarning/LimitWarning";

import {
  countCharacters,
  countWords,
  countSentences,
  calculateReadingTime,
  calculateLetterDensity,
} from "./utils/textUtils";

function App() {
  // state variables
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme || "light"
  })
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  const [characterLimit, setCharacterLimit] = useState("");

  // theme toggle handler
  function handleThemeToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);

    setTheme(nextTheme);
  }

  // state change handler
  function handleTextChange(event) {
    setText(event.target.value);
  }
  // derived values from state
  const characterCount = countCharacters(text, excludeSpaces);
  const wordCount = countWords(text);
  const sentenceCount = countSentences(text);
  const readingTime = calculateReadingTime(text);
  const letterDensity = calculateLetterDensity(text);
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
      <Header theme={theme} onToggle={handleThemeToggle} />
      <main className={`${styles.main} wrapper`}>
        <h1 className={styles.title}>
          Analyze your text in real-time.
        </h1>
        <TextInput
          value={text}
          onChange={handleTextChange}
          hasError={limitExceeded}
        />
        {limitExceeded && (
          <LimitWarning
            characterLimit={characterLimit}
            charactersOverLimit={charactersOverLimit}
          />
        )}
        <CharacterOptions
          excludeSpaces={excludeSpaces}
          onExcludeSpacesChange={handleExcludeSpacesChange}
          hasCharacterLimit={hasCharacterLimit}
          onCharacterLimitToggle={handleCharacterLimitToggle}
          characterLimit={characterLimit}
          onCharacterLimitChange={handleCharacterLimitChange}
          readingTime={readingTime}
        />
        <TextStats
          characterCount={characterCount}
          wordCount={wordCount}
          sentenceCount={sentenceCount}
        />
        <LetterDensity density={letterDensity} />
      </main>
    </>
  );
}

export default App;

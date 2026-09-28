export function countCharacters(text, excludeSpaces = false) {
  if (!excludeSpaces) {
    return text.length;
  }

  return text.replace(/\s/g, "").length;
}

export function countWords(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    return 0;
  }

  return trimmedText.split(/\s+/).length;
}

export function countSentences(text) {
  const trimmedText = text.trim();

  if (!trimmedText) {
    return 0;
  }

  const sentences = trimmedText.match(/[.!?]+(?=\s|$)/g);

  return sentences ? sentences.length : 0;
}

export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = countWords(text);

  if (wordCount === 0) {
    return "0 minute";
  }

  const minutes = wordCount / wordsPerMinute;

  if (minutes < 1) {
    return "<1 minute";
  }

  return `${Math.ceil(minutes)} ${Math.ceil(minutes) === 1 ? "minute" : "minutes"}`;
}
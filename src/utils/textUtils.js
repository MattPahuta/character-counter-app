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

// counting letters only (no spaces, numbers, or punctuation)
// normalizing each character to uppercase for consistency
export function calculateLetterDensity(text) {
  const letters = text.match(/[a-z]/gi) || [];

  if (letters.length === 0) {
    return [];
  }

  const frequency = {};

  letters.forEach((letter) => {
    const normalizedLetter = letter.toUpperCase();

    frequency[normalizedLetter] = (frequency[normalizedLetter] || 0) + 1;
  });

  return Object.entries(frequency).map(([letter, count]) => ({
    letter, count, percentage: (count / letter.length) * 100,
  })).sort((a,b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }

    return a.letter.localeCompare(b.letter);
  });

  /**
   * produces data like: 
   * [
   *  { letter: "E", count: 40, percentage: 16.6 },
   *  ...
   * ]
   */
}
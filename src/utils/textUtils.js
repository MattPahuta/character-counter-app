export function countCharacters(text, includeSpaces = true) {
  if (includeSpaces) {
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
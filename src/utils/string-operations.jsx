function getFirstLetter(str) {
  const firstLetters = str
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
  return firstLetters;
}

export default getFirstLetter;

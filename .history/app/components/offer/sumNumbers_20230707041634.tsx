export const sumNumbersFromString = (str: string) => {
  const firstThreeLetters = str.substr(0, 3);
  const extractedNumbers = firstThreeLetters.match(/\d+/g);

  if (extractedNumbers) {
    const sum = extractedNumbers.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum;
  }

  return 0;
};

// Strings Mix
// https://www.codewars.com/kata/5629db57620258aa9d000014

function stringsMix(s1, s2) {
  const quantitiesbyFrequencyNum = [];
  const str1LetterCount = {};
  const str2LetterCount = {};

  // count occurence of each letter in each string as longs its between a-z lower case only
  // --> string 1 count
  for (let i = 0; i < s1.length; i++) {
    const isAtoZ = /[a-z]/.test(s1[i]);

    if (isAtoZ) {
      str1LetterCount.hasOwnProperty(s1[i])
        ? str1LetterCount[s1[i]]++
        : (str1LetterCount[s1[i]] = 1);
    }
  }

  // --> string 2 count
  for (let i = 0; i < s2.length; i++) {
    const isAtoZ = /[a-z]/.test(s2[i]);

    if (isAtoZ) {
      str2LetterCount.hasOwnProperty(s2[i])
        ? str2LetterCount[s2[i]]++
        : (str2LetterCount[s2[i]] = 1);
    }
  }

  // create something to reference which is all the unique letters in both letterCount objects
  const allLettersToCheck = [
    ...new Set([
      ...Object.keys(str1LetterCount),
      ...Object.keys(str2LetterCount),
    ]),
  ];

  // now loop through the above thing and check that letter vs. the values in both objects
  allLettersToCheck.forEach((letter) => {
    const highestLetterCount = str1LetterCount[letter] || 0;

    if (
      str2LetterCount[letter] > highestLetterCount &&
      str2LetterCount[letter] > 1
    ) {
      quantitiesbyFrequencyNum.push(
        `2:${letter.repeat(str2LetterCount[letter])}`
      );
    } else if (
      str1LetterCount[letter] === str2LetterCount[letter] &&
      str1LetterCount[letter] > 1
    ) {
      quantitiesbyFrequencyNum.push(
        `=:${letter.repeat(str1LetterCount[letter])}`
      );
    } else {
      if (str1LetterCount[letter] > 1) {
        quantitiesbyFrequencyNum.push(
          `1:${letter.repeat(str1LetterCount[letter])}`
        );
      }
    }
  });

  // now group all first, second and equal totals and then sort by codepoint for each substring group type
  const sortByCodePointOrLength = (a, b) => {
    return a.length === b.length
      ? a.codePointAt(3) - b.codePointAt(3)
      : b.length - a.length;
  };

  const firstStringsByLength = quantitiesbyFrequencyNum
    .filter((str) => str.startsWith("1"))
    .sort(sortByCodePointOrLength);

  const secondStringsByLength = quantitiesbyFrequencyNum
    .filter((str) => str.startsWith("2"))
    .sort(sortByCodePointOrLength);

  const equalStringsByLength = quantitiesbyFrequencyNum
    .filter((str) => str.startsWith("="))
    .sort(sortByCodePointOrLength);

  // now sort the final quantities array so it's in order of frequency, join together with a / seperating each substring
  return [
    ...firstStringsByLength,
    ...secondStringsByLength,
    ...equalStringsByLength,
  ]
    .sort((a, b) => b.length - a.length)
    .join("/");
}

module.exports = stringsMix;

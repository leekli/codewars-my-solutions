// First non-repeating character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  const charCounts = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (charCounts[char] === 1) {
      return s[i];
    }
  }

  return "";
}

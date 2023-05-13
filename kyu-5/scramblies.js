// Scramblies
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
  const letterFreq = {};

  for (let char of str2) {
    if (letterFreq[char]) letterFreq[char]++;
    else letterFreq[char] = 1;
  }

  for (let letter of str1) {
    if (letterFreq[letter] > 0) letterFreq[letter]--;
  }

  for (let letter in letterFreq) {
    if (letterFreq[letter] > 0) return false;
  }

  return true;
}

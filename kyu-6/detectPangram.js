// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  const stringSet = new Set(string.toLowerCase().match(/[a-z]/g));

  return stringSet.size === 26;
}

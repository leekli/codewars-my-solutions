// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  if (str.length === 0) return [];
  const splitString = str.match(/.{1,2}/g);

  if (str.length % 2 === 1) splitString[splitString.length - 1] += `_`;

  return splitString;
}

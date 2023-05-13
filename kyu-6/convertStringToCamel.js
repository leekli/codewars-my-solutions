// Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  if (str.length === 0) return "";

  const splitStr = str.split(/[-_]+/);
  const newStrArr = [splitStr[0]];

  for (let i = 1; i < splitStr.length; i++) {
    newStrArr.push(splitStr[i][0].toUpperCase() + splitStr[i].substr(1));
  }

  if (splitStr[0][0] === splitStr[0][0].toUpperCase())
    newStrArr[0] = splitStr[0][0].toUpperCase() + splitStr[0].substr(1);

  return newStrArr.join("");
}

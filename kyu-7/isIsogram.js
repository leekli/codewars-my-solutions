// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  const strSet = Array.from(new Set(str.toLowerCase())).join("");

  return str.length === strSet.length ? true : false;
}

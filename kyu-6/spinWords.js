// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  const finalStringArray = string.split(" ").map((word) => {
    return word.length < 5 ? word : word.split("").reverse().join("");
  });

  return finalStringArray.join(" ");
}

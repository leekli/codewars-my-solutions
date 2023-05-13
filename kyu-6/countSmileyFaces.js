// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  let count = 0;
  const validSmiles = [
    ":)",
    ":D",
    ";-D",
    ":)",
    ";~D",
    ":~)",
    ":-D",
    ":-)",
    ";-)",
    ";D",
    ";~)",
    ";)",
    ":~D",
  ];

  for (let i = 0; i < arr.length; i++) {
    if (validSmiles.includes(arr[i])) {
      console.log("found", arr[i]);
      count++;
    }
  }

  return count;
}

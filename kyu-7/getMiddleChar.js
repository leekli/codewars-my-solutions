// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  const midIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[midIndex - 1] + s[midIndex];
  }

  return s[midIndex];
}

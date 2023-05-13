// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
  const directionsLookup = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  const result = [];

  arr.forEach((item) => {
    if (result.length) {
      const prevItem = result.pop();
      if (prevItem !== directionsLookup[item]) {
        result.push(prevItem);
        result.push(item);
      }
    } else {
      result.push(item);
    }
  });

  return result;
}

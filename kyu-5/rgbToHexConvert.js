// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  const convertRgbToHex = (value) => {
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    const hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const finalStr = `${convertRgbToHex(r)}${convertRgbToHex(g)}${convertRgbToHex(
    b
  )}`;

  return finalStr.toUpperCase();
}

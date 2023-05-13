// Sum Strings as Numbers
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
  const num1 = a.split(" ").map((e) => BigInt(e))[0];
  const num2 = b.split(" ").map((e) => BigInt(e))[0];
  const calc = num1 + num2;

  return calc.toString();
}

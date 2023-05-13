// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let mumbleArr = [];

  for (let i = 0; i < s.length; i++) {
    const tempStr = `${s[i].toUpperCase()}` + `${s[i].repeat(i).toLowerCase()}`;

    mumbleArr.push(tempStr);
  }

  return mumbleArr.join("-");
}

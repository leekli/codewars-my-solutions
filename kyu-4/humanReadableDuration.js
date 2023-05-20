// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function humanReadableDur(secs) {
  if (secs === 0) return "now";

  const years = Math.floor(secs / 31536000);
  const days = Math.floor((secs % 31536000) / 86400);
  const hours = Math.floor((secs % (3600 * 24)) / 3600);
  const mins = Math.floor((secs % 3600) / 60);
  const seconds = Math.floor(secs % 60);

  let finalStr = "";

  if (years > 0) {
    if (years === 1 && days === 0) finalStr += `${years} year`;
    else if (years === 1 && days !== 0) finalStr += `${years} year, `;
    else if (years > 1 && days === 0) finalStr += `${years} years`;
    else if (years > 1 && days !== 0) finalStr += `${years} years, `;
  }

  if (days > 0) {
    if (days === 1 && hours === 0) finalStr += `${days} day`;
    else if (days === 1 && hours !== 0) finalStr += `${days} day, `;
    else if (days > 1 && hours === 0 && mins > 0) finalStr += `${days} days, `;
    else if (days > 1 && hours !== 0) finalStr += `${days} days, `;
  }

  if (hours > 0) {
    if (hours === 1 && mins === 0 && seconds === 0) finalStr += `${hours} hour`;
    else if (hours === 1 && mins !== 0 && seconds !== 0)
      finalStr += `${hours} hour, `;
    else if (hours > 1 && mins === 0 && seconds > 0)
      finalStr += `${hours} hours and `;
    else if (hours > 1 && mins === 0 && seconds === 0)
      finalStr += `${hours} hours`;
    else if (hours > 1 && mins !== 0 && seconds !== 0)
      finalStr += `${hours} hours, `;
    else if (hours > 1 && mins !== 0 && seconds === 0)
      finalStr += `${hours} hours and `;
  }

  if (mins > 0) {
    if (mins === 1 && seconds === 0) finalStr += `${mins} minute`;
    else if (mins === 1 && seconds !== 0) finalStr += `${mins} minute and `;
    else if (mins > 1 && seconds === 0) finalStr += `${mins} minutes`;
    else if (mins > 1 && seconds !== 0) finalStr += `${mins} minutes and `;
  }

  if (seconds > 0) {
    if (seconds === 1) finalStr += `${seconds} second`;
    else finalStr += `${seconds} seconds`;
  }

  return finalStr;
}

console.log(humanReadableDur(132030240));

// assert.strictEqual(formatDuration(1), "1 second");
// assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
// assert.strictEqual(formatDuration(120), "2 minutes");
// assert.strictEqual(formatDuration(3600), "1 hour");
// assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
// console.log(humanReadableDur(15731080));

// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;

  const finalTimeStr = [];

  const timeArr = [hours, minutes, secs]
    .map((element) => {
      if (element < 10) return `0${element}`;
      else return `${element}`;
    })
    .join(":");

  return timeArr;
}

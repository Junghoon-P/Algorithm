function average(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return parseInt(sum / arr.length);
}

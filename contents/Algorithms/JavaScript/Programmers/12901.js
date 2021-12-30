//2016년
function solution(a, b) {
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let JanFirst = 3;
  let sum = JanFirst + b;
  let currentMonth = month.splice(0, a);
  for (let i = 0; i < currentMonth.length; i++) {
    sum += currentMonth[i];
  }
  return day[sum % 7];
}

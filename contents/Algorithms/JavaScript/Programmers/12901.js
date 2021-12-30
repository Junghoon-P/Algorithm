//2016년
function solution(a, b) {
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let JanFirst = 1;
  let sum = JanFirst + 3;
  for (let i = 0; i < month.length; i++) {
    sum += month[a];
  }
  return day[sum % 7];
}

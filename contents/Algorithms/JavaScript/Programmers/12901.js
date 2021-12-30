//2016년
function solution(a, b) {
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let JanFirst = 3; //idx값을 위해 -1 미리 해놓음
  let sum = JanFirst + b;
  for (let i = 0; i < month.length; i++) {
    sum += month[i];
  }
  return day[sum % 7];
}

//2016년
function solution(a, b) {
  let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const JanFirst = 3;
  let sum = JanFirst + b;
  let currentMonth = month.splice(0, a);
  for (let i = 0; i < currentMonth.length; i++) {
    sum += currentMonth[i];
  }
  return day[sum % 7];
}

//Date 활용법
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));

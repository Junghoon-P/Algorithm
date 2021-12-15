// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
function double(a, b) {
  return a ** b;
}
double(2, 3); //8

//prompt 경우
const score = prompt("a와 b를 입력하세요. : ")
  .split(" ")
  .map((v) => parseInt(v));
console.log(score[0] ** score[1]);

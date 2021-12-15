// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.
const score = prompt("a와 b를 입력하세요. : ")
  .split(" ")
  .map((v) => parseInt(v));
console.log(Math.floor(score[0] / score[1]), score[0] % score[1]);

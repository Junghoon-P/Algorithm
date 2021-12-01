//없는 숫자 더하기
//나의 풀이
function solution(numbers) {
  let answer = 0;
  //문제에서 제한 사항으로 numbers의 길이 및 포함된 숫자를 알려줬다.
  // 9이하의 숫자와 numbers를 비교해 포함되어 있지 않은 숫자만 answer에 더해준다.
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

// 인기 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

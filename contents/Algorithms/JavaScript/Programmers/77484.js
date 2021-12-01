//로또의 최고 순위와 최저 순위

//풀이 1
function solution(lottos, win_nums) {
  let winNum = 0;
  let zeroNum = 0;
  let answer = [];

  //당첨 번호와 0으로 적혀진 번호 갯수 도출
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroNum++;
    } else {
      for (let j = 0; j < win_nums.length; j++) {
        if (lottos[i] === win_nums[j]) {
          winNum++;
        }
      }
    }
  }

  const maxWinNum = winNum + zeroNum;
  const minWinNum = winNum;
  let maxRank;
  let minRank;

  //초반 풀이에서 if문을 활용해서 하다가 너무 길어져 switch문을 활용한 사례를 참고하여 수정
  switch (maxWinNum) {
    case 0:
      maxRank = 6;
      break;
    case 1:
      maxRank = 6;
      break;
    case 2:
      maxRank = 5;
      break;
    case 3:
      maxRank = 4;
      break;
    case 4:
      maxRank = 3;
      break;
    case 5:
      maxRank = 2;
      break;
    case 6:
      maxRank = 1;
      break;
  }
  switch (minWinNum) {
    case 0:
      minRank = 6;
      break;
    case 1:
      minRank = 6;
      break;
    case 2:
      minRank = 5;
      break;
    case 3:
      minRank = 4;
      break;
    case 4:
      minRank = 3;
      break;
    case 5:
      minRank = 2;
      break;
    case 6:
      minRank = 1;
      break;
  }
  answer[0] = maxRank;
  answer[1] = minRank;
  return answer;
}

//풀이 2
function solution(lottos, win_nums) {
  //교집합 찾기
  let intersection = lottos.filter((x) => win_nums.includes(x));
  //교집합의 갯수 찾기
  let intersectionCount = lottos.length - intersection.length + 1;

  // 교집합이 있는 경우, 없는 경우를 나누어서 출력
  if (intersection.length == 0) {
    intersectionCount = lottos.length - intersection.length;
  } else {
    intersectionCount = lottos.length - intersection.length + 1;
  }

  //0의 갯수 구하기
  let countZero = lottos.filter((element) => 0 === element).length;

  //로또의 최고 순위 구하기
  let lottosMax = intersectionCount - countZero;

  //최고 순위의 조건  분기처리
  if (countZero == 6) {
    lottosMax = lottosMax + 1;
  } else {
    lottosMax;
  }

  const answer = [lottosMax, intersectionCount];

  return answer;
}
//인기 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

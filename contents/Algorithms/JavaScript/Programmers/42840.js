//모의고사
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

//다른 풀이
function solution(answers) {
  let result = [];
  const math1 = [1, 2, 3, 4, 5];
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let math1_score = 0;
  let math2_score = 0;
  let math3_score = 0;

  while (math1.length < answers.length) {
    math1.push(...math1);
  }
  while (math2.length < answers.length) {
    math2.push(...math2);
  }
  while (math3.length < answers.length) {
    math3.push(...math3);
  }
  math1.length = answers.length;
  math2.length = answers.length;
  math3.length = answers.length;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === math1[i]) {
      math1_score++;
    }
    if (answers[i] === math2[i]) {
      math2_score++;
    }
    if (answers[i] === math3[i]) {
      math3_score++;
    }
  }
  let max = Math.max(math1_score, math2_score, math3_score);

  if (math1_score === max) result.push(1);
  if (math2_score === max) result.push(2);
  if (math3_score === max) result.push(3);

  return result;
}

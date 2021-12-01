//신규 아이디 추천
//나의 풀이

function solution(new_id) {
  let answer = "";
  // 1단계 모든 대문자를 대응되는 소문자로 치환
  answer = new_id.toLowerCase();

  // 2단계 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  answer = answer.replace(/[^a-z0-9-_.]+/g, "");

  //3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  answer = answer.replace(/\.\.+/g, ".");

  //4단계 마침표(.)가 처음이나 끝에 위치한다면 제거
  answer = answer.replace(/^\.|\.$/g, "");

  //5단계 빈 문자열이라면, new_id에 "a"를 대입
  if (answer === "") {
    answer += "a";
  }

  //6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  //  만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    answer = answer.replace(/\.$/g, "");
  }

  //7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (answer.length < 3) {
    answer = answer + answer[answer.length - 1];
  }
  // answer.length > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len)
  return answer;
}

//팀원 풀이
function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^\w\.\-]/g, "");
  new_id = new_id.replace(/[\.]{2,}/g, ".");
  new_id = new_id.replace(/^\./, "");
  new_id = new_id.replace(/\.$/, "");

  // 빈문자열이 false인 점을 활용한 조건문
  // 나도 이런 불린값을 유연하게 써야겠다.
  if (!new_id) {
    new_id = "a";
  }

  //slice vs substring의 차이가 헷갈리는데 따로 메소드 정리 예정
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, "");
  }

  //Replace랑 반대되는 padEnd
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id.split("").reverse().join(""));
  }
  return new_id;
}

//섹시한 인기 답안...
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

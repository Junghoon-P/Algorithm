//숫자 문자열과 영단어
//풀이 1

function solution(s) {
  let answer = "";
  //정규표현식
  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");

  console.log(s);
  return (answer = Number(s));
}

//스터디원 풀이
//객체지향 풀이법

function solution(s) {
  const sDictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  var answer = 0;
  for (let i = 0; i < Object.keys(sDictionary).length; i++) {
    let letter = Object.keys(sDictionary)[i];

    // 아래의 방식으로 정규표현식 오브젝트 변수를 담아야 변수를 정규표현식에 사용할 수 있다.
    let regexAllCase = new RegExp(letter, "gi");
    if (s.includes(Object.keys(sDictionary)[i])) {
      s = s.replace(regexAllCase, Object.values(sDictionary)[i]);
    }
  }
  answer = parseInt(s);
  return answer;
}

//인기풀이
//정규표현식이 아닌 풀이다. 그저 감탄..

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
    console.log(arr);
  }
  for (let i = 0; i < numbers.length; i++) {
    return Number(answer);
  }
}

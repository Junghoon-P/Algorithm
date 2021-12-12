// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
function reverseStr(s) {
  let result = s.split("").reverse().join("");
  return result;
}

let s = "안녕하세요";
reverseStr(s); //'요세하녕안'

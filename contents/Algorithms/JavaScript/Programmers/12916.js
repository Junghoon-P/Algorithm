function solution(s) {
  let toArray = s.toUpperCase().split("");
  let pLength = toArray.filter((element) => "P" === element).length;
  let yLength = toArray.filter((element) => "Y" === element).length;
  return pLength === yLength;
}

//다른 풀이
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

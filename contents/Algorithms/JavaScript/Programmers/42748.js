//K번째 수
//풀이1
function solution(array, commands) {
  var answer = [];
  //array를 순회할때 쓰는 메소드 2가지
  //foreach 리턴 값이 없고
  //map은 array를 리턴해준다. // 인자값2개 파시블 (요소,idx)
  for (let i = 0; i < commands.length; i++) {
    const firstIdx = commands[i][0] - 1;
    const lastIdx = commands[i][1];
    const findK = commands[i][2] - 1;

    let k = array.slice(firstIdx, lastIdx).sort((a, b) => a - b)[findK];
    answer.push(k);
  }
  return answer;
}

let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
]; //i,j,k
let array = [1, 5, 2, 6, 3, 7, 4];

// solution(array, commands);

//풀이2
function solution(array, commands) {
  return commands.map((v) => {
    //커맨드의 요소, 인자
    return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1];
  });
}
// solution(array, commands);

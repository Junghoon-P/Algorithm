//소수 만들기
//나의 풀이

function solution(nums) {
  let numsLen = nums.length;
  let answer = 0;

  function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
        return false;
      }
    }
    // 소수는 1보다 큰 정수임으로
    // 1보다 작으면 false를 리턴한다
    return true;
  }

  for (let i = 0; i < numsLen - 2; i++) {
    for (let j = i + 1; j < numsLen - 1; j++) {
      for (let k = j + 1; k < numsLen; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
          console.log(answer);
        }
      }
    }
  }

  return answer;
}

//인기풀이
function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if (primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}

//배열의 삭제
//다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums1 = [100, 200, 300, 400, 500];
nums1.pop(); //배열의 마지막 값을 삭제한다
nums1.pop();
console.log(nums1); // 원본 배열에 영향을 미친다.

let nums2 = [100, 200, 300, 400, 500];
// slice(시작idx, 종료idx)
// 종료 idx를 포함하지 않고 앞 idx까지
let answer = nums2.slice(0, 3);
console.log(answer);
console.log(nums2); //원본 배열에 영향을 미치지 않는다.

let nums3 = [100, 200, 300, 400, 500];
//splice(시작idx, 제거할 요소 수, 추가할 아이템1, 아이템2 ...)
let result = nums3.splice(0, 3);
console.log(result);
console.log(nums3); //원본 배열에 영향을 미친다.

let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 삼항연산자
// 조건식 ? 참일 때 수행할 내용 : 거짓일 때 수행할 내용
a >= 0 ? console.log("양수") : console.log("음수");

let arr = [];
// print
arr.length > 0 ? console.log("비어있지 않은 배열") : console.log("빈 배열");

// return
let arrStatus = arr.length > 0 ? "비어있지 않은 배열" : "빈 배열";
console.log(arrStatus);

let b;
const result = b ? true : false;
console.log(result);

// 중첩삼항연산자 (가독성 떨어짐)
let score = 70;
score >= 90
  ? console.log("A+")
  : score >= 60
  ? console.log("B+")
  : console.log("F");

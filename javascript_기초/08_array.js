// 배열 생성 방법
let arr = new Array();
let myArr = [];
console.log(myArr);

myArr = [
  1,
  "234",
  true,
  null,
  undefined,
  [3, 4],
  function hello() {},
  { key: "value" },
];
console.log(myArr);

myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[0]); // 1
console.log(myArr[2]); // 3

myArr.push(6);
console.log(myArr);

console.log(myArr.length); // 길이 출력

// 배열 순회 : forEach
const arr = [1, 2, 3, 4, 5, 6];
const newArr = [];
arr.forEach((elm) => {
  console.log(elm * 2);
});
arr.forEach(function (elm) {
  newArr.push(elm * 2);
});
console.log(newArr);

// map : 배열의 원소 각각에 콜백함수 적용해서 리턴
const newArr2 = arr.map((elm) => {
  return elm * 3;
});
console.log(newArr2);

// 존재 유무 조회 : includes(===)
let number = "3";
arr.forEach((elm) => {
  if (elm === number) {
    console.log("true");
  }
});
console.log(arr.includes(number)); // false

// 인덱스 출력 : indexOf
console.log(arr.indexOf(number)); // -1 : 존재하지 않음
console.log(arr.indexOf(4));

// 배열 요소의 자료형이 다양할 때
// 인덱스 찾기 : findIndex(콜백함수)
let myColor = [{ color: "red" }, { color: "green" }, { color: "blue" }];
console.log(
  myColor.findIndex((elm) => {
    return elm.color === "green";
  })
);
console.log(myColor.findIndex((elm) => elm.color === "green")); // 위와 같은 표현
const result = myColor.findIndex((elm) => elm.color === "red");

// 배열에서 원하는 요소 찾기 : find
const result2 = myColor.find((elm) => elm.color === "blue");
console.log(result2);

// 배열 필터링 : filter
myColor = [
  { num: 1, color: "red" },
  { num: 2, color: "green" },
  { num: 3, color: "blue" },
  { num: 4, color: "blue" },
];
console.log(myColor.filter((elm) => elm.color === "blue"));

// 배열 슬라이싱 : slice
console.log(myColor.slice(1, 3));

// 배열 합치기 : concat
myColor1 = [
  { num: 1, color: "red" },
  { num: 2, color: "green" },
];
myColor2 = [
  { num: 3, color: "blue" },
  { num: 4, color: "blue" },
];

console.log(myColor1.concat(myColor2));

// 배열 정렬
// sort : 문자열 기준 원본 배열 정렬
// 다른 기준으로 정렬하기 위해선 전달인자로 비교함수 생성
let chars = ["나", "가", "다"];
chars.sort();
console.log(chars);

// 정수 기준 정렬
const compare = (a, b) => {
  // 오름차순 정렬
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0; // 같을 경우
};

let nums = [20, 6, 8, 1, 5];
nums.sort(compare);
console.log(nums);

// 모든 요소를 문자열로 합치기 : join(구분자)
const s = ["hello", "this", "is", "javascript"];
console.log(s.join());
console.log(s.join(" "));
console.log(s.join("#"));

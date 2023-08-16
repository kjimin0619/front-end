// 배열
let numArr: number[] = [1, 2, 3]; // 방법1
let strArr: string[] = ["hello", "nice", "to meet you"];
let boolArr: Array<boolean> = [true, false, true]; // 배열 정의의 또 다른 방법 : 제네릭 방법

// 여러 타입으로 구성된 배열이라면? : union 타입으로 정의
let nultiArr: (string | number)[] = [1, "hello"];

// 다차원 배열 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 : 타입스크립트에서만 제공
// 길이와 타입이 고정된 배열

// 자바스크립트 코드로 변환시 일반적인 배열로 바뀜 -> 길이 제한은 못함
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(2); // 가능
tup1.pop(); // 가능

// 튜플을 사용하는 상황
// 인덱스의 순서와 위치를 강제하고 싶을 때
const users: [string, number][] = [
  ["김아무개", 1],
  ["이아무개", 2],
  ["박아무개", 3],
  ["최아무개", 4],
  // [5, "장아무개"] 불가능
];

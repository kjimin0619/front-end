/**
 * 타입 변수 응용
 */

// 사례 1 : 매개변수의 타입이 다양한 경우
// 여러개의 타입변수 선언하기
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap(1, "2");

// 사례 2
// 어떤 타입의 배열이든 받을 수 있고 추론까지 제대로 하고싶다면?
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let temp1 = returnFirstValue([0, 1, 2]);
let temp2 = returnFirstValue(["hello", "hi"]);

// 위 예시 함수 기준으로 union 타입으로 추정되어 반환되는 배열
let temp3 = returnFirstValue(["hello", 1234, true]);

// 제대로 타입 추론하게 하고 싶다면
// 함수 정의 아래와 같이 수정
// 튜플로 정의하면 된다.
// 필요한 매개변수의 타입만 타입변수로 명시하고
// 나머지 매개변수는 unknown으로 추정
function rFV<T>(data: [T, ...unknown[]]) {
  return data[0];
}

// 맨 앞의 원소 정확하게 추론함
let temp4 = rFV(["hello", 1234, true]);

// 사례 3
// length 프로퍼티가 number 값으로 존재하는 매개변수만 전달하도록 만들기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let v1 = getLength([1, 2, 3]); // 3
let v2 = getLength("12345"); // 5
let v3 = getLength({ length: 10 }); // 10
// let v4 = getLength(10); // 에러 ; length 프로퍼티 존재하지 않음

/**
 * 함수 타입 표현식과 호출 시그니쳐
 * ; 함수의 타입을 별도로 정의하는 방법
 */

// 1. 함수 타입 표현식
// => 함수의 타입을 "타입 별칭"으로 정의
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;

///////////////////////////////
// 2. 호출 시그니쳐(콜 시그니쳐)
// => 함수의 타입을 별도로 정의하는 또 다른 문법
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;

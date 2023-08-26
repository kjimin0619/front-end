/**
 * 조건부 타입
 */
// 삼항연산자를 활용하여 조건에 따른 타입을 결정하는 문법
type A = number extends string ? string : number;

// example
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number type 됨

// 제네릭과의 활용
type StringNumberSwitch<T> = T extends number ? string : number;
let temp1: StringNumberSwitch<number>; // string 타입
let temp2: StringNumberSwitch<string>; // number 타입

// 공백제거 함수
// 여러 타입의 매개변수를 받을 수 있음
// 조건에 따른 반환값 타입 다르게 하기
// string이면 공백제거된 string을 반환, 아니면 undefined 반환

// 오버로딩 활용
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hello typescript!"); // string으로 추론
let result2 = removeSpaces(undefined); // undefined로 추론

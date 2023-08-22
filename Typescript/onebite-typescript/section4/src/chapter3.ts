/**
 * 함수 오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * 타입스크립트에서만 지원
 */

// 오버로드 시그니쳐 : 구현할 버전들 전체 선언하기
function f(a: number): void;
function f(a: number, b: number, c: number): void;

// 구현 시그니쳐 : 실제 구현부
function f(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a + 10);
  }
}

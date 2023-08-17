// void
// 아무것도 없음을 의미하는 타입
// string 변수를 반환하는 변수
function func1(): string {
  return "hello";
}
// 아무것도 반환하지 않는 함수
function func2(): void {
  console.log("hello");
}
// undefined, null과의 차이점
// 아무것도 반환하지 않는 함수에 undefined 타입으로 정의한다면
// 어찌됐든 해당 값(undefined)이든 뭐든 return 문을 선언해야 함

// null 타입은 무조건 return null 문을 선언해야 함
// 정말 return 문을 사용하고 싶지 않은 함수에 void 사용

// never
// 존재하지 않는, 불가능한 타입

// 정상적인 종료가 불가능하여 해당 함수가 무언갈 반환하는 것이 애초에 불가능할 때(무한루프)
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
// 변수 타입으로 never를 정의하면
// 어떠한 값도 담을 수 없음
// 아래 코드는 전부 에러 발생
// let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;

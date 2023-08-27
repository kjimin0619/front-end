/**
 * 조건부 타입 기반의 유틸리티 타입들
 */

// 이미 조건부 타입 챕터에서 구현 해봤던 것들
// Exclude<T,U> :T에서 U를 제거하는 타입
type Exclude<T, U> = T extends U ? never : T; // 직접 구현
type A = Exclude<string | boolean, boolean>;

// 1 단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 2 단계
// string
// never

// 3 단계
// union : string

// Extract<T,U> : T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never; // 직접 구현
type B = Extract<string | boolean, boolean>;

// ReturnType<T> : T타입 함수의 반환값 타입을 추출하는 유틸리티 타입
function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

// 직접 구현
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

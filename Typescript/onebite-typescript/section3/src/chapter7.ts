/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말한다.
 *
 * 타입 가드 : 타입 좁히기를 도와주는 도구들
 * typeof
 * A instanceof B : A가 B 클래스의 인스턴스 객체인지 검사
 * in : 클래스 객체가 아닌 특정한 타입 객체 인지 검사하고 싶다면 프로퍼티 검사
 */

// 매개변수가 number면 toFixed
// string이면 toUpperCase 적용
// Date면 getTime
// Person이면 age 출력

type Person = {
  name: string;
  age: number;
};
function f(value: number | string | Date | null | Person) {
  // 타입 좁히기
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.age);
  }
}

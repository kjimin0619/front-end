/**
 * 인터페이스
 */

interface IPerson {
  readonly name: string;
  age?: number; // 선택적 프로퍼티
  sayHi1: () => void; // 메서드 정의 1. 함수 타입 표현식
  sayHi2(): void; // 메서드 정의 2. 호출 시그니쳐 => 오버로딩 구현가능
  sayHi2(a: number): void;
}

const person: IPerson = {
  name: "홍길동",
  age: 60,
  sayHi1: () => {
    console.log("hello");
  },
  sayHi2: function () {
    console.log("hello");
  },
};

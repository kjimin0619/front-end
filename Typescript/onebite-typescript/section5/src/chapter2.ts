/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 50,
};

/**
 * 언제 사용하나 ? 모듈 보강할 때
 */

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};

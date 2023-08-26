/**
 * keyof 연산자
 * 객체 타입에 적용하는 연산자
 */

interface Person {
  name: string;
  age: number;
}

// keyof : 객체 안의 모든 프로퍼티의 key를 union 타입으로 추출하는 연산자
// 타입과 함께 사용해야 함. 변수와 사용 안됨
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "홍길동",
  age: 60,
};

getPropertyKey(person, "name");

// typeof 연산자와 함께 사용하기
// 타입을 정의할 때 typeof 연산자를 사용하면 변수 안의 타입을 뽑아낼 수 있음
type Person2 = typeof person;
function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

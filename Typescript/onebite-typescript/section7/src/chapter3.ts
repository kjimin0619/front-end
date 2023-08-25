/**
 * 인터페이스, 타입별칭에 제네릭 사용하기
 */

// interface
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 타입으로 사용할 때 타입변수에 할당할 타입을 명시해야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 123,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["h", "e", "l"],
};

// 인덱스 시그니쳐와 인터페이스
// 인덱스 시그니쳐 : 프로퍼티에 key와 value의 타입과 관련된 규칙만 만족하면
// 어떤 객체든 허용하는 유연한 문법

// 일반적인 인터페이스의 인덱스 시그니쳐
interface NumberMap {
  [key: string]: number;
}

let temp1: NumberMap = {
  myKey: -345,
  myKey2: 5558,
};

// 제너릭 인터페이스의 인덱스 시그니쳐
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  mykey: "hello",
  myKey2: "hell",
};

let numberMap: Map<number> = {
  myKey: 123,
  myKey2: 456,
};

// 타입별칭
type Map2<V> = {
  [key: string]: V;
};

let booleanMap: Map2<boolean> = {
  key: true,
  key2: true,
};

// 제네릭 인터페이스의 활용예시
// 유저 관리 프로그램
// 유저 - 학생 / 개발자로 나뉨

interface Student {
  type: "std";
  school: string;
}

interface Developter {
  type: "dev";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// std user가 사용할 메서드
function goToSchool(user: User<Student>) {
  console.log(`${user.name}씨가 ${user.profile.school}에 갑니다`);
}

const devUser: User<Developter> = {
  name: "홍길동",
  profile: {
    type: "dev",
    skill: "typescript",
  },
};

const stdUser: User<Student> = {
  name: "김길동",
  profile: {
    type: "std",
    school: "highschool",
  },
};

goToSchool(stdUser);

// 객체 타입들로 조합된 복잡한 객체 타입을 정의해서 사용해야 할 때,
// 제네릭 인터페이스를 사용하면 깔끔하게 타입을 분류하고 관리할 수 있음

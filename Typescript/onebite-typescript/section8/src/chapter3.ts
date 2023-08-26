/**
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 문법
 *  인터페이스에서는 사용할 수 없으므로
 * 타입 별칭과 함께 사용해야 함
 */
interface User {
  name: string;
  id: number;
  age: number;
}

type PartialUser = {
  // User 인터페이스 객체의 모든 프로퍼티를 선택적 프로퍼티로 만들기
  // 가능한 key : 그때의 value 값
  [key in "id" | "name" | "age"]?: User[key];
};

type booleanUser = {
  // User 인터페이스 객체의 모든 프로퍼티를 boolean 타입으로 만들기
  //   [key in "id" | "name" | "age"]: boolean;
  [key in keyof User]: boolean; // keyof 연산자 활용가능
};

type readonlyUser = {
  // 읽기 전용 유저정보
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보 불러오기
function fetchUser(): User {
  return {
    name: "홍길동",
    id: 1,
    age: 30,
  };
}

// 한명의 유저 정보 수정하기
function updateUser(user: PartialUser) {
  // 수정하는 기능
}

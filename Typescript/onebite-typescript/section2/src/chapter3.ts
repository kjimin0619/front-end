import { brotliCompress } from "zlib";

// object
let user1: object = {
  id: 1,
  name: "홍길동",
};
// object로 타입을 명시했을 때의 문제점
// user.id 이런 프로퍼티 접근이 불가능함
// object는 이 변수가 객체다 라는 정보만 주고, 프로퍼티의 타입은 알 수 없음

// 객체 리터럴 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

console.log(user2.name);

let dog: {
  name: string;
  color: string;
} = {
  name: "강아지",
  color: "brwon",
};

// 특정 프로퍼티 값이 필요 없을 때, 모를 때(optional property, 선택적 프로퍼티)
// ? 사용
// id값은 없어도 될 때 optional property
let user3: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김아무개",
};

user3 = {
  name: "홍길동",
};

// 특정 프로퍼티의 수정을 금지하고 싶을 때
// readonly 사용
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "NEW KEY"; // 불가능

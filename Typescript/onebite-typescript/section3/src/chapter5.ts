/**
 * 타입 추론
 * 변수에 타입이 정의되어 있지 않아도 초기값을 넣어주면
 * 타입스크립트가 자동으로 변수의 타입을 추론해주는 시스템이 있다.
 */

// let으로 선언한 변수는 조금 더 범용적인 타입으로 자동 추론해준다.(타입 넒히기)
// 자동 추론의 기준은 초깃갑
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "hong",
  },
  url: ["https://"],
};

// 구조 분해 할당도 가능
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 복잡한 타입추론
let d; // 초기값이 생략되면 암묵적인 any 타입으로 추론된다.
// 암묵적으로 any타입으로 추론되면 타입이 계속 진화할 수 있다.

d = 10; // number로 추론됨
d.toFixed();

d = "hello"; // string으로 추론됨
d.toUpperCase();

// const 키워드 사용해보기
const num = 10; // number literal 타입으로 추론된다. const 로 선언되었기 때문이다.
const str = "hello"; // string literal

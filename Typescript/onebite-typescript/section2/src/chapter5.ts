// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 없고 타입스크립트에만 존재함
// 컴파일 결과에도 사라지지 않음
// 컴파일 시 타입스크립트의 enum은 자바스크립트의 객체로 변환됨

// 숫자형
// 숫자를 할당해주지 않아도 자동으로 0,1,2,,, 순서대로 할당해줌
// 혹은 시작하는 숫자를 직접 지정해줄 수 있음(맨 처음값에만 시작값  표기)
enum Role {
  ADMINT = 0,
  USER = 1,
  GUEST = 2,
}

// 문자열
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "홍길동",
  role: Role.ADMINT,
};

const user2 = {
  name: "홍길똥",
  role: Role.USER,
};

const user3 = {
  name: "홍길독",
  role: Role.GUEST,
  language: Language.english,
};

console.log(user1, user2, user3); // { name: '홍길동', role: 0 } { name: '홍길똥', role: 1 } { name: '홍길독', role: 2 }

// 타입 별칭(xkdlq alyais 알리아스)
// 편리하게 타입 만들기
// 중복 코드 제거 가능 및 타입 프로퍼티의 추가 및 수정이 쉬워짐
type User = {
  id: number;
  name: string;
  birth: string;
};

let user: User = {
  id: 1,
  name: "홍길동",
  birth: "2000.00.00",
};
// 사용시 유의점
// let 키워드 처럼 중복된 이름으로 선언 금지
// 자바스크립트로 변환시 타입 별칭은 사라짐

// 인덱스 시그니처
// key와 value의 규칙으로 객체의 타입을 정의
// 모든 키와 value가 string 타입이라면? 아래와 같이 편리하게 정의
type CountryCodes = {
  [key: string]: string;
};

let CountryCode: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
};
let countryNumberCodes: countryNumberCodes = {
  korea: 410,
  UnitedState: 840,
};

// 주의점
// 규칙을 위반하지만 않으면 모든 객체를 혀용함. 즉 해당 타입의 객체 변수에 빈 객체 {}를 할당해도 오류가 나지 않음

// 특정 값을 강제하고 싶다면?
// 타입 정의시 해당 프로퍼티 추가
// 이때 추가적인 프로퍼티의 value 타입이 인덱스 시그니처의 value 타입과 반드시 일치하거나 호환가능해야 함

type countryNumberCodes2 = {
  [key: string]: number;
  Korea: number;
};
// let countryNumberCodes2: countryNumberCodes2 = {};// 오류

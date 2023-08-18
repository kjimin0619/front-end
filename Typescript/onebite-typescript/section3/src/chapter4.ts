/**
 * 대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입을 의미한다.
 * 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 합집합(union 타입)
 * |를 이용해 추가할 수 있는 타입의 개수는 무한대
 */
let a: string | number | boolean;
a = 10;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [true, 10, "hello"];

// 예시 : Dog 타입과 Person 타입
//
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};
// 타입 별칭을 이용해서 유니온 타입 만들기도 가능
type Union1 = Dog | Person;

// Dog에 해당하는 객체
let union1: Union1 = {
  name: "",
  color: "",
};

// Person에 해당하는 객체
let union2: Union1 = {
  name: "",
  language: "",
};

// Dog + Person 합친 프로퍼티로 초기화도 가능하다.
// 이런 객체는 Dog 객체이면서도 Person 객체이기도 한, 교집합에 있는 객체가 된다.
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

/**
 * 교집합 타입(intersection 타입)
 * 기본 타입들로 교집합 타입을 정의하면 대부분 never 타입이 됨
 * 객체 타입에 많이 사용되는 타입
 */
let variable: number & string; // never ; 불가능한 타입 ; 공집합을 의미

// Dog와 Person 예시 한 번 더
// Dog 타입이면서 동시에 Person 타입인 객체 = Intersection 타입
type Intersection = Dog & Person;

let inter1: Intersection = {
  name: "",
  color: "",
  language: "",
};

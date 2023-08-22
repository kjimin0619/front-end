/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 *
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 *
 * 를 모두 만족시켜야 두 함수가 호환가능하하고 말할 수 있다.
 */

// 1. 반환값이 호환되는가 : 업캐스팅만 허용
type A = () => number; // 반환값 : number
type B = () => 10; // 반환값 : number literal

let a: A = () => 10;
let b: B = () => 10;

a = b; // 허용 : 반환값 기준 업캐스팅(number literal -> number)
// b = a; // 비허용 : 반환값 기준 다운캐스팅(number -> number literal)

// 2. 매개변수가 호환되는가 :
// 2.1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 불가능 : D 매개변수는 number literal, C 매개변수는 number 타입
// number literal -> number 불가능 ==> 업캐스팅 비허용
d = c; // 가능 : 다운캐스팅 (number -> number literal) 허용

// 이해를 돕기위한 예제 : 매개변수가 객체라면
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name, dog.color);
};

// animalFunc = dogFunc; // 에러 : 업캐스팅 불가능
dogFunc = animalFunc; // 가능 : 다운캐스팅 허용(매개변수에서만)

// 2.2. 매개변수의 개수가 다를 때
type F1 = (a: number, b: number) => void;
type F2 = (a: number) => void;

let f1: F1 = (a, b) => {};
let f2: F2 = (a) => {};

// 매개변수의 갯수가 더 작은 쪽만 호환 가능
f1 = f2;
// f2 = f1; 호환 불가능

import { type } from "os";
/**
 * 제네릭
 * Generic ; 일반적, 포괄적
 *
 * 제네릭 함수 : 일반적인 함수, 포괄적인 함수
 * == 제네럴 general (종합)
 * 모든 타입에 두루두루 쓸 수 있는 범용적인 함수
 */

// 다양한 타입의 매개변수를 받아서 이를 반환하려면?
// 매개변수 타입을 any나 unknown으로 지정할 수도 있지만
// 불편하고 고려할 사항이 많다.
function func1(value: any) {
  return value;
}

let num = func1(10);
let bool = func1(true);
let str = func1("String");

// 제네릭 함수 : 함수의 인수에 따라서
// 반환값의 타입을 가변적으로 지정해주는 방법
// 타입을 지정하기 위해 타입변수 T 정의
// 인수의 타입에 따라 타입변수에 저장되는 타입이 달라짐
function func<T>(value: T) {
  return value;
}

// 정확한 타입추론 가능
let num2 = func(10);
let bool2 = func(true);
let str2 = func("String");

// 타입변수의 타입을 지정하는 것도 가능하다.
// number 배열이 아닌 튜플 타입으로 타입변수 지정하기 예시
let arr = func<[number, number, number]>([1, 2, 3]);

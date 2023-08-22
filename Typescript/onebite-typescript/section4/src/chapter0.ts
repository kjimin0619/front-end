/**
 * 함수 타입 정의
 */

import { type } from "os";

// 타입스크립트에서의 함수 설명?
// 어떤 타입의 매개변수를 받아서, 어떤 타입의 결과값을 반환하는지에 대한 이야기
// 반환값은 리턴문을 기준으로 자동 추론해줌
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하기
// 반환값은 리터문 기준으로 자동 추론
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
// 매개변수의 타입을 정의하지 않아도 기본값을 기준으로 타입을 잘 추론해줌
// 선택적 매개변수 ; 생략가능한 매개변수는 변수명 뒤에 ? 붙이기
function introduce(name = "홍길동", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
// 주의점1 : 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류 발생
// 주의점2 : 호출시 자동추론된 매개변수의 타입과 다른 타입의 변수를 전달하면 오류 발생
// 주의점3 : 선택적 매개변수 뒤에 필수 매개변수가 오면 안됨
introduce("홍길동", 190);
introduce("홍길동");

// rest 파라미터 : 가변적인 길이의 매개변수를 받을 때, 몇 개의 매개변수가 전달받게 될 지 모를 때
// 전달받은 파라미터들을 모아 배열로 반환
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

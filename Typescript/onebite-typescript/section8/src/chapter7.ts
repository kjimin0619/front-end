/**
 * infer : 타입 추론 기능
 *
 */
type FuncA = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => infer R ? R : never;
type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>; // 추론 불가의 상황 => never 타입 반환

/** 예제 : 프로미스 반환값 조사하기
 *  조건 1 : T는 프로미스 타입
 * 조건 2 : 프로미스 타입의 결과값 타입을 반환
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;

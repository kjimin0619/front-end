/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>; // union 타입이 됨 => 분산적인 조건부 타입
// 타입 변수에 유니온 타입을 할당하면 union 타입의 모든 멤버 타입들이 분리됨
// 즉 한 번은 number, 한 번은 string 으로 분리되어 타입변수에 할당
// 이후 분리된 결과를 각각 union으로 묶어줌

let d: StringNumberSwitch<boolean | string | number>;
// 1 단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<string>
// StringNumberSwitch<number>

// 2 단계
// number
// number
// string

// 최종 결과 union
// number | string

// 실용 예제 1
// 특정 타입만 제외하는 타입

// T 타입이 U 타입의 서브타입이 되면 never 타입으로,
// 아니라면 그대로
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2 단계
// number
// never
// boolean

// 결과 : 공집합인 never와 합집합하면 never 는 사라짐
// number | never | boolean => number | boolean

// 실용 예제 2
// 특정 타입만 추출하는 타입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2 단계
// never
// string
// never

// 결과 : 공집합인 never와 합집합하면 never 는 사라짐
// never | string | never => string

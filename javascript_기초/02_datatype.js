/*
 * Data types 자료형
primitive data type - 원시 타입. 한번에 하나의 값만 가질 수 있음 & 하나의 고정된 저장공간 이용
: number, String, Boolean, Undefined, Null

non-primitive data type - 비원시 타입. 한 번에 여러 개의 값을 가질 수 있음 & 여러 개의 고정되지 않은 동적 공간 사용
: Object, Array, Function
 */

// 숫자형
let age = 25; // 정수
let tall = 180.44; // 실수
console.log(age / tall);

let inf = Infinity; // 무한대
let minusInf = -Infinity;
let nan = NaN;

// 문자열
let name = "something";
let name3 = `name : ${name}`;
console.log(name3);

// bool
let isSwitchOff = false;

// NULL
let a = null;
console.log(a);

// undefined
let variable;
console.log(variable); // undefined 아무것도 지정되지 않은 변수

// 형변환(casting)
// 묵시적 형변환
let numA = 12;
let numB = "2";
console.log(numA * numB); // 24 => 문자열을 정수형으로 자료형 변경(casting;캐스팅)
// 자바스크립트 엔진이 알아서 변경해줌(묵시적 형변환)

console.log(numA + numB); // 122 => 정수형을 문자열로 자동 자료형 변경

// 명시적 형변환 ; 의도적 형변환
console.log(numA + parseInt(numB)); // 14 => 문자열을 정수형으로 변경

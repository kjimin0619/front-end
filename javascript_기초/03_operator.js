// 대입연산자 =
// 산술 연산자
let a = 1;
let b = 2;
console.log("몫 : " + a / b); // 몫
console.log("나머지 : " + (a % b)); // 나머지
// 문자열과 숫자형을 더하면 숫자형을 문자열로 자동 형변환

let c = 5;
c += 10; // 복합연산자 사용가능
console.log(c);

c++; // 증감연산자 사용가능
console.log("증가 후 출력 => " + ++c); // 전위 연산
console.log("출력 후 증가 " + c++ + " => " + c); // 후위 연산

// 논리 연산자
console.log(!true);
console.log(true && true);
console.log(false || false);

// 비교 연산자
let result = 1 == "1";
console.log(result); // true : 자바스크립트는 타입이 아닌 '값' 기준으로 비교
// 타입 비교 방법
let result2 = 1 === "1";
console.log(result2); // false

let result3 = 1 != "1"; // false
let result4 = 1 !== "1"; // true
console.log(result3);
console.log(result4);

// 타입 출력 연산자 : typeof
console.log(typeof result); // boolean

// null 병합 연산자
let k;
k = k ?? 10; // 현재 a가 null, undeifned 면 10을 대입해라
console.log(k); // 10

// 숫자 -> 문자열
var x = 10;
var str = x.toString();
console.log(typeof x, typeof str); // number string

// falsy : false, undefined, null, 0, -0, Nan, 빈문자열

// 명시적 타입 변환
// 문자열 타입 변환 : String, toString(), 문자열 연결 연산자 이용
console.log(String(1));
console.log(String(NaN));
console.log(String(Infinity));
console.log((10).toString());
console.log(10 + "");

// 숫자 타입으로 변환 : Number, parseInt, parseFloat, +단항 산술 연산자, *산술연산자
console.log(Number("00"));
console.log(parseInt("-11"));

// 불리언 타입으로 변환
console.log(Boolean(Infinity)); // true

// null 병합 연산자 : 좌항의 피연산자가 falsy 값이라도 null이나 undefined가 아니면 좌항 피연산자를 그대로 출력
var foo = null ?? "default string";
console.log(foo); // default string
var foo = "" ?? "defulat string";
console.log(foo); // ""
if (1 === 3) {
  console.log("test");
}
var circle = {
  getDia: () => {
    return 4;
  },
};
console.log(circle.getDia());

// any
// 특정 변수의 타입을 확실히 알 수 없을 때
// 어떤 타입이든지 넣을 수 있다.
// 자바스크립트 변수를 쓰는 것과 동일함
let myVar = 10;
// myVar = "hello"; // 자동으로 10을 보고 number 타입으로 정의하고 있기 때문에 이런 할당은 오류 발생

let anyVar: any = 10;
anyVar = "hello"; // any 타입은 이런 것도 가능
anyVar = () => {};
anyVar = {};

var num: number = 10;
num = anyVar; // 다른 타입의 변수에 집어넣는 것도 가능
// 다른 타입의 메서드(ex. string 타입의 toUpperCase())를 따로 활용할 수 있음

// 문제점 : 타입 검사를 런타임에 수행하므로 타입스크립트의 이점을 활용할 수 없음.
// 사용을 지양하는 것이 좋음

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1234;
unknownVar = {};
unknownVar = () => {};
// 여기까지는 any 타입과 동일함. 어떤 타입이든지 넣을 수 있다는 것
// 차이점 :다른 타입의 변수에 집어넣을 수 없음
var num: number = 10;
// num = unknownVar; 이런 할당 불가능
// 다른 타입의 메서드를 따로 활용할 수도 없음
// 활용하려면 "타입정제" 과정을 거쳐야 함
if (typeof unknownVar === "number") {
  num = unknownVar; // unknown타입은 타입정제 후 할당 가능
}
// 런타임 에러를 일으키는 any 타입보다는 안전한 방식

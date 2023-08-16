// number
let num1: number = 123;
let num2: number = -1324;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let b1: boolean = true;
let b2: boolean = false;

// null
let n1: null = null;

// undefined
let und1: undefined = undefined;

// null 타입이 아닌 변수에도 임시로 null 값을 넣는 방법
// "strictNullChecks": false
// let numA: number = null; // 가능
// strict 옵션은 strictNullChecks 옵션의 상위 옵션임
// strict 옵션이 true로 되어있으면 strictNullChecks 옵션도 true로 지정됨

// 리터럴 타입 : 값 자체가 타입이 되는 타입
let numA: 10 = 10;
// numA = 12 // 불가능

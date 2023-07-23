//  표현식 : 값으로 평가될 수 있는 문(statement)

//  템플릿 리터럴 : 백틱(``)
// 멀티라인 문자욜, 표현식 삽입, tageed 템플릿 등 편리한 문자열 처리 기능 제공
let a = `hello`;
console.log(a);

let template = `
<ul>
    <li><a href="#">Home</a></li>
</ul>
`;
console.log(template);

let first = `jimin`;
let last = `kim`;
console.log(`this is ${first} ${last}.`);
console.log(`my name is ` + `lee`);

// 문자열 연결 연산자
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 인식
console.log("1" + 2); // 12
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + null); // 1

console.log(1 == true); // true => 1 == TRUE
console.log(1 === true); // false => 0 == FALSE
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// NaN 수 타입 조사 : Number.isNaN
console.log(NaN === NaN); // false : 자기 자신과 일치하지 않는 유일한 값
console.log(Number.isNaN(NaN));

// 논리연산자 : ||, &&, !
console.log(true || true);
console.log(false || true);
console.log(!0); // true
console.log(0 || 1);

// 데이터타입 조사 : typeof
console.log(typeof "sth"); // string

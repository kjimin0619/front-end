var person = {
  name: "k",
};

person.age = 20;
console.log(person);

delete person.age; // property 삭제
console.log(person);

// 동적으로 property key 생성
// 이때, 키로 사용할 표현식을 대괄호 []로 묶어야 함
const prefix = "prop";
let i = 0;
const obj = {
  [`${prefix} - ${++i}`]: i,
  [`${prefix} - ${++i}`]: i,
  [`${prefix} - ${++i}`]: i,
  sayHi() {
    console.log("say hi");
  },
};
console.log(obj);
console.log(obj.sayHi());

// 문자열은 원시값(read only) => 변경 불가능함
const myString = "string";
myString[0] = "S";
console.log(myString); // string

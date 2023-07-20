// 논리 연산자
// &&, ||, !
console.log(false && true);

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let person1 = {};
let person2;
let person3 = { name: "jimin kim" };
const name1 = getName(person1); // undefined
const name2 = getName(person2); // 객체가 아닙니다
const name3 = getName(person3); // jimin kim
console.log(name1);
console.log(name2);
console.log(name3);

// 단락회로평가 활용
function getName2(person) {
  const name = person && person.name;
  return name || "객체가 아닙니다";
}

console.log(getName2(person1)); // 객체가 아닙니다(undefined는 falsy)
console.log(getName2(person2)); // 객체가 아닙니다
console.log(getName2(person3)); // jimin kim

// truthy : 참 같은 값
// [], {}, 숫자값, 문자열, Infinity

// falsy : 거짓 같은 값
// null, undefined, 숫자 0, NaN, 빈문자열

let a = null;

if (a) {
  console.log("true");
} else {
  console.log("false");
}

const getName = (person) => {
  if (!person) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let person1 = { name: "김지민" };
let person2 = null;
const name1 = getName(person1);
const name2 = getName(person2);
console.log(name1);
console.log(name2);

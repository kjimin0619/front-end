// 객체 선언 방식
// 객체는 상수로 선언해도, 내부의 프로퍼티를 얼마든지 수정할 수 있음
// 프로퍼티의 수정 != 객체의 수정.
const person1 = new Object();
let person2 = {}; // 객체 리터럴 방식

let person = {
  // 객체 프로퍼티
  // 모든 자료형이 value에 들어갈 수 있음
  // member
  key: "value1",
  key1: "value2",
  key2: true,
  key3: undefined,
  key4: [1, 2, 3, 4, 5],
  key5: 123,
  // 메서드
  key6: function happy() {
    console.log(`key is ${this.key}`);
    console.log(`key is ${this["key"]}`);
    return "happy!";
  },
};

console.log(person);

// 객체 사용하기
console.log("key1 : ", person.key1);
console.log("key6 : ", person.key6());
console.log("key6 : ", person["key6"]());
console.log("key2 : ", person.key2);
console.log("key3 : ", person["key3"]);
console.log("key4 : ", getPropertyValue("key4"));

function getPropertyValue(key) {
  return person[key];
}

// 객체 수정하기
person.location = "한국";
person["name"] = "jinju";
console.log(person);

// 프로퍼티 수정하기
person.name = "minsu";
person.location = "미국";
console.log(person);

// 삭제하기
// 1. delete 명렁어 사용 : 객체에서는 사라지지만 여전히 메모리 내에 존재하게 됨
delete person.name;
delete person["location"];
console.log(person);

// 2. null 대입
person.key = null;
console.log(person);

// 존재하지 않는 프로퍼티 호출
console.log(person.key9); // undefined

// 존재 유무 확인 : "키 이름" in person
console.log(`name : ${"key9" in person}`);
console.log(`name : ${"key2" in person}`);

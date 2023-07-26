var a = function () {
  console.log("test a ");
};

var b = () => {
  console.log("test b");
};

var add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("인수는 모두 숫자여야 합니다.");
  }
  return a + b;
};

var minus = (a, b) => a - b;
a();
b();
console.log(add(10, 4));
// console.log(add("14", 4));
console.log(minus(10, 3));

// 참조에 의한 전달과 외부 상태의 변경
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "kim";
}

var num = 100;
var person = { name: "lee" };

console.log(num); // 100
console.log(person.name); // lee

changeVal(num, person);

console.log(num); // 100 원시값은 원본이 훼손되지 않는다. => 값에 의한 전달
console.log(person.name); // kim 객체는 변경가능한 값. 원본이 바뀐다. => 참조에 의한 전달

// 콜백 함수
// 함수의 변하지 않는 공통 로직은 미리 정의해두고,
// 경우에 따라 변경되는 로직은 추상화하여 함수 외부에서 함수 내부로 전달

// 고차함수 : 매개변수를 통해 함수 외부에서 콜백 함수를 전달받은 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
  console.log("==========");
}

var logAll = (i) => {
  console.log(i);
};

var logOdds = (i) => {
  if (i % 2) console.log(i);
};

repeat(4, logAll);
repeat(9, logOdds);
repeat(10, (i) => {
  if (!(i % 2)) console.log(i);
});

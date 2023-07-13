let arr = ["one", "two", "three"];

let [one, two, three] = arr; // 비구조화 할당
console.log(one, two, three);

[a, b, c, d] = ["one", "two", "three"];
console.log(a, b, c, d); // d = undefined
[a, b, c, d = "four"] = ["one", "two", "three"];
console.log(a, b, c, d); // d = undefined

// swap 일반
let k = 10;
let m = 20;
let tmp = k;
k = m;
m = tmp;
console.log(k, m);

// 비구조화를 이용한 swap
k = 100;
m = 10;
[k, m] = [m, k];
console.log(k, m);

// 객체와 비구조화 : 키 이름으로 비구조화 할당을 수행
let myObject = {
  num1: "1",
  num2: "2",
  num3: "3",
};
let { num2, num1, num3 } = myObject; // 오브젝트의 키 값과 동일한 이름으로 할당해야 함. 순서는 상관없음
console.log(num1, num2, num3);
// 변수이름 바꾸기 & 기본값 할당
let { num2: myNum2, num1: myNum1, num3: myNum3, myNum4 = "four" } = myObject;
console.log(myNum1, myNum2, myNum3, myNum4);

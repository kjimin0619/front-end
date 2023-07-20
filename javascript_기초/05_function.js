// 함수 선언식
console.log(helloB()); // 가능 -> 호이스팅 ; 함수 선언식으로 만들어진 함수들은
//                                          실행시 최상단으로 올려져서 호출됨
function getArea(width, height) {
  return width * height;
}

console.log(getArea(10, 3));
console.log(getArea(6, 3));

/////////////////////////////////////////////////////////////////////////////////////
// 함수 표현식
// 변수가 함수를 담을 수 있음
// console.log(helloA()); // 불가능 -> 호이스팅이 안됨 ; 작성된 위치 이후에서 접근 가능
let helloA = function () {
  return "hello everyone";
};

function helloB() {
  return "hello everyone";
}

const helloTxt = helloA();
console.log(helloA); // Function: hello
console.log(helloTxt); // hello everyone

// 화살표 함수 : 함수 표현식을 빠르고 간결하게 작성하기(호이스팅 X)
let helloA_ = () => "hello everybody!";
console.log(helloA_());

let helloC = () => {
  return "hello Everybody!";
};
console.log(helloC());

let length = function () {
  return "length";
};

et;
emgtj_ = () => {};

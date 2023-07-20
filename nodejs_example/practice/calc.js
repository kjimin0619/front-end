const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => a - b;

console.log("this is calc.js");

// 모듈 내보내기
module.exports = {
  moduleName: "calc module",
  add: add,
  sub: sub,
};

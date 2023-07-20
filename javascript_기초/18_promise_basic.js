// promise 객체 : 비동기 함수에 콜백함수를 전달하지 않고도 비동기 처리를 만들 수 있음

// 비동기 작업이 가질 수 있는 상태
// 1. pending(대기 상태)
// 2. fulfilled(성공)
// 3. rejected(실패)
// * resolve : pending -> fulfilled
// * reject : pending -> rejected

// 2초 뒤, 전달받은 수가 양수인지 음수인지 판별하는 함수
function isPositive(n, resolve, reject) {
  setTimeout(() => {
    if (typeof n === "number") {
      // resolve
      resolve(n > 0 ? "positive" : "negative");
    } else {
      // reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// 일반적인 호출(콜백)
// isPositive(
//   45,
//   (res) => {
//     console.log("수행 성공 : ", res);
//   },
//   (err) => {
//     console.log("수행 실패 : ", err);
//   }
// );

// promise 활용
function isPositiveP(n) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof n === "number") {
        // resolve
        console.log(n);
        resolve(n > 0 ? "positive" : "negative");
      } else {
        // reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask; // promise 객체 반환
}

// 반환될 promise 객체를 저장할 변수 마련
const res = isPositiveP(19);
// then : resolve 즉, 작업 성공시 수행할 내용
// catch : reject 즉, 작업 실패시 수행할 내용
res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

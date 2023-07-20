// promise return 하는 함수
function funcPromise1() {
  var promiseSth = new Promise((resolve1, reject1) => {
    // promise 정의
    setTimeout(() => {
      resolve1("this is first task");
      // reject1("error!! :: first task");
    }, 3000);
  });

  return promiseSth;
}

function funcPromise2() {
  var promiseSth = new Promise((resolve2, reject2) => {
    // promise 정의
    setTimeout(() => {
      resolve2("this is second task");
    }, 1000);
  });

  return promiseSth;
}

// funcPromise1()
//   .then((value) => {
//     console.log(value);
//     return funcPromise2();
//   })
//   .then((value) => {
//     console.log(value);
//     return funcPromise3();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

async function test() {
  // error 처리(reject) : try-catch
  try {
    // funcPromise1 작업이 끝날 때까지 대기 후 resolve 값을 a에 담음
    a = await funcPromise1();
    // funcPromise2 작업이 끝날 때까지 대기 후 resolve 값을 b에 담음
    b = await funcPromise2();
  } catch (error) {
    console.log(error);
  }

  console.log(a);
  console.log(b);
}

test();

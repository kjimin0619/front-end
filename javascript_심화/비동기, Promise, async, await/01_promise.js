function main() {
  console.log("== main ==");
  return;
}

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

function funcPromise3() {
  var promiseSth = new Promise((resolve3, reject3) => {
    // promise 정의
    setTimeout(() => {
      resolve3("this is third task");
    }, 5000);
  });

  return promiseSth;
}

// 비동기작업의 순서 X
// then : ~ 하고 난 후, Promise가 제대로 수행되고 나서 할 일
funcPromise1().then((value) => {
  // promise 수행
  console.log(value);
});

funcPromise2().then((value) => {
  // promise 수행
  console.log(value);
});

main();

// 비동기작업의 순서 O
funcPromise1()
  .then((value) => {
    console.log("\n== promise에 순서 부여 == ");
    // promise 수행
    console.log(value);
    return funcPromise2();
  })
  .then((value) => {
    // promise 수행
    console.log(value);
    return funcPromise3();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });

// 자바스크립트는 "싱글 쓰레드(동기적)"로 동작

// 동기
// 코드가 작성된 순서대로 작업을 처리
// 이전 작업이 진행 중일 때에는 다음 작업을 수행하지 않음(블로킹 방식)
// 코드를 실행하는 쓰레드를 여러 개 사용하면(멀티쓰레드) 작업 분할 가능
// 그러나, 자바 스크립트는 싱글 쓰레드라 위와 같은 방법 사용 불가능

// 비동기
// 싱글 쓰레드 방식을 이용하면서,
// 동기적 작업의 단점을 극복하기 위해 여러 개의 작업을 동시에 실행시키는 방식
// 논블로킹 방식
// 콜백함수를 활용해서 작업이 잘 수행되었는지 확인함

function taskA(a, b, cb) {
  // setTimeout(콜백함수, 딜레이타임)
  // 딜레이타임은 ms 단위 (1000ms = 1s)
  setTimeout(() => {
    console.log("A TASK END");
    const r = a + b;
    cb(r);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    console.log("B TASK END");
    const r = 2 * a;
    cb(r);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    console.log("C TASK END");
    cb(a * -1);
  }, 2000);
}

taskA(4, 5, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});

taskC(5, (res) => {
  console.log("C TASK RESULT : ", res);
});
console.log("finish code");

// 자바스크립트 엔진(JS Engine)
// Heap :
// 메모리 할당. 변수나 상수 등에 사용

// Call Stack :
// 코드의 실행에 따라 호출 스택을 쌓음
taskA(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});

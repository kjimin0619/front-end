// async : 비동기를 다루는 기능
function delay(ms) {
  // 무조건 resolve 된다고 가정
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// async 키워드를 붙이면 이 함수의 리턴 값은,
// "Promise(비동기 작업 객체)"의 resolve 결과 값이 됨
async function helloAsync() {
  // await : 비동기 함수 호출 앞에 붙이면, 비동기 함수가 동기 함수처럼 작동함
  // 즉 await 뒤에 있는 함수가 끝나기 전까지 다음 코드를 실행하지 않음
  // await 줄 코드는 동기적으로 수행
  // 반드시 async 키워드가 붙은 함수 내에서 사용
  await delay(3000);
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();

/**
 * promise
 * 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에
 * <>로 비동기 처리의 성공 결과값의 타입을 정의할 수는 있지만,
 * 작업 실패 시의 타입을 따로 정해줄 수 없다.
 */

// 비동기 처리를 위한 프로미스 객체 만들기
// 견고하고 안전한 비동기 코드를 짤 수 있다.

// 성공시 number 타입의 값을 반환하는 promise 객체
// 비동기 처리의 결과값을 명시적으로 적어줄 수 있다.
const promise = new Promise<number>((resolve, reject) => {
  // 3초뒤 20 반환하는 비동기 작업
  setTimeout(() => {
    // resolve(20);// 작업 성공
    reject("~에 실패"); // 작업 실패
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});
promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의하기
 */
// 상황 : 서버로부터 하나의 게시글의 데이터를 가져와야하는 상황
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  // 3초뒤 게시글 객체를 가져오는 비동기 객체 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "내 게시글",
        content: "내용입니다",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
  // 이게 되게 하려면
  // 1. fetchPost() 함수의 반환값 Promise<Post> 타입 직접 정의
  // 2. 반환할 Promise 객체의 반환값 타입 <Post> 명시
});

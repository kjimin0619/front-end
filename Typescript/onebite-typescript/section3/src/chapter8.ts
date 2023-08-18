/**
 * 서로소 유니온 타입 (더욱 편리한 타입 좁히기 가능!)
 * : 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 * ex. number과 string 타입
 */

// 웹서비스 회원관리 기능
// 회원의 분류
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

// 각 객체 타입별 tag 프로퍼티가 string literal로 정의되어 있어서
// 세 타입은 모두 서로소 집합이 됨. 즉 세 타입을 모두 만족하는 객체를 만들어낼 수 없다는 것
type User = Admin | Member | Guest; // 서로소 union type이 된 User 타입

function login(user: User) {
  // Admin => 현재까지 {kickCount} 강퇴했습니다.
  // Member => {point}명 모았습니다.
  // Guest => {visitCount}번 방문했습니다.
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.kickCount}명 강퇴`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.point} 모음`);
      break;
    }
    case "GUEST": {
      console.log(`${user.visitCount}번 방문`);
      break;
    }
  }
}

/**
 * 추가 사례 : 비동기 작업의 결과를 처리하는 객체 만들기
 */
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log("에러 발생 : ", task.error.message);
      break;
    }
    case "SUCCESS": {
      console.log("성공 : ", task.response.data);
    }
  }
}

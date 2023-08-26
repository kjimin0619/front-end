/**
 * 인덱스드 엑세스 타입
 */

// 객체 예시
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

// Post 인터페이스 안의 author 객체만 뽑아서 따로 타입으로 정의하기 => 인덱스드 엑세스 타입
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 중첩으로 가져오기도 가능 : Post 인터페이스의 author 객체 - id 값
function printAuthorId(author: Post["author"]["id"]) {
  console.log(author);
}

const post1: Post = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "홍길동",
  },
};

// 배열 예시
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

// 배열에서 요소를 하나 뽑은 후 ([number]), 그 요소 안의 author 프로퍼티 객체 접근
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 배열로 부터 하나의 요소 타입만 가져오기
// 인덱스를 활용하여 [0], [number] 이런 식으로 접근할 수 있음
const post2: PostList[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "홍길동",
  },
};

// 튜플 예시
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// 넘버 리터럴이 아닌 number 타입으로 인덱스에 접근하면?
// 튜플 타입안에 있는 모든 타입의 최적의 공통타입을 가져온다
// => 위 예시에서는 union 타입으로 가져옴
type TupNum = Tup[number];

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 가능 => 업캐스팅
// dog = animal; // 불가능 => 다운캐스팅
// 즉, animal이 수퍼타입, dog가 서브 타입인 것을 알 수 있음
// 프로퍼티가 더 작은게 수퍼타입이 됨

type Book = {
  name: string;
  price: number;
}; // 수퍼 타입

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}; // 서브 타입

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};
book = programmingBook;

/**
 * 위 코드와 똑같은 동작을 하는 코드지만 초기화할 때
 * 타입에 없던 프로퍼티를 추가하는 건 오류남
 *
 * 초과 프로퍼티 검사
 * 변수를 초기화하거나 매개변수로 전달할 때
 * "객체 리터럴"을 사용하면 발동하는 검사
 * 실제 타입에 정의되지 않은 프로퍼티를 정의하지 않도록 막는 검사
 *
 * 위에 book 변수처럼 초기화 시
 * 서브 객체 변수를 할당하면 초과 프로퍼티 검사 안 한다.
 * */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs", // 오류
};

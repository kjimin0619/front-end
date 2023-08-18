/**
 * 타입 단언
 *
 * 초기화 값의 타입을 지정해주는 방법
 * 초기화 값 뒤에 as + 타입명을 붙여줘서 초기화 값의 타입을 직접 단언한다.
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언
person.name = "홍길동";
person.age = 1999;

type Dog = {
  name: string;
  color: string;
};

// 초기화 시 타입에 정의된 프로퍼티 외의 프로퍼티를 기입하면
// 초과프로퍼티 검사가 발동하여 에러가 난다.
// 이를 방지하기 위해 타입 단언을 활용할 수도 있다.
// 그리고 변수 뒤에 붙여뒀던 타입 주석을 제거해도 제대로 타입을 추론해준다.
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 형태에서
 * A as B
 * A가 B의 수퍼타입이거나
 * A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // 오류 발생

/**
 * const 단언
 * 변수를 const로 선언한 것과 동일한 효과를 만들어주는 단언
 *
 */
let num4 = 10 as const; // number literal type

let cat = {
  name: "야옹",
  color: "yellow",
} as const; // 객체의 모든 프로퍼티가 readonly 읽기 전용 프로퍼티로 추론됨

/**
 * Non Null 단언
 *
 * 어느 값이 null 이거나 undefined가 아닌라고 알려주는 단언
 */

// author 프로퍼티는 존재할 수도, 존재하지 않을 수도 있다면?
type Post = {
  title: string;
  author?: string; // 선택적 프로퍼티
};

let post: Post = {
  title: "post1",
  author: "홍길동",
};

// ! : Non Null 연산자 => null, undefined가 아닐 것이라고 타입스크립트 컴파일에게 전달
const len: number = post.author!.length;

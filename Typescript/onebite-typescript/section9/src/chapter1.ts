/**
 * 유틸리티 타입 :
 * 제네릭, 맵드 타입 조건부 타입 등의 타입 조작 기능을 이용해
 * 실무에서 자주 사용되는 타입을 미리 만들어 놓은 것
 *
 * 맵드 타입 기반의 유틸리티 타입
 * partial, required, readonly
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial<T> : 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
// 임시 저장 포스트 객체
const draft: Partial<Post> = {
  title: "임시",
  content: "추후 수정예정",
};

// 직접 구현해보기
type Partial<T> = {
  // 맵드 타입으로 정의하기
  [key in keyof T]?: T[key];
};

// Required<T> : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
const withThumbnailPost: Required<Post> = {
  title: "후기",
  tags: ["Ts"],
  content: "",
  thumbnailURL: "",
};

// 직접 구현해보기
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// Readonly<T> : 특정 객체 타입의 모든 프로퍼티를 모두 읽기 전용 로퍼티로 바꿔주는 타입
// 읽기 전용 객체
const readonlyPost: Readonly<Post> = {
  title: "",
  tags: [""],
  content: "",
};

// readonlyPost.title = "new"; // 에러
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

/**
 * 맵드 기반의 유틸리티 타입 2
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick<T,K> : 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

// 직접 구현해보기
// K 타입변수에 제약을 걸어줘야 함. 객체 프로퍼티의 key만 전달할 수 있도록
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// Omit<T,K> : 객체 타입으로부터 특정 프로퍼티만 제외하는 타입
const noTitlePost: Omit<Post, "title"> = {
  content: "t",
  tags: [""],
  thumbnailURL: "",
};

// 직접 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Record<T,K> : 객체 타입으로부터 인덱스 시그니쳐처럼 유연하지만 제한적인 타입을 정의할 때 사용
// 객체 타입을 만들어주는 유틸리티 타입
// 썸네일을 위한 타입 정의 예시
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

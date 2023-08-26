/**
 * 템플릿 리터럴 타입
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat";

// Color 타입과 Animal 타입 조합하기
type ColorAnimal = `${Color}-${Animal}`;

const myColorAnimal: ColorAnimal = "black-cat";

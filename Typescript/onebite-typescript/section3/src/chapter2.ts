/**
 * Unknown 타입
 * 모든 타입의 수퍼타입. 전체 집합이라고도 함
 */
function unknownExam() {
  // 모든 타입에 대해 업캐스팅 가능
  // 변수에 모든 타입의 값을 집어넣을 수 있음

  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅 불가능
  let unknownVa: unknown;

  //   let num: number = unknownVa;
  //   let bool: boolean = unknownVa;
}

/**
 * never 타입
 * 모든 타입의 서브타입
 * 즉, 모든 타입의 부분집합 == 공집합
 * 모든 타입의 변수에 never 타입의 변수를 할당할 수 있다.
 * 반대로 never 타입의 변수에는 어떤 값도 저장되어선 안된다.
 * 아무런 값도 저장할 수 없다
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();

  // 다운캐스팅 불가능
  //   let n1: never = 10;
}

/**
 * void 타입
 * undefined 타입의 수퍼타입이다.
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // undefined은 void 타입으로 호환되기 때문에(업캐스팅)
    // 이렇게 return 문을 적어주는 것도 가능하다.
  }

  // 업캐스팅
  let voidVar: void = undefined;
}

/**
 * any 타입
 * 모든 타입의 수퍼타입이 될수도 있고, 모든 타입의 서브타입이 될 수도 있음(never 제외)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅 가능 = 타입 계층도를 완전히 무시
  anyVar = unknownVar; // 모든 타입의 수퍼타입이 될 수 있다 => unknown 타입포함
  undefinedVar = anyVar;

  // 한가지 예외 : never 타입에 다운캐스팅은 불가능
  //   neverVar = anyVar; // 불가능
}

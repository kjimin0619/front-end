/**
 * generic class
 */

// 일반 클래스
class NumberList {
  // 생성자 선언 + 초기화 작업 수행
  constructor(private list: number[]) {}

  // 메서드
  push(data: number) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(50);
numberList.print(); // [1,2,50]

// 제네릭 클래스
// 생성자로 전달하는 데이터의 타입을 기준으로 타입 추론이 이뤄짐
// 제네릭 인터페이스나 타입 별칭처럼 앞에 타입변수를 명시하지 않아도 됨
class List<T> {
  // 생성자 선언 + 초기화 작업 수행
  constructor(private list: T[]) {}

  // 메서드
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numList = new List([4, 5, 6]);
const stringList = new List(["a", "b", "c"]);
numList.pop();
numList.print();
stringList.push("d");
stringList.print();

/**
 * 접근제어자 access modifier
 * 
// public
// private
// protected
 */
class Employee {
  // 필드
  private name: string;
  protected age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("working");
  }
}

// 기본적으로 접근 제어자가 아무것도 선언되어 있지 않다면 public으로 간주
// 인스턴스의 프로퍼티에 자유롭게 접근이 가능함.
const employeeA = new Employee("홍길동", 80, "developer");
employeeA.position = "designer";
console.log(employeeA); // 변경 사항 적용됨

// private
// employeeA.name = "박길동"; // 에러 : 클래스 외부에서 프로퍼티에 접근할 수 없음
// private으로 정의된  프로퍼티는 파생 클래스 내부에서도 접근 불가능함
// 파생클래스 예시
class ExecutiveOfficer1 extends Employee {
  // 생성자
  constructor(name: string, age: number, position: string) {
    super(name, age, position);
  }

  // 메서드
  func() {
    // this.name; // 오류 발생 : private은 무조건 Employee
  }
}

// protected
// 외부에서는 접근 불가능하지만 파생 클래스 내부에서는 접근 가능

class ExecutiveOfficer2 extends Employee {
  // 생성자
  constructor(name: string, age: number, position: string) {
    super(name, age, position);
  }

  // 메서드
  func() {
    // this.name; // 오류 발생 : private은 무조건 Employee
    this.age; // 접근 허용
  }
}
// employeeA.age = 100; // 여전히 외부에서는 접근 불가능

// 생성자 안에서 매개변수에 접근 제어자를 달면 그 정보를 가지고 필드를 자동으로 생성하고 초기화해줌
// => 이런 경우에는 필드 정의는 생략해줘야 함
// => 초기화 과정도 생략 가능
class Employee2 {
  // 필드 : 생략됨
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 초기화 생략가능
  }

  // 메서드
  work() {
    console.log("working");
  }
}

const employeeC = new Employee2("홍길동", 50, "developer");
employeeC.position = "designer";
console.log(employeeC);

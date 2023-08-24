/**
 * 타입스크립트의 클래스
 */
class Employee {
  // 필드
  name: string;
  age: number;
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

// 상속
class ExecutiveOfficer extends Employee {
  // 추가 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeA = new Employee("홍길동", 80, "developer");
console.log(employeeA);
employeeA.work();

// 클래스 자체가 하나의 타입이 될 수도 있음
const employeeB: Employee = {
  name: "홍",
  age: 30,
  position: "",

  work() {},
};

// 상속받은 클래스의 인스턴스 만들기
const Eofficer = new ExecutiveOfficer("홍", 100, "developter", 879);
console.log(Eofficer);
Eofficer.work();

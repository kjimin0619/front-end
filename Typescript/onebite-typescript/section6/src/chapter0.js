/**
 * 클래스
 * 똑같이 기능하는 객체들을 간단하게 만들어주는 틀
 */
class Student {
  // 필드 : 클래스가 만들어낼 객체 프로퍼티를 말한다.
  name;
  grade;
  age;

  // 생성자 : 클래스 호출 시 실제로 객체를 생성하는 역할을 수행하는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드 정의
  study() {
    console.log("study");
  }

  introduce() {
    console.log("hello this is", this.name);
  }
}

// 인스턴스 : 클래스를 이용해서 만든 객체를 말한다.
let studentB = new Student("홍길동", "A", 60);
console.log(studentB);
studentB.study();
studentB.introduce();

// 클래스 상속(확장)
class StudentDeveloper extends Student {
  // 필드

  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 클래스의 생성자 불러오기
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log("coding with ", this.favoriteSkill);
  }
}

const studentDeveloper = new StudentDeveloper("홍길동", "A", 50, "typescript");
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();

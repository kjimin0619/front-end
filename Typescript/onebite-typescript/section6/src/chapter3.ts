/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 인터페이스로 정의된 필드는 무조건 public 이다.
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}

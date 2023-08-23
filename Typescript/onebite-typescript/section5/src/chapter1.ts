/**
 * 인터페이스 확장
 */

interface IAnimal {
  name: string;
  color: string;
}

interface IDog extends IAnimal {
  isBark: boolean;
}

interface ICat extends IAnimal {
  //   name: "hello"; // 상속받은 인터페이스(원본 프로퍼티)의 서브 타입으로만 재정의 가능하다.
  isScratch: boolean;
}

const dog: IDog = {
  name: "",
  color: "",
  isBark: true,
};

const cat: ICat = {
  name: "hello",
  color: "",
  isScratch: true,
};

// 인터페이스는 타입 별칭도 상속받을 수 있음

type Animal = {
  name: string;
};

interface IChicken extends Animal {
  isFlay: boolean;
}

const chicken: IChicken = {
  name: "kokodak",
  isFlay: false,
};

// 다중 인터페이스 확장
interface DogCat extends IDog, ICat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

const o1 = { name: "kim" };
Object.freeze(o1);

const o2 = { name: "lee" };
// o1 = o2; // error: const 변수가 가리키는 객체 자체(주소)를 바꿀 수 없음

o1.name = "park"; // 적용 X : o1의 값이 freeze 되어버렸기 때문에 수정불가능함

for (let i = 0; i < 100; i++) {
  // 반복 수행할 명령
  console.log(`hello ${i}`);
}

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}] : `, arr[i]);
}

let person = {
  name: "지민",
  age: 23,
  tall: 160,
};

const personKeys = Object.keys(person); // 오브젝트의 키들을 뽑아서 배열로 생성
const personValues = Object.values(person); // 오브젝트의 값들을 뽑아서 배열로 생성
console.log(personKeys);

for (let i = 0; i < personKeys.length; i++) {
  const currentkey = personKeys[i];
  console.log(`key : ${currentkey}  => value : ${person[currentkey]}`);
}

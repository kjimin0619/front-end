/**
 * map
 */
const arr = [1, 2, 3];
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(["hello", "string"], (it) => it.toUpperCase()); // T, U : string
map(["hello", "string"], (it) => parseInt(it)); // T : string , U : number

/**
 * forEach ; 반환값은 원래 아무것도 없어야 함
 */

const arr2 = arr.forEach((it) => console.log(it));
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  console.log(it.toUpperCase());
});

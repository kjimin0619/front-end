words = ["spray", "limit", "elite", "exubrant", "destruction", "present"];

function callback(element) {
  if (element.length > 5) {
    return true;
  } else false;
}

// filter 함수 제작
function myfilter(origin, callback) {
  myArr = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];

    if (callback(current)) {
      myArr.push(current);
    }
  }
  return myArr;
}
newWords = words.filter(callback);
simple = words.filter((e) => e.length > 5);
newSimple = myfilter(words, (e) => e.length > 5);

console.log(simple);
console.log(newSimple);

// callback 함수
// 함수 표현식의 개념을 활용해서 "매개 변수에 함수를 담는 것"!
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("good", sing, cry);
checkMood("sad", dance, cry);

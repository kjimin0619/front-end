let a = 5;
if (a > 5) {
  console.log("5 이상");
} else if (a > 3) {
  console.log("5 미만");
} else {
  console.log("작아요");
}

let country = "ko";

if (country == "ko") {
  console.log("korea");
} else if (country == "cn") {
  console.log("china");
} else {
  console.log("미분류");
}

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "ch":
    console.log("china");
    break;
  case "uk":
    console.log("uk");
    break;
  default:
    console.log("미분류");
    break;
}

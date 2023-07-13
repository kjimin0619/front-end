// spread 연산자 : ...
// 배열, 객체를 가져와 펼치는 역할
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

console.log(chocochipCookie);
console.log(cookie);

const noTopingCookies = ["촉촉한 쿠키", "퍽퍽한 쿠키"];
const topingCookies = ["초코쿠키", "화이트마카다미아쿠키"];
const allCookies = [...noTopingCookies, "함정", ...topingCookies];
console.log(allCookies);

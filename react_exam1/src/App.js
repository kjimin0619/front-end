import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  let name = "jimin";

  // JSX의 인라인 스타일 css
  const style = {
    h1: {
      color: "yellow",
    },
  };

  const MyFunc = () => {
    return "함수 호출됨";
  };

  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    // initValue: 0,
  };

  return (
    // JSX : 자바스크립트의 값을 HTML에 쉽게 추가할 수 있도록 고안
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>
          hello, react! I am {name} {2 + 5}.
        </h2>
        <h2>함수 호출도 가능해! => {MyFunc()}</h2>
        <b id="bold_text">
          React.js.<br></br>
          {number} 는? : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      </header>
      <h1 style={style.h1}>this is h1</h1>
      <MyFooter></MyFooter>
      <br></br>

      {/* Props : 
        부모 컴포넌트(App)에서 자식 컴포넌트(Counter)에게 
        값의 이름과 값을 전달하는 방법
       */}
      {/*  spread 연산자로 전달 */}
      <Container>
        <div>
          <Counter {...counterProps}></Counter>
        </div>
      </Container>
    </div>
  );
}

export default App;

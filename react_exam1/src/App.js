import "./App.css";

function App() {
  let name = "jimin";
  return (
    // JSX : 자바스크립트의 값을 HTML에 쉽게 추가할 수 있도록 고안
    <div className="App">
      <header className="App-header">
        <h2>hello, react! I am {name}.</h2>
      </header>
    </div>
  );
}

export default App;

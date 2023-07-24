import "./style.css";

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function down() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function up() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={down}>-</button>
      <button value={count} onClick={reset}>
        0
      </button>
      <button onClick={up}>+</button>
      <span>{count}</span>
      {/* <input type="button" value={"-"}></input> */}
    </div>
  );
}

export default App;

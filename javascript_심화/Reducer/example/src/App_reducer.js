import React, { useReducer, useState } from "react";
const App_reducer = () => {
  const [step, setStep] = useState(1);

  function countReducer(oldCount, action) {
    if (action.type === "DOWN") {
      return oldCount - action.number;
    } else if (action.type === "RESET") {
      return 0;
    } else if (action.type === "UP") {
      return oldCount + action.number;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);

  function down() {
    countDispatch({ type: "DOWN", number: step });
  }
  function reset() {
    countDispatch({ type: "RESET", number: step });
  }
  function up() {
    countDispatch({ type: "UP", number: step });
  }

  function changeStep(event) {
    setStep(Number(event.target.value));
  }

  return (
    <div>
      <h3>Reducer 활용</h3>
      <button onClick={down}>-</button>
      <button value={count} onClick={reset}>
        0
      </button>
      <button onClick={up}>+</button>
      <input type="text" value={step} onChange={changeStep}></input>
      <span>{count}</span>
      {/* <input type="button" value={"-"}></input> */}
    </div>
  );
};

export default App_reducer;

import { useState, useReducer } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};
const reducer = (oldState, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return oldState + action.payload;
    case ACTION_TYPES.withdraw:
      return oldState - action.payload;
    default:
      return oldState;
  }
};
const Bank = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>Reducer 활용2 - 은행 시스템</h3>
      <p> 잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        step="1000"
      ></input>

      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default Bank;

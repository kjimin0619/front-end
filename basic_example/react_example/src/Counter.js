import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";
const Counter = (props) => {
  console.log("Counter 호출");
  console.log("부모로부터 받은 변수 : ", props.initValue);

  // counter: 기본값 0에서 시작하는 상태

  // useState 메서드 :
  // 배열을 반환하고, 배열의 비구조화 할당을 통해
  // 0번째 인덱스에는 count를, 1번째 인덱스에는 setCount라는 상수로 받아옴
  // 이 setCount는 count의 상태를 변화시키는 함수가 됨
  // 인자로 전달한 0은 count의 초기값
  // 리액트에서는 컴포넌트가 가진 state가 바뀌면 rerender 됨
  const [count, setCount] = useState(props.initValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}></OddEvenResult>
    </div>
  );
};

//  전달받지 못한 props 인 경우
Counter.defaultProps = {
  props.initValue: 0,
};
export default Counter;

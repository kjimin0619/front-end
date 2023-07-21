import React, { useState, useEffect } from "react";

const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`update :: text : ${text}`);
  });
  return <div>{text}</div>;
});

const Countview = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`update :: count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA update : count - ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB update : count - ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

// 두 객체가 같은지 비교하기
const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true; // 이전 프롭스와 이후 프롭스가 같다 -> 리렌더링 X
  }
  return false; // 이전 프롭스와 이후 프롭스가 다르다 -> 리렌더링 O
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <Countview count={count}></Countview>
      <div>
        <h2>count</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <h2>CounterA</h2>
        <CounterA count={count}></CounterA>
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>CounterB</h2>
        <MemoizedCounterB obj={obj}></MemoizedCounterB>
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>

      <div>
        <h2>text</h2>
        <Textview text={text}></Textview>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    </div>
  );
};

export default OptimizeTest;

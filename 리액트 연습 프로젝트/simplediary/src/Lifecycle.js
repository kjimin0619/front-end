// Life Cycle test 용
import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount in UnmountTest");
    return () => {
      // unmount 시점에 실행되도록
      console.log("Unmount in UnmountTest");
    };
  });
  return <div> Unmount Testing Componenet</div>;
};
const Lifecycle = () => {
  // 테스트 1
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 테스트 2
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    console.log("Update");
  });

  useEffect(() => {
    console.log(`${count} is updated`);
    if (count > 5) {
      alert("count가 5를 초과하였습니다. 따라서 1로 초기화합니다");
      setCount(1);
    }
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <div>
        {count}

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <div>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        <button onClick={toggle}>on/off</button>
      </div>
      <div>{isVisible ? <UnmountTest></UnmountTest> : <></>}</div>
    </div>
  );
};

export default Lifecycle;

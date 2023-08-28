import * as React from "react";
import { useState, useContext } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

// props의 타입
interface Props {}

function Editor(props: Props) {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState<string>(""); // todo text

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText(""); // 초기화
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput}></input>
      <button onClick={onClickButton}>add</button>
    </div>
  );
}

export default Editor;

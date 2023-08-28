import * as React from "react";
import { useState } from "react";

// props의 타입
interface Props {
  onClickAdd: (text: string) => void;
}

function Editor(props: Props) {
  const [text, setText] = useState<string>(""); // todo text

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
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

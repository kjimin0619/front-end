import { Todo } from "../types";
import { useState } from "react";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>delete</button>
    </div>
  );
}

export default TodoItem;

import React from "react";

const Student = ({ name, dispatch, target, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: "mark", payload: { target } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete", payload: { target } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;

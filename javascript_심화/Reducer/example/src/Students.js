import { useReducer, useState } from "react";
import Student from "./student";

const initialState = {
  count: 0,
  students: [],
};

function reducer(oldState, action) {
  switch (action.type) {
    case "add":
      const NewStd = {
        id: Date.now(),
        name: action.payload.name,
        isHere: false,
      };
      return {
        count: oldState.count + 1,
        students: [...oldState.students, NewStd],
      };
    case "delete":
      return {
        count: oldState.count - 1,
        students: oldState.students.filter(
          (s) => s.id !== action.payload.target
        ),
      };
    case "mark":
      return {
        count: oldState.count,
        students: oldState.students.map((s) => {
          if (s.id === action.payload.target) {
            return { ...s, isHere: !s.isHere };
          }
          return s;
        }),
      };

    default:
      return oldState;
  }
}

const Students = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Reducer 활용3 - 출석부 시스템</h3>
      <p>총 학생 수 : {studentsInfo.count}</p>

      <input
        placeholder="이름을 입력하세요 "
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          dispatch({ type: "add", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((std) => {
        return (
          <Student
            key={std.id}
            name={std.name}
            dispatch={dispatch}
            target={std.id}
            isHere={std.isHere}
          />
        );
      })}
    </div>
  );
};

export default Students;

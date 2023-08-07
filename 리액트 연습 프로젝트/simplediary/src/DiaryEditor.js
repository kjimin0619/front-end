import React, { useState, useRef, useContext } from "react";
import { DiaryDispatchContext } from "./App";
// Diary Editor 최적화
// Diary Editor는 부모 컴포넌트로부터 전달받은
// onCreate가 재생성될 때마다 렌더링 됨
// 따라서 불필요한 렌더링이 반복됨
// onCreate가 재생성되지 않아야만 최적화 할 수 있음
// memo가 아닌 useCallback을 활용
const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  // html의 dom 요소에 접근
  const authorInput = useRef();
  const contentInput = useRef();

  // 리액트 상태관리
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // 이벤트 핸들러 onChange 합치기
  const handleChangeState = (e) => {
    // console.log(e.target.name); // 변경된 영역의 이름
    // console.log(e.target.value); // 변경된 영역의 내용

    setState({
      ...state,
      [e.target.name]: e.target.value, // 괄호 표기법으로 새로운 내용 할당
    });
  };

  // 일기 저장
  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요");
      // focus : 조건을 충족하지 못한 객체에 강제로 focus
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      // alert("일기 내용은 최소 5글자 이상 입력해주세요");
      // focus
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    // 저장 후 초기화
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  // 작성자, 일기 본문, 감정점수
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="작성자"
          type="text"
        ></input>
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="오늘의 일기"
          type="text"
        ></textarea>
      </div>
      <div>
        <span>오늘 나의 감정 점수는 ?</span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
          type="int"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);

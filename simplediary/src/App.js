import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef, useEffect } from "react";
import Lifecycle from "./Lifecycle";
// https://jsonplaceholder.typicode.com/comments

function App() {
  // 하위 레벨의 DiaryEditor와 DiartList가 사용할 state 관리
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // api 호출
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    // console.log(res);

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  // App 컴포넌트가 마운트되자마자 api 호출해오도록
  useEffect(() => {
    getData();
  }, []);

  // 아이템 생성
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1; // id 증가

    // 최근에 생성된 아이템이 제일 위로 올라오도록
    setData([newItem, ...data]);
  };

  // 아이템 삭제
  const onRemove = (targetId) => {
    // console.log(`${targetId}번째 일기가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);

    setData(newDiaryList);
  };

  // 아이템 수정
  const onEdit = (targetId, newContent) => {
    setData(
      // 수정이 완료된 배열 반환
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      {/* <Lifecycle></Lifecycle> */}
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList
        diaryList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      ></DiaryList>
    </div>
  );
}

export default App;

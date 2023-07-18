import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// 사용자가 입력한 일기 리스트
const dummyList = [
  {
    id: 1,
    author: "김지민",
    content: "hello this is jimin",
    emotion: 5,
    created_date: new Date().getTime(), // 시간 객체
  },
  {
    id: 2,
    author: "홍길동",
    content: "hello this is jimin123",
    emotion: 2,
    created_date: new Date().getTime(), // 시간 객체
  },
  {
    id: 3,
    author: "아무개",
    content: "hello this is jimin2345",
    emotion: 4,
    created_date: new Date().getTime(), // 시간 객체
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummyList}></DiaryList>
    </div>
  );
}

export default App;

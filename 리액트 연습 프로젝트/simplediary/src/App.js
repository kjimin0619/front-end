import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from "react";
// https://jsonplaceholder.typicode.com/comments

// 상태 변화 처리 함수 : reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data; // 새로운 state
    }
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };

      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext(); // diaryList 공급만을 위한 컨택스트
export const DiaryDispatchContext = React.createContext(); // 메서드 공급 컨택스트

function App() {
  // 하위 레벨의 DiaryEditor와 DiartList가 사용할 state 관리
  const [data, dispatch] = useReducer(reducer, []);

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

    dispatch({ type: "INIT", data: initData });
  };

  // App 컴포넌트가 마운트되자마자 api 호출해오도록
  useEffect(() => {
    getData();
  }, []);

  // 아이템 생성
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1; // id 증가
  }, []);

  // 아이템 삭제
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  // 아이템 수정
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  // 전달할 세 메서드 묶기 & 재생성 방지
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  // 연산 최적화
  // 함수와 그 리턴값의 연산을 최적화 하고 싶다면 useMemo 훅 사용
  // 전달인자의 [] 안의 값이 변화할 때만 콜백함수(전달인자)가 다시 수행됨
  const getDiaryAnalysis = useMemo(() => {
    const goodCnt = data.filter((it) => it.emotion > 3).length;
    const badCnt = data.length - goodCnt;
    const goodRatio = (goodCnt / data.length) * 100;
    return { goodCnt, badCnt, goodRatio };
  }, [data.length]);

  const { goodCnt, badCnt, goodRatio } = getDiaryAnalysis;

  // 데이터 공급과정
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor></DiaryEditor>
          <div>기분 좋은 일기 개수: {goodCnt}</div>
          <div>기분 나쁜 일기 개수: {badCnt}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}%</div>
          <DiaryList></DiaryList>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

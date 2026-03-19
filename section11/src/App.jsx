import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useContext,
  useMemo
} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  //state:현재 상태(mockData)
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// export const TodoContext = createContext(); 두 개로 분리
export const TodoStateContext = createContext(); //변하는 값 저장
export const TodoDispatchContext = createContext(); //변하지 않는 값 저장

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => { //객체 자체를 저장해서 다시 생성되지 않도록
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Header />
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;

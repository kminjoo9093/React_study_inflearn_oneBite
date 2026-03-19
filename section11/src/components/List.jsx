import "./List.css";
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {

  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalizedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  //의존성 배열 deps


  // const getAnalizedData = () => {
  //   console.log("getAnalizedData 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((item) => item.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalizedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;

//검색어가 변경되면 리스트 컴포넌트가 리렌더링되어야 함 -> 검색어를 state로 보관

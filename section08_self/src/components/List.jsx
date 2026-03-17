import "./List.css";
import TodoItem from "./TodoItem";

const List = ({todos, onUpdate, onDelete}) => {
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input placeholder="검색어를 입력하세요" />
      {
        todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })
      }
    </div>
  );
};

export default List;

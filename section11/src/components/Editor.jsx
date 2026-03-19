import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const {onCreate} = useContext(TodoDispatchContext);
  console.log(onCreate);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); //비었을 경우 인풋창 포커스
      return;
    }
    onCreate(content);
    setContent(""); //추가 후 인풋창 초기화
  };

  return (
    <div className="Editor">
      <input
        value={content}
        ref={contentRef}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;

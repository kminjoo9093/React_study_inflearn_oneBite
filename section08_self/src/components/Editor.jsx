import { useRef, useState } from "react";
import "../components/Editor.css";

const Editor = ({onCreate}) => {

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onClickAddButton = ()=>{
    if(content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  const onKeyDown = (e)=>{
    if(e.keyCode === 13){
      onCreate(content);
      setContent("");
    }
  }

  return <div className="Editor">
    <input value={content} ref={inputRef} onKeyDown={onKeyDown} onChange={onChangeContent} placeholder="새로운 Todo..."/>
    <button onClick={onClickAddButton}>추가</button>
  </div>
}

export default Editor;
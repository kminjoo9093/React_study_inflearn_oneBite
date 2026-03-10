import { useState } from "react";

//custom hook은 일반적으로 src폴더 > hooks폴더 > 개별적으로 보관
function useInput(){
  //리액트 컴포넌트가 아닌 자바스크립트 일반 함수에서 훅 호출하면 오류발생
  //--> 커스텀 훅으로 바꿔야 함 함수 이름에 use 접두사 붙여서
  //커스텀 훅을 통해서 컴포넌트 내의 반복되는 로직, 훅을 사용하는 로직을 분리할 수 있음
  const [input, setInput] = useState();
  const onChange = (e)=>{
    setInput(e.target.value);
  }

  return [input, onChange];
}

export default useInput;
import { useState, useRef } from "react";

const Register = () => {
  // 비슷한 state 객체로 묶어 한번에 관리
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  })

  const countRef = useRef(0);
  const inputRef = useRef();

  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // 비슷한 이벤트 핸들러 묶어서 한번에 관리
  const onChangeInput = (e)=>{
    countRef.current ++;
    setInput({
      ...input, //name말고 다른 값들은 그대로 유지되어야 함
      [e.target.name]: e.target.value,
      //변수나 표현식을 통해 객체 프로퍼티의 키를 동적으로 설정하려면 대괄호 []를 써야함
    })
  }

  const onSubmit = ()=>{
    if(input.name === ""){
      //이름 입력하는 dom요소 포커스, dom요소에 접근하려면  useRef사용
      // dom요소에 ref활용해서 변수에 dom요소 자체를 저장
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChangeInput} placeholder="이름"/>
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChangeInput} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChangeInput}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="uk">영국</option>
          <option value="us">미국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChangeInput} name="" id=""></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;

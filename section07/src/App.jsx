import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  useEffect(()=>{
    console.log(`count:${count}/input:${input}`);
  }, [count, input]);
  //의존성 배열
  //dependency array => deps

  //1.마운트
  useEffect(()=>{
    console.log("mount");
  }, []);

  //2. 업데이트(deps X -> 마운트시, 컴포넌트 리렌더링)
  // useEffect(()=>{
  //   console.log("update");
  // });

  //3. 컴포넌트 리렌더링이 될 경우에만 update 출력
  useEffect(()=>{
    if(!isMount.current){ 
      //초기 마운트 시 false->true, return으로 종료
      isMount.current = true;
      return;
    }
    console.log("update"); //리렌더링 시 (isMount가 true) 출력
  });

  //4. 언마운트 (죽음)


  // 이벤트핸들러
  const onClickButton = (value)=>{
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App;

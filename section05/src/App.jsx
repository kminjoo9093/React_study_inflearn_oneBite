import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// import { useState } from "react";
// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

//vite로 개발할때는 es module시스템써도 확장자 안써도 됨
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";


//App은 부모 컴포넌트, Button은 자식 컴포넌트
function App() {

  return <>
    <HookExam/>

    {/* <Register /> */}
  </>

  // return (
  //   <>
  //     <Bulb />
  //     <Counter />
  //   </>
  // );

  // props가 많은 경우 부모 컴포넌트에 객체로 저장해서, spread로 뿌릴 수 있음
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // }

  // return (
  //   <>
  //   <Button {...buttonProps}/>
  //   <Button text={"카페"}/>
  //   <Button text={"블로그"}>
  //      <div>자식요소</div>
  //   </Button>
  //   </>
  // );
}

export default App;

//npm run dev로 서버연결해야함!! (section5폴더만 열고)

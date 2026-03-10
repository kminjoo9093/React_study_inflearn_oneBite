const Button = ({children, text, color = "black"}) => {
   // 오류방지 위한 props 기본값 설정
  // 19버전에서는 props를 구조분해할당으로 받아오면서 기본값을 설정
  // props가 객체 형태로 매개변수에 전달됨, 점표기법으로 접근

  const onClickButton = ()=>{
    console.log(text)
  }

  return (
    <button 
    onClick={onClickButton}
    // onMouseEnter={onClickButton}
    style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

// props기본값 설정 18버전
// Button.defaultProps = {
//   color: "black",
// };

export default Button;
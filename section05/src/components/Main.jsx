import "./Main.css";

const Main = ()=>{
  const user = {
    name: "강민주",
    isLogin: true,
  }

  // if문
  if(user.isLogin){
    return <div className ="logout" >로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // 삼항연산자
  // return (
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // );
}

export default Main;
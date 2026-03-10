import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    //클린업, 정리함수 (useEffect의 콜백함수에 콜백함수를 한번 더 호출)
    //이 함수는 useEffect가 끝날때 실행됨
    //deps가 빈배열->useEffect가 마운트될때 실행되니까 종료는 unmount일때 됨. 그때 정리함수(return 구문)를 실행함
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수</div>;
};

export default Even;

//common js module
// const moduleData = require("./math");

//ES module
//파일 확장자도 꼭 써야함
// import multiply from "./math.js"; //기본값을 import할때는 {}사용하지 않음, 이름 바꾸기도 가능
import multiply, { add, sub } from "./math.js";

//라이브러리에서 가져올때는 경로가 아니라 이름만 명시하면 됨
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(multiply(2, 3));


//node_modules나 package-lock 같은 파일을 실수로 삭제했더라도 npm i 만 명령하면
//package.json 의 dependencies 에 설치된 라이브러리를 기준으로 파일들이 다시 복구됨
//node_modules는 깃헙에 올리지 않음(git ignore 파일에 정리 또는 삭제 후 올림)
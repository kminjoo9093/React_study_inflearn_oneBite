//math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// common js module (CJS) 방식
// module.export = { add, sub };

// ES module (ESM) 방식 (더 직관적이고 최신)
// package.json 파일에 "type": "module" 추가
// 함수선언문 앞에 export 작성해도 됨
export { add, sub };

//ES module에서는 기본값을 내보낼 수 있음
export default function multiply(a, b) {
  return a * b;
}
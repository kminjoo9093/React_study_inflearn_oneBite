// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
// console.log(var5);
//var1은 비어있기 때문에 var2값이 출력
let var6 = var2 ?? var3;
// console.log(var6);
//값이 모두 있는 경우, 처음 값이 출력

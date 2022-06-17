// function add(n1, n2) {
//   return n1 + n2;
// }
//
// const number1 = "5";
// const number2 = 2.8;
//
// const result = add(number1, number2);
// console.log(result);



//引数に型を指定するとエラーになる
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
//エラー
// $ tsc app.ts
// app.ts:19:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 
// 19 const result = add(number1, number2);



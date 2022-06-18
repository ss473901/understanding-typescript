// Tuple型は配列に対して要素の数と
// それぞれの要素の型を指定することができる
// TypeScript独自の型。
// Tuple型を使うと配列に対して誤った数の要素が指定されたり
// 数字に対して文字列の値が入力されたりといったエラーを
// 型のチェックによって防ぐことができます


const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: `yota`,
  age: 30,
  hobbies: [`Sports`, `Cooking`],
  role: [2, `author`],
};

// person.role.push(`admin`);

//// 配列の2個目の値にnumberを入れようとしているためエラー
// person.role[1] = 10;

//// Tupleは2つの値を入れるように定義されているのでエラー
// person.role = [0, `admin`, `user`]

let favoriteActivities: string[];
favoriteActivities = [`Sports`];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

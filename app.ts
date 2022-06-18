// //明示的に型を定義
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: `yota`,
//   age: 30,
// };
// console.log(personA.name);

//型推論で定義　★こちらの方がベストプラクティス
const person = {
  name: `yota`,
  age: 30,
  hobbies: [`Sports`, `Cooking`],
};

let favoriteActivities: string[];
favoriteActivities = [`Sports`];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

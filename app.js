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
var person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}

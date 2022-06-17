//明示的に型を定義
const personA: {
  name: string;
  age: number;
} = {
  name: `yota`,
  age: 30,
};
console.log(personA.name);

//型推論で定義　★こちらの方がベストプラクティス
const personB = {
  name: `yota`,
  age: 30,
};

console.log(personB.name);

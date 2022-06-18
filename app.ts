////Enum型とは
// Enum型は定数の集合に対して名前を付けて管理することができる
// Enum型を定義するには{}（中括弧)を使う
// 中括弧の中に定数のリストを定義します
// それらの定数には自動的にゼロから始まるnumberが割り当てられます
// Enum型はある定数の集合の一覧に名前を付けて管理をするのに便利
// Enum型は列挙型とも呼ばれます

////下記のような定義を仮定
// Admin（管理者）：0
// Read only user（読み取り専用）：1
// Author（作者）：2

////下記の書き方と同じ
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

////Enumの書き方
//自動で数字が振り分けられる
enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
}

const person = {
  name: `yota`,
  age: 30,
  hobbies: [`Sports`, `Cooking`],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log(`管理者ユーザ`);
}

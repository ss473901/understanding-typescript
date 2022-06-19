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
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
//自動で数字が振り分けられる
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push(`admin`);
//// 配列の2個目の値にnumberを入れようとしているためエラー
// person.role[1] = 10;
//// Tupleは2つの値を入れるように定義されているのでエラー
// person.role = [0, `admin`, `user`]
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("\u7BA1\u7406\u8005\u30E6\u30FC\u30B6");
}

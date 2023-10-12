/**
 * const,let等の変数宣言
 */
let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
//let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
//val3 = "const変数を上書き";

// const変数は再宣言不可
//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能;
const val4 = {
  name: "じゃけぇ",
  age: 28
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "じゃけぇ";
const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// テンプレート文字列
const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message);

/**
 * アロー関数
 */
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile1 = {
  Name: "じゃけぇ",
  Age: 28
};

const { Name, Age } = myProfile1;
const message1 = `名前は${Name}です。年齢は${Age}歳です。`;
console.log(message1);

const myProfile2 = ["じゃけぇ", 28];

const [NAME, AGE] = myProfile2;
const message2 = `名前は${NAME}です。年齢は${AGE}歳です。`;
console.log(message2);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello("じゃけぇ");

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// コピー
const arr6 = [...arr4];
arr6[0] = 100;
// スプレッド構文の利用によりコピー元の値は書き変わらない
console.log(arr6);
console.log(arr4);

// 結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(`${name}です。`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
};
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// ||は左側がfalseなら右側を返す
const num01 = null;
const fee1 = num01 || "金額未設定です";
console.log(fee1);

// &&は左側がtrueなら右側を返す
const num02 = 100;
const fee2 = num02 && "何か設定されました";
console.log(fee2);

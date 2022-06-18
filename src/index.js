import "./styles.css";

function ucFirst(str) {
  if (!str) return str; //빈 문자열일 경우

  /*
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
  */

  return str[0].toUpperCase() + str.slice(1);
}

let input = prompt("영문 소문자입력", "john");
alert(ucFirst(input));

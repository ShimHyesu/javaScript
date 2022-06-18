import "./styles.css";

function truncate(str, maxlength) {
  if (!str) return str;

  /*
  let newStr = str.slice(0, maxlength - 1);

  if (str.length > maxlength) {
    newStr += "...";
  }

  return newStr;
  */

  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}

let input = prompt("입력", "");
let length = prompt("길이", "");

alert(truncate(input, length));

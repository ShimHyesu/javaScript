import "./styles.css";

function checkSpam(str) {
  if (!str) return str;

  let lowerStr = str.toLowerCase();

  /*
  if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) return true;
  else return false;
  */
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

let input = prompt("입력", "");

alert(checkSpam(input));

//입력 다 소문자로 바꾸고 비교해보기

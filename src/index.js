import "./styles.css";

function extractCurrencyValue(str) {
  if (!str) return str;

  let index;
  for (index = 0; index < str.length; index++) {
    if (isFinite(str[index])) break;
  }
  return str.slice(index);
}

let input = prompt("입력", "");

alert(extractCurrencyValue(input));

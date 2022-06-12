import "./styles.css";

let x = prompt("x", "");
let n;

while (1) {
  n = prompt("n", "");
  if (n >= 1) break;
  alert("자연수를 입력하세요");
}

function pow(x, n) {
  return x ** n;
}

alert(pow(x, n));

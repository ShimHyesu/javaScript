import "./styles.css";

function readNumber() {
  while (1) {
    let input = prompt("입력", "0");
    if (input === null || input === "") {
      return null;
    }
    if (isFinite(+input)) {
      return +input;
    } else {
      continue;
    }
  }
}

alert(readNumber());

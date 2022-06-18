import "./styles.css";

function sumInput() {
  let inputArray = [];

  while (1) {
    let input = prompt("입력", "0");

    if (!isFinite(+input) || input === "" || input === null) {
      break;
    }
    inputArray.push(+input);
  }

  let sum = 0;
  for (let num of inputArray) {
    sum += num;
  }
  return sum;
}

alert(sumInput());

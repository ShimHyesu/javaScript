import "./styles.css";

function camelize(input) {
  if (!input) return input;

  /*
  let arr = input.split("-");

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join("");
  */
  return input
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

let input = prompt("입력", "");

alert(camelize(input));

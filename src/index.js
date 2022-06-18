import "./styles.css";

function randomInteger(min, max) {
  while (1) {
    let value = Math.round(Math.random() * 10);
    if (value >= min && value <= max) return value;
  }
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5

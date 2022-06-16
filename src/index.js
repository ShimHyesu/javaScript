import "./styles.css";

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.data = prompt("값 입력", "0");
    this.value += +this.data;
  };
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함

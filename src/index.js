import "./styles.css";

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  this.read = function () {
    this.data1 = prompt("값1", "0");
    this.data2 = prompt("값2", "0");
  };
  this.sum = function () {
    return +this.data1 + +this.data2;
  };
  this.mul = function () {
    return this.data1 * this.data2;
  };
}

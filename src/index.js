import "./styles.css";

let calculator = {
  read() {
    this.add1 = prompt("더할 값1", "");
    this.add2 = prompt("더할 값2", "");
  },
  sum() {
    return +this.add1 + +this.add2;
  },
  mul() {
    return this.add1 * this.add2;
  }
};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());

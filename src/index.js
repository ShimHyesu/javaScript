import "./styles.css";

function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function (str) {
    let arr = str.split(" ");

    /*
    for (let op in this.method) {
      if (arr[1] === op) {
        return this.method[op](+arr[0], +arr[2]);
      }
    }
    */
    return this.method[arr[1]](+arr[0], +arr[2]);
    //객체 key는 for 반복문으로 찾을 필요 없음
  };

  this.addMethod = function (name, func) {
    this.method[name] = func;
  };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
